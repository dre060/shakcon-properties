// app/cabinets/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cabinetCollections = [
  {
    name: 'Mercury Collection',
    description: 'Classic shaker-style cabinets with clean lines and timeless appeal',
    styles: [
      {
        name: 'Mercury White',
        code: 'MW-01',
        color: '#F5F5F5',
        description: 'Bright, clean white finish perfect for modern kitchens',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Full overlay doors']
      },
      {
        name: 'Mercury Grey',
        code: 'MG-02',
        color: '#9E9E9E',
        description: 'Sophisticated grey that complements any design style',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Full overlay doors']
      },
      {
        name: 'Mercury Cherry',
        code: 'MC-03',
        color: '#4A2C2A',
        description: 'Rich, warm cherry tones for a traditional look',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Full overlay doors']
      },
      {
        name: 'Mercury Espresso',
        code: 'ME-04',
        color: '#3C2415',
        description: 'Deep espresso finish for bold, dramatic kitchens',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Full overlay doors']
      }
    ]
  },
  {
    name: 'Venus Collection',
    description: 'Elegant raised panel designs with refined craftsmanship',
    styles: [
      {
        name: 'Venus Ivory',
        code: 'VI-05',
        color: '#FFFFF0',
        description: 'Warm ivory tones with subtle elegance',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Raised panel doors']
      },
      {
        name: 'Venus Truffle',
        code: 'VT-06',
        color: '#4E3B31',
        description: 'Rich truffle brown with sophisticated appeal',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Raised panel doors']
      }
    ]
  },
  {
    name: 'Jupiter Collection',
    description: 'Contemporary styling with premium finishes',
    styles: [
      {
        name: 'Jupiter Ice',
        code: 'JI-07',
        color: '#E8E8E8',
        description: 'Cool, crisp ice white for a fresh modern look',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Shaker style doors']
      }
    ]
  },
  {
    name: 'Athena Collection',
    description: 'Luxurious finishes with attention to detail',
    styles: [
      {
        name: 'Athena Desert',
        code: 'AD-10',
        color: '#5D4E46',
        description: 'Warm desert tones with natural beauty',
        features: ['Soft-close hinges', 'Dovetail drawers', 'Detailed molding']
      }
    ]
  }
];

const features = [
  {
    icon: '🏭',
    title: 'Premium Quality',
    description: 'All-wood construction with furniture-grade finishes'
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    description: 'Quick turnaround times to keep your project on schedule'
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    description: 'Direct pricing without the showroom markup'
  },
  {
    icon: '🔧',
    title: 'Professional Installation',
    description: 'Expert installation by our certified contractors'
  },
  {
    icon: '📐',
    title: 'Custom Configurations',
    description: 'Wide range of sizes and configurations available'
  },
  {
    icon: '✅',
    title: 'Warranty Included',
    description: 'Backed by manufacturer warranty for peace of mind'
  }
];

export default function CabinetsPage() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [activeCollection, setActiveCollection] = useState('all');

  const filteredCollections = activeCollection === 'all' 
    ? cabinetCollections 
    : cabinetCollections.filter(c => c.name.toLowerCase().includes(activeCollection.toLowerCase()));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/kitchen.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🆕 NEW SERVICE OFFERING
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Kitchen
            <span className="text-yellow-400 block mt-2">Cabinets</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your kitchen with our selection of high-quality cabinetry. 
            Available exclusively through Shakcon Properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:3526937691"
              className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              📞 Call for Pricing
            </a>
            <a 
              href="#collections"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg"
            >
              View Collections
            </a>
          </div>
        </div>
      </section>

      {/* Showroom Coming Soon Banner */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 py-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-3xl">🏪</span>
            <p className="text-xl md:text-2xl font-bold text-black">
              Showroom Coming Soon!
            </p>
            <span className="text-black text-lg">— Visit us to see samples in person</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Buy Cabinets Through Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skip the big box stores. Get premium cabinets at better prices with professional guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet Collections */}
      <section id="collections" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Cabinet Collections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our curated selection of premium cabinet styles. Each collection offers 
              exceptional quality and timeless design.
            </p>
            
            {/* Collection Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveCollection('all')}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCollection === 'all'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Collections
              </button>
              {cabinetCollections.map((collection) => (
                <button
                  key={collection.name}
                  onClick={() => setActiveCollection(collection.name.split(' ')[0].toLowerCase())}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCollection === collection.name.split(' ')[0].toLowerCase()
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {collection.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Collections Grid */}
          {filteredCollections.map((collection, collectionIndex) => (
            <div key={collectionIndex} className="mb-16">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{collection.name}</h3>
                <p className="text-gray-600">{collection.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {collection.styles.map((style, styleIndex) => (
                  <div
                    key={styleIndex}
                    onClick={() => setSelectedStyle(selectedStyle?.code === style.code ? null : style)}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                      selectedStyle?.code === style.code ? 'ring-4 ring-yellow-400' : ''
                    }`}
                  >
                    {/* Color Swatch / Door Preview */}
                    <div 
                      className="h-48 relative flex items-center justify-center"
                      style={{ backgroundColor: style.color }}
                    >
                      {/* Simulated cabinet door design */}
                      <div 
                        className="w-32 h-40 rounded-lg shadow-inner border-4"
                        style={{ 
                          borderColor: style.color === '#F5F5F5' || style.color === '#FFFFF0' || style.color === '#E8E8E8' 
                            ? '#ddd' 
                            : 'rgba(255,255,255,0.2)',
                          backgroundColor: style.color
                        }}
                      >
                        <div 
                          className="m-2 h-[calc(100%-16px)] rounded border-2"
                          style={{ 
                            borderColor: style.color === '#F5F5F5' || style.color === '#FFFFF0' || style.color === '#E8E8E8'
                              ? '#ccc' 
                              : 'rgba(255,255,255,0.15)'
                          }}
                        ></div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {style.code}
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-5">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{style.name}</h4>
                      <p className="text-sm text-gray-600 mb-4">{style.description}</p>
                      
                      {selectedStyle?.code === style.code && (
                        <div className="border-t pt-4 mt-4 animate-fade-in">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Features:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {style.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="text-yellow-500">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-center text-sm text-gray-500">
                          Tap for details • Call for pricing
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600">Simple process from selection to installation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Tell us about your project and kitchen layout', icon: '💬' },
              { step: '2', title: 'Selection', desc: 'Choose your cabinet style, color, and configuration', icon: '🎨' },
              { step: '3', title: 'Quote', desc: 'Receive competitive pricing with no hidden fees', icon: '📋' },
              { step: '4', title: 'Installation', desc: 'Professional installation by our expert team', icon: '🔧' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-yellow-400"></div>
                )}
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl relative z-10">
                  {item.icon}
                </div>
                <div className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center mx-auto -mt-3 mb-3 text-xs font-bold relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet Types Available */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Kitchen Solutions</h2>
            <p className="text-gray-400">We offer a full range of cabinet types for your kitchen</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Base Cabinets',
              'Wall Cabinets',
              'Tall Cabinets',
              'Corner Cabinets',
              'Drawer Units',
              'Lazy Susans',
              'Sink Bases',
              'Pantry Units',
              'Island Cabinets',
              'Glass Doors',
              'Open Shelving',
              'Crown Molding'
            ].map((type, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <p className="text-sm font-medium">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Upgrade Your Kitchen?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our team will help you 
            find the perfect cabinets for your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:3526937691"
              className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (352) 693-7691
            </a>
            <Link href="/contact">
              <button className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Quote Online
              </button>
            </Link>
          </div>
          <p className="mt-6 text-black/60 text-sm">
            Free estimates • Professional installation • Financing available
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Do you offer installation services?',
                a: 'Yes! As a licensed contractor, we provide professional cabinet installation as part of our services. Our experienced team ensures perfect fit and finish.'
              },
              {
                q: 'How long does delivery take?',
                a: 'Most cabinet orders are delivered within 2-4 weeks depending on the style and configuration. We\'ll provide an exact timeline with your quote.'
              },
              {
                q: 'Can I see samples before ordering?',
                a: 'Absolutely! We have door samples available and our showroom is coming soon. Call us to schedule a consultation.'
              },
              {
                q: 'Do you offer financing?',
                a: 'Yes, we offer flexible financing options for your kitchen project. Ask about our 0% APR promotional financing.'
              },
              {
                q: 'What\'s included in the price?',
                a: 'Our quotes include cabinets, hardware, and delivery. Installation is quoted separately based on your kitchen layout.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}