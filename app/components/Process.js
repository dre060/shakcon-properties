// app/components/Process.js
export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Free Consultation',
      description: 'We assess your needs and provide honest recommendations'
    },
    {
      number: '2',
      title: 'Detailed Estimate',
      description: 'Transparent pricing with no hidden fees or surprises'
    },
    {
      number: '3',
      title: 'Quality Work',
      description: 'Expert craftsmanship with premium materials'
    },
    {
      number: '4',
      title: 'Final Inspection',
      description: 'We ensure everything meets our high standards'
    }
  ];

  return (
    <section className="section-padding bg-dark">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Simple Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}