const services = [
  {
    name: 'Oil Analysis',
    description: 'Performing an effective oil analysis helps identify possible issues of wear, contamination and changes that could affect the performance and health of the mechanical parts.',
  },
  {
    name: 'Toll Blending',
    description: 'With a wealth of technical knowledge, quality commitment, and long experience, Dune is your best partner when it comes to producing your own lubricants.',
  },
  {
    name: 'Private Labeling',
    description: 'We apply our rigorous tests and quality controls on every product leaving our plants, whether it has our label or yours. That is our promise.',
  },
  {
    name: 'Technical Assistance',
    description: 'Our top-notch products, expertise, and services are made available to our partners to reach the highest levels of productivity, for your success is ours too.',
  },
];

export default function ServicesMegaMenu({ visible }) {
  return (
    <div
      data-testid="services-mega-menu"
      className={`absolute top-full left-0 w-full bg-dune-primary border-t border-white/5 shadow-2xl transition-all duration-200 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-10 lg:px-12 py-8">
        <div className="grid grid-cols-4 gap-8">
          {services.map((svc) => (
            <div key={svc.name} className="group cursor-pointer">
              <div className="mb-3 pb-2 border-b-2 border-dune-gold">
                <h4 className="font-headline text-[12px] font-bold uppercase tracking-widest text-white">
                  Dune {svc.name}
                </h4>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed font-body group-hover:text-white/70 transition-colors">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
