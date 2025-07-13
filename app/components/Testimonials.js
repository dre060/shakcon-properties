// app/components/Testimonials.js
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">What Our Clients Say</h2>
        <div className="card-grid grid-cols-1 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
              <p className="font-semibold">- {testimonial.name}, {testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}