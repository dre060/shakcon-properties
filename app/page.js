'use client';

import Image from 'next/image';
import './globals.css';

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        <Image
          src="/hero.jpg"
          alt="Hero image of modern home"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4 z-10">
          <h1 className="text-5xl font-bold mb-2 tracking-wide">SHAKCON <span className="text-yellow-400">PROPERTIES</span></h1>
          <p className="text-xl mb-4">For All Your Home Restoration Needs</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition duration-300">
            GET A FREE ESTIMATE
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="mb-4">
            <strong>Shakcon Properties</strong> is a Florida-licensed and certified residential contractor dedicated to quality craftsmanship, integrity, and client satisfaction. With years of hands-on experience in roofing, remodeling, and property restoration, we bring your vision to life.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src="/file.png" alt="cert1" width={50} height={50} />
            <Image src="/globe.png" alt="cert2" width={50} height={50} />
            <Image src="/next.png" alt="cert3" width={50} height={50} />
            <Image src="/vercel.png" alt="cert4" width={50} height={50} />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Licensed & Insured</li>
            <li>Veteran-Owned</li>
            <li>High Client Satisfaction (4.8★ Google Rating)</li>
            <li>Prompt Project Completion</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Image src="/roof.jpg" alt="Roofing" width={300} height={200} className="rounded-lg mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Roofing</h3>
              <p>Full residential roof repair, replacement, and inspections</p>
            </div>
            <div>
              <Image src="/kitchen.jpg" alt="Kitchen" width={300} height={200} className="rounded-lg mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Kitchen Remodeling</h3>
              <p>Upgrade your kitchen with modern designs</p>
            </div>
            <div>
              <Image src="/window.png" alt="Restoration" width={300} height={200} className="rounded-lg mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">Restoration Services</h3>
              <p>Storm damage? Fire or water cleanup? We've got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Anchor Section */}
      <section id="about" className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Shakcon Properties</h2>
        <p className="text-lg text-gray-700">
          We’re a veteran-owned Florida-certified residential contractor committed to transforming homes with quality, care, and craftsmanship.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="shadow-md bg-white rounded-md p-4">
              <Image src="/roof.jpg" alt="Roof Project" width={400} height={250} className="rounded mb-4" />
              <h3 className="font-semibold text-xl mb-2">Complete Roof Replacement</h3>
              <p>Winter Park, FL — Asphalt shingle upgrade with improved ventilation</p>
            </div>
            <div className="shadow-md bg-white rounded-md p-4">
              <Image src="/kitchen.jpg" alt="Kitchen Project" width={400} height={250} className="rounded mb-4" />
              <h3 className="font-semibold text-xl mb-2">Modern Kitchen Renovation</h3>
              <p>Orlando, FL — Custom cabinets, island buildout, and LED lighting</p>
            </div>
            <div className="shadow-md bg-white rounded-md p-4">
              <Image src="/hero.jpg" alt="Full Restoration" width={400} height={250} className="rounded mb-4" />
              <h3 className="font-semibold text-xl mb-2">Storm Damage Restoration</h3>
              <p>Leesburg, FL — Emergency roof, siding, and interior drywall repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-gray-700">Need a quote or have questions? Reach out — we’d love to help.</p>
        <a href="tel:3529335181" className="block text-lg font-semibold text-yellow-500 mb-2 hover:underline">
          📞 (352) 933-5181
        </a>
        <a href="mailto:info@shakcon.com" className="block text-lg font-semibold text-yellow-500 hover:underline">
          📧 info@shakcon.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Shakcon Properties. All rights reserved.</p>
      </footer>
    </div>
  );
}
