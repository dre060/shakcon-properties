// app/components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <Image 
                src="/logo.jpg" 
                alt="Shakcon Logo" 
                width={70} 
                height={70} 
                className="rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300" 
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                  Shakcon Properties
                </span>
                <span className="text-xs text-gray-600 hidden sm:block">Licensed • Insured • Florida Certified</span>
                <span className="text-xs text-gray-500 hidden sm:block">License #: CRC1334828</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300">
              About
            </Link>
            <Link href="/services" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300">
              Services
            </Link>
            <Link href="/projects" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300">
              Contact
            </Link>
            <a 
              href="tel:3526937691" 
              className="btn btn-primary text-sm shadow-md"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            Services
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            Projects
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            Contact
          </Link>
          <a 
            href="tel:3526937691" 
            className="block text-center btn btn-primary mt-4"
          >
            📞 Call Now: (352) 693-7691
          </a>
        </div>
      </div>
    </nav>
  );
}