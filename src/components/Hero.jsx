import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Counter, Magnetic, Parallax } from "./SmoothScroll";

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
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 lg:pt-32"
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
      <Parallax speed={-0.15} className="absolute top-[60%] right-[40%]">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[300px] h-[300px] rounded-full bg-blue/[0.02] blur-[60px]"
        />
      </Parallax>

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/3 w-32 md:w-64 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute right-0 top-2/3 w-32 md:w-64 h-px bg-gradient-to-l from-transparent via-white/[0.06] to-transparent" />

      {/* Main content */}
      <motion.div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center" style={{ opacity, scale }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
            Independent Financial Consulting
          </span>
        </motion.div>

        {/* Cinematic heading reveal */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-[-0.03em] leading-[1.05] text-white"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategic Vision.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-3">
          <motion.h1
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-[-0.03em] leading-[1.05] gradient-text"
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
          className="max-w-2xl mx-auto mb-14"
        >
          <p className="text-base sm:text-lg lg:text-xl text-white/40 leading-relaxed">
            Helping entrepreneurs and management teams realize their potential
            through expert business planning, growth capital, and strategic
            advisory.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
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
          className="mt-16 lg:mt-20"
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent mb-10 max-w-4xl mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
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
                {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/[0.12]" />}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                  {stat.display || <Counter value={stat.value} suffix={stat.suffix} delay={0.9 + i * 0.1} />}
                </div>
                <div className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Magnetic strength={0.3}>
          <motion.button
            onClick={() => scrollTo("#about")}
            className="flex flex-col items-center gap-3 text-white/20 hover:text-accent/60 transition-colors duration-500 group"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase group-hover:tracking-[0.5em] transition-all duration-500">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ChevronDown size={14} />
            </motion.div>
          </motion.button>
        </Magnetic>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
