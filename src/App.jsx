import { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Background from "./components/Background";
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

function HomePage() {
  return (
    <>
      <Hero />
      {/* <Marquee /> */}
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

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="noise-bg">
      {/* Fixed ambient background — sits behind everything */}
      <Background />

      {/* Preloader overlays everything */}
      <Preloader onComplete={handleComplete} />

      {/* Content rendered behind preloader; transparent so Background shows */}
      <div className="min-h-screen">
        <Navbar show={loaded} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/deals" element={<DealsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
