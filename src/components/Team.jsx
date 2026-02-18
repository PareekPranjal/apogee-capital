import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./SmoothScroll";

import rochakImg from "../assets/Images/Rochak.jpeg";
import kumarjeeImg from "../assets/Images/Kumarjee.jpeg";
import kunalImg from "../assets/Images/Kunal.jpeg";

const team = [
  {
    name: "Rochak Gupta",
    role: "Founder & Director",
    qualification: "MBA Finance",
    experience: "21",
    expertise:
      "A seasoned finance professional with extensive experience across capital markets and investment banking. Expert in originating proprietary deal flow through strategic relationship management, and a trusted advisor to corporate boards with a proven track record in M&A, Private Equity Fund Raising, and Structured Finance.",
    image: rochakImg,
    email: "rochak@apogeecapital.co.in",
    headerGradient: "from-accent/25 via-accent/10 to-transparent",
    accentColor: "text-accent",
  },
  {
    name: "KumarJee Kandroo",
    role: "Partner",
    qualification: "M. Com, FCA",
    experience: "18",
    expertise:
      "A Fellow Chartered Accountant (FCA) with deep expertise in Strategic Audit & Taxation, Corporate Finance & Structured Finance, and M&A Execution & Due Diligence. He bridges organizational goals with Company Law and business regulations, managing intricate transactions and identifying strategic value.",
    image: kumarjeeImg,
    email: "kumarjee@apogeecapital.co.in",
    headerGradient: "from-teal/25 via-teal/10 to-transparent",
    accentColor: "text-teal",
  },
  {
    name: "Kunal Sharma",
    role: "Partner",
    qualification: "MBA Finance",
    experience: "16",
    expertise:
      "Experienced in Corporate Finance and Investment Banking within the Infrastructure and Real Estate sectors. Core competencies include Debt Finance & Structured Finance, designing customized financial instruments and debt structures to optimize balance sheets and fund large-scale projects.",
    image: kunalImg,
    email: "kunal@apogeecapital.co.in",
    headerGradient: "from-blue/25 via-blue/10 to-transparent",
    accentColor: "text-blue",
  },
];

function TeamCard({ member }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const touchRef = useRef(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    if (touchRef.current) return;
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (touchRef.current) return;
    setIsExpanded(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current || touchRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  };

  const handleTouchEnd = (e) => {
    touchRef.current = true;
    e.preventDefault();
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease-out",
      }}
      className="group relative"
      data-cursor
    >
      <div className="glass glass-hover rounded-3xl overflow-hidden h-full transition-all duration-700">

        {/* Header band with gradient + photo + experience */}
        <div className={`relative bg-gradient-to-br ${member.headerGradient} px-6 pt-6 pb-0`}>
          <div className="flex items-end justify-between">
            {/* Photo */}
            <motion.div
              className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
              animate={isExpanded ? { scale: 1.04 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={isExpanded ? { x: [-160, 160] } : { x: -160 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Experience badge */}
            <div className="text-right pb-3">
              <div className="text-4xl font-bold text-white leading-none">{member.experience}<span className="text-2xl">+</span></div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-white/50 mt-1">Yrs Experience</div>
            </div>
          </div>

          {/* Bottom fade into card body */}
          <div className="h-4 bg-gradient-to-b from-transparent to-transparent" />
        </div>

        {/* Card body */}
        <div className="px-6 pt-4 pb-5">
          {/* Name + Role */}
          <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-500 leading-tight">
            {member.name}
          </h3>
          <p className={`text-sm font-medium mt-0.5 mb-0.5 ${member.accentColor} opacity-80`}>{member.role}</p>
          <p className="text-white/30 text-xs mb-4">{member.qualification}</p>

          {/* Mobile tap hint */}
          <motion.div
            className="md:hidden flex items-center gap-1 overflow-hidden"
            animate={isExpanded
              ? { opacity: 0, height: 0, marginBottom: 0 }
              : { opacity: 1, height: "auto", marginBottom: 12 }
            }
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs text-white/40">Tap to read more</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={12} className="text-white/40" />
            </motion.span>
          </motion.div>

          {/* Expertise — expands on hover/tap */}
          <motion.div
            animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 44, opacity: 0.6 }}
            className="overflow-hidden mb-5"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-white/50 leading-relaxed">{member.expertise}</p>
          </motion.div>

          {/* Social links — always visible */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
            <a
              href="#"
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-accent transition-colors duration-300"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <span className="w-px h-3 bg-white/[0.08]" />
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-accent transition-colors duration-300"
            >
              <Mail size={13} />
              <span>{member.email}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-8 lg:py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.03),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Leadership
              <span className="w-8 h-px bg-accent" />
            </span>
          </Reveal>

          <div className="mt-6 flex justify-center">
            <h2 className="font-bold leading-none text-center">
              <span className="gradient-text text-3xl sm:text-4xl lg:text-5xl">
                <TextReveal text="Meet the Team" delay={0.2} />
              </span>
            </h2>
          </div>

          <Reveal delay={0.3}>
            <p className="mt-4 text-white/40 text-sm lg:text-base leading-relaxed">
              A seasoned team with over 55 years of combined experience across
              corporate advisory, debt syndication, investment banking, and capital markets.
            </p>
          </Reveal>
        </div>

        {/* Team cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.12}>
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <Reveal delay={0.5}>
          <div className="text-center mt-10">
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
