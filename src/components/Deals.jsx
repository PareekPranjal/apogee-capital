import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2,
  TrendingUp,
  Landmark,
  Factory,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./SmoothScroll";

const deals = [
  {
    icon: Building2,
    sector: "Real Estate",
    title: "Commercial Development Financing",
    value: "₹250 Cr+",
    type: "Debt Syndication",
    status: "Closed",
    accent: "from-amber-500/10 to-orange-500/5",
  },
  {
    icon: TrendingUp,
    sector: "Infrastructure",
    title: "Highway Project Fund Raise",
    value: "₹500 Cr+",
    type: "Private Equity",
    status: "Closed",
    accent: "from-emerald-500/10 to-teal/5",
  },
  {
    icon: Factory,
    sector: "Manufacturing",
    title: "Industrial Expansion Capital",
    value: "₹150 Cr+",
    type: "Structured Finance",
    status: "Closed",
    accent: "from-blue/10 to-indigo-500/5",
  },
  {
    icon: Landmark,
    sector: "Financial Services",
    title: "NBFC Acquisition Advisory",
    value: "₹300 Cr+",
    type: "M&A Advisory",
    status: "Closed",
    accent: "from-violet-500/10 to-purple-500/5",
  },
];

function DealCard({ deal }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl overflow-hidden transition-all duration-700"
      data-cursor
    >
      {isHovered && (
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-accent/[0.06] blur-[80px] pointer-events-none"
          animate={{ x: mousePos.x - 128, y: mousePos.y - 128 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      )}

      <div className="relative glass glass-hover rounded-2xl p-8 lg:p-10 h-full transition-all duration-700 hover:-translate-y-1">
        <div className="flex items-start justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${deal.accent} flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
          >
            <deal.icon size={24} className="text-white/80" />
          </div>
          <span className="text-[10px] px-3 py-1.5 rounded-full bg-accent/10 text-accent/80 border border-accent/20 font-medium">
            {deal.status}
          </span>
        </div>

        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-2 block">
          {deal.sector}
        </span>

        <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-500">
          {deal.title}
        </h3>

        <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/[0.04]">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-white/20 block mb-1">
              Deal Value
            </span>
            <span className="text-2xl font-bold gradient-text">{deal.value}</span>
          </div>
          <span className="text-[11px] text-white/30 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.04]">
            {deal.type}
          </span>
        </div>

        <motion.div
          className="flex items-center gap-2 text-sm font-medium text-accent/70 mt-6"
          animate={isHovered ? { x: 5, opacity: 1 } : { x: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          View Details <ArrowUpRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Deals() {
  return (
    <section id="deals" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,168,76,0.03),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Track Record
            </span>
          </Reveal>

          <div className="mt-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <TextReveal text="Our" delay={0.1} />
              {" "}
              <span className="gradient-text">
                <TextReveal text="Deals" delay={0.25} />
              </span>
            </h2>
          </div>

          <Reveal delay={0.3}>
            <p className="mt-8 text-white/40 text-base lg:text-lg leading-relaxed max-w-2xl">
              A proven track record of successfully executed transactions across
              diverse sectors, delivering exceptional value to our clients.
            </p>
          </Reveal>
        </div>

        {/* Deal cards */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          staggerDelay={0.12}
        >
          {deals.map((deal) => (
            <StaggerItem key={deal.title}>
              <DealCard deal={deal} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
