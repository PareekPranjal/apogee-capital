import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp,
  Briefcase,
  BarChart3,
  Landmark,
  Building2,
  HandshakeIcon,
} from "lucide-react";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./SmoothScroll";

const services = [
  {
    icon: Briefcase,
    title: "Business Planning",
    description:
      "We develop comprehensive business plans that articulate your vision, map strategic growth paths, and position your company for capital acquisition.",
    features: ["Strategic Roadmaps", "Financial Modeling", "Market Analysis"],
    accent: "from-amber-500/10 to-orange-500/5",
    iconBg: "group-hover:shadow-amber-500/20",
    num: "01",
  },
  {
    icon: TrendingUp,
    title: "Growth Capital",
    description:
      "Securing the right capital at the right time. We identify and structure financing options tailored to your business stage and growth objectives.",
    features: ["Equity Raising", "Venture Capital", "Private Placements"],
    accent: "from-emerald-500/10 to-teal/5",
    iconBg: "group-hover:shadow-emerald-500/20",
    num: "02",
  },
  {
    icon: HandshakeIcon,
    title: "M&A Advisory",
    description:
      "End-to-end mergers and acquisitions advisory with expertise in deal negotiation, structuring, and execution across diverse sectors.",
    features: ["Buy-side Advisory", "Sell-side Advisory", "Due Diligence"],
    accent: "from-blue/10 to-indigo-500/5",
    iconBg: "group-hover:shadow-blue/20",
    num: "03",
  },
  {
    icon: Landmark,
    title: "Debt Syndication",
    description:
      "Leveraging our extensive network with financial institutions to arrange optimal debt structures for large and mid-sized corporations.",
    features: ["Term Loans", "Working Capital", "Project Finance"],
    accent: "from-violet-500/10 to-purple-500/5",
    iconBg: "group-hover:shadow-violet-500/20",
    num: "04",
  },
  {
    icon: BarChart3,
    title: "Capital Markets",
    description:
      "Expert guidance through capital market transactions including IPOs, private equity placements, and institutional fund raising.",
    features: ["IPO Advisory", "PE Placements", "Institutional Raises"],
    accent: "from-cyan-500/10 to-sky-500/5",
    iconBg: "group-hover:shadow-cyan-500/20",
    num: "05",
  },
  {
    icon: Building2,
    title: "Strategic Consulting",
    description:
      "Ongoing financial advisory that extends beyond capital events, helping clients navigate growth challenges and seize opportunities.",
    features: ["Corporate Strategy", "Financial Advisory", "Growth Planning"],
    accent: "from-rose-500/10 to-pink-500/5",
    iconBg: "group-hover:shadow-rose-500/20",
    num: "06",
  },
];

function ServiceCard({ service }) {
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
      className="group relative rounded-2xl overflow-hidden transition-all duration-700 h-full"
      data-cursor
    >
      {/* Mouse-following glow */}
      {isHovered && (
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-accent/[0.06] blur-[80px] pointer-events-none"
          animate={{ x: mousePos.x - 128, y: mousePos.y - 128 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      )}

      <div className="relative glass glass-hover rounded-2xl p-2.5 sm:p-3.5 h-full flex flex-col transition-all duration-700 hover:-translate-y-1">
        {/* Number */}
        <span className="absolute top-2 right-2.5 sm:top-3 sm:right-3.5 text-[8px] font-mono text-white/10 group-hover:text-accent/30 transition-colors duration-500">
          {service.num}
        </span>

        {/* Icon */}
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${service.accent} flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-110 transition-all duration-500 ${service.iconBg} group-hover:shadow-lg`}>
          <service.icon size={13} className="text-white/80 sm:hidden" />
          <service.icon size={15} className="text-white/80 hidden sm:block" />
        </div>

        {/* Title */}
        <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent transition-colors duration-500 leading-tight mb-1 sm:mb-1.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[10px] sm:text-xs text-white/40 leading-[1.5] mb-1.5 sm:mb-2 line-clamp-2">
          {service.description}
        </p>

        {/* Features */}
        <div className="hidden sm:flex flex-wrap gap-1 mt-auto">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/[0.03] text-white/30 border border-white/[0.04] group-hover:border-white/[0.08] group-hover:text-white/50 transition-all duration-500"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-4 lg:py-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.03),_transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-3 sm:mb-5">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              What We Do
            </span>
          </Reveal>

          <div className="mt-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
              <TextReveal text="Sector Expertise." delay={0.1} />
              <br />
              <span className="gradient-text">
                <TextReveal text="Precision Execution." delay={0.3} />
              </span>
            </h2>
          </div>

          <Reveal delay={0.4}>
            <p className="mt-4 text-white/40 text-sm lg:text-base leading-relaxed max-w-2xl">
              Comprehensive financial advisory solutions tailored to help
              entrepreneurs and businesses achieve their strategic objectives.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3" staggerDelay={0.08}>
          {services.map((service, i) => (
            <StaggerItem key={service.title} className="h-full">
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
