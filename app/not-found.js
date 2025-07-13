// app/not-found.js
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
              Go Back Home
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="mt-12">
          <p className="text-gray-600 mb-2">Need immediate assistance?</p>
          <a href="tel:3529335181" className="text-yellow-500 font-bold text-lg hover:underline">
            📞 Call us: (352) 933-5181
          </a>
        </div>
      </div>
    </main>
  );
}