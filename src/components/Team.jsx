import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { LinkedinIcon, ArrowUpRight } from "lucide-react";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./SmoothScroll";

const team = [
  {
    name: "Rochak Gupta",
    role: "Founding Partner",
    qualification: "MBA (Finance)",
    experience: "8+",
    expertise:
      "Deal negotiation, structuring, and execution across investment banking, M&A, consultancy, and capital markets. Known for leading transactions from start to completion.",
    initial: "RG",
    gradient: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    name: "Ankush Mahajan",
    role: "Partner",
    qualification: "MBA (Postgraduate)",
    experience: "7+",
    expertise:
      "Investments and debt syndication for large and mid-sized corporations. Established sound networking with various companies & institutions.",
    initial: "AM",
    gradient: "from-teal/30 via-teal/10 to-transparent",
  },
  {
    name: "Kunal Sharma",
    role: "Partner",
    qualification: "MBA in Finance",
    experience: "7+",
    expertise:
      "Capital markets and investment banking in capital goods, infrastructure, and real estate. Specializes in private equity and IPOs.",
    initial: "KS",
    gradient: "from-blue/30 via-blue/10 to-transparent",
  },
];

function TeamCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease-out",
      }}
      className="group relative"
      data-cursor
    >
      <div className="glass glass-hover rounded-3xl p-10 h-full transition-all duration-700">
        {/* Avatar */}
        <div className="relative mb-10">
          <motion.div
            className={`w-28 h-28 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto relative overflow-hidden`}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-3xl font-bold text-white/90">{member.initial}</span>
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={isHovered ? { x: [-200, 200] } : { x: -200 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 w-28 h-28 mx-auto rounded-3xl"
            animate={isHovered ? { boxShadow: "0 0 40px rgba(201,168,76,0.15)" } : { boxShadow: "0 0 0px rgba(201,168,76,0)" }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-500">
            {member.name}
          </h3>
          <p className="text-accent/70 text-sm font-medium mb-1">{member.role}</p>
          <p className="text-white/20 text-xs mb-6">
            {member.qualification} &middot; {member.experience} Years
          </p>

          {/* Expanding description */}
          <motion.div
            animate={isHovered ? { height: "auto", opacity: 1 } : { height: 48, opacity: 0.7 }}
            className="overflow-hidden"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-white/40 leading-relaxed">{member.expertise}</p>
          </motion.div>

          {/* Social */}
          <motion.div
            className="mt-8 flex justify-center"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/50 transition-all duration-300"
            >
              <LinkedinIcon size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.03),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Leadership
              <span className="w-8 h-px bg-accent" />
            </span>
          </Reveal>

          <div className="mt-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <TextReveal text="Meet Our" delay={0.1} />
              {" "}
              <span className="gradient-text">
                <TextReveal text="Team" delay={0.25} />
              </span>
            </h2>
          </div>

          <Reveal delay={0.3}>
            <p className="mt-8 text-white/40 text-base lg:text-lg leading-relaxed">
              A seasoned team with over 30 years of combined experience across
              corporate advisory, debt syndication, investment banking, and capital markets.
            </p>
          </Reveal>
        </div>

        {/* Team cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <Reveal delay={0.5}>
          <div className="text-center mt-20">
            <div className="glass inline-flex items-center gap-5 rounded-full px-8 py-4">
              <span className="text-sm text-white/40">Interested in joining our team?</span>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="text-sm font-semibold text-accent hover:text-accent-light transition-colors inline-flex items-center gap-1 group"
                data-cursor
              >
                Get in Touch
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
