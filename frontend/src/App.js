import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import ScientificPrecision from "@/components/ScientificPrecision";
import GlobalReach from "@/components/GlobalReach";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ProductsPage from "@/pages/ProductsPage";
import ContactPage from "@/pages/ContactPage";

function HomePage() {
  return (
    <div className="bg-dune-surface font-body text-dune-on-surface">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <ScientificPrecision />
      <GlobalReach />
      <CallToAction />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
