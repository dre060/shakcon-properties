// app/components/ProjectGallery.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGallery({ showAll = false }) {
  const projects = [
    {
      image: '/roof.jpg',
      title: 'Complete Roof Replacement',
      location: 'Winter Park, FL'
    },
    {
      image: '/kitchen.jpg',
      title: 'Modern Kitchen Renovation',
      location: 'Orlando, FL'
    },
    {
      image: '/hero.jpg',
      title: 'Storm Damage Restoration',
      location: 'Leesburg, FL'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent work across Central Florida. Every project showcases our commitment to quality and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-8">
            <Link href="/projects">
              <button className="btn btn-primary">
                View All Projects →
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}