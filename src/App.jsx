import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DealsPage from "./pages/DealsPage";

function HomePage({ loaded }) {
  return (
    <>
      <Hero show={loaded} />
      <Marquee />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="noise-bg">
      <CustomCursor />

      {/* Preloader overlays everything */}
      <Preloader onComplete={handleComplete} />

      {/* Content always rendered behind preloader */}
      <div className="min-h-screen bg-dark">
        <Navbar show={loaded} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage loaded={loaded} />} />
            <Route path="/deals" element={<DealsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
