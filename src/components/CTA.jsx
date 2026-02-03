import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { TextReveal, Magnetic, Reveal } from "./SmoothScroll";

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          background: [
            "radial-gradient(600px circle at 50% 50%, rgba(201,168,76,0.04), transparent 70%)",
            "radial-gradient(800px circle at 50% 50%, rgba(201,168,76,0.06), transparent 70%)",
            "radial-gradient(600px circle at 50% 50%, rgba(201,168,76,0.04), transparent 70%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] rounded-full border border-white/[0.02]"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full border border-white/[0.015]"
          animate={{ scale: [1.05, 1, 1.05], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div style={{ scale, opacity }} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
            <TextReveal text="Ready to" delay={0} />
            <br />
            <span className="gradient-text">
              <TextReveal text="Realize Your Potential?" delay={0.15} />
            </span>
          </h2>
        </div>

        <Reveal delay={0.3}>
          <p className="text-white/40 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you&apos;re planning your next growth phase, seeking capital,
            or navigating a strategic transaction — our team is ready to guide
            you every step of the way.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Magnetic strength={0.15}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
                data-cursor
              >
                <span>Start a Conversation</span> <ArrowRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline"
                data-cursor
              >
                <span>View Our Services</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
