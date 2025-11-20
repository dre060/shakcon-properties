// app/projects/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { 
    src: '/project1.jpg', 
    alt: 'Custom home under construction',
    category: 'New Construction',
    title: 'Modern Custom Home Build',
    location: 'The Villages, FL'
  },
  { 
    src: '/project2.jpg', 
    alt: 'Modern luxury bathroom renovation',
    category: 'Bathroom Remodel',
    title: 'Spa-Inspired Master Bath',
    location: 'The Villages, FL'
  },
  { 
    src: '/project3.jpg', 
    alt: 'Double vanity and tile walk-in shower',
    category: 'Bathroom Remodel',
    title: 'Double Vanity Installation',
    location: 'The Villages, FL'
  },
  { 
    src: '/project4.jpg', 
    alt: 'Framing and block wall phase',
    category: 'New Construction',
    title: 'Commercial Building Frame',
    location: 'The Villages, FL'
  },
  { 
    src: '/project5.jpg', 
    alt: 'Outdoor patio with TV and fireplace',
    category: 'Outdoor Living',
    title: 'Entertainment Patio Design',
    location: 'The Villages, FL'
  },
  { 
    src: '/project6.jpg', 
    alt: 'Marble bathroom under renovation',
    category: 'Bathroom Remodel',
    title: 'Luxury Marble Installation',
    location: 'The Villages, FL'
  },
  { 
    src: '/project7.jpg', 
    alt: 'Built-in cabinetry and flooring',
    category: 'Interior Remodel',
    title: 'Custom Cabinet & Flooring',
    location: 'The Villages, FL'
  },
  { 
    src: '/project8.jpg', 
    alt: 'Fully renovated bathroom with marble tile',
    category: 'Bathroom Remodel',
    title: 'Complete Bath Transformation',
    location: 'The Villages, FL'
  },
  { 
    src: '/project9.jpg', 
    alt: 'Closet door installation',
    category: 'Interior Remodel',
    title: 'Custom Closet System',
    location: 'The Villages, FL'
  },
  { 
    src: '/Project10.jpg', 
    alt: 'Professional bathroom tile installation in progress',
    category: 'Bathroom Remodel',
    title: 'Precision Tile Installation',
    location: 'The Villages, FL'
  },
  { 
    src: '/Project11.jpg', 
    alt: 'Luxury bathroom with subway tiles and custom bench',
    category: 'Bathroom Remodel',
    title: 'Spa-Style Bathroom Renovation',
    location: 'The Villages, FL'
  },
  { 
    src: '/project12.jpg', 
    alt: 'Custom walk-in closet with organized storage systems',
    category: 'Interior Remodel',
    title: 'Master Closet Organization',
    location: 'The Villages, FL'
  },
  { 
    src: '/project13.jpg', 
    alt: 'Modern walk-in shower with glass enclosure',
    category: 'Bathroom Remodel',
    title: 'Contemporary Shower Installation',
    location: 'The Villages, FL'
  },
  { 
    src: '/project14.jpg', 
    alt: 'Elegant glass shower with black hardware fixtures',
    category: 'Bathroom Remodel',
    title: 'Frameless Glass Shower Upgrade',
    location: 'The Villages, FL'
  },
  { 
    src: '/project15.jpg', 
    alt: 'Completed single family home with professional landscaping',
    category: 'New Construction',
    title: 'Custom Home Build',
    location: 'The Villages, FL'
  },
  { 
    src: '/project16.jpg', 
    alt: 'Bright interior room with tile flooring and corner windows',
    category: 'Interior Remodel',
    title: 'Open Concept Living Space',
    location: 'The Villages, FL'
  },
  { 
    src: '/project17.jpg', 
    alt: 'Luxury bathroom with marble-look tile and mosaic flooring',
    category: 'Bathroom Remodel',
    title: 'Marble-Inspired Bath Design',
    location: 'The Villages, FL'
  },
  { 
    src: '/project18.jpg', 
    alt: 'Complete bathroom renovation with premium finishes',
    category: 'Bathroom Remodel',
    title: 'Premium Bathroom Transformation',
    location: 'The Villages, FL'
  },
];

const categories = ['All', 'New Construction', 'Bathroom Remodel', 'Interior Remodel', 'Outdoor Living'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Portfolio</h1>
          <p className="text-xl text-gray-300">Quality Craftsmanship in Every Project</p>
          <div className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
            🏆 203k Certified Contractor
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are some of the projects that we've completed across Central Florida. From complete new builds to luxurious renovations,
            Shakcon Properties delivers craftsmanship that lasts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={600}
                height={400}
                className="object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-xl mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gray-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">300+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <p className="text-gray-300">Licensed & Insured</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every great project starts with a conversation. Let's discuss your vision and bring it to life.
          </p>
          <Link href="/contact">
            <button className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Your Free Estimate
            </button>
          </Link>
        </div>
      </section>

      {/* Modal for selected project */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <Image
              src={selectedProject.src}
              alt={selectedProject.alt}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full mb-4">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.location}</p>
              <p className="text-gray-700">{selectedProject.alt}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}