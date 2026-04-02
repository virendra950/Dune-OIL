import { useState } from 'react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_888a19ae-5a80-4564-9e16-86ab86e3567b/artifacts/81vztrzy_Dune%20oil.jpeg";

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer data-testid="footer" className="bg-dune-primary w-full pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-[1920px] mx-auto">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={LOGO_URL}
                alt="Dune Oil Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white font-headline leading-tight">
                Dune Lubricants
              </span>
              <span className="text-[8px] uppercase tracking-[0.12em] text-white/40 font-label">
                and Oil IND L.L.C S.P
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60 font-body">
            Advanced lubrication technology engineered for the world's most extreme industrial challenges.
          </p>
          <div className="flex gap-4 mt-6">
            <span className="material-symbols-outlined text-white/40 cursor-pointer hover:text-dune-gold transition-colors">
              language
            </span>
            <span className="material-symbols-outlined text-white/40 cursor-pointer hover:text-dune-gold transition-colors">
              mail
            </span>
          </div>
        </div>

        {/* Technical Resources */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-headline">
            Technical Resources
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" data-testid="footer-link-tds" className="text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all inline-block font-body">
                Technical Data Sheets
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-sds" className="text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all inline-block font-body">
                Safety Data Sheets
              </a>
            </li>
            <li>
              <a href="#" data-testid="footer-link-cert" className="text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all inline-block font-body">
                Quality Certifications
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-headline">
            Company
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all inline-block font-body">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all inline-block font-body">
                Global Logistics
              </a>
            </li>
            <li>
              <a href="#" className="text-white/60 hover:text-dune-gold hover:translate-x-1 transition-all inline-block font-body">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-headline">
            Connect
          </h4>
          <p className="text-sm text-white/60 mb-6 font-body">
            Receive technical updates and product announcements.
          </p>
          <div className="flex">
            <input
              data-testid="footer-email-input"
              className="bg-white/5 border-none text-white text-sm focus:ring-1 focus:ring-dune-gold flex-grow px-4 py-2 outline-none placeholder:text-white/30"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              data-testid="footer-email-submit"
              className="bg-dune-gold p-2 text-dune-primary hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 px-6 md:px-12 max-w-[1920px] mx-auto border-t border-white/5 pt-10">
        <p className="text-sm text-white/40 text-center font-body">
          &copy; 2024 Dune Lubricants and Oil IND L.L.C S.P. Engineered for Precision.
        </p>
      </div>
    </footer>
  );
}
