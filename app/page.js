// app/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { 
  HeroSection, 
  ServicesGrid, 
  ProjectGallery, 
  Testimonials, 
  Process, 
  ContactInfo, 
  Footer, 
  Stats,
  CTA 
} from './components';
import { COMPANY_INFO, CERTIFICATIONS } from './constants';

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                <strong>{COMPANY_INFO.name}</strong> is a Florida-licensed and certified residential contractor dedicated to quality craftsmanship, integrity, and client satisfaction. With years of hands-on experience in remodeling and property restoration, we bring your vision to life.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Our commitment to excellence has earned us recognition as one of Central Florida's most trusted contractors. We combine traditional craftsmanship with modern techniques to deliver results that exceed expectations.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                As a <strong>203k certified contractor</strong>, we specialize in helping homebuyers finance their renovation projects through FHA 203k loans, making home ownership and improvement more accessible.
              </p>
              <div className="flex flex-wrap gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="text-center">
                    <Image src={cert.image} alt={cert.name} width={70} height={70} className="object-contain mx-auto" />
                    <p className="text-xs mt-1 font-medium">{cert.name.split(' ')[0]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-gradient-to-br from-blue-50 to-gray-50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl mt-1">✓</span>
                  <div>
                    <p className="text-lg font-semibold">Licensed & Insured</p>
                    <p className="text-gray-600 text-sm">Fully licensed Florida contractor with comprehensive insurance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-1">⭐</span>
                  <div>
                    <p className="text-lg font-semibold">High Client Satisfaction (4.8★ Google Rating)</p>
                    <p className="text-gray-600 text-sm">Hundreds of happy customers throughout Central Florida</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-2xl mt-1">🏆</span>
                  <div>
                    <p className="text-lg font-semibold">203k Certified Contractor</p>
                    <p className="text-gray-600 text-sm">Specialized expertise in FHA 203k renovation financing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-2xl mt-1">⚡</span>
                  <div>
                    <p className="text-lg font-semibold">Prompt Project Completion</p>
                    <p className="text-gray-600 text-sm">We respect your time with realistic timelines</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* About Anchor with Stats */}
      <section id="about" className="section-padding bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About {COMPANY_INFO.name}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We're a Florida-certified residential contractor committed to transforming homes with quality, care, and craftsmanship. 
            Our team brings decades of combined experience to every project, ensuring exceptional results that stand the test of time.
          </p>
          <Stats bgColor="bg-transparent" />
          <Link href="/about" className="inline-block mt-8">
            <button className="btn btn-secondary">
              Learn More About Us →
            </button>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Process Section */}
      <Process />

      {/* Contact Section */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
}