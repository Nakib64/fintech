import { NextResponse } from "next/server";
import { sendInvoiceOrderEmail, OrderEmailData } from "../../lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      country,
      address,
      planName,
      planPrice,
      planCycle,
      paymentMethod,
    } = body;

    if (!fullName || !email || !planName || !planPrice) {
      return NextResponse.json(
        { error: "Missing required order details" },
        { status: 400 }
      );
    }

    // Generate unique order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `ASH-${randomNum}`;

    const orderData: OrderEmailData = {
      orderId,
      fullName,
      email,
      company,
      country: country || "United States",
      address,
      planName,
      planPrice,
      planCycle: planCycle || "/project",
      paymentMethod: paymentMethod || "invoice",
    };

    const result = await sendInvoiceOrderEmail(orderData);

    return NextResponse.json({
      success: true,
      orderId,
      simulated: result.simulated ?? false,
      message: "Order registered and commercial invoice issued.",
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing order" },
      { status: 500 }
    );
  }
}

