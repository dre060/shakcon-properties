'use client';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-lg mb-10 text-center text-gray-700">
        Whether you're looking to start a new project, request a quote, or simply ask a question —
        we’re here to help. Reach out to Shakcon Properties today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-700">📞 (352) 693-7691</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-700">📧 info@shakcon.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Service Area</h2>
            <p className="text-gray-700">Leesburg • Fruitland Park • The Villages • and surrounding areas</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
              placeholder="Tell us more about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
