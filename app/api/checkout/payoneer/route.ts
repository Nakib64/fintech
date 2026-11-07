import { NextResponse } from "next/server";
import { createPayoneerCheckoutSession } from "../../../lib/payoneer";
import { ALL_PLANS, getPlanByNameOrId } from "../../../lib/plans";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      country,
      address,
      city,
      state,
      postalCode,
      planId,
      planName,
      planPrice,
      planNumericPrice,
      planCycle,
    } = body;

    if (!fullName || !email || (!planName && !planId)) {
      return NextResponse.json(
        { error: "Missing required order details (name, email, or plan)." },
        { status: 400 }
      );
    }

    // Resolve full plan data
    const matchedPlan = getPlanByNameOrId(planId || planName, planPrice);
    const amount = Number(planNumericPrice || matchedPlan.numericPrice || 100);
    const resolvedPlanName = matchedPlan.name || planName;
    const resolvedPrice = matchedPlan.price || planPrice || `$${amount}`;
    const resolvedCycle = matchedPlan.cycle || planCycle || "/project";

    // Generate unique order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `ASH-${randomNum}`;

    // Determine host origin for return / cancel callbacks
    const originHeader = request.headers.get("origin") || request.headers.get("referer");
    let origin = "https://ashivox.net";
    if (originHeader) {
      try {
        const parsed = new URL(originHeader);
        origin = parsed.origin;
      } catch {
        // use fallback
      }
    } else {
      const host = request.headers.get("host");
      if (host) {
        origin = host.includes("localhost") ? `http://${host}` : `https://${host}`;
      }
    }

    // Return URL after Payoneer checkout completion
    const returnUrl = `${origin}/checkout/success?orderId=${encodeURIComponent(
      orderId
    )}&plan=${encodeURIComponent(resolvedPlanName)}&price=${encodeURIComponent(
      resolvedPrice
    )}&cycle=${encodeURIComponent(resolvedCycle)}&email=${encodeURIComponent(
      email
    )}&name=${encodeURIComponent(fullName)}&country=${encodeURIComponent(
      country || "United States"
    )}`;

    const cancelUrl = `${origin}/checkout?cancelled=true&orderId=${encodeURIComponent(orderId)}`;
    const notificationUrl = `${origin}/api/checkout/payoneer-webhook`;

    // Map country name to 2-letter ISO code if needed
    let countryCode = "US";
    if (country) {
      const c = country.toLowerCase();
      if (c.includes("united kingdom") || c.includes("uk")) countryCode = "GB";
      else if (c.includes("canada")) countryCode = "CA";
      else if (c.includes("australia")) countryCode = "AU";
      else if (c.includes("germany")) countryCode = "DE";
      else if (c.includes("france")) countryCode = "FR";
      else if (c.includes("emirates") || c.includes("uae")) countryCode = "AE";
      else if (c.includes("singapore")) countryCode = "SG";
      else if (c.includes("states") || c.includes("usa") || c.includes("us")) countryCode = "US";
      else if (country.length === 2) countryCode = country.toUpperCase();
    }

    const sessionResult = await createPayoneerCheckoutSession({
      orderId,
      amount,
      currency: "USD",
      email,
      fullName,
      company,
      countryCode,
      address,
      city,
      state,
      postalCode,
      planName: resolvedPlanName,
      returnUrl,
      cancelUrl,
      notificationUrl,
    });

    if (!sessionResult.success || !sessionResult.redirectUrl) {
      return NextResponse.json(
        {
          error: sessionResult.error || "Failed to initialize Payoneer payment session.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId,
      redirectUrl: sessionResult.redirectUrl,
      longId: sessionResult.longId,
      simulated: sessionResult.simulated ?? false,
    });
  } catch (error) {
    console.error("Payoneer Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error creating payment session." },
      { status: 500 }
    );
  }
}

