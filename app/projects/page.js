'use client';

import Image from 'next/image';

const projects = [
  { src: '/project1.jpg', alt: 'Custom home under construction' },
  { src: '/project2.jpg', alt: 'Modern luxury bathroom renovation' },
  { src: '/project3.jpg', alt: 'Double vanity and tile walk-in shower' },
  { src: '/project4.jpg', alt: 'Framing and block wall phase' },
  { src: '/project5.jpg', alt: 'Outdoor patio with TV and fireplace' },
  { src: '/project6.jpg', alt: 'Marble bathroom under renovation' },
  { src: '/project7.jpg', alt: 'Built-in cabinetry and flooring' },
  { src: '/project8.jpg', alt: 'Fully renovated bathroom with marble tile' },
  { src: '/project9.jpg', alt: 'Closet door installation' },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Recent Projects</h1>
      <p className="mb-10 text-lg text-center text-gray-700">
        Here are some of the projects that we've completed across central Florida. From complete new builds to luxurious renovations,
        Shakcon Properties delivers craftsmanship that lasts.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow">
            <Image
              src={project.src}
              alt={project.alt}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
