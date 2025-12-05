// app/about/page.js
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({});
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🏠" },
    { number: "15+", label: "Years Experience", icon: "📅" },
    { number: "4.8★", label: "Google Rating", icon: "⭐" },
    { number: "24/7", label: "Emergency Service", icon: "🚨" }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe in honest communication, transparent pricing, and doing what we say we'll do.",
      icon: "🤝"
    },
    {
      title: "Quality",
      description: "Every project is completed to the highest standards using premium materials and proven techniques.",
      icon: "💎"
    },
    {
      title: "Service",
      description: "Our clients come first. We're committed to exceeding expectations on every project.",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "We stay current with the latest building techniques and technologies to serve you better.",
      icon: "🚀"
    }
  ];

  const certifications = [
    {
      title: "203k Renovation Specialist",
      description: "FHA 203k certified for renovation financing",
      icon: "/203k.png",
      isImage: true
    },
    {
      title: "EPA Lead-Safe Certified Firm",
      description: "Certified for safe renovation practices",
      icon: "/lead-safe.png",
      isImage: true
    },
    {
      title: "Better Business Bureau Accredited",
      description: "Accredited Since 03/10/2025",
      isBBB: true,
      bbbLink: "https://www.bbb.org/us/fl/fruitland-park/profile/remodel-contractors/shakcon-properties-llc-0733-235970271/#sealclick",
      bbbSeal: "https://seal-centralflorida.bbb.org/seals/blue-seal-200-42-bbb-235970271.png"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="About Shakcon Properties"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">About Shakcon Properties</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up">
            A Florida-certified residential contractor dedicated to transforming homes 
            with quality craftsmanship, integrity, and exceptional service throughout Central Florida.
          </p>
          <div className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
            🏆 203k Certified Contractor
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section 
        id="story-section"
        data-animate
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${
          isVisible['story-section'] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Company</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Shakcon Properties is a Florida-certified residential contractor committed to providing 
                  high-quality home improvement and restoration services throughout Central Florida.
                </p>
                <p>
                  Our experienced team brings decades of combined expertise to every project, from routine 
                  maintenance and repairs to complete home renovations. We specialize in delivering exceptional 
                  results that enhance both the beauty and value of your property.
                </p>
                <p>
                  As a 203k certified contractor, we help homebuyers finance their renovation projects through 
                  FHA 203k loans, making home ownership and improvement more accessible.
                </p>
                <p>
                  Today, we're proud to be a Florida-certified residential contractor with hundreds of 
                  successful projects under our belt. From emergency storm repairs to complete home 
                  renovations, we treat every project with the care and attention it deserves.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  🏆 Licensed & Insured
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  ⭐ 4.8 Star Rating
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                  🏠 203k Certified
                </span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image 
                src="/kitchen.jpg" 
                alt="Kitchen remodeling" 
                width={400} 
                height={500}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        id="values-section"
        data-animate
        className={`py-20 px-6 bg-white transition-all duration-1000 ${
          isVisible['values-section'] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from the initial consultation to project completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        id="certifications-section"
        data-animate
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${
          isVisible['certifications-section'] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Licenses & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain all required licenses and certifications to ensure your project is completed safely and legally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white p-6 rounded-2xl mb-4 group-hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center min-h-[120px]">
                  {cert.isBBB ? (
                    <a 
                      href={cert.bbbLink}
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                    >
                      <img 
                        src={cert.bbbSeal}
                        alt="Shakcon Properties LLC BBB Business Review"
                        style={{ border: 0 }}
                        className="mx-auto group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <Image 
                      src={cert.icon}
                      alt={cert.title}
                      width={80}
                      height={80}
                      className="mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Let's discuss your project and see how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:3526937691"
              className="bg-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Call (352) 693-7691
            </a>
            <a 
              href="/contact"
              className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}