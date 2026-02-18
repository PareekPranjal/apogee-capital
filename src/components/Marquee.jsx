import { motion } from "framer-motion";

const items = [
  "Business Planning",
  "Growth Capital",
  "M&A Advisory",
  "Debt Syndication",
  "Capital Markets",
  "Strategic Consulting",
  "IPO Advisory",
  "Private Equity",
];

export default function Marquee() {
  return (
    <div className="relative py-10 overflow-hidden border-y border-white/[0.04]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-lg sm:text-xl lg:text-2xl font-light text-white/70 whitespace-nowrap flex items-center gap-8 shrink-0"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
