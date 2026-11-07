import { NextResponse } from "next/server";
import { sendPurchaseConfirmationEmail } from "../../../lib/mail";
import { getPlanByNameOrId } from "../../../lib/plans";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Payoneer sends notification payload with status and transactionId
    const transactionId = body.transactionId || body.identification?.transactionId;
    const statusCode = body.status?.code;
    const interactionCode = body.interaction?.code;

    console.log("[Payoneer Webhook Received]", {
      transactionId,
      statusCode,
      interactionCode,
    });

    // Check if the transaction represents a successful charge
    const isSuccess =
      interactionCode === "PROCEED" ||
      statusCode === "charged" ||
      statusCode === "debited";

    if (isSuccess && transactionId && body.customer?.email) {
      const email = body.customer.email;
      const fullName =
        body.customer.name?.given && body.customer.name?.family
          ? `${body.customer.name.given} ${body.customer.name.family}`
          : body.customer.name?.given || "Valued Client";

      const planName = body.planName || "Creative Production Package";
      const planPrice = body.amount ? `$${body.amount}` : "$100";
      const matchedPlan = getPlanByNameOrId(planName, planPrice);

      await sendPurchaseConfirmationEmail({
        orderId: transactionId,
        fullName,
        email,
        country: body.customer.addresses?.billing?.country || "United States",
        planName: matchedPlan.name,
        planPrice: matchedPlan.price,
        planCycle: matchedPlan.cycle,
        paymentMethod: "payoneer",
        features: matchedPlan.features,
        isPaid: true,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Payoneer Webhook Error]", error);
    return NextResponse.json(
      { error: "Webhook processing error" },
      { status: 500 }
    );
  }
}

