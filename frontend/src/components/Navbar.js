import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_888a19ae-5a80-4564-9e16-86ab86e3567b/artifacts/81vztrzy_Dune%20oil.jpeg";

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Find a Retailer', to: '#retailer' },
  { label: 'Dune Advisor', to: '#advisor' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (link) => {
    if (link.to.startsWith('#')) return false;
    if (link.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.to);
  };

  const renderLink = (link) => {
    const active = isActive(link);
    const cls = `font-headline uppercase tracking-wider text-sm font-bold transition-colors ${
      active
        ? 'text-dune-gold border-b-2 border-dune-gold pb-1'
        : 'text-white/80 hover:text-white'
    }`;

    if (link.to.startsWith('#')) {
      return (
        <a key={link.label} href={link.to} data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`} className={cls}>
          {link.label}
        </a>
      );
    }
    return (
      <Link key={link.label} to={link.to} data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`} className={cls}>
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 w-full z-50 bg-dune-primary/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(0,3,32,0.5)]"
      style={{ borderBottom: 'none' }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1920px] mx-auto">
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-3">
          <div className="relative h-12 w-12 flex-shrink-0">
            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-br from-dune-gold/25 via-[#4a7ab5]/15 to-transparent blur-lg" />
            <div
              className="relative h-full w-full rounded-full ring-1 ring-white/[0.06]"
              style={{
                backgroundImage: `url(${LOGO_URL})`,
                backgroundSize: '200% 200%',
                backgroundPosition: '47% 25%',
                backgroundBlendMode: 'screen',
                backgroundColor: '#000320',
                filter: 'brightness(2) contrast(1.3) saturate(1.6)',
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white font-headline leading-tight">Dune Lubricants</span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/50 font-label">and Oil IND L.L.C S.P</span>
          </div>
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map(renderLink)}
        </div>

        <div className="hidden lg:flex gap-4">
          <button data-testid="get-quote-btn" className="bg-white/5 text-white font-headline uppercase tracking-wider text-xs font-bold px-6 py-3 hover:bg-white/10 transition-all duration-300">Get a Quote</button>
          <Link to="/contact" data-testid="contact-engineering-btn" className="bg-dune-gold text-dune-primary font-headline uppercase tracking-wider text-xs font-bold px-6 py-3 hover:opacity-90 transition-all">Contact Engineering</Link>
        </div>

        <button data-testid="mobile-menu-toggle" className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-dune-primary/95 backdrop-blur-xl px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(link);
              if (link.to.startsWith('#')) {
                return (
                  <a key={link.label} href={link.to} onClick={() => setMobileOpen(false)} className={`font-headline uppercase tracking-wider text-sm font-bold py-2 ${active ? 'text-dune-gold' : 'text-white/80'}`}>
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className={`font-headline uppercase tracking-wider text-sm font-bold py-2 ${active ? 'text-dune-gold' : 'text-white/80'}`}>
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 mt-4">
              <button className="bg-white/5 text-white font-headline uppercase tracking-wider text-xs font-bold px-6 py-3">Get a Quote</button>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="bg-dune-gold text-dune-primary font-headline uppercase tracking-wider text-xs font-bold px-6 py-3 text-center">Contact Engineering</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
