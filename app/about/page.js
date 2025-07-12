'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Shakcon Properties</h1>
      <p className="mb-4 text-lg">
        Shakcon Properties is a Florida-certified residential contractor proudly serving Leesburg, Orlando, and surrounding areas. We specialize in roofing, restoration, remodeling, and full-service home upgrades backed by years of experience and a passion for craftsmanship.
      </p>
      <p className="mb-4 text-lg">
        Our team believes in honesty, timeliness, and delivering top-tier results with transparency. We are fully licensed and insured, and we treat every home as if it were our own.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Image src="/roof.jpg" alt="Roof work" width={600} height={400} className="rounded-lg" />
        <Image src="/kitchen.jpg" alt="Remodeled kitchen" width={600} height={400} className="rounded-lg" />
      </div>
    </main>
  );
}
