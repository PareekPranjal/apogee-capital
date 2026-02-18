import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, CheckCircle2, Send } from "lucide-react";
import { Reveal, TextReveal, StaggerContainer, StaggerItem } from "./SmoothScroll";

const contactInfo = [
  { icon: MapPin, label: "Office", value: "A1/132, Lower Ground Floor, Safdarjung Enclave, New Delhi-110029" },
  { icon: Mail, label: "Email", value: "info@apogeecapital.co.in", href: "mailto:info@apogeecapital.co.in" },
  { icon: Phone, label: "Phone", value: "+91 XXXX XXXX XX", href: "tel:+91" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = (name) =>
    `w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-white/15 focus:outline-none transition-all duration-500 ${
      focused === name
        ? "border-accent/40 bg-white/[0.05] shadow-[0_0_30px_rgba(201,168,76,0.05)]"
        : "border-white/[0.06] hover:border-white/[0.1]"
    }`;

  return (
    <section id="contact" className="relative py-8 lg:py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,168,76,0.04),_transparent_60%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent inline-flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-accent" />
              Contact
              <span className="w-8 h-px bg-accent" />
            </span>
          </Reveal>
     <div className="mt-6 flex justify-center">
  <h2 className="flex items-end font-bold leading-none text-center gap-2">
    
    {/* Let's — white */}
    <span className="text-white text-3xl sm:text-4xl lg:text-5xl">
      <TextReveal text="Let's" delay={0.2} />
    </span>

    {/* Connect — gradient */}
    <span className="gradient-text text-3xl sm:text-4xl lg:text-5xl">
      <TextReveal text="Connect" delay={0.3} />
    </span>

  </h2>
</div>


          <Reveal delay={0.3}>
            <p className="mt-4 text-white/40 text-sm lg:text-base leading-relaxed">
              Ready to realize your potential? Reach out to discuss how Apogee
              Capital can help you achieve your business objectives.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - info */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-5" staggerDelay={0.1}>
              {contactInfo.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/[0.08] flex items-center justify-center shrink-0 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-500">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white/60 hover:text-accent transition-colors duration-300 text-sm lg:text-base" data-cursor>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/60 text-sm lg:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.5}>
              <div className="mt-8 pt-6 border-t border-white/[0.04]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-4">Why Choose Us</p>
                <div className="space-y-3">
                  {[
                    "30+ years of cumulative experience",
                    "25+ successful advisory transactions",
                    "Ongoing advisory beyond capital events",
                    "Independent & client-focused approach",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                      className="flex items-center gap-3 text-sm text-white/40"
                    >
                      <CheckCircle2 size={14} className="text-teal shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right - form */}
          <Reveal delay={0.3} direction="right" className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 lg:p-8 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/[0.04] to-transparent pointer-events-none" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle2 size={36} className="text-teal" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Message Sent</h3>
                  <p className="text-white/40 max-w-sm mx-auto mb-8">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-xs" data-cursor>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className={inputClasses("name")}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className={inputClasses("email")}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className={inputClasses("company")}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3">Service</label>
                    <select
                      className={inputClasses("service")}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select a service</option>
                      <option value="business-planning" className="bg-[#0a0a0a]">Business Planning</option>
                      <option value="growth-capital" className="bg-[#0a0a0a]">Growth Capital</option>
                      <option value="ma-advisory" className="bg-[#0a0a0a]">M&A Advisory</option>
                      <option value="debt-syndication" className="bg-[#0a0a0a]">Debt Syndication</option>
                      <option value="capital-markets" className="bg-[#0a0a0a]">Capital Markets</option>
                      <option value="strategic-consulting" className="bg-[#0a0a0a]">Strategic Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/25 mb-3">Message</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your project..."
                      className={`${inputClasses("message")} resize-none`}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor
                  >
                    <span>Send Message</span> <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
