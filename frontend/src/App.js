import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import ScientificPrecision from "@/components/ScientificPrecision";
import GlobalReach from "@/components/GlobalReach";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

function App() {
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

export default App;
