// src/components/HeroSection.js
export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="bg-black/50 p-8 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shakcon Properties
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          For All Your Home Restoration Needs
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Get a Free Estimate
        </a>
      </div>
    </section>
  );
}
