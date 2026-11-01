import { NextResponse } from "next/server";
import { sendContactInquiryEmail, ContactEmailData } from "../../lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, details, nda } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const contactData: ContactEmailData = {
      name,
      email,
      company,
      phone,
      service: service || "Video Editing",
      budget: budget || "Custom Quote",
      details: details || "No additional notes provided",
      nda: Boolean(nda),
    };

    const result = await sendContactInquiryEmail(contactData);

    return NextResponse.json({
      success: true,
      simulated: result.simulated ?? false,
      message: "Discovery inquiry received. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process contact inquiry" },
      { status: 500 }
    );
  }
}

