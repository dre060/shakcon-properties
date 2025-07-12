'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.jpg" alt="Shakcon Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl text-gray-800">Shakcon Properties</span>
          </div>
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
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

        {/* Menu Links */}
        <div className={`md:flex gap-6 text-gray-800 font-medium ${isOpen ? 'block mt-4' : 'hidden'} md:block`}>
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="#about" className="hover:text-yellow-500">About Us</Link>
          <Link href="#projects" className="hover:text-yellow-500">Projects</Link>
          <Link href="#contact" className="hover:text-yellow-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
