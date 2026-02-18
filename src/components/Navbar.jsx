import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Magnetic } from "./SmoothScroll";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Deals", href: "/deals", isRoute: true },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ show = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    } else if (location.pathname !== "/") {
      // If on a different page, navigate home first then scroll
      navigate("/");
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: show ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Magnetic strength={0.1}>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); handleLogoClick(); }}
                className="flex items-center gap-3 group"
                data-cursor
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-dark font-bold text-lg">A</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-500">
                    Apogee
                  </span>
                  <span className="block text-[9px] tracking-[0.3em] uppercase text-white/30">
                    Capital Advisors Pvt. Ltd.
                  </span>
                </div>
              </a>
            </Magnetic>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link, i) => (
                <Magnetic key={link.name} strength={0.1}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={show ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className={`relative px-5 py-2 text-[15px] font-medium hover:text-white transition-colors duration-400 group ${
                      link.isRoute && location.pathname === link.href
                        ? "text-accent"
                        : "text-white/50"
                    }`}
                    data-cursor
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent group-hover:w-5 transition-all duration-500 ease-out" />
                  </motion.a>
                </Magnetic>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <Magnetic strength={0.15}>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick({ href: "#contact" }); }}
                    className="btn-primary ml-6 text-[11px] py-3 px-6"
                    data-cursor
                  >
                    <span>Get in Touch</span> <ArrowRight size={13} />
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            {/* Mobile toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={show ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center"
              data-cursor
            >
              <div className="relative w-6 h-4">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-full h-[1.5px] bg-white"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                  className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white -translate-y-1/2"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col items-start justify-center px-10 sm:px-16">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden w-full border-b border-white/[0.04]">
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="block py-5 text-4xl sm:text-5xl font-light text-white/80 hover:text-accent transition-colors duration-300 hover:pl-4"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick({ href: "#contact" }); }}
                  className="btn-primary"
                >
                  <span>Get in Touch</span> <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-10 sm:px-16 pb-10 text-xs text-white/20 flex justify-between"
            >
              <span>New Delhi, India</span>
              <span>&copy; {new Date().getFullYear()} Apogee</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
