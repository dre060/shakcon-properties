// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send a notification to the business owner

    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll contact you within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error sending your message. Please try again or call us directly.' 
      },
      { status: 500 }
    );
  }
}