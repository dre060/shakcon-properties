// app/financing/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FinancingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Financing Info */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Beautiful home exterior"
          fill
          className="object-cover z-0"
          priority
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-teal-500/80 to-green-500/80 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 animate-fade-in">
            We offer financing!
          </h1>
          
          <div className="space-y-8 md:space-y-10">
            {/* 0% APR */}
            <div className="flex items-center justify-center md:justify-start gap-4 animate-slide-up">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold">0% APR</div>
                <div className="text-xl md:text-2xl text-gray-200">PROMOTIONAL FINANCING AVAILABLE</div>
              </div>
            </div>

            {/* Funding Amount */}
            <div className="flex items-center justify-center md:justify-start gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold">$1,000 - $200,000</div>
                <div className="text-xl md:text-2xl text-gray-200">REQUEST IN FUNDING</div>
              </div>
            </div>

            {/* Soft Credit Pull */}
            <div className="flex items-center justify-center md:justify-start gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold">SOFT CREDIT PULL</div>
                <div className="text-xl md:text-2xl text-gray-200">AVAILABLE</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a 
              href="/financing.pdf" 
              target="_blank"
              className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              📄 View Financing Details
            </a>
            <Link href="/contact">
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
                Apply for Financing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Financing Information */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Flexible Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe everyone deserves a beautiful, safe home. That's why we offer flexible financing 
              options to help make your home improvement dreams a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Approval</h3>
              <p className="text-gray-700">
                Get approved in minutes with our streamlined application process. 
                Soft credit check won't impact your credit score.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">No Hidden Fees</h3>
              <p className="text-gray-700">
                Transparent pricing with no hidden fees or prepayment penalties. 
                What you see is what you get.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Terms</h3>
              <p className="text-gray-700">
                Choose payment terms that work for your budget. 
                From 12 to 144 months available.
              </p>
            </div>
          </div>

          {/* Download PDF Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Download our complete financing guide to learn about all available options, 
              terms, and how to get started with your home improvement project.
            </p>
            <a 
              href="/financing.pdf" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Financing Guide
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your project and financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:3526937691"
              className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              📞 Call (352) 693-7691
            </a>
            <Link href="/contact">
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}