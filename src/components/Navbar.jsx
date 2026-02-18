import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Magnetic } from "./SmoothScroll";

const navLinks = [
  { name: "Home",     href: "#home" },
  { name: "About",    href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Deals",    href: "/deals", isRoute: true },
  { name: "Team",     href: "#team" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar({ show = false }) {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY }             = useScroll();
  const navigate                = useNavigate();
  const location                = useLocation();

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
      {/* ── Navbar bar ─────────────────────────────────────────────── */}
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

            {/* Desktop nav */}
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

            {/* Mobile burger button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={show ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? "bg-accent/10 border border-accent/30"
                  : "bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15]"
              }`}
              data-cursor
            >
              <div className="relative w-5 h-[14px]">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className={`absolute top-0 left-0 w-full h-[1.5px] rounded-full transition-colors duration-300 ${isOpen ? "bg-accent" : "bg-white"}`}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-3/4 h-[1.5px] bg-white/70 rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] rounded-full transition-colors duration-300 ${isOpen ? "bg-accent" : "bg-white"}`}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-full max-w-[340px] z-40 flex flex-col lg:hidden bg-[#090909] border-l border-white/[0.06]"
            >
              {/* Subtle gold glow inside panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(201,168,76,0.05),transparent_70%)] pointer-events-none" />

              {/* Panel header — no logo (navbar already shows it above) */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/[0.06] shrink-0">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30">
                  Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-6 py-6 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.35, delay: 0.08 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between py-4 border-b border-white/[0.05] hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-accent/40 group-hover:text-accent transition-colors duration-300 w-4 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl font-medium text-white/60 group-hover:text-white transition-colors duration-300">
                        {link.name}
                      </span>
                    </div>
                    <motion.div
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight
                        size={14}
                        className="text-white/15 group-hover:text-accent transition-colors duration-300"
                      />
                    </motion.div>
                  </motion.a>
                ))}
              </nav>

              {/* Panel footer */}
              <div className="px-6 pb-8 pt-5 border-t border-white/[0.06]">
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick({ href: "#contact" }); }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="btn-primary w-full justify-center mb-5"
                >
                  <span>Get in Touch</span> <ArrowRight size={14} />
                </motion.a>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-between text-[10px] tracking-[0.15em] uppercase text-white/20"
                >
                  <span>New Delhi, India</span>
                  <span>&copy; {new Date().getFullYear()} Apogee</span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
