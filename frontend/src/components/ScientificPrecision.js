export default function ScientificPrecision() {
  return (
    <section id="about" data-testid="scientific-precision-section" className="py-20 md:py-32 bg-dune-surface-container-low overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-dune-gold/10 blur-3xl" />
            <img
              alt="Laboratory testing"
              className="relative z-10 w-full aspect-square object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG9rR2IAu5ADAeuvSsHZbbHE8aMW0BX_jtDOuP2gSr91Cg8eljaYkIgtHcMrQ9HgkNTfDme2gEDXXAFghN5FbCZpKp1OfaZJ45kO36IYc5YtOKEJseOTqjMjCuPKeD-uEAV4zne92i61WxBVB9tqG4aikTEkXxyLU-6uulwsLuuDkwJJ25HnGQj0kVIYvT1rx-4917Y2QFuNKJUAuqdsZDPWBkvAIjJb_3BUTBTg7Z1pLBuTDr0cwBr8dulCAjQ9XXbevpbx0pAw"
            />
            <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-12 p-6 md:p-8 bg-dune-primary text-white max-w-xs z-20">
              <p data-testid="friction-stat" className="font-headline text-3xl font-black mb-2">99.8%</p>
              <p className="font-label text-xs uppercase tracking-widest text-white/60">
                Friction Reduction Index In Controlled Testing
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <h2
              data-testid="scientific-heading"
              className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-dune-primary mb-10 leading-tight"
            >
              Mastering Friction Through <br />
              <span className="text-dune-secondary">Scientific Precision.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-headline text-xl font-bold text-dune-primary border-l-4 border-dune-gold pl-4">
                  Molecular Engineering
                </h4>
                <p className="text-dune-on-surface-variant text-base leading-relaxed">
                  We operate at the molecular level, designing carbon chains that offer unparalleled shear resistance 
                  and thermal stability under the most extreme operating conditions.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-headline text-xl font-bold text-dune-primary border-l-4 border-dune-gold pl-4">
                  Performance Validation
                </h4>
                <p className="text-dune-on-surface-variant text-base leading-relaxed">
                  Every batch undergoes rigorous ASTM standardized testing in our state-of-the-art facility 
                  to ensure consistency that engineering teams can trust implicitly.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12 md:mt-16 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-headline text-sm font-bold uppercase tracking-widest text-dune-primary">
                  ISO 9001:2015
                </span>
                <span className="text-[10px] text-dune-on-surface-variant uppercase">
                  Certified Quality Management
                </span>
              </div>
              <div className="w-px h-10 bg-dune-outline-variant" />
              <div className="flex flex-col">
                <span className="font-headline text-sm font-bold uppercase tracking-widest text-dune-primary">
                  API SERVICE SP
                </span>
                <span className="text-[10px] text-dune-on-surface-variant uppercase">
                  Exceeding Industry Standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
