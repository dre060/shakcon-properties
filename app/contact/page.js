// app/contact/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please call us directly at (352) 693-7691');
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-gray-300">Get Your Free Estimate Today</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Start Your Project</h2>
            <p className="text-lg mb-10 text-gray-700">
              Whether you're looking to start a new project, request a quote, or simply ask a question —
              we're here to help. Reach out to Shakcon Properties today.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <a href="tel:3526937691" className="text-gray-700 hover:text-yellow-500 text-lg">(352) 693-7691</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:Shakconproperties@gmail.com" className="text-gray-700 hover:text-yellow-500 text-lg">Shakconproperties@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Service Area</h3>
                  <p className="text-gray-700">Leesburg • Fruitland Park • The Villages • Orlando • Winter Park • and surrounding Central Florida areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sunday: Emergency Services Only</p>
                </div>
              </div>
            </div>

            {/* Map or Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/hero.jpg" alt="Shakcon Properties Office" width={600} height={300} className="w-full h-64 object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Request Your Free Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                    placeholder="(352) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                >
                  <option value="">Select a service...</option>
                  <option value="roofing">Roofing</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="restoration">Storm/Water Restoration</option>
                  <option value="general">General Contracting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Tell us more about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Estimate'}
              </button>

              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  {submitMessage}
                </div>
              )}

              <p className="text-sm text-gray-600 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Emergency Services Available 24/7</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Storm damage? Water leak? We understand that emergencies don't wait for business hours. 
            Our emergency response team is available around the clock to protect your home.
          </p>
          <a 
            href="tel:3526937691" 
            className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            Call Emergency Line: (352) 693-7691
          </a>
        </div>
      </section>
    </main>
  );
}