import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Counter, Magnetic, Parallax } from "./SmoothScroll";
import Marquee from "./Marquee";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.95]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: 0, duration: 1.0 });
    } else {
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex flex-col overflow-hidden pt-20 lg:pt-24"
    >
      {/* Parallax background layers */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,76,0.08),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(45,212,191,0.04),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,_rgba(96,165,250,0.03),_transparent)]" />
        <motion.div
          className="absolute inset-0 opacity-[0.025]"
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Floating orbs */}
      <Parallax speed={-0.3} className="absolute top-[15%] right-[15%]">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]"
        />
      </Parallax>
      <Parallax speed={0.2} className="absolute bottom-[20%] left-[10%]">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-[400px] h-[400px] rounded-full bg-teal/[0.02] blur-[80px]"
        />
      </Parallax>

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/3 w-32 md:w-64 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute right-0 top-2/3 w-32 md:w-64 h-px bg-gradient-to-l from-transparent via-white/[0.06] to-transparent" />

      {/* ── Main content: fills all space above the Marquee ─────────── */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center max-w-7xl w-full mx-auto px-6 lg:px-8 text-center py-2"
        style={{ opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm mb-4 lg:mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
            A Boutique Investment Banking
          </span>
        </motion.div>

        {/* Headings — scale with both viewport width and height */}
        <div className="overflow-hidden mb-1 pb-1">
          <motion.h1
            className="font-bold tracking-[-0.03em] leading-[1.1] text-white"
            style={{ fontSize: "clamp(2rem, min(6vw, 8vh), 6rem)" }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategic Vision.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-3 lg:mb-4">
          <motion.h1
            className="font-bold tracking-[-0.03em] leading-[1.05] gradient-text"
            style={{ fontSize: "clamp(2rem, min(6vw, 8vh), 6rem)" }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Trusted Execution.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-xl mx-auto mb-5 lg:mb-7"
        >
          <p className="text-sm sm:text-base lg:text-lg text-white/40 leading-relaxed">
            Helping entrepreneurs and management teams realize their potential
            through expert business planning, growth capital, and strategic advisory.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={0.15}>
            <button onClick={() => scrollTo("#services")} className="btn-primary">
              <span>Explore Services</span> <ArrowRight size={16} />
            </button>
          </Magnetic>
          <Magnetic strength={0.15}>
            <button onClick={() => scrollTo("#about")} className="btn-outline">
              <span>Learn More</span>
            </button>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-5 lg:mt-7 w-full max-w-4xl"
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent mb-3 lg:mb-5 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {[
              { value: 55, suffix: "+", label: "Years Experience" },
              { value: 25, suffix: "+", label: "Transactions" },
              { value: 100, suffix: "+", label: "Clients Served" },
              { value: 0, label: "Headquarters", display: "New Delhi" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
                className="text-center relative"
              >
                {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.12]" />}
                <div
                  className="font-bold text-white mb-1 tabular-nums"
                  style={{ fontSize: "clamp(1.5rem, min(3.5vw, 4.5vh), 3rem)" }}
                >
                  {stat.display || <Counter value={stat.value} suffix={stat.suffix} delay={0.9 + i * 0.1} />}
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient fade above Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark/50 to-transparent pointer-events-none z-10" />

      {/* Marquee — sits at the very bottom of the Hero screen */}
      <div className="relative z-20 shrink-0">
        <Marquee />
      </div>
    </section>
  );
}
