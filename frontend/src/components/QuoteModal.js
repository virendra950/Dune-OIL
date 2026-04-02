import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '' });
  const [submitted, setSubmitted] = useState(false);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', inquiry: '' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      data-testid="quote-modal-backdrop"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 animate-in fade-in duration-200"
    >
      <div
        data-testid="quote-modal"
        className="relative bg-white w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-dune-primary px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-headline text-lg font-bold text-white">Get a Quote</h2>
            <p className="text-white/50 text-xs font-label mt-0.5">We'll respond within 24 hours</p>
          </div>
          <button
            data-testid="quote-modal-close"
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div data-testid="quote-success" className="text-center py-8">
              <span
                className="material-symbols-outlined text-green-500 text-5xl mb-3 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <h3 className="font-headline text-lg font-bold text-dune-primary mb-1">Inquiry Submitted</h3>
              <p className="text-dune-on-surface-variant text-sm">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" data-testid="quote-form">
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest font-bold text-dune-on-surface-variant block mb-1.5">
                  Full Name
                </label>
                <input
                  data-testid="quote-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-dune-surface-container-low border-none p-3 text-sm focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline/40"
                />
              </div>
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest font-bold text-dune-on-surface-variant block mb-1.5">
                  Email
                </label>
                <input
                  data-testid="quote-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  className="w-full bg-dune-surface-container-low border-none p-3 text-sm focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline/40"
                />
              </div>
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest font-bold text-dune-on-surface-variant block mb-1.5">
                  Phone Number
                </label>
                <input
                  data-testid="quote-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 -- --- ----"
                  className="w-full bg-dune-surface-container-low border-none p-3 text-sm focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline/40"
                />
              </div>
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest font-bold text-dune-on-surface-variant block mb-1.5">
                  Your Inquiry
                </label>
                <textarea
                  data-testid="quote-inquiry"
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Describe your requirements..."
                  className="w-full bg-dune-surface-container-low border-none p-3 text-sm focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline/40 resize-none"
                />
              </div>
              <button
                data-testid="quote-submit"
                type="submit"
                className="w-full bg-dune-gold text-dune-primary font-headline font-bold uppercase tracking-widest text-sm py-3.5 hover:brightness-110 transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
