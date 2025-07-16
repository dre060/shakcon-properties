// app/components/HeroSection.js
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Hero image of modern home"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="block">SHAKCON</span>
              <span className="text-yellow-400 block mt-2">PROPERTIES</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 animate-slide-up">
              For All Your Home Restoration Needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <a
                href="/contact"
                className="btn btn-primary text-lg px-8 py-4 shadow-lg w-full sm:w-auto"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:3526937691"
                className="btn bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-black px-8 py-4 w-full sm:w-auto"
              >
                📞 Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span>4.8★ Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">🏠</span>
                <span>Local & Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}