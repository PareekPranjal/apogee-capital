import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    const interactives = document.querySelectorAll("a, button, input, textarea, select, [data-cursor]");
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, input, textarea, select, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, []);

  // Hide on mobile/touch
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0.05, ease: "linear" }}
      >
        <div className={`rounded-full bg-white transition-all duration-300 ${hovering ? "w-0 h-0" : "w-2 h-2"}`} />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 30 : 20),
          y: pos.y - (hovering ? 30 : 20),
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <div
          className={`rounded-full border border-white/80 transition-all duration-300 ${
            hovering ? "w-[60px] h-[60px] border-accent/60 bg-accent/5" : "w-10 h-10"
          }`}
        />
      </motion.div>
    </>
  );
}
