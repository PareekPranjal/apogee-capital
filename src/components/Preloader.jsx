import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const eased = 1 - Math.pow(1 - current / steps, 3);
      setProgress(Math.round(eased * 100));

      if (current >= steps) {
        clearInterval(timer);
        // Small pause at 100%, then fade out, then signal done
        setTimeout(() => {
          setVisible(false);
          // Wait for fade-out to finish before telling App we're done
          setTimeout(() => onComplete(), 600);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!visible) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#050505] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
            <span className="text-dark font-bold text-2xl">A</span>
          </div>
        </motion.div>

        {/* Company name letter split */}
        <div className="flex gap-[2px] mb-8 overflow-hidden">
          {"APOGEE".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl sm:text-4xl font-bold tracking-[0.2em] text-white"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/30 mb-16"
        >
          Capital Advisors Pvt. Ltd.
        </motion.span>

        {/* Progress bar */}
        <div className="w-48 sm:w-64">
          <div className="h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent-light"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between mt-3"
          >
            <span className="text-[10px] tracking-widest uppercase text-white/20">
              Loading
            </span>
            <span className="text-[10px] tabular-nums text-white/40 font-medium">
              {progress}%
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
