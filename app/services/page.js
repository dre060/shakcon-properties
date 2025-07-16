// app/services/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Kitchen Remodeling',
    image: '/kitchen.jpg',
    description: 'Transform your kitchen into a modern masterpiece',
    features: [
      'Custom cabinet design & installation',
      'Granite & quartz countertops',
      'Kitchen island construction',
      'Backsplash installation',
      'Lighting upgrades',
      'Appliance installation'
    ],
    details: 'We work with you to create a kitchen that perfectly matches your lifestyle and budget, using only the highest quality materials and finishes.'
  },
  {
    title: 'Bathroom Renovation',
    image: '/project2.jpg',
    description: 'Create your dream bathroom retreat',
    features: [
      'Complete bathroom remodels',
      'Walk-in shower conversions',
      'Custom vanity installation',
      'Tile work and flooring',
      'Plumbing upgrades',
      'Accessibility modifications'
    ],
    details: 'From simple updates to luxury spa-like transformations, we handle every aspect of your bathroom renovation with precision and care.'
  },
  {
    title: 'Storm Restoration',
    image: '/restoration.jpg',
    description: '24/7 emergency restoration services',
    features: [
      'Emergency tarping & board-up',
      'Water damage restoration',
      'Wind damage repair',
      'Tree damage cleanup',
      'Insurance documentation',
      'Complete property restoration'
    ],
    details: 'When disaster strikes, we respond quickly to minimize damage and restore your property. We work directly with insurance companies to streamline the claims process.'
  },
  {
    title: 'Residential Contracting',
    image: '/hero.jpg',
    description: 'Complete home improvement solutions',
    features: [
      'Room additions',
      'Flooring installation',
      'Window & door replacement',
      'Siding installation',
      'Deck & patio construction',
      'Interior & exterior painting'
    ],
    details: 'As a full-service contractor, we can handle any home improvement project from start to finish, ensuring quality results every time.'
  },
  {
    title: 'Roofing Services',
    image: '/roof.jpg',
    description: 'Complete roofing solutions for your home',
    features: [
      'Complete roof replacement',
      'Roof repair and maintenance',
      'Storm damage assessment',
      'Insurance claim assistance',
      'Leak detection and repair',
      'Gutter installation'
    ],
    details: 'Our roofing experts have over 15 years of experience working with all types of roofing materials including asphalt shingles, metal roofing, tile, and flat roofs.'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive Home Improvement Solutions</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to complete home renovations, Shakcon Properties provides comprehensive 
            services to meet all your home improvement needs. Our experienced team delivers quality 
            craftsmanship on every project.
          </p>
        </div>

        {/* Detailed Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                <p className="text-gray-700 mb-6">{service.details}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                    Get Free Quote →
                  </button>
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={600} 
                  height={400} 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Shakcon Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Full protection and peace of mind on every project</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Completion</h3>
              <p className="text-gray-600">We respect your time and stick to our schedules</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent quotes with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Backed by comprehensive warranties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Proudly Serving Central Florida</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Leesburg</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Orlando</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Winter Park</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">The Villages</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Mount Dora</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Fruitland Park</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Eustis</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Clermont</span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Lake Mary</span>
          </div>
          <p className="text-lg text-gray-300 mb-8">And all surrounding areas within 50 miles</p>
          <a href="tel:3526937691" className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
            <span className="text-2xl">📞</span>
            Call for Service: (352) 693-7691
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Get Started?</h2>
          <p className="text-xl text-gray-800 mb-8">
            Contact us today for a free consultation and estimate on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Estimate
              </button>
            </Link>
            <Link href="/projects">
              <button className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}