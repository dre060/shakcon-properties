// app/components/ServicesGrid.js
import Image from 'next/image';

export default function ServicesGrid() {
  const services = [
    {
      title: 'Roofing Excellence',
      description: 'Full residential roof repair, replacement, and inspections. We work with all major insurance companies.',
      image: '/roof.jpg',
      features: ['Asphalt Shingles', 'Metal Roofing', 'Tile & Slate', 'Emergency Repairs']
    },
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen with modern designs, custom cabinets, and premium finishes.',
      image: '/kitchen.jpg',
      features: ['Custom Cabinetry', 'Granite/Quartz Countertops', 'Island Installation', 'Modern Appliances']
    },
    {
      title: 'Restoration Services',
      description: 'Storm damage? Fire or water cleanup? We provide 24/7 emergency restoration services.',
      image: '/window.png',
      features: ['Water Damage Restoration', 'Storm Damage Repair', 'Fire Damage Cleanup', 'Mold Remediation']
    }
  ];

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What We Do Best</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to complete home transformations, we handle every project with expertise and attention to detail. Our comprehensive services cover all your home improvement needs.
          </p>
        </div>
        
        <div className="card-grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="card">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-500 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold mb-6">We Also Specialize In:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Bathroom Remodeling</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Flooring Installation</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Window & Door Replacement</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Siding Installation</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Deck & Patio Construction</span>
          </div>
        </div>
      </div>
    </section>
  );
}