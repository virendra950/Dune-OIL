const productCategories = [
  {
    name: 'Petrol Engine Oil',
    items: ['0W16', '0W20', '0W40', '5W20', '5W30', '5W40', '10W30', '10W40', '15W40', '20W50'],
  },
  {
    name: 'Diesel Engine Oil',
    items: ['10W30', '10W40', '15W40', '20W50', '20W60'],
  },
  {
    name: 'Hydraulic Oil',
    items: ['AW32', 'AW46', 'AW68'],
  },
  {
    name: 'Gear Oil',
    items: ['75W90', '80W90', '85W140'],
  },
  {
    name: 'Transmission Oil',
    items: ['ATF DEX II', 'ATF DEX III'],
  },
  {
    name: 'Grease',
    items: ['MP2', 'MP3', 'EP2', 'EP3', 'EP4', 'Complex 2'],
  },
  {
    name: 'Coolant',
    items: ['33% - 50%', '50%', '100%'],
  },
];

export default function ProductsMegaMenu({ visible }) {
  return (
    <div
      data-testid="products-mega-menu"
      className={`absolute top-full left-0 w-full bg-dune-primary border-t border-white/5 shadow-2xl transition-all duration-200 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-10 lg:px-12 py-8">
        <div className="grid grid-cols-7 gap-0 divide-x divide-white/5">
          {productCategories.map((cat) => (
            <div key={cat.name} className="px-5 first:pl-0 last:pr-0">
              <h4 className="font-headline text-[11px] font-bold uppercase tracking-widest text-dune-gold mb-4 pb-2 border-b border-dune-gold/20">
                {cat.name}
              </h4>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item}>
                    <a
                      href="/products"
                      data-testid={`mega-item-${item.replace(/\s+/g, '-').replace('%', 'pct').toLowerCase()}`}
                      className="block text-[13px] text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all duration-150 py-1 font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
