// app/components/CTA.js
import Link from 'next/link';
import { CONTACT_INFO } from '../constants';

export default function CTA({ 
  title = "Ready to Start Your Project?", 
  subtitle = "Get your free estimate today. No obligations, just honest advice.",
  bgColor = "bg-gradient-to-br from-gray-900 to-black",
  showPhone = true,
  showEmail = true 
}) {
  return (
    <section className={`section-padding ${bgColor} text-white`}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="mb-10 text-xl">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {showPhone && (
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`} 
                className="btn btn-primary flex items-center gap-3 w-full sm:w-auto"
              >
                <span className="text-xl">📞</span>
                Call Now: {CONTACT_INFO.phone}
              </a>
            )}
            {showEmail && (
              <Link href="/contact">
                <button className="btn bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
                  Get Free Estimate
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}