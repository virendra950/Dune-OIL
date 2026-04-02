import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CONTACT_INFO = {
  email: 'info.duneoil@gmail.com',
  website: 'duneindustries.com',
  phones: ['+971 50 3343543', '+971 52 9505734'],
  address: {
    name: 'Dune Lubricants & Oil IND L.L.C S.P',
    area: 'Al Sajja Industrial Area',
    city: 'Sharjah',
    country: 'United Arab Emirates',
  },
  mapLink: 'https://maps.app.goo.gl/RK4rt1SFbLhVpeA66?g_st=iw',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.123!2d55.52!3d25.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzQ4LjAiTiA1NcKwMzEnMTIuMCJF!5e0!3m2!1sen!2sae!4v1700000000000',
};

const inquiryTypes = [
  'Lubricant Specifications',
  'Bulk Order Quote',
  'Retail Distribution',
  'Technical Data Sheets',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', inquiryType: inquiryTypes[0], phone: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-dune-surface font-body text-dune-on-surface">
      <Navbar />
      <main className="pt-24 md:pt-32 min-h-screen">
        {/* Hero Section */}
        <section data-testid="contact-hero" className="px-6 md:px-12 max-w-[1920px] mx-auto mb-16 md:mb-24">
          <div className="relative overflow-hidden bg-[#00155e] h-[300px] md:h-[400px] flex items-center p-8 md:p-16">
            <div className="absolute inset-0 z-0">
              <img
                alt="Industrial facility"
                className="w-full h-full object-cover opacity-40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMW9baWH_YWeB5VZDEBTesiLHPWdG15JXQl6HUz3DJj50XSpKJsMwlBpvKxhT3x8xQne8TAYSyDIDTr0ageEOZl21ZZQ-NeqzXjl4XH52FvV22WMUs_Oov55nCNh8UkXrmgs2PYFH7OsEgXAtdSLXhms-2iAXVokBV7V6KN74x6-7Iu1Ge3_ob3Ib01KpfCy_j4MusvtLxj5NSuBeHA14dG7ljrnprYczQPRGdOr1H3NTAojGdoY_oqJnOW8eLzdm9eDq1eGRd6Q"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dune-primary to-transparent opacity-80" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="font-label text-dune-gold uppercase tracking-widest font-bold mb-4 block text-sm">
                Get In Touch
              </span>
              <h1 data-testid="contact-heading" className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Contact our <span className="text-dune-gold">Engineering</span> Command.
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-body max-w-xl">
                Precision-engineered support for global logistics and heavy industry. Reach out to our technical team in Sharjah.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section data-testid="contact-grid" className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 md:mb-32">
          {/* Information Panel */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-dune-primary">
                Regional Headquarters
              </h2>

              {/* Address Card */}
              <div data-testid="contact-address" className="bg-dune-surface-container-low p-8 border-l-4 border-dune-gold">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-dune-gold" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-dune-primary mb-2">
                      Sharjah Operations Center
                    </h3>
                    <p className="font-body text-dune-on-surface-variant leading-relaxed">
                      {CONTACT_INFO.address.name}<br />
                      {CONTACT_INFO.address.area},<br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
                    </p>
                    <a
                      href={CONTACT_INFO.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="view-on-map-link"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-dune-gold hover:underline font-headline uppercase tracking-wider"
                    >
                      View on Google Maps
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-testid="contact-email-card" className="bg-white p-8 shadow-sm">
                  <span className="material-symbols-outlined text-dune-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    mail
                  </span>
                  <h3 className="font-headline font-bold text-dune-primary mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    data-testid="contact-email"
                    className="font-body text-[#00155e] font-medium hover:underline text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div data-testid="contact-phone-card" className="bg-white p-8 shadow-sm">
                  <span className="material-symbols-outlined text-dune-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    call
                  </span>
                  <h3 className="font-headline font-bold text-dune-primary mb-1">Phone</h3>
                  <div className="space-y-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        data-testid={`contact-phone-${phone.slice(-4)}`}
                        className="block font-body text-dune-on-surface-variant text-sm hover:text-dune-primary transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Website */}
              <div data-testid="contact-website-card" className="bg-white p-8 shadow-sm">
                <span className="material-symbols-outlined text-dune-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  language
                </span>
                <h3 className="font-headline font-bold text-dune-primary mb-1">Website</h3>
                <a
                  href={`https://${CONTACT_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-website"
                  className="font-body text-[#00155e] font-medium hover:underline text-sm"
                >
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div data-testid="contact-map" className="overflow-hidden h-[300px] bg-dune-surface-container-high relative shadow-lg">
              <iframe
                title="Dune Lubricants Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500!2d55.640051!3d25.339778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <a
                href={CONTACT_INFO.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white p-4 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <p className="font-label font-bold text-dune-primary uppercase tracking-tighter text-sm">HQ Location</p>
                <p className="text-xs text-dune-on-surface-variant">{CONTACT_INFO.address.area}, {CONTACT_INFO.address.city}</p>
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,3,32,0.05)]">
            <div className="mb-10">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-dune-primary mb-2">Technical Inquiry</h2>
              <p className="text-dune-on-surface-variant font-body">
                Submit your technical specifications or procurement requirements below.
              </p>
            </div>

            {submitted ? (
              <div data-testid="form-success-message" className="bg-green-50 border border-green-200 p-8 text-center">
                <span className="material-symbols-outlined text-green-600 text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <h3 className="font-headline text-xl font-bold text-green-800 mb-2">Inquiry Submitted</h3>
                <p className="text-green-700 text-sm">Our engineering team will review your requirements and respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest font-bold text-dune-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      data-testid="form-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-dune-surface-container-low border-none p-4 focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline-variant"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest font-bold text-dune-on-surface-variant">
                      Company Email
                    </label>
                    <input
                      data-testid="form-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-dune-surface-container-low border-none p-4 focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline-variant"
                      placeholder="name@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest font-bold text-dune-on-surface-variant">
                      Inquiry Type
                    </label>
                    <select
                      data-testid="form-inquiry-type"
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-dune-surface-container-low border-none p-4 focus:bg-dune-surface-container-high focus:ring-0 transition-colors appearance-none"
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest font-bold text-dune-on-surface-variant">
                      Phone Number
                    </label>
                    <input
                      data-testid="form-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-dune-surface-container-low border-none p-4 focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline-variant"
                      placeholder="+971 -- --- ----"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest font-bold text-dune-on-surface-variant">
                    Your Message
                  </label>
                  <textarea
                    data-testid="form-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-dune-surface-container-low border-none p-4 focus:bg-dune-surface-container-high focus:ring-0 transition-colors placeholder:text-dune-outline-variant"
                    placeholder="Provide details about your machinery or technical requirements..."
                    rows="6"
                    required
                  />
                </div>
                <button
                  data-testid="form-submit-btn"
                  type="submit"
                  className="w-full bg-dune-primary text-white font-headline font-extrabold uppercase tracking-widest py-5 hover:bg-[#00155e] transition-all flex items-center justify-center gap-3 group"
                >
                  Deploy Inquiry
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Technical Assistance CTA */}
        <section data-testid="contact-cta" className="bg-dune-primary py-16 md:py-24 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <img
              alt="Oil texture"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWUbQG6PwQFD1EjKPUPY38vndSr49yGW0L46lDS9fHiUn9gN5BVyi9k43KsjipLkPPaxhqwKR_YQk1VR0AT1emsfdBjhL3gwtMgzGyJmyFr9J5AWrUnwWN9YfRFA1z2sMlLT0avH-ziJBwvvDt75ro4JVhIGKIL8l5QCcRbx8nn1fTK3OyJ9Z_8DS_l685cxIwreWfB1taiPkzODkdUkX4DxmEkLBfC3mNuUooAg1LQfInfXsQkcRXXwj4F5sit3x90aliVheaw"
            />
          </div>
          <div className="px-6 md:px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-3xl">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white mb-6">
                Need Immediate Technical Assistance?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Our chemical engineers are on standby to assist with viscosity mapping and machinery performance analysis across the MENA region.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`}
                data-testid="cta-speak-engineer-btn"
                className="bg-dune-gold text-dune-primary font-headline font-bold uppercase tracking-wider px-10 py-5 hover:scale-105 transition-transform whitespace-nowrap"
              >
                Speak to Engineer
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
