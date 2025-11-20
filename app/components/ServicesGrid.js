// app/components/ServicesGrid.js
import Image from 'next/image';

export default function ServicesGrid() {
  const services = [
    {
      title: 'Kitchen & Bath Remodeling',
      description: 'Complete kitchen and bathroom transformations with expert craftsmanship',
      image: '/flooring.jpg',
      features: ['Custom Cabinets', 'Granite Countertops', 'Tile Installation', 'Fixture Upgrades']
    },
    {
      title: 'Flooring & Interior',
      description: 'Tile, wood, laminate and more - expert installation & repairs',
      image: '/flooring.jpg',
      features: ['Hardwood Flooring', 'Tile Installation', 'Laminate & Vinyl', 'Floor Refinishing']
    },
    {
      title: '203k Renovation Services',
      description: 'FHA 203k certified contractor - we handle all renovation financing requirements',
      image: '/restoration.jpg',
      features: ['203k Loan Consultation', 'Complete Renovations', 'Code Compliance', 'Streamlined & Standard 203k']
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={120} 
                  height={120} 
                  className="rounded-full object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="text-xs text-gray-500 space-y-1">
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
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Kitchen Remodeling</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Bathroom Remodeling</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Window & Door Replacement</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Siding Installation</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm">Deck & Patio Construction</span>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md text-sm font-semibold">
              🏆 203k Certified Contractor
            </span>
            <a 
              href="/financing" 
              className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md text-sm hover:bg-yellow-500 transition-colors duration-300 font-semibold"
            >
              💳 Financing Available
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}