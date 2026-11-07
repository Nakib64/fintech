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
  paymentMethod: "payoneer" | "stripe" | "wire" | "invoice";
  features?: string[];
  turnaround?: string;
  isPaid?: boolean;
}

export interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
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
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || "support@ashivox.net";
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
      ${hasLogo
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
 * Sends a comprehensive Payment & Package Confirmation email when a customer
 * completes checkout via Payoneer. Includes full purchase receipt, deliverables list,
 * turnaround schedule, and creative onboarding instructions.
 */
export async function sendPurchaseConfirmationEmail(data: OrderEmailData) {
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

  const featuresListHtml = (data.features && data.features.length > 0)
    ? data.features.map(f => `
      <li style="padding: 5px 0; color: #2d2638; display: flex; align-items: flex-start; font-size: 13.5px;">
        <span style="color: #7015e2; font-weight: bold; margin-right: 8px;">✓</span>
        <span>${f}</span>
      </li>
    `).join("")
    : `
      <li style="padding: 5px 0; color: #2d2638; font-size: 13.5px;">
        <span style="color: #7015e2; font-weight: bold; margin-right: 8px;">✓</span>
        <span>Full creative production deliverables as specified in ${data.planName}</span>
      </li>
    `;

  const clientPurchaseHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Payment & Package Confirmed - ${data.orderId}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f4f8; color: #1a1c1f; margin: 0; padding: 24px; }
    .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e1dce8; box-shadow: 0 10px 30px rgba(22,4,48,0.06); }
    .header { background-color: #160430; padding: 28px 20px; text-align: center; }
    .header img { height: 38px; width: auto; max-width: 175px; display: inline-block; vertical-align: middle; }
    .content { padding: 32px 28px; }
    .status-badge { display: inline-block; padding: 6px 14px; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; border-radius: 9999px; font-size: 12px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 18px; }
    .title { margin: 0 0 10px 0; font-size: 22px; font-weight: 800; color: #160430; letter-spacing: -0.4px; }
    .message { font-size: 14.5px; line-height: 1.6; color: #4a4453; margin: 0 0 22px 0; }
    .receipt-card { background: #faf9fd; border: 1px solid #e5def0; border-radius: 12px; padding: 20px; margin: 20px 0; }
    .receipt-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
    .receipt-table td { padding: 8px 0; border-bottom: 1px solid #eae4f2; color: #534c5f; }
    .receipt-table tr:last-child td { border-bottom: none; }
    .receipt-table td:last-child { text-align: right; font-weight: 700; color: #1a1c1f; }
    .section-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #7015e2; margin: 24px 0 12px 0; }
    .inclusions-card { background: #ffffff; border: 1px solid #e5def0; border-radius: 12px; padding: 18px 20px; margin: 16px 0; }
    .step-box { background: #fbf9ff; border-left: 3px solid #7015e2; padding: 16px 18px; border-radius: 8px; margin: 12px 0; }
    .step-item { margin-bottom: 12px; font-size: 13.5px; color: #2d2638; line-height: 1.55; }
    .step-item:last-child { margin-bottom: 0; }
    .step-num { font-weight: 800; color: #7015e2; }
    .footer { padding: 22px 24px; background: #fafafc; border-top: 1px solid #ededf1; font-size: 12px; color: #7c7487; line-height: 1.6; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${hasLogo
      ? `<img src="cid:brandlogo" alt="${COMPANY_NAME}" />`
      : `<h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">${COMPANY_NAME}</h1>`
    }
    </div>

    <div class="content">
      <div style="text-align: center; margin-bottom: 6px;">
        <span class="status-badge">✓ Payment Confirmed &amp; Package Activated</span>
      </div>
      <h1 class="title" style="text-align: center;">Thank You, ${data.fullName}!</h1>
      <p class="message" style="text-align: center;">
        Your payment for the <strong>${data.planName}</strong> package has been successfully processed via <strong>Payoneer Checkout</strong>.
      </p>

      <!-- ── Official Payment Receipt ── -->
      <div class="receipt-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="color: #160430; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Official Payment Receipt</strong>
          <span style="font-size: 11px; color: #047857; font-weight: 700; background: #ecfdf5; padding: 2px 8px; border-radius: 4px;">PAID</span>
        </div>
        <table class="receipt-table">
          <tr>
            <td>Order / Transaction ID</td>
            <td><strong>${data.orderId}</strong></td>
          </tr>
          <tr>
            <td>Package Tier</td>
            <td><strong>${data.planName}</strong></td>
          </tr>
          <tr>
            <td>Amount Paid</td>
            <td style="color: #7015e2; font-size: 15px; font-weight: 900;">${data.planPrice} USD ${data.planCycle}</td>
          </tr>
          <tr>
            <td>Payment Rail</td>
            <td>Payoneer Checkout (3D Secure)</td>
          </tr>
          <tr>
            <td>Date &amp; Time</td>
            <td>${dateStr}</td>
          </tr>
          <tr>
            <td>Customer Name</td>
            <td>${data.fullName}</td>
          </tr>
          ${data.company ? `<tr><td>Company</td><td>${data.company}</td></tr>` : ""}
          <tr>
            <td>Customer Email</td>
            <td>${data.email}</td>
          </tr>
          <tr>
            <td>Billing Region</td>
            <td>${data.country}</td>
          </tr>
        </table>
      </div>

      <!-- ── Package Inclusions & Deliverables ── -->
      <div class="section-title">Package Deliverables &amp; Inclusions</div>
      <div class="inclusions-card">
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${featuresListHtml}
        </ul>
      </div>

      <!-- ── What Happens Next (Onboarding Guide) ── -->
      <div class="section-title">Next Steps &amp; Project Onboarding</div>
      <div class="step-box">
        <div class="step-item">
          <span class="step-num">Step 1 — Asset Upload Link (Within 2-4 Hours):</span><br>
          Our executive creative producer will email you a private, encrypted Google Drive and Frame.io upload folder to submit your raw footage, brand style guide, logos, and brief.
        </div>
        <div class="step-item">
          <span class="step-num">Step 2 — Sprint Kickoff:</span><br>
          As soon as your brief and media files are submitted, our production sprint begins immediately.
        </div>
        <div class="step-item">
          <span class="step-num">Step 3 — First Cut &amp; Iteration:</span><br>
          You will receive your first cut preview with timestamped review capabilities so you can request fine adjustments before final master export.
        </div>
      </div>

      <!-- Direct VIP Support -->
      <div style="background: #fbfbfc; border: 1px solid #eaeaea; border-radius: 10px; padding: 14px 18px; margin-top: 20px; font-size: 13px; color: #4b4455; text-align: center;">
        Need urgent assistance or have questions regarding your project kickoff?<br>
        Reach our executive team directly at <a href="mailto:${COMPANY_EMAIL}" style="color: #7015e2; font-weight: 700; text-decoration: none;">${COMPANY_EMAIL}</a> or call <strong>${COMPANY_PHONE}</strong>.
      </div>
    </div>

    <div class="footer">
      <strong>${COMPANY_NAME}</strong> • Registered in the State of New Mexico (ID: ${COMPANY_REG_NUMBER})<br>
      1209 Mountain Road PL NE, Ste R, Albuquerque, NM 87110, USA<br>
      © 2026 ${COMPANY_NAME}. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

  const internalAlertHtml = `
    <h2>💰 New Confirmed Purchase: ${data.orderId}</h2>
    <p><strong>Package:</strong> ${data.planName} (${data.planPrice} USD ${data.planCycle})</p>
    <p><strong>Amount:</strong> ${data.planPrice} USD</p>
    <p><strong>Client:</strong> ${data.fullName} (${data.email})</p>
    <p><strong>Company:</strong> ${data.company || "N/A"}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Payment Rail:</strong> Payoneer Checkout</p>
    <p><strong>Date:</strong> ${dateStr}</p>
    <p><strong>Action Required:</strong> Set up client Google Drive / Frame.io workspace and reach out within 2-4 hours.</p>
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
      subject: `[${COMPANY_NAME}] Payment Confirmed: ${data.planName} (Order #${data.orderId})`,
      html: clientPurchaseHtml,
      attachments,
    });

    // Send alert to company inbox
    await transporter.sendMail({
      from: fromAddress,
      to: COMPANY_EMAIL,
      subject: `[PAID ORDER] ${data.orderId} - ${data.fullName} ($${data.planPrice} USD via Payoneer)`,
      html: internalAlertHtml,
    });

    return { success: true, simulated: false, orderId: data.orderId };
  } catch (error) {
    console.error("[SMTP Error] Failed to send purchase confirmation email:", error);
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
      ${hasLogo
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
      subject: `[NEW INQUIRY] ${data.name} - ${data.service}`,
      html: agencyHtml,
    });

    return { success: true, simulated: false };
  } catch (error) {
    console.error("[SMTP Error] Failed to send contact email:", error);
    return { success: false, error: (error as Error).message };
  }
}

