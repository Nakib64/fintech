import { NextResponse } from "next/server";
import { sendPurchaseConfirmationEmail, OrderEmailData } from "../../../lib/mail";
import { getPlanByNameOrId } from "../../../lib/plans";

// In-memory cache to prevent duplicate email dispatches on page reloads
const confirmedOrders = new Map<string, number>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      orderId,
      fullName,
      email,
      company,
      country,
      address,
      planName,
      planPrice,
      planCycle,
      paymentMethod = "payoneer",
    } = body;

    if (!orderId || !email || !planName) {
      return NextResponse.json(
        { error: "Missing required order confirmation fields." },
        { status: 400 }
      );
    }

    // Check if email for this orderId was dispatched in the last 15 minutes
    const now = Date.now();
    const lastSent = confirmedOrders.get(orderId);
    const isAlreadySent = lastSent && now - lastSent < 15 * 60 * 1000;

    // Resolve plan features
    const matchedPlan = getPlanByNameOrId(planName, planPrice);
    const features = matchedPlan.features || [];

    const orderData: OrderEmailData = {
      orderId,
      fullName: fullName || "Valued Client",
      email,
      company,
      country: country || "United States",
      address,
      planName: matchedPlan.name || planName,
      planPrice: matchedPlan.price || planPrice,
      planCycle: matchedPlan.cycle || planCycle || "/project",
      paymentMethod: paymentMethod === "payoneer" ? "payoneer" : "payoneer",
      features,
      isPaid: true,
    };

    let emailResult: { success: boolean; simulated?: boolean; orderId?: string; error?: string } = {
      success: true,
      simulated: false,
    };

    if (!isAlreadySent) {
      emailResult = await sendPurchaseConfirmationEmail(orderData);
      confirmedOrders.set(orderId, now);
      // Clean up map if it exceeds 500 entries
      if (confirmedOrders.size > 500) {
        const oldestKey = confirmedOrders.keys().next().value;
        if (oldestKey) confirmedOrders.delete(oldestKey);
      }
    }

    return NextResponse.json({
      success: true,
      orderId,
      emailSent: !isAlreadySent,
      simulated: emailResult.simulated ?? false,
      plan: {
        id: matchedPlan.id,
        name: matchedPlan.name,
        price: matchedPlan.price,
        cycle: matchedPlan.cycle,
        badge: matchedPlan.badge,
        desc: matchedPlan.desc,
        features: matchedPlan.features,
      },
      message: isAlreadySent
        ? "Order already confirmed."
        : "Payment confirmed and full onboarding package email dispatched.",
    });
  } catch (error) {
    console.error("Order confirmation API error:", error);
    return NextResponse.json(
      { error: "Internal server error confirming order" },
      { status: 500 }
    );
  }
}
