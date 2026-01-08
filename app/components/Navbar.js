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
          <div className="hidden lg:flex items-center gap-5">
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
            <Link href="/cabinets" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 flex items-center gap-1">
              Cabinets
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
            </Link>
            <Link href="/contact" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300">
              Contact
            </Link>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
              <a 
                href="https://youtube.com/@shakconproperties" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors duration-300 hover:scale-110 transform"
                aria-label="YouTube"
                title="Watch our videos on YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1DG8x132zd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/shakconproperties" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors duration-300 hover:scale-110 transform"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <a 
              href="tel:3526937691" 
              className="btn btn-primary text-sm shadow-md"
            >
              Call Now
            </a>
          </div>

          {/* Mobile - Social + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Social Icons */}
            <a 
              href="https://youtube.com/@shakconproperties" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
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
      <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
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
          <Link href="/cabinets" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            Cabinets
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors duration-300 py-2">
            Contact
          </Link>
          
          {/* Mobile Social Links */}
          <div className="flex items-center gap-4 py-3 border-t border-gray-200">
            <span className="text-sm text-gray-600">Follow Us:</span>
            <a 
              href="https://youtube.com/@shakconproperties" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/share/1DG8x132zd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/shakconproperties" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          
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