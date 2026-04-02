# Dune Lubricants Landing Page - PRD

## Original Problem Statement
Build a landing page for Dune Lubricants and Oil IND L.L.C S.P based on provided HTML template. Include company logo (Dune Oil) with white background removed, placed in header and footer.

## Company
- **Brand**: Dune Lubricants and Oil IND L.L.C S.P
- **Logo**: Dune Oil (bird/falcon with oil drop)

## What's Been Implemented (Dec 2025)
- Full landing page with 7 sections: Navbar, Hero, Product Categories, Scientific Precision, Global Reach, CTA, Footer
- Company logo integrated in Navbar and Footer with circular white container
- Mobile responsive design with hamburger menu
- All images from original template preserved
- Custom Tailwind color palette (dune-primary, dune-gold, etc.)
- Fonts: Manrope (headlines), Inter (body), Work Sans (labels)
- CSS animations: fade-in-up, ping for map marker
- All data-testid attributes on interactive elements

## Architecture
- Frontend: React SPA (no router needed - single page)
- Backend: FastAPI (minimal - no endpoints used yet)
- Database: MongoDB (not used yet)

## Prioritized Backlog
### P0 (Next)
- Make nav links scroll to sections
- Make buttons functional (Get a Quote, Contact Engineering forms)
- Email subscription backend

### P1
- Products page
- About Us page
- Find a Retailer page
- Dune Advisor page

### P2
- SEO optimization
- Performance optimization (image lazy loading)
- Analytics integration
