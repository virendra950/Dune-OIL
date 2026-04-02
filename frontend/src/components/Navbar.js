import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_888a19ae-5a80-4564-9e16-86ab86e3567b/artifacts/81vztrzy_Dune%20oil.jpeg";

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Products', href: '#products', active: false },
  { label: 'About Us', href: '#about', active: false },
  { label: 'Find a Retailer', href: '#retailer', active: false },
  { label: 'Dune Advisor', href: '#advisor', active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 w-full z-50 bg-dune-primary/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(0,3,32,0.5)]"
      style={{ borderBottom: 'none' }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1920px] mx-auto">
        {/* Logo */}
        <div data-testid="navbar-logo" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src={LOGO_URL}
              alt="Dune Oil Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white font-headline leading-tight">
              Dune Lubricants
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/50 font-label">
              and Oil IND L.L.C S.P
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`font-headline uppercase tracking-wider text-sm font-bold transition-colors ${
                link.active
                  ? 'text-dune-gold border-b-2 border-dune-gold pb-1'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button
            data-testid="get-quote-btn"
            className="bg-white/5 text-white font-headline uppercase tracking-wider text-xs font-bold px-6 py-3 hover:bg-white/10 transition-all duration-300"
          >
            Get a Quote
          </button>
          <button
            data-testid="contact-engineering-btn"
            className="bg-dune-gold text-dune-primary font-headline uppercase tracking-wider text-xs font-bold px-6 py-3 hover:opacity-90 transition-all"
          >
            Contact Engineering
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-dune-primary/95 backdrop-blur-xl px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-headline uppercase tracking-wider text-sm font-bold py-2 ${
                  link.active ? 'text-dune-gold' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button className="bg-white/5 text-white font-headline uppercase tracking-wider text-xs font-bold px-6 py-3">
                Get a Quote
              </button>
              <button className="bg-dune-gold text-dune-primary font-headline uppercase tracking-wider text-xs font-bold px-6 py-3">
                Contact Engineering
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
