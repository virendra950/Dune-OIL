export default function CallToAction() {
  return (
    <section data-testid="cta-section" className="py-20 md:py-32 px-6 md:px-12 bg-dune-primary text-white overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dune-gold/10 -skew-x-12 translate-x-1/2" />

      <div className="max-w-[1920px] mx-auto relative z-10 flex flex-col items-center text-center">
        <h2
          data-testid="cta-heading"
          className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tighter"
        >
          Ready to Elevate Your Operations?
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12">
          Consult with our engineering experts to find the precision lubricant formulated 
          for your specific application requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            data-testid="request-quote-btn"
            className="px-8 md:px-12 py-5 md:py-6 bg-dune-gold text-dune-primary font-headline font-black uppercase tracking-widest hover:scale-105 transition-transform duration-300"
          >
            Request a Quote
          </button>
          <button
            data-testid="download-brochure-btn"
            className="px-8 md:px-12 py-5 md:py-6 border border-white/20 font-headline font-black uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
