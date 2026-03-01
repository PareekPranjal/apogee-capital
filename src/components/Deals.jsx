import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, ShoppingBag, Cog, LayoutGrid } from "lucide-react";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./SmoothScroll";

const deals = [
  {
    icon: Building2,
    sector: "Infrastructure",
    value: "₹500 Cr+",
    concluded: 4,
    ongoing: 3,
    types: ["Structured Finance", "M&A"],
    accent: "from-amber-500/10 to-orange-500/5",
    iconBg: "group-hover:shadow-amber-500/20",
    bar: "bg-amber-500/40",
  },
  {
    icon: ShoppingBag,
    sector: "Consumer",
    value: "₹150 Cr+",
    concluded: 5,
    ongoing: 5,
    types: ["Private Equity", "M&A"],
    accent: "from-emerald-500/10 to-teal/5",
    iconBg: "group-hover:shadow-emerald-500/20",
    bar: "bg-emerald-500/40",
  },
  {
    icon: Cog,
    sector: "Engineering",
    value: "₹350 Cr+",
    concluded: 3,
    ongoing: 4,
    types: ["Private Equity", "M&A"],
    accent: "from-blue/10 to-indigo-500/5",
    iconBg: "group-hover:shadow-blue/20",
    bar: "bg-blue/40",
  },
  {
    icon: LayoutGrid,
    sector: "Others",
    value: "₹300 Cr+",
    concluded: 2,
    ongoing: 5,
    types: ["Private Equity", "M&A"],
    accent: "from-violet-500/10 to-purple-500/5",
    iconBg: "group-hover:shadow-violet-500/20",
    bar: "bg-violet-500/40",
  },
];

function DealCard({ deal }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl overflow-hidden transition-all duration-700 h-full"
      data-cursor
    >
      {isHovered && (
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-accent/[0.05] blur-[70px] pointer-events-none"
          animate={{ x: mousePos.x - 112, y: mousePos.y - 112 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      )}

      <div className="relative glass glass-hover rounded-2xl p-3.5 sm:p-4 lg:p-5 h-full flex flex-col transition-all duration-700 hover:-translate-y-1">
        {/* Icon + type badges */}
        <div className="flex items-start justify-between mb-2.5 sm:mb-3">
          <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-gradient-to-br ${deal.accent} flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${deal.iconBg} group-hover:shadow-lg`}>
            <deal.icon size={15} className="text-white/70 lg:hidden" />
            <deal.icon size={18} className="text-white/70 hidden lg:block" />
          </div>
          <div className="flex gap-1 flex-wrap justify-end">
            {deal.types.map((t) => (
              <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/30 border border-white/[0.05] group-hover:border-white/10 group-hover:text-white/50 transition-all duration-500">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Sector name */}
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-accent transition-colors duration-500 leading-tight mb-2.5 sm:mb-3">
          {deal.sector}
        </h3>

        {/* Total value */}
        <div className="mb-2.5 sm:mb-3">
          <span className="text-[9px] uppercase tracking-widest text-white/20 block mb-1">Total Transactions</span>
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text leading-none">{deal.value}</span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.04] mb-2.5 sm:mb-3" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <div className="glass rounded-lg lg:rounded-xl p-2 sm:p-2.5 lg:p-3 text-center">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white block leading-none mb-0.5">{deal.concluded}</span>
            <span className="text-[9px] uppercase tracking-wider text-white/25 leading-tight block">Concluded</span>
          </div>
          <div className="glass rounded-lg lg:rounded-xl p-2 sm:p-2.5 lg:p-3 text-center">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white block leading-none mb-0.5">{deal.ongoing}</span>
            <span className="text-[9px] uppercase tracking-wider text-white/25 leading-tight block">Ongoing</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Deals() {
  return (
    <section id="deals" className="relative py-4 lg:py-6 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,168,76,0.03),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="max-w-3xl mb-3 sm:mb-5">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Track Record
            </span>
          </Reveal>

          <div className="mt-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
              <TextReveal text="Our" delay={0.1} />
              {" "}
              <span className="gradient-text">
                <TextReveal text="Deals" delay={0.25} />
              </span>
            </h2>
          </div>

          <Reveal delay={0.3}>
            <p className="mt-4 text-white/40 text-sm lg:text-base leading-relaxed max-w-2xl">
              A proven track record of successfully executed transactions across
              diverse sectors, delivering exceptional value to our clients.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          staggerDelay={0.1}
        >
          {deals.map((deal) => (
            <StaggerItem key={deal.sector} className="h-full">
              <DealCard deal={deal} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
