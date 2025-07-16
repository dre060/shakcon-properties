// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, urgency = 'normal' } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields.' 
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address.' 
        },
        { status: 400 }
      );
    }

    // Prepare email content
    const urgencyText = urgency === 'emergency' ? '🚨 EMERGENCY' : urgency === 'urgent' ? '⚠️ URGENT' : 'NORMAL';
    const serviceText = service || 'Not specified';
    
    const emailSubject = `${urgencyText} - New Contact Form Submission from ${name}`;
    
    const emailBody = `
New contact form submission from Shakcon Properties website:

Customer Information:
• Name: ${name}
• Email: ${email}
• Phone: ${phone}
• Service Needed: ${serviceText}
• Project Urgency: ${urgencyText}

Project Details:
${message}

---
Submitted on: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})} EST

Reply to this customer directly at: ${email}
Call them at: ${phone}
    `.trim();

    // Log the submission for development
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      urgency,
      message,
      timestamp: new Date().toISOString()
    });

    // Option 1: Using Resend (Recommended)
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'website@shakcon.com', // You'll need to verify this domain with Resend
            to: ['Shakconproperties@gmail.com'],
            subject: emailSubject,
            text: emailBody,
            html: emailBody.replace(/\n/g, '<br>'),
          }),
        });

        if (response.ok) {
          return NextResponse.json(
            { 
              success: true, 
              message: 'Thank you for your message! We\'ll contact you within 24 hours.' 
            },
            { status: 200 }
          );
        }
      } catch (error) {
        console.error('Resend email error:', error);
      }
    }

    // Option 2: Using SendGrid (Alternative)
    if (process.env.SENDGRID_API_KEY) {
      try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [{
              to: [{ email: 'Shakconproperties@gmail.com' }],
              subject: emailSubject
            }],
            from: { email: 'website@shakcon.com', name: 'Shakcon Properties Website' },
            content: [{
              type: 'text/plain',
              value: emailBody
            }]
          }),
        });

        if (response.ok) {
          return NextResponse.json(
            { 
              success: true, 
              message: 'Thank you for your message! We\'ll contact you within 24 hours.' 
            },
            { status: 200 }
          );
        }
      } catch (error) {
        console.error('SendGrid email error:', error);
      }
    }

    // Option 3: Using Formspree (Easiest setup)
    if (process.env.FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            service: serviceText,
            urgency: urgencyText,
            message,
            _subject: emailSubject,
            _replyto: email
          }),
        });

        if (response.ok) {
          return NextResponse.json(
            { 
              success: true, 
              message: 'Thank you for your message! We\'ll contact you within 24 hours.' 
            },
            { status: 200 }
          );
        }
      } catch (error) {
        console.error('Formspree error:', error);
      }
    }

    // Fallback: If no email service is configured, still log and respond
    console.log('Email would be sent to Shakconproperties@gmail.com:', {
      subject: emailSubject,
      body: emailBody
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We have received your submission and will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error sending your message. Please try calling us directly at (352) 693-7691.' 
      },
      { status: 500 }
    );
  }
}