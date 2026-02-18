/**
 * Background — Aurora Mesh
 *
 * Design choice: slow-drifting ambient radial gradient orbs.
 * Finance firms need to feel prestigious and calm, not flashy.
 * Four soft glowing orbs (gold × 2, teal, blue) drift on very long
 * CSS animation cycles (24–45 s) so the motion is barely perceptible —
 * you feel depth without ever noticing animation.
 *
 * No canvas, no JS loops, no libraries. Pure CSS @keyframes on
 * GPU-composited `transform` properties = consistent 60 fps.
 *
 * Customize:
 *   – Orb opacity  → change the rgba() alpha in each .bg-orb-* class
 *   – Orb size     → change width/height in each .bg-orb-* class
 *   – Speed        → change animation-duration in each .bg-orb-* class
 *   – Colors       → swap rgba() values (gold=201,168,76 / teal=45,212,191 / blue=96,165,250)
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">

      {/* Orb 1 — Gold primary. Top-center, largest, the "main light source" */}
      <div className="bg-orb bg-orb-gold-primary" />

      {/* Orb 2 — Teal. Bottom-right, secondary warmth */}
      <div className="bg-orb bg-orb-teal" />

      {/* Orb 3 — Blue. Left mid-page, cool counter-balance */}
      <div className="bg-orb bg-orb-blue" />

      {/* Orb 4 — Gold secondary. Bottom-center, very faint depth layer */}
      <div className="bg-orb bg-orb-gold-secondary" />

      {/* Vignette — keeps edges and corners deeply dark so content
          at page margins stays easy to read */}
      <div className="bg-vignette" />
    </div>
  );
}
