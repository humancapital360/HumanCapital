import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      formType = "Contact Form",
      recipientEmail = "contact@humancapital360.com",
    } = data;

    // Build email body
    const body = `
      <h3>New ${formType} Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    // Configure SMTP (same as PHPMailer but with Nodemailer)
    const transporter = nodemailer.createTransport({
      host: "humancapital360.com", // your mail host
      port: 587,                   // TLS
      secure: false,               // true for 465, false for 587
      auth: {
        user: "contact@humancapital360.com", // SMTP user
        pass: "@HC360.com",                  // SMTP password
      },
    });

    // Send the mail
    await transporter.sendMail({
      from: '"Human Capital 360" <contact@humancapital360.com>',
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `[${formType}] ${subject}`,
      html: body,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: "Mailer Error: " + err.message,
    });
  }
}
