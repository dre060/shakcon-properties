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

  const teamMembers = [
    {
      name: "Mike Johnson",
      role: "Founder & Lead Contractor",
      experience: "15+ years",
      specialties: ["Roofing", "Project Management"],
      description: "Military veteran with extensive construction experience across residential and commercial projects.",
      image: "/team-member-1.jpg"
    },
    {
      name: "Sarah Rodriguez",
      role: "Design Specialist",
      experience: "8+ years", 
      specialties: ["Kitchen Design", "Interior Renovation"],
      description: "Certified interior designer specializing in functional and beautiful home transformations.",
      image: "/team-member-2.jpg"
    },
    {
      name: "David Chen",
      role: "Project Supervisor",
      experience: "12+ years",
      specialties: ["Quality Control", "Customer Relations"],
      description: "Ensures every project meets our high standards for quality and customer satisfaction.",
      image: "/team-member-3.jpg"
    }
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
      title: "Florida Certified Residential Contractor",
      description: "Licensed and bonded by the State of Florida",
      icon: "/file.png"
    },
    {
      title: "EPA Lead-Safe Certified Firm",
      description: "Certified for safe renovation practices",
      icon: "/globe.png"
    },
    {
      title: "Better Business Bureau Accredited",
      description: "A+ rating with BBB",
      icon: "/vercel.png"
    },
    {
      title: "OSHA Safety Certified",
      description: "Committed to workplace safety standards",
      icon: "/next.png"
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
            A veteran-owned, Florida-certified residential contractor dedicated to transforming homes 
            with quality craftsmanship, integrity, and exceptional service throughout Central Florida.
          </p>
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

      {/* Our Story Section */}
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
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded by military veteran Mike Johnson, Shakcon Properties began with a simple mission: 
                  to provide honest, reliable home restoration services to families throughout Central Florida.
                </p>
                <p>
                  After serving our country for over a decade, Mike brought the same values of discipline, 
                  attention to detail, and commitment to excellence to the construction industry. What started 
                  as a one-man operation has grown into a trusted team of skilled professionals.
                </p>
                <p>
                  Today, we're proud to be a Florida-certified residential contractor with hundreds of 
                  successful projects under our belt. From emergency storm repairs to complete home 
                  renovations, we treat every project with the care and attention it deserves.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                  🇺🇸 Veteran-Owned
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                  🏆 Licensed & Insured
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  ⭐ 4.8 Star Rating
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image 
                  src="/roof.jpg" 
                  alt="Quality roofing work" 
                  width={300} 
                  height={400}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <Image 
                  src="/window.png" 
                  alt="Home restoration" 
                  width={300} 
                  height={300}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="pt-8">
                <Image 
                  src="/kitchen.jpg" 
                  alt="Kitchen remodeling" 
                  width={300} 
                  height={500}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
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

      {/* Team Section */}
      <section 
        id="team-section"
        data-animate
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 ${
          isVisible['team-section'] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled professionals bring decades of combined experience to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-gray-400">👨‍🔧</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        id="certifications-section"
        data-animate
        className={`py-20 px-6 bg-white transition-all duration-1000 ${
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
                <div className="bg-gray-50 p-6 rounded-2xl mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <Image 
                    src={cert.icon}
                    alt={cert.title}
                    width={80}
                    height={80}
                    className="mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
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