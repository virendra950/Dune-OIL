import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    badge: 'Apex',
    name: 'Dune Apex',
    subtitle: 'Passenger Engine Oil',
    description: 'Advanced synthetic technology for modern high-performance gasoline engines.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn5-oCsDAslPjim6OOiMkjboEAONQV4fJNj59yUKwW8HRT20jMTy0Udh0YJFMN0ZiSQ1WLRVlkyH-YRoEC1XkTKQ0BcLcS80FdhqhusaEvDFK6C1Gy_o_mhv-UK7-CpqnzUiA7RgGaa6TfBLcsRLbJmqmRNfFAZ-HyB2twLm0tUPPbUArledBed31iIxAuF1J4sh58Y1elDV5MOTQTBx57QsBOrX24ZUqeyofbCSFjGGihsvnu5XndqQoE-YgwKuW1agnAakFi6A',
  },
  {
    badge: 'Titan',
    name: 'Dune Titan',
    subtitle: 'Diesel Engine Oil',
    description: 'Engineered for heavy-duty commercial vehicles and extreme payload conditions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABUVIrIg8y1seioTX6fM2SdB0aRbWckKpkqws4t-eyoYJbvvAsYnHiw4--PcU8i8U3Yjt9eFvRis0KHZfZgK9J4FzlWZlfmzCl-B6Ay8-b-NqPQzzW7NOzjUTCYzcFeQ2sGopLLK27gc5HKb0-jkI8u2ayy1TkRLT_7SdcWmChc4o1NrtZdN5wvtl9AnMIpO6vHB6mnxypHKIiD6vkIJn6XlIuARm1bhYSJnrsAaio2XEgM5fN72NpU3AsL1TF0d3j1W9ldWhf3Q',
  },
  {
    badge: 'Force',
    name: 'Dune Force',
    subtitle: 'Hydraulic Oil',
    description: 'High viscosity index fluids for industrial and mobile hydraulic systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJAiX5glJzN8lnC9iMZ24-HdNkpk23ph317EjaVP1EnZqEWHEZMnu8Nh4agS1cm9d0M8PH2OyFljBi85uOd91rujP0kjj2KgaDbgH7mGHrsedpXFofeNBEPj0IYbnBkfS8wCXTweMnUqgvtYOCcjFMXTC0EGrBQa07mLpPXygjAzRVK4QpjCe0Q0BqEuvFVlSgQ8gYkxj43B62cGxzhgrZbjrT9dYmwP-uJcuP0Vzh8vITqWyzt98k1k4klVpZ7ap8M9jyryilJg',
  },
  {
    badge: 'Shift',
    name: 'Dune Shift',
    subtitle: 'Transmission Oil',
    description: 'Optimized friction control for seamless gear transitions and component longevity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzWcOqzjgFQ3WIDiCu8EBjUxa5AK_EnHpdE5Rvtsf58b6oBKhOD91Iyij77ac_0D6nHLEa7pw3PeuLpd2hZpzJdWMqMnVJcA6Fr6ge603lSLcNUyQ2latokp7WRIqbIPx3o1Uf4xBUaiwBwugGW6PAsCVx832jjxlII0473NZjksKVeCz1hTVKvu_2enVq6aXMSw_fjsG5fKFP_iKMv7KqaZkGehRx0KomN48BSKvvFTYHRldpoMM1eDKFlMCvh-lNj2jIaAJ4JA',
  },
  {
    badge: 'Synchro',
    name: 'Dune Synchro',
    subtitle: 'Gear Oil',
    description: 'Extreme pressure protection for automotive and industrial gear systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIoVj-d2i2MBLT6bgKcTvjeyXtvii1XM2FHdpEBou4FZ7ay3b76ZNe_KbbTt0lK2mgnt631C-s61G68kiBpiWMXj7z2BZGmzMUfT4QS6AUKSJFV7J8aMq7KPvqncVfWwXnItxGrveDkbDc0zaEwcu5sSmfGL7gyJ8grQqEqlqRXW1L_x2BSbrP_QX3VDm2eNzsjv5eSMvtyBofZnJT533eqkiUWiFCUUELuy-0BI1slMrghAKMWQUN6_bkyOvCsvSA9sgYGaMm_w',
  },
  {
    badge: 'Arctic',
    name: 'Dune Arctic',
    subtitle: 'Coolant',
    description: 'Advanced heat transfer technology to maintain optimal engine temperatures.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSSW65knvBcUYTn5sLyJVsyVgEp8Gg-v5E_8cUELgRvsAtwZAsLJCflhZ-FulxhoWc7lbtuJhj-HxqN47pMiLwcJmUgBgTRms8HNbmGP2dR6x7dKanCVmW2liL4yzruSooHPDV_GEnULCfmvj5e_ILCnMkL7o2zZQzvbWcR8kBmtdp8yWLKaDHUeC91IjX1op_5Wx9bQXj7o6Oz31X4-4zdamJZe63G-LUDcqHg6DC1EZFwzoBKsarVPC4V7LfZzokdEwZMKCgbA',
  },
  {
    badge: 'Shield',
    name: 'Dune Shield',
    subtitle: 'Grease',
    description: 'Ultimate moisture and dust protection for industrial bearings and joints.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcaWixF8rY5o3lAEO1IROdpsJ-ZmSt5pbJxVcRBjNevxgrErudUl9pzit0AvsuSSZXO-n2rdAd3R0bKgTs6SVD9wiaThZwSSqDRcEM9YwEBRiMutNU88rgQN77U20Nznt8sFkLkvGdR9tw7kUIXxio7zmb3AfTKElX0pRC6nHwo6QlMwsZxbN-0tQOTUr1TtnyHZH1jjlsJYdsujQELFwxym4Hj9zUutlM49N4fawcoMZCW2DT45s0mx1wU64Lh5caGTq_hdVHEA',
  },
];

const techSpecs = [
  {
    value: '0.5s',
    label: 'Friction Response',
    description: 'Instant lubrication film formation on critical engine startups.',
    opacity: 'bg-dune-primary',
  },
  {
    value: '10k+',
    label: 'Hours Life',
    description: 'Extended drain intervals for heavy industrial hydraulic systems.',
    opacity: 'bg-dune-primary/95',
  },
  {
    value: '-45°C',
    label: 'Pour Point',
    description: 'Guaranteed performance in the most extreme arctic environments.',
    opacity: 'bg-dune-primary/90',
  },
];

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dune-surface font-body text-dune-on-surface">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-24 min-h-[716px] flex items-center bg-dune-primary overflow-hidden asymmetric-clip">
        {/* Background image */}
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Close-up of golden viscous oil pouring into a high-performance mechanical engine part"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VosnGt0e3JXm1sQLCyu39x4ZdIR7MySwzkXfwk6csvVssRZw-Dbm7AKJoHl3_p9GzvVDXqWEn94QB8bf83Y_YGn7TKn0qamwkuYLeyG6oX3wLLAAia6w3_ichKMRuERaGgBtNQ0u3IB-KaF-L0JHdjGBdGxNrjpUFU0hv2_xryPiVkRSvtuFXdxv2kBnsPUrj6scF8Yyj2lDQD-B4ggt_S5VECO8ATg6ysCukxlUjaajkxGVtJ36HQRKmkb2pkfSKi6g7WmrqA"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dune-primary via-dune-primary/80 to-transparent" />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: text */}
          <div>
            <span className="inline-block py-1 px-3 bg-dune-gold text-dune-secondary font-label text-[10px] font-bold uppercase tracking-widest mb-6">
              Industrial Excellence
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-8">
              Our Excellent <br />
              <span className="text-dune-gold">Products</span>
            </h1>
            <p className="text-white/70 text-lg max-w-lg mb-10 leading-relaxed">
              Precision-engineered lubricants designed for the most demanding environments. From high-speed passenger vehicles to heavy-duty industrial machinery.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-dune-gold text-dune-secondary font-headline font-bold uppercase text-sm hover:-translate-y-0.5 transition-transform">
                Explore Catalog
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-headline font-bold uppercase text-sm hover:bg-white/5 transition-colors">
                Technical Specs
              </button>
            </div>
          </div>

          {/* Right: product image */}
          <div className="hidden lg:block relative">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-dune-gold/10 rounded-full blur-3xl" />
            <img
              className="relative z-20 w-full h-[500px] object-contain drop-shadow-2xl"
              alt="Collection of professional grade oil containers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjCFw2xDU-_6NvofkYjRtFBdIwmoIVRIMdUr5qKXxMV85SrLLH3ZMKqrc27ecmVHOtGCFUqEgyRH8zFu0Z3PdT56EMgcQWLwh0orK19DzF3LphRelMCPzann1yjI2txCDFJLv4E39KrNfWC3KYYaE3IobxisUGVhiGVdQWfEselhnfA2nD1pVt2o-_AMjFgsaTDhDrBFqtM_HJURKT6pAmBV6up0KHDOM7-dfxVC0eBPSbCBCyYxj9MVxRCVBTb35-I0ZLmw4FNA"
            />
          </div>
        </div>
      </header>

      {/* Product Grid Section */}
      <main className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-extrabold text-dune-primary mb-6 tracking-tight">
              Our Product Range
            </h2>
            <div className="h-1 w-20 bg-dune-gold mb-6" />
            <p className="text-dune-on-surface-variant font-body leading-relaxed">
              Dune Lubricants offers a comprehensive suite of high-performance fluids. Each product is formulated with proprietary additives to ensure maximum protection, reduced friction, and extended component life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.badge}
              className="group border border-dune-outline-variant/15 hover:shadow-2xl hover:shadow-dune-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col bg-dune-primary"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={product.name}
                  src={product.image}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-dune-gold text-dune-secondary px-3 py-1 font-label text-[10px] font-bold uppercase">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow">
                <h3 className="font-headline text-xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="font-label text-xs font-semibold uppercase tracking-widest mb-4 text-[#ffba20]">
                  {product.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-6 text-white/70">{product.description}</p>
              </div>

              {/* CTA */}
              <div className="pb-8 px-8">
                <button className="flex items-center text-dune-gold font-headline font-bold uppercase text-xs transition-all hover:underline group-hover:underline decoration-2 underline-offset-4">
                  View Product{' '}
                  <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Technical Specification Highlight */}
      <section className="bg-dune-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {/* Header cell */}
            <div className="bg-white p-12 flex flex-col justify-center">
              <span className="font-label text-dune-secondary font-bold text-xs uppercase tracking-widest mb-4">
                Engineered Efficiency
              </span>
              <h4 className="font-headline text-2xl font-extrabold text-dune-primary">
                Technical Excellence by Design
              </h4>
            </div>

            {/* Stat cells */}
            {techSpecs.map((spec) => (
              <div key={spec.label} className={`${spec.opacity} p-12 text-white`}>
                <div className="font-headline text-5xl font-black text-dune-gold mb-2">{spec.value}</div>
                <div className="font-label text-sm uppercase tracking-tighter opacity-60">{spec.label}</div>
                <p className="text-xs mt-4 opacity-80">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
