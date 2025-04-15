import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Configure email transporter with domain SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Your domain's SMTP host
      port: Number(process.env.SMTP_PORT), // Usually 587 or 465
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // apply@starriselabs.com
        pass: process.env.EMAIL_PASSWORD, // Your email account password
      },
    })

    // Create email content
    const emailContent = `
      New Application Received
      
      Full Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      City: ${data.city}
      Birth Year: ${data.birthYear}
      Newsletter Subscription: ${data.newsletter ? 'Yes' : 'No'}
      
      The applicant has consented to receive communications.
    `

    // Send email
    await transporter.sendMail({
      from: 'apply@starriselabs.com',
      to: 'apply@starriselabs.com',
      subject: `New Application from ${data.fullName}`,
      text: emailContent,
    })

    return NextResponse.json({ message: 'Application submitted successfully' })
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
} 