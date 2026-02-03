import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { LinkedinIcon, Mail, ArrowUpRight } from "lucide-react";
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
    gradient: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    name: "KumarJee Kandroo",
    role: "Partner",
    qualification: "M. Com, FCA",
    experience: "18",
    expertise:
      "A Fellow Chartered Accountant (FCA) with deep expertise in Strategic Audit & Taxation, Corporate Finance & Structured Finance, and M&A Execution & Due Diligence. He bridges organizational goals with Company Law and business regulations, managing intricate transactions and identifying strategic value.",
    image: kumarjeeImg,
    gradient: "from-teal/30 via-teal/10 to-transparent",
  },
  {
    name: "Kunal Sharma",
    role: "Partner",
    qualification: "MBA Finance",
    experience: "16",
    expertise:
      "Experienced in Corporate Finance and Investment Banking within the Infrastructure and Real Estate sectors. Core competencies include Debt Finance & Structured Finance, designing customized financial instruments and debt structures to optimize balance sheets and fund large-scale projects.",
    image: kunalImg,
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
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
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
            className="mt-8 flex justify-center gap-3"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/50 transition-all duration-300"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/50 transition-all duration-300"
            >
              <Mail size={15} />
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

    <div className="mt-6 flex justify-center">
  <h2 className="flex items-end font-bold leading-none text-center gap-2">
    
   

    {/* Connect — gradient */}
    <span className="gradient-text text-4xl sm:text-5xl lg:text-6xl">
      <TextReveal text="Team" delay={0.3} />
    </span>

  </h2>
</div>


          <Reveal delay={0.3}>
            <p className="mt-8 text-white/40 text-base lg:text-lg leading-relaxed">
              A seasoned team with over 55 years of combined experience across
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
