// app/components/ContactInfo.js
import { CONTACT_INFO, BUSINESS_HOURS, COMPANY_INFO } from '../constants';

export default function ContactInfo() {
  return (
    <section id="contact" className="section-padding bg-yellow">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Get In Touch</h2>
          <p className="mb-8 text-xl text-gray-800">Need a quote or have questions? Reach out — we'd love to help.</p>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center justify-center gap-3 btn btn-secondary">
                <span className="text-xl">📞</span>
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-center gap-3 btn bg-gray-100 text-black hover:bg-gray-200">
                <span className="text-xl">📧</span>
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2"><strong>Business Hours:</strong></p>
              <p className="text-gray-600 text-sm">{BUSINESS_HOURS.weekday}</p>
              <p className="text-gray-600 text-sm">{BUSINESS_HOURS.saturday}</p>
              <p className="text-gray-600 text-sm">{BUSINESS_HOURS.sunday}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600"><strong>License #:</strong> {COMPANY_INFO.license}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}