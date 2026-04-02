import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { DUNE_LOGO } from '@/assets/logo';
import QuoteModal from '@/components/QuoteModal';
import ProductsMegaMenu from '@/components/ProductsMegaMenu';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products', hasMega: true },
  { label: 'Services', to: '#services' },
  { label: 'Certificates', to: '#certificates' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => { setMegaOpen(false); }, [location.pathname]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const isActive = (link) => {
    if (link.to.startsWith('#')) return false;
    if (link.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.to);
  };

  const renderLink = (link) => {
    const active = isActive(link);
    const cls = `font-headline uppercase tracking-wider text-[13px] font-bold transition-colors whitespace-nowrap ${
      active
        ? 'text-dune-gold border-b-2 border-dune-gold pb-1'
        : 'text-white/70 hover:text-white'
    }`;

    if (link.hasMega) {
      return (
        <div
          key={link.label}
          className="relative"
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <Link
            to={link.to}
            data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${cls} inline-flex items-center gap-1`}
          >
            {link.label}
            <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      );
    }

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dune-primary shadow-lg'
          : 'bg-dune-primary shadow-[0_20px_40px_-10px_rgba(0,3,32,0.4)]'
      }`}
      style={{ border: 'none' }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-12 max-w-[1920px] mx-auto h-[72px]">
        {/* Logo */}
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-3 flex-shrink-0">
          <img src={DUNE_LOGO} alt="Dune Oil Logo" className="h-[52px] w-auto" />
          <div className="flex flex-col">
            <span className="text-[17px] font-black tracking-tight text-white font-headline leading-tight">Dune Lubricants</span>
            <span className="text-[8px] uppercase tracking-[0.14em] text-white/40 font-label">and Oil IND L.L.C S.P</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-8 mx-auto">
          {navLinks.map(renderLink)}
        </div>

        {/* Get Quote Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button
            onClick={() => setQuoteOpen(true)}
            data-testid="get-quote-btn"
            className="bg-dune-gold text-dune-primary font-headline uppercase tracking-wider text-[12px] font-bold px-7 py-2.5 hover:brightness-110 transition-all"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button data-testid="mobile-menu-toggle" className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mega Menu */}
      <div onMouseEnter={handleMegaEnter} onMouseLeave={handleMegaLeave}>
        <ProductsMegaMenu visible={megaOpen} />
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-dune-primary/95 backdrop-blur-xl px-6 pb-6 border-t border-white/5">
          <div className="flex flex-col gap-4 pt-4">
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
            <div className="mt-4 pt-4 border-t border-white/5">
              <button onClick={() => { setMobileOpen(false); setQuoteOpen(true); }} className="bg-dune-gold text-dune-primary font-headline uppercase tracking-wider text-xs font-bold px-6 py-3 text-center block w-full">Get Quote</button>
            </div>
          </div>
        </div>
      )}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </nav>
  );
}
