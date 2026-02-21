import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Heart, Target } from "lucide-react";
import { Reveal, TextReveal, LineReveal, Counter, StaggerContainer, StaggerItem, Parallax } from "./SmoothScroll";

const values = [
  {
    icon: Heart,
    title: "Honesty & Integrity",
    desc: "We maintain the highest ethical standards in every advisory engagement and client relationship.",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-400",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "Building lasting relationships founded on transparency, reliability, and mutual respect.",
    color: "from-blue/20 to-blue/5",
    iconColor: "text-blue",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Creative, fast, and cost-efficient solutions that meet the dynamic needs of growing businesses.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Target,
    title: "Cost Effectiveness",
    desc: "Delivering maximum value through strategic planning and efficient execution of every transaction.",
    color: "from-teal/20 to-teal/5",
    iconColor: "text-teal",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={sectionRef} className="relative py-8 lg:py-10 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-1/50 via-transparent to-gray-1/50"
        style={{ opacity: bgOpacity }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Decorative floating element */}
      <Parallax speed={-0.2} className="absolute top-20 right-10 hidden lg:block">
        <div className="w-72 h-72 rounded-full border border-white/[0.03] opacity-40" />
      </Parallax>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center gap-3">
                <span className="w-8 h-px bg-accent" />
                About Us
              </span>
            </Reveal>

            <div className="mt-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
                <TextReveal text="Realize Your" delay={0.1} />
                <br />
                <span className="gradient-text">
                  <TextReveal text="Potential" delay={0.3} />
                </span>
              </h2>
            </div>

            <Reveal delay={0.3}>
              <div className="mt-4 space-y-3">
                <p className="text-white/50 leading-[1.7] text-sm lg:text-base">
                  Apogee Capital Advisors Pvt. Ltd. is an independent corporate financial
                  consulting firm headquartered in New Delhi. We specialize in
                  business advisory services and growth capital acquisition for
                  entrepreneurs and management teams.
                </p>
                <p className="text-white/50 leading-[1.7] text-sm lg:text-base">
                  We help our clients comprehend their business potential and
                  transform objectives into achievable realities. Our proprietary
                  approach to corporate financial planning draws from decades of
                  experience.
                </p>
                <p className="text-white/50 leading-[1.7] text-sm lg:text-base">
                  With flexibility beyond traditional investment banking, we
                  provide personalized services and continue as an ongoing
                  financial advisor long after the capital event has occurred.
                </p>
              </div>
            </Reveal>

            <LineReveal className="mt-8 max-w-xs" delay={0.5} />

            {/* Stats */}
            <Reveal delay={0.6}>
              <div className="mt-6 flex gap-12">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white">
                    <Counter value={55} suffix="+" delay={0.3} />
                  </div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/30 mt-1">
                    Years Combined<br />Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white">
                    <Counter value={25} suffix="+" delay={0.5} />
                  </div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/30 mt-2">
                    Advisory<br />Transactions
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column - values */}
          <div>
            <Reveal delay={0.2}>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/20 inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-white/20" />
                Core Values
              </span>
            </Reveal>

            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="group glass glass-hover rounded-2xl p-5 transition-all duration-700 hover:translate-x-2">
                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <value.icon size={24} className={value.iconColor} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-500">
                          {value.title}
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
