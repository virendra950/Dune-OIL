import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = {
  pcmo: {
    tag: 'SYNTHETIC BLEND',
    name: 'Dune Apex GT-1',
    description: 'Advanced synthetic formulation providing ultimate protection against thermal breakdown and engine deposits in modern passenger vehicles.',
    specs: ['API SP, SN PLUS', 'ILSAC GF-6A', 'ACEA A3/B4'],
    sizes: ['1L', '4L', '5L'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU97CZb5GpEXqSH3woLJAo-m2jgQSp7mQBHxP_SH-68HD0AfGxBv1JIkhFqkU4tYoYp_sKtf7WvYuY4F6x3yNOn8atVbbC_OULpgEQQm6iFGLRg0jum5dmb0iD_R0jDHj-qATHM3--qs1fTJB6dRBfKoQT_BTVQy--0xFzw2VpN7DZ-J2mkpcE1S4FBuVQbjv6-RkH21h44QzX5u4vod_kUS03wGOrMkKPTdHolV2wHfDYJhVuJ_7YP2xJgjmkjk7nxVwejTjnZA',
  },
  diesel: {
    tag: 'ULTRA PERFORMANCE',
    name: 'Dune Titan HDX',
    description: 'Formulated for heavy-duty fleet operations, providing exceptional soot control and wear protection for long-haul trucking and construction equipment.',
    stats: [
      { value: '15W-40', label: 'Viscosity Grade' },
      { value: 'CK-4', label: 'API Service' },
      { value: '20L', label: 'Primary Pack' },
    ],
    details: [
      { label: 'Packing Details', value: 'Steel Pail / HDPE Drum' },
      { label: 'Bulk Available', value: 'Contact Sales', highlight: true },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUDWjL0RDLEo9AUqAXUeD-sP9drbQzLbLF3k-D0lRq5OeFxvvzQn7rb76IMJvccnZRVYJHrPKV0ZC2LrWFjlsVsuPeH_xMQr2CD825bb5BSEWz4vX0cIYwAEmGBIi4CdMCSiQNdR2BQPeLwifmKmdIay7SaemD6H6RzAsxcyCbFbKtT-6wnQrr4Ty3oHLwqXC34I5ioFUi2gh7Ia3BPUzP9wHhLdg7SePkWV29cFTJasezAzJT720058WmuIV3lZTsFBO0loYmAg',
  },
  brake: {
    items: [
      {
        type: 'DOT 3 FLUID',
        name: 'Standard Safety',
        description: 'Reliable braking performance for conventional hydraulic systems with excellent moisture resistance.',
        sizes: '500ML | 1L',
        fillWidth: 'w-2/3',
        borderColor: 'border-dune-primary',
      },
      {
        type: 'DOT 4 FLUID',
        name: 'High Temp Pro',
        description: 'Engineered for high-performance vehicles requiring higher boiling points and superior stability.',
        sizes: '1L | 4L',
        fillWidth: 'w-full',
        borderColor: 'border-dune-gold',
      },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa4kiX-bszHfwOQzej7D6mF33uHSQ1B-R94quSn89W71pQLG5ikNriFh8pTD7FgtVumIbfJPW-VthztlSauWv9lKatyZ0SkNW8EqTw_0eyb28KDR2GDNIf4J_B7fuEwIz72t71U0OmcoZ-k31Whaq6DEADKy-gzs5R7OhXXFRr_fhwTvHCi_LGsyUuC-C7zSA1eF3Qa6KIofteVawPHGoc9cL7SfSDudyw5ELiLlfqmsqdt4_BRTkejRhfgJ40nWu9nKcyZjXIBQ',
  },
};

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dune-surface font-body text-dune-on-surface">
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section data-testid="products-hero" className="px-6 md:px-12 mb-16 md:mb-24 max-w-[1920px] mx-auto">
          <div className="relative h-[400px] md:h-[600px] bg-dune-primary overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-40"
                alt="Motor oil fluid"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-5PJy4ilchQkCQJF1E-il47WxC-Ltq1E5FYq5e3Q4_f3-FcyxHsl3DwFB7sImYQGQYUttlWk2tdVm5puMJ0hnFcE5BFEzMoa9ud7NqtWPAerKw1i9RUHkUQQi7v4h5p21iibaAKLTjQjLy03BDesLv812wxaTceA8gm_f3FH--M5LlPWI6MnbdnVclfD5BxchQqlwUvN7rxDEIpl1w6h_B6N6YnWX-xlgbF6rHSUGunnxy73o6u0O8YPshYN8WO7G-4fPzakwMA"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dune-primary via-dune-primary/60 to-transparent" />
            </div>
            <div className="relative z-10 px-8 md:px-16 max-w-4xl">
              <span className="font-label text-dune-gold tracking-widest uppercase text-sm mb-4 block">Product Catalog</span>
              <h1 data-testid="products-page-heading" className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Engineered <br /> Precision.
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-xl font-body leading-relaxed">
                High-performance lubricants designed for the most demanding environments. Our liquid gold is the lifeblood of global engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Category 01: Passenger Car Motor Oil */}
        <section data-testid="category-pcmo" className="px-6 md:px-12 mb-20 md:mb-32 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="font-label text-dune-outline uppercase tracking-tighter text-xs">Category 01</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-dune-primary mt-2">Passenger Car Motor Oil</h2>
            </div>
            <div className="h-px bg-dune-outline-variant flex-grow mx-12 mb-4 opacity-30 hidden md:block" />
            <span className="font-headline text-5xl md:text-6xl font-black text-dune-surface-container-high hidden lg:block">PASSAGE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-dune-surface-container-low p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-dune-gold px-3 py-1 font-label text-[10px] font-bold text-dune-gold-dark mb-6">
                  {products.pcmo.tag}
                </span>
                <h3 data-testid="product-apex-gt1" className="font-headline text-2xl md:text-3xl font-bold text-dune-primary mb-4">
                  {products.pcmo.name}
                </h3>
                <p className="text-dune-on-surface-variant max-w-lg mb-8 leading-relaxed">{products.pcmo.description}</p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="font-label text-[10px] uppercase text-dune-outline mb-2">Specifications</h4>
                    <ul className="space-y-1 text-sm font-medium">
                      {products.pcmo.specs.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-label text-[10px] uppercase text-dune-outline mb-2">Available Sizes</h4>
                    <div className="flex gap-2">
                      {products.pcmo.sizes.map((s) => (
                        <span key={s} className="bg-dune-surface-container-high px-2 py-1 text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button data-testid="download-tech-sheet-btn" className="w-fit bg-dune-primary text-white px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest hover:bg-[#00155e] transition-all">
                Download Technical Sheet
              </button>
            </div>
            <div className="lg:col-span-5 aspect-[4/5] bg-dune-surface-container relative overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Motor oil bottle" src={products.pcmo.image} />
            </div>
          </div>
        </section>

        {/* Category 02: Heavy Duty Diesel Engine Oil */}
        <section data-testid="category-diesel" className="px-6 md:px-12 mb-20 md:mb-32 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <span className="font-headline text-5xl md:text-6xl font-black text-dune-surface-container-high hidden lg:block">DIESEL</span>
            <div className="h-px bg-dune-outline-variant flex-grow mx-12 mb-4 opacity-30 hidden md:block" />
            <div className="md:text-right">
              <span className="font-label text-dune-outline uppercase tracking-tighter text-xs">Category 02</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-dune-primary mt-2">Heavy Duty Diesel Engine Oil</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 aspect-[4/5] bg-dune-surface-container relative overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Heavy machinery engine" src={products.diesel.image} />
            </div>
            <div className="lg:col-span-7 bg-dune-primary text-white p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-dune-gold px-3 py-1 font-label text-[10px] font-bold text-dune-gold-dark mb-6">
                  {products.diesel.tag}
                </span>
                <h3 data-testid="product-titan-hdx" className="font-headline text-2xl md:text-3xl font-bold mb-4">{products.diesel.name}</h3>
                <p className="text-white/60 max-w-lg mb-8 leading-relaxed">{products.diesel.description}</p>

                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
                  {products.diesel.stats.map((stat) => (
                    <div key={stat.label} className="bg-white/5 p-4">
                      <span className="block text-dune-gold font-headline text-xl md:text-3xl font-black mb-1">{stat.value}</span>
                      <span className="font-label text-[10px] uppercase text-white/40">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  {products.diesel.details.map((d) => (
                    <div key={d.label} className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm text-white/60">{d.label}</span>
                      <span className={`text-sm font-bold ${d.highlight ? 'text-dune-gold' : ''}`}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button data-testid="request-bulk-pricing-btn" className="w-full bg-dune-gold text-dune-primary px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all">
                Request Bulk Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Category 03: Brake Oil */}
        <section data-testid="category-brake" className="px-6 md:px-12 mb-20 md:mb-32 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="font-label text-dune-outline uppercase tracking-tighter text-xs">Category 03</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-dune-primary mt-2">Brake Oil</h2>
            </div>
            <div className="h-px bg-dune-outline-variant flex-grow mx-12 mb-4 opacity-30 hidden md:block" />
            <span className="font-headline text-5xl md:text-6xl font-black text-dune-surface-container-high hidden lg:block">STOPPING POWER</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.brake.items.map((item) => (
              <div key={item.type} data-testid={`brake-card-${item.type.split(' ')[0].toLowerCase()}-${item.type.split(' ')[1]}`} className={`bg-dune-surface-container-low p-8 border-t-4 ${item.borderColor}`}>
                <span className="font-label text-[10px] text-dune-outline mb-4 block">{item.type}</span>
                <h3 className="font-headline text-2xl font-bold text-dune-primary mb-4">{item.name}</h3>
                <p className="text-dune-on-surface-variant text-sm mb-6">{item.description}</p>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase text-dune-outline">
                    <span>Sizes</span>
                    <span>{item.sizes}</span>
                  </div>
                  <div className="h-1 bg-dune-surface-container-high">
                    <div className={`h-1 ${item.borderColor === 'border-dune-gold' ? 'bg-dune-gold' : 'bg-dune-primary'} ${item.fillWidth}`} />
                  </div>
                </div>
                <a href="#" className="text-dune-primary font-bold text-xs uppercase tracking-widest flex items-center group">
                  Details
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            ))}

            {/* Imagery card */}
            <div className="bg-dune-primary overflow-hidden relative group min-h-[300px]">
              <img className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 absolute inset-0" alt="Brake disc" src={products.brake.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-dune-primary/80 to-transparent flex items-end p-8">
                <p className="text-white text-xs font-label uppercase tracking-widest leading-relaxed">
                  Precision Braking <br /> Guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section data-testid="products-cta" className="mb-20 md:mb-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="bg-dune-surface-container-high p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-dune-gold opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 data-testid="products-cta-heading" className="font-headline text-3xl md:text-4xl font-black text-dune-primary mb-6">
                Need a custom lubricant solution?
              </h2>
              <p className="text-dune-on-surface-variant max-w-2xl mx-auto mb-10 text-base md:text-lg">
                Our engineering team specializes in formulating bespoke lubricants for unique industrial requirements and extreme operating environments.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button data-testid="speak-engineer-btn" className="bg-dune-primary text-white px-8 md:px-12 py-5 font-headline text-sm font-bold uppercase tracking-widest hover:bg-[#00155e] transition-all">
                  Speak to an Engineer
                </button>
                <button data-testid="download-catalog-btn" className="bg-white text-dune-primary border border-dune-primary px-8 md:px-12 py-5 font-headline text-sm font-bold uppercase tracking-widest hover:bg-dune-surface-container-low transition-all">
                  Download Catalog (PDF)
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
