const stats = [
  { value: '40+', label: 'Export Countries' },
  { value: '12', label: 'Distribution Hubs' },
  { value: '24/7', label: 'Logistics Support' },
  { value: '500k', label: 'Gallons Monthly Capacity' },
];

export default function GlobalReach() {
  return (
    <section data-testid="global-reach-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            data-testid="global-reach-heading"
            className="font-headline text-4xl md:text-5xl font-bold text-dune-primary mb-6"
          >
            Our Global Reach
          </h2>
          <p className="text-dune-on-surface-variant max-w-2xl mx-auto">
            Strategically headquartered in the heart of global trade, Dune Lubricants maintains 
            an expansive distribution network serving over 40 countries.
          </p>
        </div>

        {/* Map Area */}
        <div className="relative h-[400px] md:h-[600px] w-full bg-dune-surface-container overflow-hidden group">
          <img
            alt="Dubai Skyline"
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSjtj-G1y_viYKjJe04DnbU4uUJzPcHZ_EoM9KsRrHQQT-mlhrvaW56-g7BtJlwp4gYwJS9vACSchttGDXU4EkFyZia0GB24VqN2yR6wFlKjsoJypNad59r06KTTQ6C9gUfZRN_jljiMOqhf4Xrg21giVA38qUxYSbvEVzUNzw_aTiE-B75vMRjxov7uyJRQLyCd5MMu9HhSaIoPFV3EJPmrsaeYUbQYJx7q8cUCQyydQJl17dnZ2_SFcDJXg2jhidqgbMebrLg"
          />

          {/* HQ Point */}
          <div className="absolute inset-0 bg-dune-primary/5 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl max-h-[400px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-8 bg-dune-gold/20 rounded-full animate-ping-slow" />
                  <div className="w-4 h-4 bg-dune-gold rounded-full relative z-10 shadow-lg" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-dune-primary text-white px-6 py-3 whitespace-nowrap shadow-2xl">
                    <p className="font-headline text-sm font-bold tracking-widest">GLOBAL HQ: DUBAI, UAE</p>
                    <p className="text-[10px] text-white/60">Logistics Hub &amp; R&amp;D Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 right-4 md:right-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white/80 backdrop-blur-md p-4 md:p-8 border-l-4 border-dune-gold"
              >
                <p className="font-headline text-2xl md:text-3xl font-black text-dune-primary">
                  {stat.value}
                </p>
                <p className="font-label text-[10px] uppercase tracking-widest text-dune-on-surface-variant">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
