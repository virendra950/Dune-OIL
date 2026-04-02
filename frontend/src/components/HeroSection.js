export default function HeroSection() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dune-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dune-primary via-dune-primary/80 to-transparent z-10" />
        <img
          alt="High precision industrial gear"
          className="w-full h-full object-cover grayscale contrast-125 opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxDuNFvYDAm13f9j3Ga6P8mCCBXKivUoTWR_XDvh8F6jHWqzNSt9-3QCMXvlYPff8eXusswSAwFxLhAS32qXCrnY3EUbW8g2OqWbVg8gmaHKOq_8SIPe7hiqrGCPGQoC66iF-InLibLYID5tDPzG0jrLfSeMWsY6i5a9XTEjn1YVGvvCPGMOvdkj-MNYAadkqv7_-bDf8XZdIrJ6H5khGHxn7DY7irpo0e1UnN3yRAadK1-E-37c01IMOGFW_q3cDRF-LXNwx_Fw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 px-6 md:px-12 max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 lg:col-span-7">
          <span className="inline-block text-dune-gold font-label uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-up">
            Pinnacle of Performance
          </span>
          <h1
            data-testid="hero-heading"
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tighter mb-8 animate-fade-in-up-delay-1"
          >
            Engineering <br />
            <span className="text-dune-gold">Excellence</span> <br />
            in Lubrication.
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12 animate-fade-in-up-delay-2">
            Harnessing fluid dynamics and molecular precision to protect the world's most demanding machinery. 
            Dune Lubricants provides the ultimate barrier against friction.
          </p>
          <div className="flex flex-wrap gap-6 animate-fade-in-up-delay-3">
            <button
              data-testid="hero-explore-btn"
              className="px-10 py-5 bg-dune-gold text-dune-primary font-headline font-bold text-sm uppercase tracking-widest shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            >
              Explore Technical Data
            </button>
            <button
              data-testid="hero-process-btn"
              className="px-10 py-5 border border-white/20 text-white font-headline font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
            >
              View Our Process
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        <span className="text-white/40 font-label uppercase tracking-widest text-[10px]">
          Industrial Strength
        </span>
      </div>
    </section>
  );
}
