import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Reveal, Magnetic } from "./SmoothScroll";

const footerLinks = {
  Services: [
    "Business Planning",
    "Growth Capital",
    "M&A Advisory",
    "Debt Syndication",
    "Strategic Consulting",
  ],
  Company: ["About Us", "Our Team", "Credentials", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Disclaimer"],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#050505] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        {/* Top: brand + back to top */}
        <div className="flex items-start justify-between mb-20">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  <span className="text-dark font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Apogee</span>
                  <span className="block text-[9px] tracking-[0.3em] uppercase text-white/30">
                    Capital Advisors Pvt. Ltd.
                  </span>
                </div>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xl">
                An independent corporate finance advisory firm, we empower
                visionary entrepreneurs through deep industry expertise and
                personalized service, navigating complex M&A transactions and
                securing growth capital to drive long-term strategic value.
              </p>
            </div>
          </Reveal>

          <Magnetic strength={0.2}>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/30 transition-all duration-500 group"
              data-cursor
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>
          </Magnetic>
        </div>

        {/* Links grid */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20 mb-6">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/35 hover:text-accent transition-colors duration-400 inline-flex items-center gap-1 group"
                        data-cursor
                      >
                        {link}
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Office column */}
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20 mb-6">
                Office
              </h4>
              <p className="text-sm text-white/35 leading-relaxed">
                A1/132, Lower Ground Floor
                <br />
                Safdarjung Enclave
                <br />
                New Delhi-110029
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/30 transition-all duration-300"
                  data-cursor
                >
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <Reveal delay={0.3}>
          <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/15">
              &copy; {new Date().getFullYear()} Apogee Capital Advisors Pvt.
              Ltd. All rights reserved.
            </p>
            <p className="text-[11px] text-white/15">Crafted with precision</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
