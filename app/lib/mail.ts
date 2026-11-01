import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export interface OrderEmailData {
  orderId: string;
  fullName: string;
  email: string;
  company?: string;
  country: string;
  address?: string;
  planName: string;
  planPrice: string;
  planCycle: string;
  paymentMethod: "stripe" | "wire" | "invoice";
}

export interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget: string;
  details: string;
  nda: boolean;
}

// Create SMTP transporter if credentials exist
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

const COMPANY_NAME = "ASHIVOX LLC";
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "support@ashivox.com";
const COMPANY_PHONE = "+1 (505) 528-9302";
const COMPANY_REG_NUMBER = "0008132694";
const COMPANY_ADDRESS = "1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA";

/**
 * Sends a concise Order Confirmation email to the client stating our team will reach out shortly,
 * and an alert to agency support.
 */
export async function sendInvoiceOrderEmail(data: OrderEmailData) {
  const transporter = getTransporter();
  const fromAddress = process.env.SMTP_FROM || `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`;

  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const hasLogo = fs.existsSync(logoPath);

  const attachments = hasLogo
    ? [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "brandlogo",
        },
      ]
    : [];

  // Short, branded HTML Order Confirmation Template
  const clientInvoiceHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Order Request Confirmation - ${data.orderId}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f9; color: #1a1c1f; margin: 0; padding: 24px; }
    .container { max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e2e6; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
    .header { background-color: #160430; padding: 26px 20px; text-align: center; }
    .header img { height: 36px; width: auto; max-width: 170px; display: inline-block; vertical-align: middle; }
    .content { padding: 32px 28px; }
    .badge { display: inline-block; padding: 4px 12px; background: #ebdcff; color: #270058; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
    .title { margin: 0 0 12px 0; font-size: 20px; font-weight: 800; color: #1a1c1f; letter-spacing: -0.3px; }
    .message { font-size: 14px; line-height: 1.6; color: #4b4455; margin: 0 0 20px 0; }
    .summary-card { background: #f9f8fd; border: 1px solid #e7e2f5; border-radius: 12px; padding: 18px; margin: 20px 0; }
    .summary-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 8px; }
    .summary-table td { padding: 7px 0; border-bottom: 1px solid #ede8f7; color: #4b4455; }
    .summary-table tr:last-child td { border-bottom: none; }
    .summary-table td:last-child { text-align: right; font-weight: 700; color: #1a1c1f; }
    .reachout-box { background: #f4efff; border-left: 3px solid #7015e2; padding: 14px 16px; border-radius: 8px; font-size: 13px; color: #270058; line-height: 1.5; margin: 24px 0 12px 0; }
    .footer { padding: 20px 24px; background: #fafafc; border-top: 1px solid #ededf1; font-size: 12px; color: #7c7487; line-height: 1.6; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${
        hasLogo
          ? `<img src="cid:brandlogo" alt="${COMPANY_NAME}" />`
          : `<h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">${COMPANY_NAME}</h1>`
      }
    </div>

    <div class="content">
      <span class="badge">Order Request Confirmed</span>
      <h1 class="title">Thank You, ${data.fullName}</h1>
      <p class="message">
        We have successfully received your order request for the <strong>${data.planName}</strong> package.
      </p>

      <div class="summary-card">
        <strong style="color: #270058; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Request Details</strong>
        <table class="summary-table">
          <tr>
            <td>Reference ID</td>
            <td>${data.orderId}</td>
          </tr>
          <tr>
            <td>Package</td>
            <td>${data.planName}</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td style="color: #7015e2; font-size: 14px;">${data.planPrice} USD ${data.planCycle}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td style="color: #059669;">Pending Review</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>${dateStr}</td>
          </tr>
        </table>
      </div>

      <div class="reachout-box">
        <strong>What Happens Next?</strong><br>
        Our creative executive team is reviewing your requirements and <strong>will reach out to you shortly</strong> (within 24 business hours) at <strong>${data.email}</strong> to finalize your project scope and kick off onboarding.
      </div>
    </div>

    <div class="footer">
      <strong>${COMPANY_NAME}</strong> (Business Reg #: ${COMPANY_REG_NUMBER}) • 1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA<br>
      Direct Support: <a href="mailto:${COMPANY_EMAIL}" style="color: #7015e2; text-decoration: none;">${COMPANY_EMAIL}</a> • Tel: ${COMPANY_PHONE}<br>
      © 2026 ${COMPANY_NAME}. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

  // Internal Notification Template for Agency Team
  const internalNotificationHtml = `
    <h2>New Client Order Request: ${data.orderId}</h2>
    <p><strong>Client:</strong> ${data.fullName} (${data.email})</p>
    <p><strong>Company:</strong> ${data.company || "N/A"}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Package:</strong> ${data.planName} (${data.planPrice} USD ${data.planCycle})</p>
    <p><strong>Payment Method Preference:</strong> ${data.paymentMethod}</p>
    <p><strong>Date:</strong> ${dateStr}</p>
  `;

  if (!transporter) {
    console.log(`[SMTP SIMULATION] Transporter not configured. Confirmation email recorded for ${data.email}: ${data.orderId}`);
    return { success: true, simulated: true, orderId: data.orderId };
  }

  try {
    // Send to client
    await transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: `[${COMPANY_NAME}] Order Request Confirmation - ${data.orderId}`,
      html: clientInvoiceHtml,
      attachments,
    });

    // Send copy to company inbox
    await transporter.sendMail({
      from: fromAddress,
      to: COMPANY_EMAIL,
      subject: `[NEW ORDER] ${data.orderId} - ${data.fullName} (${data.planPrice} USD)`,
      html: internalNotificationHtml,
    });

    return { success: true, simulated: false, orderId: data.orderId };
  } catch (error) {
    console.error("[SMTP Error] Failed to send order email:", error);
    return { success: false, error: (error as Error).message, orderId: data.orderId };
  }
}

/**
 * Sends a contact / project discovery notification.
 */
export async function sendContactInquiryEmail(data: ContactEmailData) {
  const transporter = getTransporter();
  const fromAddress = process.env.SMTP_FROM || `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`;

  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const hasLogo = fs.existsSync(logoPath);

  const attachments = hasLogo
    ? [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "brandlogo",
        },
      ]
    : [];

  const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Project Inquiry Received</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f9; color: #1a1c1f; margin: 0; padding: 24px;">
  <div style="max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e2e6;">
    <div style="background-color: #160430; padding: 26px 20px; text-align: center;">
      ${
        hasLogo
          ? `<img src="cid:brandlogo" alt="${COMPANY_NAME}" style="height: 36px; width: auto; max-width: 170px; display: inline-block; vertical-align: middle;" />`
          : `<h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">${COMPANY_NAME}</h1>`
      }
    </div>
    <div style="padding: 32px 28px;">
      <h2 style="margin: 0 0 12px 0; font-size: 20px; color: #1a1c1f;">Thank You for Reaching Out, ${data.name}</h2>
      <p style="font-size: 14px; line-height: 1.6; color: #4b4455; margin: 0 0 20px 0;">
        We received your project brief for <strong>${data.service}</strong>. Our executive creative producer will review your specifications and reach out to you within <strong>2 business hours</strong>.
      </p>
      <div style="background: #f9f8fd; border: 1px solid #e7e2f5; border-radius: 12px; padding: 18px; margin: 20px 0;">
        <strong style="color: #270058; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Inquiry Summary</strong>
        <p style="margin: 8px 0 4px 0; font-size: 13px; color: #4b4455;"><strong>Service:</strong> ${data.service}</p>
        <p style="margin: 4px 0; font-size: 13px; color: #4b4455;"><strong>Budget:</strong> ${data.budget}</p>
        <p style="margin: 4px 0; font-size: 13px; color: #4b4455;"><strong>Bilateral NDA:</strong> ${data.nda ? "Requested" : "Standard Agency SLA"}</p>
      </div>
    </div>
    <div style="padding: 20px 24px; background: #fafafc; border-top: 1px solid #ededf1; font-size: 12px; color: #7c7487; line-height: 1.6; text-align: center;">
      <strong>${COMPANY_NAME}</strong> (Business Reg #: ${COMPANY_REG_NUMBER}) • 1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA<br>
      Direct Support: <a href="mailto:${COMPANY_EMAIL}" style="color: #7015e2; text-decoration: none;">${COMPANY_EMAIL}</a> • Tel: ${COMPANY_PHONE}
    </div>
  </div>
</body>
</html>
  `;

  const agencyHtml = `
    <h2>New Project Discovery Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company || "N/A"}</p>
    <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <p><strong>Bilateral NDA:</strong> ${data.nda ? "Yes" : "No"}</p>
    <p><strong>Details:</strong><br>${data.details}</p>
  `;

  if (!transporter) {
    console.log(`[SMTP SIMULATION] Contact inquiry recorded from ${data.email}`);
    return { success: true, simulated: true };
  }

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: `[${COMPANY_NAME}] Project Intake Confirmation - ${data.name}`,
      html: clientHtml,
      attachments,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: COMPANY_EMAIL,
      subject: `[NEW INQUIRY] ${data.name} - ${data.service} (${data.budget})`,
      html: agencyHtml,
    });

    return { success: true, simulated: false };
  } catch (error) {
    console.error("[SMTP Error] Failed to send contact email:", error);
    return { success: false, error: (error as Error).message };
  }
}

