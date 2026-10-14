import nodemailer from 'nodemailer';

const SMTP_USER = process.env.SMTP_USER || 'info@mindcraftconsultancy.com';
const SMTP_PASS = process.env.SMTP_PASS || 'Mindcraft@2026';
const SMTP_HOST = process.env.SMTP_HOST || 'smtpout.secureserver.net';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);

function getTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

function buildAdvisoryHtml(data) {
  const ref = data.referenceId;
  const timestamp = data.timestamp || new Date().toUTCString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Strategic Engagement Brief</title>
  <style>
    body { margin: 0; padding: 0; background-color: #080c14; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #cbd5e1; }
    .container { max-width: 640px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
    .header { background: linear-gradient(135deg, #064e3b 0%, #0a2540 100%); padding: 32px 28px; border-bottom: 2px solid #10b981; }
    .tag { display: inline-block; padding: 4px 12px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #6ee7b7; font-size: 11px; font-weight: 700; border-radius: 9999px; letter-spacing: 0.05em; font-family: monospace; text-transform: uppercase; margin-bottom: 12px; }
    .title { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em; line-height: 1.3; }
    .subtitle { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
    .body-content { padding: 28px; }
    .section-title { font-size: 12px; font-weight: 700; color: #10b981; text-transform: uppercase; letter-spacing: 0.08em; margin: 20px 0 10px 0; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; background-color: #0b1120; border-radius: 8px; overflow: hidden; border: 1px solid #1e293b; }
    .meta-table td { padding: 12px 16px; font-size: 13px; border-bottom: 1px solid #1e293b; }
    .meta-table tr:last-child td { border-bottom: none; }
    .meta-table td.label { width: 36%; color: #64748b; font-weight: 500; }
    .meta-table td.value { color: #f1f5f9; font-weight: 600; }
    .challenge-box { background-color: #0b1120; border: 1px solid #1e293b; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
    .action-banner { margin-top: 24px; padding: 16px 20px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 10px; }
    .action-text { font-size: 13px; color: #e2e8f0; line-height: 1.5; }
    .action-text strong { color: #34d399; }
    .footer { padding: 20px 28px; background-color: #080c14; border-top: 1px solid #1e293b; font-size: 11px; color: #475569; text-align: center; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="tag">Ref: ${ref}</div>
      <h1 class="title">New Strategic Engagement Brief</h1>
      <p class="subtitle">Direct intake from MindCraft Advisory Portal • ${timestamp}</p>
    </div>
    <div class="body-content">
      <div class="section-title">Client & Organisation Profile</div>
      <table class="meta-table">
        <tr><td class="label">Client Name</td><td class="value">${data.fullName || 'Not specified'}</td></tr>
        <tr><td class="label">Role / Title</td><td class="value">${data.roleTitle || 'Not specified'}</td></tr>
        <tr><td class="label">Work Email</td><td class="value"><a href="mailto:${data.email}" style="color: #38bdf8; text-decoration: none;">${data.email}</a></td></tr>
        <tr><td class="label">Organisation</td><td class="value">${data.organization || 'Not specified'}</td></tr>
        <tr><td class="label">Industry Vertical</td><td class="value">${data.sector || 'Not specified'}</td></tr>
      </table>

      <div class="section-title">Engagement Scope & Requirements</div>
      <table class="meta-table">
        <tr><td class="label">Support Areas Needed</td><td class="value" style="color: #34d399;">${data.supportNeeded || 'Not specified'}</td></tr>
        <tr><td class="label">Markets in Scope</td><td class="value">${data.targetMarkets || 'Not specified'}</td></tr>
        <tr><td class="label">Target African Countries</td><td class="value">${data.africanCountries || 'None specified'}</td></tr>
        <tr><td class="label">Implementation Timing</td><td class="value">${data.timelineUrgency || 'Standard'}</td></tr>
        <tr><td class="label">Pre-selected Scope Items</td><td class="value">${data.scopeItems || 'None'}</td></tr>
      </table>

      <div class="section-title">Strategic Challenge / Problem Context</div>
      <div class="challenge-box">${data.challenge || 'No detailed challenge description provided.'}</div>

      <div class="action-banner">
        <div class="action-text">
          Direct Client Reply: <strong>${data.email}</strong><br>
          <span style="font-size: 11px; color: #94a3b8;">Click 'Reply' in your email client to respond directly to this client.</span>
        </div>
      </div>
    </div>
    <div class="footer">
      MindCraft Consultancy Services • Nairobi, Kenya • info@mindcraftconsultancy.com • https://mindcraftconsultancy.com
    </div>
  </div>
</body>
</html>`;
}

function buildAdvisoryPlain(data) {
  return `NEW STRATEGIC ENGAGEMENT ENQUIRY
=======================================
Reference ID: ${data.referenceId}
Received: ${data.timestamp || new Date().toUTCString()}

CLIENT & ORGANISATION
---------------------
Name:         ${data.fullName}
Role / Title: ${data.roleTitle || 'Not specified'}
Work Email:   ${data.email}
Organisation: ${data.organization}
Industry:     ${data.sector || 'Not specified'}

ENGAGEMENT SCOPE
----------------
Support Needed:   ${data.supportNeeded || 'Not specified'}
Markets in Scope: ${data.targetMarkets || 'Not specified'}
Target Countries: ${data.africanCountries || 'None specified'}
Timing:           ${data.timelineUrgency || 'Standard'}
Scope Items:      ${data.scopeItems || 'None'}

STRATEGIC CHALLENGE
-------------------
${data.challenge || 'Not specified'}

---------------------------------------
Reply directly to this email to contact the client at ${data.email}.
MindCraft Consultancy Services • Nairobi, Kenya
`;
}

function buildClientReceiptHtml(data) {
  const ref = data.referenceId;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enquiry Confirmation - MindCraft Consultancy Services</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #cbd5e1; }
    .container { max-width: 620px; margin: 30px auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
    .header { background: linear-gradient(135deg, #064e3b 0%, #0f172a 100%); padding: 32px 28px; border-bottom: 2px solid #10b981; }
    .badge { display: inline-block; padding: 5px 12px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #6ee7b7; font-size: 11px; font-weight: 700; border-radius: 9999px; letter-spacing: 0.05em; font-family: monospace; text-transform: uppercase; margin-bottom: 12px; }
    .title { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em; line-height: 1.3; }
    .subtitle { margin: 8px 0 0; font-size: 13px; color: #a7f3d0; }
    .body-content { padding: 28px; }
    .lead-text { font-size: 14px; line-height: 1.6; color: #e2e8f0; margin-top: 0; }
    .section-title { font-size: 12px; font-weight: 700; color: #10b981; text-transform: uppercase; letter-spacing: 0.08em; margin: 24px 0 12px 0; }
    .summary-card { background-color: #0b1120; border: 1px solid #1e293b; border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
    .table { width: 100%; border-collapse: collapse; }
    .table td { padding: 11px 16px; font-size: 13px; border-bottom: 1px solid #1e293b; }
    .table tr:last-child td { border-bottom: none; }
    .table td.label { width: 38%; color: #64748b; font-weight: 500; }
    .table td.value { color: #f1f5f9; font-weight: 600; }
    .next-steps { background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 165, 233, 0.05) 100%); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 20px; margin: 24px 0; }
    .next-steps h4 { margin: 0 0 10px 0; font-size: 13px; color: #34d399; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .step-item { display: flex; align-items: flex-start; margin-bottom: 10px; font-size: 13px; color: #cbd5e1; line-height: 1.5; }
    .step-num { display: inline-block; width: 20px; height: 20px; background: #10b981; color: #022c22; font-weight: 700; font-size: 11px; text-align: center; line-height: 20px; border-radius: 50%; margin-right: 10px; flex-shrink: 0; }
    .footer { padding: 24px; background-color: #080c14; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b; text-align: center; line-height: 1.6; }
    .footer a { color: #38bdf8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Reference: ${ref}</div>
      <h1 class="title">Enquiry Confirmation</h1>
      <p class="subtitle">Thank you for connecting with MindCraft Consultancy Services</p>
    </div>
    <div class="body-content">
      <p class="lead-text">
        Dear <strong>${data.fullName}</strong>,<br><br>
        We have received your strategic engagement enquiry. Our senior consulting practice in Nairobi has been notified and is currently reviewing your brief.
      </p>

      <div class="section-title">Summary of Your Engagement Brief</div>
      <div class="summary-card">
        <table class="table">
          <tr><td class="label">Reference ID</td><td class="value" style="font-family: monospace; color: #34d399;">${ref}</td></tr>
          <tr><td class="label">Organisation</td><td class="value">${data.organization || 'Not specified'}</td></tr>
          <tr><td class="label">Contact Person</td><td class="value">${data.fullName}${data.roleTitle ? ` (${data.roleTitle})` : ''}</td></tr>
          <tr><td class="label">Industry Vertical</td><td class="value">${data.sector || 'Not specified'}</td></tr>
          <tr><td class="label">Support Areas Needed</td><td class="value" style="color: #34d399;">${data.supportNeeded || 'Not specified'}</td></tr>
          <tr><td class="label">Markets in Scope</td><td class="value">${data.targetMarkets || 'Pan-African / Global'}</td></tr>
          <tr><td class="label">Target African Countries</td><td class="value">${data.africanCountries || 'None specified'}</td></tr>
          <tr><td class="label">Implementation Timing</td><td class="value">${data.timelineUrgency || 'Standard'}</td></tr>
          <tr><td class="label">Challenge / Context</td><td class="value" style="font-weight: normal; color: #e2e8f0;">${data.challenge || 'Not specified'}</td></tr>
        </table>
      </div>

      <div class="next-steps">
        <h4>Next Steps & Advisory Review</h4>
        <div class="step-item">
          <span class="step-num">1</span>
          <div><strong>Practice Assessment:</strong> Our senior advisors review your market scope, regulatory considerations, and operational goals.</div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div><strong>Consultant Outreach:</strong> A dedicated sector specialist will reach out to <strong>${data.email}</strong> within <strong>24 business hours</strong> to schedule a confidential discovery session.</div>
        </div>
      </div>

      <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 0;">
        If you have urgent documents or adjustments to share, you can reply directly to this email or write to <a href="mailto:${SMTP_USER}" style="color: #38bdf8;">${SMTP_USER}</a>.
      </p>
    </div>
    <div class="footer">
      <strong>MindCraft Consultancy Services</strong><br>
      Strategic Advisory • Commercial Growth • Pan-African Expansion<br>
      Nairobi, Kenya • <a href="mailto:${SMTP_USER}">${SMTP_USER}</a> • <a href="https://mindcraftconsultancy.com">mindcraftconsultancy.com</a>
    </div>
  </div>
</body>
</html>`;
}

function buildClientReceiptPlain(data) {
  const ref = data.referenceId;
  return `Dear ${data.fullName},

Thank you for contacting MindCraft Consultancy Services.

We have received your strategic engagement brief [Reference: ${ref}]. Our senior advisory team in Nairobi is reviewing your requirements.

--- SUMMARY OF YOUR ENQUIRY ---
• Reference ID:      ${ref}
• Client:            ${data.fullName}${data.roleTitle ? ` (${data.roleTitle})` : ''}
• Organisation:      ${data.organization}
• Industry Vertical: ${data.sector || 'Not specified'}
• Support Needed:    ${data.supportNeeded || 'Not specified'}
• Target Markets:    ${data.targetMarkets || 'Pan-African / Global'}
• Target Countries:  ${data.africanCountries || 'None specified'}
• Timeline Urgency:  ${data.timelineUrgency || 'Standard'}

Strategic Challenge / Focus Area:
${data.challenge || 'Not specified'}
--------------------------------

WHAT HAPPENS NEXT:
1. Practice Assessment: Our senior advisors review your operational and commercial context.
2. Direct Contact: A dedicated sector consultant will reach out to ${data.email} within 24 business hours to arrange a confidential discovery session.

If you have any urgent updates or questions, reply directly to this email or write to ${SMTP_USER}.

Warm regards,

Client Engagement Team
MindCraft Consultancy Services
Nairobi, Kenya
info@mindcraftconsultancy.com
https://mindcraftconsultancy.com
`;
}

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload' });
    }
  }

  const {
    fullName,
    roleTitle,
    email,
    organization,
    sector,
    supportNeeded,
    targetMarkets,
    africanCountries,
    timelineUrgency,
    scopeItems,
    challenge,
    referenceId
  } = body || {};

  if (!fullName || !email || !organization) {
    return res.status(400).json({ error: 'Missing required fields: fullName, email, organization' });
  }

  const ref = referenceId || `MC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const data = {
    fullName: String(fullName).trim(),
    roleTitle: roleTitle ? String(roleTitle).trim() : '',
    email: String(email).trim(),
    organization: String(organization).trim(),
    sector: sector ? String(sector).trim() : 'General Strategic Advisory',
    supportNeeded: Array.isArray(supportNeeded) ? supportNeeded.join(', ') : (supportNeeded ? String(supportNeeded) : 'General Advisory'),
    targetMarkets: targetMarkets ? String(targetMarkets).trim() : 'Pan-African / Global',
    africanCountries: Array.isArray(africanCountries) ? africanCountries.join(', ') : (africanCountries ? String(africanCountries) : 'None specified'),
    timelineUrgency: timelineUrgency ? String(timelineUrgency).trim() : 'Standard',
    scopeItems: Array.isArray(scopeItems) ? scopeItems.join('; ') : (scopeItems ? String(scopeItems) : 'None'),
    challenge: challenge ? String(challenge).trim() : '',
    referenceId: ref,
    timestamp: new Date().toUTCString()
  };

  try {
    const transporter = getTransporter();

    // 1. Email to MindCraft Advisory Practice (with Reply-To set to the client's work email)
    const advisoryMailOptions = {
      from: `MindCraft Advisory Portal <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: data.email,
      subject: `[New Engagement Brief] ${data.organization} — ${data.fullName} [${ref}]`,
      text: buildAdvisoryPlain(data),
      html: buildAdvisoryHtml(data)
    };

    // 2. Professional Confirmation Receipt to the Client (with Reply-To set to info@mindcraftconsultancy.com)
    const clientMailOptions = {
      from: `MindCraft Consultancy Services <${SMTP_USER}>`,
      to: data.email,
      replyTo: SMTP_USER,
      subject: `Enquiry Confirmation: Strategic Engagement Brief [Ref: ${ref}]`,
      text: buildClientReceiptPlain(data),
      html: buildClientReceiptHtml(data)
    };

    // Dispatch both messages concurrently
    await Promise.all([
      transporter.sendMail(advisoryMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return res.status(200).json({
      success: true,
      referenceId: ref,
      message: 'Enquiry brief and client confirmation receipt dispatched successfully.'
    });
  } catch (err) {
    console.error('SMTP transmission error:', err);
    return res.status(500).json({
      error: 'Failed to dispatch email via SMTP',
      details: err.message
    });
  }
}
