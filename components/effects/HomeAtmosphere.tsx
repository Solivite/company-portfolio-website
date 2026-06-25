/**
 * Continuous home-page atmosphere — boosted lower third for visual energy.
 */
export default function HomeAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="atmo-mesh" />
      <div className="atmo-mesh-lower" />

      {/* ── Upper page ── */}
      <div
        className="atmo-shape atmo-ellipse-h left-1/2 top-[12%] h-[280px] w-[170vw] -translate-x-1/2 bg-purple-700/18 animate-glow-pulse"
        style={{ filter: "blur(130px)" }}
      />
      <div
        className="atmo-shape atmo-ellipse-v -right-[8%] top-[8%] h-[50vh] w-[28vw]"
        style={{
          background:
            "linear-gradient(180deg, hsl(280 70% 40% / 0.2) 0%, hsl(271 65% 35% / 0.08) 60%, transparent 100%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="atmo-shape atmo-diamond left-[6%] top-[22%] h-[220px] w-[220px] animate-glow-pulse bg-gradient-to-br from-purple-500/25 via-violet-600/15 to-transparent"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="atmo-shape atmo-slash left-[-10%] top-[28%] h-[120px] w-[130vw] rotate-[12deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(271 70% 40% / 0.12) 35%, hsl(283 65% 45% / 0.18) 50%, hsl(271 70% 40% / 0.12) 65%, transparent 100%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Mid page ── */}
      <div className="atmo-shape atmo-blob -left-[12%] top-[36%] h-[380px] w-[420px] bg-purple-600/16 animate-atmo-drift" />
      <div
        className="atmo-shape atmo-conic right-[5%] top-[40%] h-[420px] w-[420px]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, hsl(271 75% 45% / 0.14) 60deg, hsl(283 70% 50% / 0.1) 120deg, transparent 180deg)",
        }}
      />
      <div
        className="atmo-shape atmo-ring left-1/2 top-[44%] h-[500px] w-[500px] -translate-x-1/2 animate-glow-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="atmo-shape atmo-ellipse-h left-1/2 top-[50%] h-[200px] w-[190vw] -translate-x-1/2 bg-violet-600/16"
        style={{ filter: "blur(150px)" }}
      />
      <div className="atmo-shape atmo-spot right-[18%] top-[48%] h-[160px] w-[160px] bg-purple-400/20" />
      <div
        className="atmo-shape atmo-spot right-[28%] top-[52%] h-[90px] w-[90px] bg-violet-500/15"
        style={{ filter: "blur(50px)" }}
      />

      {/* ── Newsletter — brighter focal zone ── */}
      <div
        className="atmo-shape left-1/2 top-[58%] h-[380px] w-[210vw] -translate-x-1/2 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, hsl(271 85% 50% / 0.28) 0%, hsl(283 75% 45% / 0.14) 45%, transparent 72%)",
          filter: "blur(90px)",
          animationDelay: "1s",
        }}
      />
      <div
        className="atmo-shape atmo-corner left-0 top-[56%] h-[340px] w-[45vw] animate-atmo-float"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 0% 50%, hsl(271 75% 42% / 0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="atmo-shape atmo-corner right-0 top-[60%] h-[320px] w-[42vw] animate-atmo-float"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 100% 50%, hsl(283 70% 45% / 0.18) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="atmo-shape atmo-slash right-[-5%] top-[62%] h-[100px] w-[85vw] -rotate-[8deg] animate-shimmer"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(271 80% 55% / 0.25), hsl(283 75% 50% / 0.2), transparent)",
          filter: "blur(65px)",
        }}
      />

      {/* ── Lower page — stronger + animated ── */}
      <div
        className="atmo-shape atmo-ellipse-h left-1/2 top-[68%] h-[280px] w-[175vw] -translate-x-1/2 animate-glow-pulse bg-purple-600/22"
        style={{ filter: "blur(120px)", animationDelay: "2s" }}
      />

      <div
        className="atmo-shape atmo-ellipse-v -left-[12%] top-[70%] h-[65vh] w-[50vw] animate-atmo-drift bg-violet-600/18"
        style={{ filter: "blur(110px)", animationDelay: "4s" }}
      />

      <div className="atmo-shape atmo-blob-alt -right-[8%] top-[72%] h-[400px] w-[440px] animate-atmo-drift bg-purple-600/20" />

      {/* Value prop — center spotlight */}
      <div
        className="atmo-shape atmo-ring left-1/2 top-[74%] h-[600px] w-[600px] -translate-x-1/2 animate-glow-pulse"
        style={{ animationDelay: "0.5s", opacity: 0.7 }}
      />
      <div
        className="atmo-shape atmo-diamond left-[8%] top-[76%] h-[200px] w-[200px] animate-atmo-sway bg-gradient-to-br from-purple-500/30 via-violet-600/18 to-transparent"
      />

      {/* Testimonials — warm conic sweep */}
      <div
        className="atmo-shape atmo-conic left-[5%] top-[78%] h-[420px] w-[420px] animate-atmo-sway"
        style={{
          background:
            "conic-gradient(from 300deg at 55% 45%, transparent 0deg, hsl(271 75% 48% / 0.2) 80deg, hsl(283 70% 52% / 0.14) 140deg, transparent 200deg)",
          filter: "blur(75px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="atmo-shape atmo-spot right-[20%] top-[80%] h-[200px] w-[200px] animate-atmo-float bg-purple-400/25"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Blog — horizontal energy band */}
      <div
        className="atmo-shape atmo-ellipse-h left-1/2 top-[84%] h-[240px] w-[185vw] -translate-x-1/2 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(271 80% 50% / 0.24) 0%, hsl(283 70% 45% / 0.12) 50%, transparent 75%)",
          filter: "blur(100px)",
          animationDelay: "3.5s",
        }}
      />
      <div
        className="atmo-shape atmo-diamond right-[10%] top-[83%] h-[220px] w-[220px] animate-atmo-sway bg-gradient-to-tl from-violet-500/28 via-purple-600/16 to-transparent"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="atmo-shape atmo-slash left-[-8%] top-[86%] h-[90px] w-[120vw] rotate-[6deg] animate-shimmer"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, hsl(271 75% 50% / 0.18) 40%, hsl(283 70% 48% / 0.22) 60%, transparent 95%)",
          filter: "blur(75px)",
          animationDelay: "4s",
        }}
      />

      {/* Footer warmth — stronger */}
      <div
        className="atmo-shape atmo-ellipse-h bottom-0 left-1/2 h-[320px] w-[160vw] -translate-x-1/2 animate-glow-pulse bg-purple-600/18"
        style={{ filter: "blur(100px)", animationDelay: "5s" }}
      />
      <div
        className="atmo-shape atmo-corner bottom-0 right-0 h-[45vh] w-[55vw]"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 100% 100%, hsl(271 70% 38% / 0.2) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="atmo-shape atmo-corner bottom-0 left-0 h-[35vh] w-[40vw] animate-atmo-float"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 0% 100%, hsl(283 65% 40% / 0.16) 0%, transparent 65%)",
          filter: "blur(65px)",
          animationDelay: "2.5s",
        }}
      />

      {/* Micro spots — denser in lower half */}
      <div className="atmo-shape atmo-spot left-[35%] top-[32%] h-[60px] w-[60px] bg-purple-300/10" style={{ filter: "blur(40px)" }} />
      <div className="atmo-shape atmo-spot left-[62%] top-[55%] h-[70px] w-[70px] bg-violet-400/12" style={{ filter: "blur(45px)" }} />
      <div className="atmo-shape atmo-spot left-[45%] top-[66%] h-[80px] w-[80px] animate-atmo-float bg-purple-400/18" style={{ filter: "blur(50px)" }} />
      <div className="atmo-shape atmo-spot left-[72%] top-[74%] h-[65px] w-[65px] animate-shimmer bg-violet-400/16" style={{ filter: "blur(42px)" }} />
      <div className="atmo-shape atmo-spot left-[18%] top-[82%] h-[55px] w-[55px] bg-purple-400/14" style={{ filter: "blur(38px)" }} />
      <div className="atmo-shape atmo-spot left-[55%] top-[90%] h-[70px] w-[70px] animate-atmo-float bg-violet-300/15" style={{ filter: "blur(45px)", animationDelay: "3s" }} />
      <div className="atmo-shape atmo-spot right-[30%] top-[88%] h-[90px] w-[90px] animate-glow-pulse bg-purple-500/18" style={{ filter: "blur(55px)", animationDelay: "2s" }} />
    </div>
  );
}
