// app/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, CONTACT_INFO, SERVICE_AREAS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{COMPANY_INFO.description}</p>
            <div className="flex gap-3">
              <Image src="/fcrc.png" alt="FCRC" width={30} height={30} className="object-contain opacity-70" />
              <Image src="/203k.png" alt="203k Certified" width={30} height={30} className="object-contain opacity-70" />
              <Image src="/bbb.png" alt="BBB" width={30} height={30} className="object-contain opacity-70" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/financing" className="hover:text-white transition">Financing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Storm Damage Restoration</li>
              <li>General Contracting</li>
              <li>203k Renovation Specialist</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {SERVICE_AREAS.slice(0, 5).map((area) => (
                <li key={area}>{area}</li>
              ))}
              <li>And surrounding areas</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved. | Licensed & Insured | {COMPANY_INFO.license} | 203k Certified</p>
        </div>
      </div>
    </footer>
  );
}