import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manufacturingCards = [
  {
    type: 'feature',
    icon: 'precision_manufacturing',
    title: 'Automated Blending Units',
    description: 'Fully integrated SCADA systems manage complex formulations with zero manual intervention, ensuring the molecular integrity of our high-performance synthetics.',
    span: 'md:col-span-2',
    bg: 'bg-[#00155e]',
  },
  {
    type: 'stat',
    value: '99.9%',
    label: 'Consistency Rating',
    bg: 'bg-dune-gold',
    textColor: 'text-dune-gold-dark',
  },
  {
    type: 'small',
    title: '24/7 Monitoring',
    description: 'Continuous real-time sensor data ensures batch stability across all temperature gradients.',
  },
  {
    type: 'small',
    title: 'Zero-Waste Facility',
    description: 'Our closed-loop blending process eliminates environmental runoff and maximizes yield efficiency.',
  },
  {
    type: 'small',
    title: 'Modular Scaling',
    description: 'Agile production lines capable of switching between specialty batches and high-volume runs in hours.',
  },
];

const qaItems = [
  {
    icon: 'verified',
    title: 'ISO Certified Facilities',
    description: 'Global standards maintained across ISO 9001, 14001, and 45001 certifications.',
  },
  {
    icon: 'biotech',
    title: 'In-House Laboratory',
    description: 'Real-time spectrometry and viscosity analysis performed on-site by expert chemists.',
  },
  {
    icon: 'inventory_2',
    title: 'Batch Traceability',
    description: 'End-to-end digital tracking from base oil sourcing to final delivery.',
  },
];

const globalStats = [
  { value: '50+', label: 'Countries Reached' },
  { value: '12h', label: 'Port Response Time' },
  { value: '200k', label: 'Sq Ft Central Hub' },
  { value: '94%', label: 'Supply Chain Uptime' },
];

const techData = [
  { standard: 'ISO 9001', code: 'V-01', label: 'Viscosity Index Control' },
  { standard: 'API SN', code: 'L-99', label: 'Engine Protection Grade' },
  { standard: 'SAE 40', code: 'T-12', label: 'Thermal Stability Limit' },
  { standard: 'ASTM', code: 'F-07', label: 'Flash Point Verification' },
  { standard: 'JASO MA', code: 'C-33', label: 'Clutch Friction Rating' },
  { standard: 'EURO VI', code: 'E-06', label: 'Emission Compliance' },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-dune-surface font-body text-dune-on-surface">
      <Navbar />
      <main className="pt-24 md:pt-32">

        {/* Hero / Heritage Section */}
        <section data-testid="about-hero" className="relative px-6 md:px-12 pb-20 md:pb-32 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="font-label text-dune-secondary font-bold tracking-[0.2em] uppercase mb-6 block text-sm">Our Heritage</span>
              <h1 data-testid="about-heading" className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tighter mb-8 text-dune-primary">
                25 Years of <br /><span className="text-[#7382cc]">Industrial Excellence.</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-dune-on-surface-variant max-w-2xl leading-relaxed mb-6">
                Since the year 2000, Dune Lubricants & Oil IND L.L.C S.P has been at the forefront of industrial lubrication in the United Arab Emirates. What started as a commitment to serve the UAE's rapidly growing industrial sector has evolved into a trusted name in precision-engineered fluid solutions.
              </p>
              <p className="font-body text-base text-dune-on-surface-variant max-w-2xl leading-relaxed">
                Now, after over two decades of operational excellence and deep expertise in the MENA region's most demanding industries, we are proud to officially launch the Dune brand — bringing world-class lubrication products to automotive, industrial, and marine sectors across the UAE and beyond.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-dune-surface-container-low overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Golden oil flowing through precision gears"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Mhyko2IRernxvKrccrHcc-sIhmUnP-E30xDFcD4zb0Riu4Av0ml7V64S4S7k99Q9WPx1goq0OcheT1qstmlzAZzf1EaP2u2GWoMTkFPvwhLQxSdIMtCH-EZVd9l-ISKBRchyf_kWNO7hab-HmKaE1W4fxFG6DJhAvARMYEIWRvDjyf9OfOOJzbjKiVgPC7KThm9sk5KKiRliE15Zlk3tXrcj9fTM16XHfbdz6Lg2W85oABXRq8QYcMk-RS4btinih_LEBY9nyA"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 md:-bottom-10 md:-left-10 bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-xl max-w-xs">
                <p data-testid="about-year" className="font-headline text-5xl font-black text-dune-secondary mb-2">2000</p>
                <p className="font-label text-dune-on-surface-variant font-medium">The year we began our journey in the UAE's industrial heartland.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Excellence */}
        <section data-testid="manufacturing-section" className="bg-dune-primary py-20 md:py-32 text-white">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
              <div>
                <span className="font-label text-dune-gold font-bold tracking-[0.2em] uppercase mb-4 block text-sm">Engineered Accuracy</span>
                <h2 data-testid="manufacturing-heading" className="font-headline text-4xl md:text-5xl font-bold">Manufacturing Excellence</h2>
              </div>
              <p className="font-body text-white/60 max-w-md">Our facilities represent the pinnacle of automated blending technology, where every drop is tracked and tested.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large feature card */}
              <div className="md:col-span-2 bg-[#00155e] p-8 md:p-12 flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
                <span className="material-symbols-outlined text-dune-gold text-5xl">precision_manufacturing</span>
                <div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Automated Blending Units</h3>
                  <p className="font-body text-white/70 max-w-lg">Fully integrated SCADA systems manage complex formulations with zero manual intervention, ensuring the molecular integrity of our high-performance synthetics.</p>
                </div>
              </div>

              {/* Stat card */}
              <div className="bg-dune-gold p-8 md:p-12 text-dune-gold-dark flex flex-col justify-center items-center text-center">
                <p data-testid="consistency-stat" className="font-headline text-6xl md:text-7xl font-black mb-2">99.9%</p>
                <p className="font-label font-bold uppercase tracking-widest">Consistency Rating</p>
              </div>

              {/* Small feature cards */}
              {['24/7 Monitoring', 'Zero-Waste Facility', 'Modular Scaling'].map((title, i) => {
                const descriptions = [
                  'Continuous real-time sensor data ensures batch stability across all temperature gradients.',
                  'Our closed-loop blending process eliminates environmental runoff and maximizes yield efficiency.',
                  'Agile production lines capable of switching between specialty batches and high-volume runs in hours.',
                ];
                return (
                  <div key={title} className="bg-white/5 p-8 md:p-12 backdrop-blur-sm">
                    <h4 className="font-headline text-xl font-bold mb-4 text-dune-gold">{title}</h4>
                    <p className="font-body text-white/60">{descriptions[i]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section data-testid="quality-section" className="py-20 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10 md:space-y-12">
              <div>
                <span className="font-label text-dune-secondary font-bold tracking-[0.2em] uppercase mb-4 block text-sm">Validation</span>
                <h2 data-testid="quality-heading" className="font-headline text-4xl md:text-5xl font-bold text-dune-primary mb-6">Quality Assurance</h2>
                <p className="font-body text-dune-on-surface-variant text-lg leading-relaxed">
                  Quality is not a department at Dune; it is our fundamental DNA. Every batch undergoes a rigorous 42-point diagnostic protocol before it receives the Dune seal of approval.
                </p>
              </div>
              <div className="space-y-8">
                {qaItems.map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="bg-dune-surface-container-high p-4">
                      <span className="material-symbols-outlined text-dune-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-bold text-dune-primary">{item.title}</h4>
                      <p className="font-body text-dune-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Laboratory equipment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGmbkrMM4CPbaPkHi3pCSyVNSoe0yBzVwSKI5k9GD2NBMCARuoEHXIpEhkYctbIU6ZCcBlr1HDXur_144Pb6XkE1F8PQmtsknt3Ci1YxVnDmfBEx5yrejn9vyMmiEce4zvjfLaOMoadZNKCtDOcgfFnO_qwxQU03_TpNXPTrPWfpKRGhGKo1MlNiqLx8dDK_7joIVPJtUts2laRCjx3XJ71wYL10UGAMaPb1xKNv0Sfq9Aq9E5EsNRuVFhBysu1C-LJAbpkFZcwQ"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-[#00155e] flex items-center justify-center p-8 text-center">
                  <span className="font-headline text-white text-xl md:text-2xl font-bold italic">"Precision is our only metric of success."</span>
                </div>
              </div>
              <div className="pt-12 space-y-6">
                <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Chemist examining oil sample"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvVSOn1kRRRgqZq9ZPW6Sq6amYktFpoMdAfcBERl6HmQv1F9h6hwh3wCqMMLMl_aVzmEJPOdsx5oAKsuzJwyjhKBANkNaFrpth4251JvYK6ySXohCHErm64RKKRMptLxw1lQE-Kc-RWzTn6W690Z6LIXwJKuQR4YqrqgQh0gfUSLQvorhCj3mfMPUX2ltJJJYl0siiAvvLQxQW7_MTbhDtRed5M2ePSoBN0tqtQkYc_WIZ4Sx2fQv3zVf4_CO4rZ5CroCCsW3Jlw"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-dune-gold">
                  <img
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                    alt="Oil surface texture"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVMK6WlLSavM_Xi0SjtL5MD04vXFuoAempnW--2l1oJODIxFG1gwMAJDDQvtivwcUWcughPPs5dKoWgMcRF8vq2rgV7CTVMDTwH4PrSl5pXQ6ULEUDaJkAfsB5tCuNZBCRfUthSdtwcFVj5YA-A1G74R07tMvf-Tn6eZ4dJaUlGGFy1gGUQCXnKI0obcUYzoISIt5LmKr5G2CaRxIkQfUXqqkRlicuszJatbzsu1ngCnn7IbFhHOLACU2KC-Rl_VqVIWXttet1iA"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Distribution Network */}
        <section data-testid="distribution-section" className="py-20 md:py-32 bg-dune-surface-container-low">
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto text-center mb-16">
            <span className="font-label text-dune-secondary font-bold tracking-[0.2em] uppercase mb-4 block text-sm">Our Reach</span>
            <h2 data-testid="distribution-heading" className="font-headline text-4xl md:text-5xl font-bold text-dune-primary">Global Distribution Network</h2>
            <p className="font-body text-dune-on-surface-variant mt-4 max-w-2xl mx-auto">
              Strategically headquartered in Sharjah, UAE, our logistics hub connects Dune products to industrial sectors across six continents.
            </p>
          </div>
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
            <div className="relative w-full aspect-[21/9] min-h-[300px] bg-dune-primary overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-40">
                <img
                  className="w-full h-full object-cover"
                  alt="Global distribution map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdVBfYzxMKof3UvxUNhqAmXLkKunv7Onn8JbyaK53kd1VH62_-YigVq7rLZfZ_n3VxPLWM204p85lOjq1Ham8UueA02rp1KWUwNgUKeZfEzs4u5BTHpD42PesKt9EPXt2TFZ0R2nW48xHYe4l2X7JDsfCHQ8MHiBWXTbCRenKTwfMuGvh12mbBRMIl-EQEs8AH7vqhp0914JUdm_Em9nl2oyYl7S9Ex2vZTarsDcSsYhDHjib5NCuXlcE4vtEcRwPNQjZl5ggszw"
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full px-6 md:px-24 pointer-events-auto">
                  {globalStats.map((stat) => (
                    <div key={stat.label} className="bg-white/70 backdrop-blur-xl p-4 md:p-6 text-center border-t-2 border-dune-gold">
                      <p className="text-dune-primary font-headline text-2xl md:text-4xl font-bold">{stat.value}</p>
                      <p className="text-dune-on-surface-variant font-label font-bold uppercase text-[10px] tracking-tighter">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* UAE pulse point */}
              <div className="absolute top-[45%] left-[58%] hidden md:block">
                <div className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dune-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-dune-gold" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Grid */}
        <section data-testid="techdata-section" className="py-20 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-dune-outline-variant/20 overflow-hidden">
            {techData.map((item, i) => (
              <div key={item.code} className={`${i % 2 === 0 ? 'bg-dune-surface-container' : 'bg-dune-surface-container-low'} p-6 md:p-8`}>
                <p className="font-label text-dune-secondary font-bold mb-4 text-sm">{item.standard}</p>
                <p className="font-headline text-2xl md:text-3xl font-black text-dune-primary">{item.code}</p>
                <p className="font-body text-xs text-dune-on-surface-variant mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
