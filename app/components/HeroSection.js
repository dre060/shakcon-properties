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
        className="z-0 kenburns"
        priority
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
      
      {/* Floating gold particles */}
      {[8, 18, 27, 36, 45, 55, 63, 72, 81, 90].map((left, i) => (
        <span
          key={left}
          aria-hidden="true"
          className="hero-particle"
          style={{ left: `${left}%`, width: `${4 + (i % 3) * 3}px`, height: `${4 + (i % 3) * 3}px`, animationDuration: `${7 + (i % 4) * 2}s`, animationDelay: `${(i * 0.9) % 6}s` }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="hero-anim hero-card relative bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-yellow-400/30 shadow-[0_0_60px_rgba(250,204,21,0.15)]">
            <div className="hero-sweep" aria-hidden="true" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" aria-label="Shakcon Properties">
              <span className="block" aria-hidden="true"><span className="hero-anim hero-letter" style={{ '--d': '0.00s' }}>S</span><span className="hero-anim hero-letter" style={{ '--d': '0.07s' }}>H</span><span className="hero-anim hero-letter" style={{ '--d': '0.14s' }}>A</span><span className="hero-anim hero-letter" style={{ '--d': '0.21s' }}>K</span><span className="hero-anim hero-letter" style={{ '--d': '0.28s' }}>C</span><span className="hero-anim hero-letter" style={{ '--d': '0.35s' }}>O</span><span className="hero-anim hero-letter" style={{ '--d': '0.42s' }}>N</span></span>
              <span className="hero-anim hero-word block mt-2" style={{ '--d': '0.55s' }} aria-hidden="true"><span className="text-yellow-400 shimmer-text">PROPERTIES</span></span>
            </h1>
            <p className="hero-anim text-lg md:text-2xl lg:text-3xl mb-3 font-semibold" style={{ '--d': '0.9s' }}>
              Insurance Restoration • Water Mitigation • Reconstruction
            </p>
            <p className="hero-anim text-sm md:text-base text-gray-200 mb-8" style={{ '--d': '1.05s' }}>
              Florida Certified Residential Contractor — CRC1334828
            </p>
            <div className="hero-anim flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ '--d': '1.2s' }}>
              <a
                href="/contact"
                className="btn btn-primary pulse-glow text-lg px-8 py-4 shadow-lg w-full sm:w-auto hover:scale-105 transition-transform duration-300"
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
            <div className="no-reveal mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <div className="hero-anim flex items-center gap-2" style={{ '--d': '1.35s' }}>
                <span className="text-yellow-400">✓</span>
                <span>IICRC Certified Firm</span>
              </div>
              <div className="hero-anim flex items-center gap-2" style={{ '--d': '1.47s' }}>
                <span className="text-yellow-400">✓</span>
                <span>Xactimate Level 1 &amp; 2 Trained</span>
              </div>
              <div className="hero-anim flex items-center gap-2" style={{ '--d': '1.59s' }}>
                <span className="text-yellow-400">✓</span>
                <span>Fully Insured</span>
              </div>
              <div className="hero-anim flex items-center gap-2" style={{ '--d': '1.71s' }}>
                <span className="text-yellow-400">✓</span>
                <span>Minority- &amp; Woman-Owned Florida Contractor</span>
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