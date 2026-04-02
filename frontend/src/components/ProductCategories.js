import { Link } from 'react-router-dom';

const categories = [
  {
    tag: 'Series A',
    title: 'Automotive',
    description: 'Synthetic blends engineered for maximum thermal stability and extended engine longevity in extreme climates.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD13smAYUOUsB8ph9eBAVITadUqu-qDLlb4Xy1KB4fcsPNkTperub5FWwkvDek_dxgzmW2dVD3U87WUAqgW1Ne9fEXpfD3uiKa_PWXj3EudgIHvEOHbkUJlIbu0JeOjL2rT3xcBrUjZWfVeA4KRZ8mZmJQ4pnll2cgGKfdBSfNCcJOQ30mPqth-SVVXFmJn0OqmORcEnlvKccARrtUfEb7mn0nrZIUx1F6yyL4rmKoPBvxuVCotKR5ydlUppktNUnqZTWtKkgYcyA',
    alt: 'High performance engine'
  },
  {
    tag: 'Heavy Duty',
    title: 'Industrial',
    description: 'High-viscosity lubricants designed to withstand extreme pressure and continuous operation in manufacturing plants.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByfdhnLahCn8ourRFC6ajHvoQfwAAKVfLtJMFSdJc9fLwZYDv9usqkmG0gra7xIUiAb_qq6pO1SQsw3cE7vFrafbxSkclWiecnDMNywQcxjKuN7dFIbd-wQdbn0n0IQ_0YaQKQRGI4wNe7fgqdqyD0xss5ksGA76T0H8jMSMnIDRvPNcLZWmWlTh9Xtc3FM2wPTF6sZYXxclhoo3qdh3wKJw-CnlY2BJN7dvT8e-g-unAnhfKO49sC9W_sHaESywXswMpzBqKoaA',
    alt: 'Factory machinery'
  },
  {
    tag: 'Salt-Resistant',
    title: 'Marine',
    description: 'Specialized anti-corrosive formulas designed for the relentless environment of global maritime logistics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi249k9a_VU3fd47K8iD--LccsAsT8ew80xuJb1ZwDD2Q28qL_uV1pMiXmbBH3TJD2C9goRZHbPpfm3v1-aikX3i_MzPdOc3z4rzRgIcjHaYzy3f51XRmbb-5sT5W7t7RenEdXlMGZxCWla11yai0wSgt38J_63ecDxssqLW5ENVyqvcmOfiTC5WgxG9lGb2kF3Cbl0qbvVTgYCO4NL8zCapL6a4xWXeBN6BIHI4dTtIwDNPIIwhYhWSXVvma1wX4zWr9MrW6P3g',
    alt: 'Large ship engine'
  }
];

export default function ProductCategories() {
  return (
    <section id="products" data-testid="product-categories-section" className="py-20 md:py-32 px-6 md:px-12 bg-dune-surface">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div>
            <h2 data-testid="products-heading" className="font-headline text-4xl md:text-5xl font-bold text-dune-primary tracking-tight">Product Categories</h2>
            <p className="text-dune-on-surface-variant mt-4 text-lg">Specialized formulations for every industrial frontier.</p>
          </div>
          <div className="h-px flex-grow bg-dune-outline-variant/30 mx-12 hidden md:block" />
          <Link to="/products" data-testid="full-catalog-btn" className="text-dune-primary font-headline font-bold uppercase tracking-wider text-sm flex items-center gap-2 group">
            Full Catalog <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link to="/products" key={cat.title} data-testid={`product-card-${cat.title.toLowerCase()}`} className="group relative aspect-[4/5] overflow-hidden bg-dune-primary cursor-pointer block">
              <img alt={cat.alt} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src={cat.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-dune-primary via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <span className="text-dune-gold font-label text-xs uppercase tracking-widest mb-2 block">{cat.tag}</span>
                <h3 className="text-white font-headline text-3xl font-bold mb-4">{cat.title}</h3>
                <p className="text-white/60 mb-6 line-clamp-2">{cat.description}</p>
                <div className="h-1 w-0 bg-dune-gold group-hover:w-full transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
