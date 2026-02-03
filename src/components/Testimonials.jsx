import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal, TextReveal, Magnetic } from "./SmoothScroll";

const testimonials = [
  {
    quote:
      "Apogee Capital helped us navigate a complex acquisition with remarkable precision. Their team's deep understanding of corporate finance was invaluable to our growth strategy.",
    author: "Managing Director",
    company: "Infrastructure Company",
  },
  {
    quote:
      "The business plan developed by Apogee gave us clarity and confidence to approach investors. We secured growth capital within a record timeframe and exceeded our targets.",
    author: "Founder & CEO",
    company: "Technology Startup",
  },
  {
    quote:
      "Their ongoing advisory goes far beyond the initial transaction. Apogee is a true long-term partner in our growth journey, consistently delivering strategic value.",
    author: "Chief Financial Officer",
    company: "Real Estate Enterprise",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.98 }),
  };

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(96,165,250,0.03),_transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Testimonials
              <span className="w-8 h-px bg-accent" />
            </span>
          </Reveal>
          <div className="mt-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <TextReveal text="Client" delay={0.1} />
              {" "}
              <span className="gradient-text">
                <TextReveal text="Voices" delay={0.25} />
              </span>
            </h2>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="relative glass rounded-3xl p-10 md:p-16 lg:p-20">
            {/* Quote icon */}
            <motion.div
              className="mb-10 flex justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote size={48} className="text-accent/15" />
            </motion.div>

            {/* Carousel */}
            <div className="relative min-h-[200px] sm:min-h-[180px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed font-light italic max-w-3xl mx-auto mb-10">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-base">
                      {testimonials[current].author}
                    </p>
                    <p className="text-white/30 text-sm mt-1">
                      {testimonials[current].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <Magnetic strength={0.2}>
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/30 transition-all duration-400"
                  data-cursor
                >
                  <ChevronLeft size={18} />
                </button>
              </Magnetic>

              <div className="flex gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="relative py-2"
                    data-cursor
                  >
                    <div className={`h-[2px] rounded-full transition-all duration-700 ${
                      i === current ? "w-10 bg-accent" : "w-3 bg-white/15 hover:bg-white/30"
                    }`} />
                  </button>
                ))}
              </div>

              <Magnetic strength={0.2}>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/30 transition-all duration-400"
                  data-cursor
                >
                  <ChevronRight size={18} />
                </button>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
