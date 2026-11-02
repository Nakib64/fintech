import { NextResponse } from "next/server";
import { sendContactInquiryEmail, ContactEmailData } from "../../lib/mail";

const SERVICE_NAMES: Record<string, string> = {
  video: "Video Editing & VFX",
  writing: "Content Writing & Scripting",
  social: "Social Media Management",
  custom: "Custom Multi-Pod Production",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, details, nda } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const cleanServiceName =
      (service && SERVICE_NAMES[service]) || service || "Video Editing & VFX";

    const contactData: ContactEmailData = {
      name,
      email,
      company,
      phone,
      service: cleanServiceName,
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

