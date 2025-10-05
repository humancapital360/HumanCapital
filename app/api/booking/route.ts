// app/api/booking/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    if (!data) {
      return NextResponse.json({ success: false, message: "Invalid form submission." })
    }

    // Honeypot check
    if (data.website && data.website.trim() !== "") {
      return NextResponse.json({ success: false, message: "Spam detected." })
    }

    // Collect fields
    const firstName = data.firstName || ""
    const lastName = data.lastName || ""
    const email = data.email || ""
    const phone = data.phone || ""
    const date = data.date || ""
    const time = data.time || ""
    const message = data.message || ""
    const formType = data.formType || "Appointment"
    const recipientEmail = data.recipientEmail || "appointments@humancapital360.com"

    // Build email body
    const body = `
      <h3>New ${formType} Request</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Notes:</strong><br>${message}</p>
    `

    // SMTP Config (hardcoded like your PHP)
    const transporter = nodemailer.createTransport({
      host: "humancapital360.com",
      port: 587,
      secure: false,
      auth: {
        user: "appointments@humancapital360.com",
        pass: "@HC360.com",
      },
    })

    await transporter.sendMail({
      from: `"Human Capital 360" <appointments@humancapital360.com>`,
      to: recipientEmail,
      replyTo: email ? `${firstName} ${lastName} <${email}>` : undefined,
      subject: `[${formType}] Appointment Request`,
      html: body,
    })

    return NextResponse.json({
      success: true,
      message: "Your appointment request has been sent successfully!",
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Mailer Error: " + error.message,
    })
  }
}
