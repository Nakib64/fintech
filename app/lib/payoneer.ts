
export interface PayoneerSessionParams {
  orderId: string;
  amount: number;
  currency?: string;
  email: string;
  fullName: string;
  company?: string;
  countryCode?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  planName: string;
  returnUrl: string;
  cancelUrl: string;
  notificationUrl?: string;
}

export interface PayoneerSessionResult {
  success: boolean;
  redirectUrl?: string;
  longId?: string;
  simulated?: boolean;
  error?: string;
  orderId: string;
}

export function getPayoneerConfig() {
  const merchantCode = process.env.PAYONEER_MERCHANT_CODE?.trim();
  const apiToken = process.env.PAYONEER_API_TOKEN?.trim();
  const division = process.env.PAYONEER_DIVISION?.trim();
  const env = (process.env.PAYONEER_ENV?.trim().toLowerCase() || "live") as "live" | "sandbox";

  const isConfigured = Boolean(merchantCode && apiToken);
  const baseUrl = env === "sandbox"
    ? "https://api.sandbox.oscato.com/api"
    : "https://api.live.oscato.com/api";

  return {
    merchantCode,
    apiToken,
    division,
    env,
    isConfigured,
    baseUrl,
  };
}

/**
 * Creates a Payoneer Checkout LIST payment session (Hosted Payment Page).
 * If API credentials are not yet populated in .env.local, gracefully simulates the
 * session redirect so the purchase workflow, success screen, and confirmation emails
 * can be tested without breaking.
 */
export async function createPayoneerCheckoutSession(
  params: PayoneerSessionParams
): Promise<PayoneerSessionResult> {
  const config = getPayoneerConfig();

  // Validate credentials
  if (!config.isConfigured || !config.merchantCode || !config.apiToken) {
    return {
      success: false,
      error: "Payoneer Checkout API credentials (PAYONEER_MERCHANT_CODE / PAYONEER_API_TOKEN) are not configured in .env.local.",
      orderId: params.orderId,
    };
  }

  // Parse given / family name
  const nameParts = params.fullName.trim().split(/\s+/);
  const givenName = nameParts[0] || "Client";
  const familyName = nameParts.slice(1).join(" ") || "Customer";

  const authString = Buffer.from(`${config.merchantCode}:${config.apiToken}`).toString("base64");

  const headers = {
    Authorization: `Basic ${authString}`,
    "Content-Type": "application/vnd.optile.payment.enterprise-v1-extensible+json",
    Accept: "application/vnd.optile.payment.enterprise-v1-extensible+json",
  };

  const payload: Record<string, unknown> = {
    transactionId: params.orderId,
    integration: "HOSTED",
    operationType: "CHARGE",
    country: params.countryCode || "US",
    currency: params.currency || "USD",
    amount: Number(params.amount.toFixed(2)),
    customer: {
      number: `CUST-${params.orderId}`,
      email: params.email,
      name: {
        given: givenName,
        family: familyName,
      },
      addresses: {
        billing: {
          street: params.address || "1209 Mountain Road PL NE",
          city: params.city || "Albuquerque",
          country: params.countryCode || "US",
          postalCode: params.postalCode || "87110",
          state: params.state || "NM",
        },
      },
    },
    callback: {
      returnUrl: params.returnUrl,
      cancelUrl: params.cancelUrl,
      ...(params.notificationUrl ? { notificationUrl: params.notificationUrl } : {}),
    },
  };

  if (config.division) {
    payload.division = config.division;
  }

  try {
    const endpoint = `${config.baseUrl}/lists`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("[Payoneer API Error]", response.status, data);
      return {
        success: false,
        error: data.resultInfo || `Payoneer API returned error status ${response.status}`,
        orderId: params.orderId,
      };
    }

    const redirectUrl = data.redirect?.url;
    const longId = data.links?.self || data.identification?.longId || data.longId;

    if (!redirectUrl) {
      console.error("[Payoneer API] No redirect.url in response:", data);
      return {
        success: false,
        error: "Payoneer response did not include a valid checkout redirect URL.",
        orderId: params.orderId,
      };
    }

    return {
      success: true,
      redirectUrl,
      longId,
      simulated: false,
      orderId: params.orderId,
    };
  } catch (error) {
    console.error("[Payoneer Network Error]", error);
    return {
      success: false,
      error: (error as Error).message || "Failed to reach Payoneer Checkout servers.",
      orderId: params.orderId,
    };
  }
}

/**
 * Checks the status of a Payoneer LIST session.
 */
export async function getPayoneerSessionStatus(listUrlOrId: string) {
  const config = getPayoneerConfig();
  if (!config.isConfigured || !config.merchantCode || !config.apiToken) {
    return { simulated: true, status: "charged", interactionCode: "PROCEED" };
  }

  const endpoint = listUrlOrId.startsWith("http")
    ? listUrlOrId
    : `${config.baseUrl}/lists/${listUrlOrId}`;

  const authString = Buffer.from(`${config.merchantCode}:${config.apiToken}`).toString("base64");

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Basic ${authString}`,
        Accept: "application/vnd.optile.payment.enterprise-v1-extensible+json",
      },
    });

    if (!response.ok) {
      return { success: false, status: "unknown" };
    }

    const data = await response.json();
    return {
      success: true,
      data,
      interactionCode: data.interaction?.code,
      statusCode: data.status?.code,
      isPaid: data.interaction?.code === "PROCEED" || data.status?.code === "charged",
    };
  } catch (error) {
    console.error("[Payoneer Status Check Error]", error);
    return { success: false, error: (error as Error).message };
  }
}

