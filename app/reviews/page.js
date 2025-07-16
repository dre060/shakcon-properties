// app/reviews/page.js - Google Reviews Page
'use client';

import { TESTIMONIALS } from '../constants';

export default function ReviewsPage() {
  const allReviews = [
    {
      name: 'Annette Heathman',
      date: 'Sep 4, 2024',
      rating: 5,
      review: 'Andy completely transformed my garage with his amazing craftmanship. He built a custom closet containing floor to ceiling shelving across the entire back wall. The closet contains a hanging rod and shelving above it. The closet has bi-fold doors that Andy installed perfectly. Additionally, Andy installed... Read more',
      avatar: 'A',
      avatarColor: 'bg-orange-500'
    },
    {
      name: 'Rachel L',
      date: 'Aug 30, 2024',
      rating: 5,
      review: 'Andy has done many projects for me in my home and outdoors. He is prompt and professional. He is a man of his word!',
      avatar: 'R',
      avatarColor: 'bg-green-700'
    },
    {
      name: 'Billie Sweeney',
      date: 'Jul 22, 2024',
      rating: 5,
      review: 'I contracted Shakcon Properties to replace our whole house flooring. I was very satisfied with the finished job. All my issues were addressed swiftly and... Read more',
      avatar: 'B',
      avatarColor: 'bg-blue-600'
    },
    {
      name: 'Michael Johnson',
      date: 'Jun 15, 2024',
      rating: 5,
      review: 'Outstanding work on our roof replacement after storm damage. Andy and his team were professional, efficient, and cleaned up everything perfectly. Insurance company was impressed with the quality of work.',
      avatar: 'M',
      avatarColor: 'bg-purple-600'
    },
    {
      name: 'Lisa Rodriguez',
      date: 'May 8, 2024',
      rating: 5,
      review: 'Excellent kitchen renovation! Andy transformed our outdated kitchen into a modern, functional space. The attention to detail was incredible and the project was completed on time.',
      avatar: 'L',
      avatarColor: 'bg-pink-600'
    },
    {
      name: 'David Chen',
      date: 'Apr 22, 2024',
      rating: 5,
      review: 'Great experience with bathroom remodel. Professional work, fair pricing, and excellent communication throughout the project. Highly recommend Shakcon Properties!',
      avatar: 'D',
      avatarColor: 'bg-indigo-600'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 underline decoration-4">Reviews</h1>
          
          {/* Google Reviews Summary */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-xl font-semibold text-gray-700">6 Reviews</span>
            <span className="text-sm text-gray-500">powered by</span>
            <span className="text-blue-600 font-bold">Google</span>
          </div>

          <button className="bg-white border-2 border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            Add review
          </button>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Review Content */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">{review.review}</p>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Date */}
                <p className="text-gray-500 text-sm mb-6">{review.date}</p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-black mb-8">
            Experience the quality and professionalism that our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:3526937691"
              className="bg-black text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Call (352) 693-7691
            </a>
            <a 
              href="/contact"
              className="bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews Link */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Leave Us a Review</h3>
          <p className="text-gray-600 mb-6">
            Had a great experience with Shakcon Properties? We'd love to hear about it!
          </p>
          <a 
            href="https://www.google.com/search?q=shakcon+properties+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Write a Google Review
          </a>
        </div>
      </section>
    </main>
  );
}