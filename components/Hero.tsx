import React from "react";
import { Brain, Zap, ArrowRight, ArrowLeft } from "lucide-react";
import { Language, Section } from "../types";
import gedoImg from "../assets/gedo.jpg";
import futureImg from "../assets/future.jpg";

interface HeroProps {
  lang: Language;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 bg-[#0C1A3B] poppins-font">
      <div className="absolute top-1/4 -left-20 w-[800px] h-[800px] bg-[#1BC5FF]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-[#D4A048]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95rem] mx-auto px-6 lg:px-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="lg:col-span-7 text-left rtl:text-right animate-in fade-in slide-in-from-left rtl:slide-in-from-right duration-1000">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-10 leading-[1.1] tracking-tighter text-white">
              {t.titlePart1}{" "}
              <span className="text-[#D4A048] italic">{t.titlePart2}</span>{" "}
              <br />
              {t.titlePart3}{" "}
              <span className="text-[#1BC5FF] drop-shadow-[0_0_20px_rgba(27,197,255,0.3)]">
                {t.titlePart4}
              </span>
            </h1>

            <p className="text-xl md:text-2xl xl:text-2xl text-[#F4F3EC]/80 max-w-2xl mb-14 leading-relaxed font-light">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href={`#${Section.Contact}`}
                className="group w-full sm:w-auto px-12 py-5 bg-[#1BC5FF] text-[#0C1A3B] font-black rounded-full text-xl transition-all hover:bg-[#1BC5FF]/90 transform hover:scale-105 shadow-2xl shadow-[#1BC5FF]/20 flex items-center justify-center gap-3"
              >
                {t.contactBtn}
                {lang === "en" ? (
                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform"
                    size={24}
                  />
                ) : (
                  <ArrowLeft
                    className="group-hover:-translate-x-2 transition-transform"
                    size={24}
                  />
                )}
              </a>

              <a
                href={`#${Section.Solutions}`}
                className="w-full sm:w-auto px-12 py-5 border-2 border-[#D4A048] text-[#D4A048] font-black rounded-full text-xl transition-all hover:bg-[#D4A048] hover:text-[#0C1A3B] transform hover:scale-105 flex items-center justify-center"
              >
                {t.servicesBtn}
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="relative w-full aspect-square flex items-center justify-center scale-110 xl:scale-125">
              {/* =========================
                  ELDER WISDOM (TOP-LEFT)
                 ========================= */}
              <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 z-20 group/elder">
                <div className="relative p-10 bg-[#0C1A3B] rounded-[3rem] border-2 border-[#D4A048]/40 shadow-[0_0_50px_rgba(212,160,72,0.2)] glow-gold backdrop-blur-xl transition-transform group-hover/elder:scale-110 duration-500">
                  <Brain className="w-24 h-24 text-[#D4A048]" />
                  <div className="absolute -top-6 -right-6 rtl:-right-auto rtl:-left-6 px-5 py-2 bg-[#D4A048] text-[#0C1A3B] rounded-full text-xs font-black tracking-widest whitespace-nowrap">
                    {t.elderWisdom}
                  </div>
                </div>

                {/* 🎬 POPUP PANEL (ELDER) */}
                <div
                  className="
                    pointer-events-none absolute top-2 left-[110%] rtl:left-auto rtl:right-[110%]
                    w-[380px]
                    opacity-0 translate-y-3 scale-95
                    transition-all duration-300
                    group-hover/elder:opacity-100 group-hover/elder:translate-y-0 group-hover/elder:scale-100
                  "
                >
                  <div className="relative rounded-[2rem] border border-[#D4A048]/30 bg-[#0A0A0A]/70 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A048]/20 to-[#1BC5FF]/10" />
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4A048]/20 rounded-full blur-[60px]" />

                    <div className="relative p-6">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#F4F3EC]/50 font-bold">
                        Mentor Mode
                      </p>
                      <h4 className="mt-2 text-xl font-black text-[#F4F3EC] leading-tight">
                        Wisdom transfer begins…
                      </h4>
                      <p className="mt-2 text-sm text-[#F4F3EC]/60 leading-relaxed">
                        An experienced mentor hands the device — your knowledge is packaged and ready.
                      </p>

                      {/* Mini Illustration: old man giving device */}
                      <div className="mt-5 relative h-48 rounded-2xl border border-white/10 overflow-hidden bg-[#0C1A3B]/40">
  
  {/* Background glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A048]/20 to-transparent" />

  {/* Gedo Image */}
  <img
    src={gedoImg}
    alt="Wisdom Mentor"
    className="absolute bottom-0 left-4 h-full object-contain drop-shadow-[0_0_30px_rgba(212,160,72,0.4)] transition-transform duration-500 group-hover/elder:scale-105"
  />

  {/* Device floating in hand */}
  <div className="absolute bottom-12 left-[55%] w-12 h-16 rounded-xl border border-[#1BC5FF]/40 bg-[#0A0A0A]/70 shadow-[0_0_25px_rgba(27,197,255,0.3)] animate-[floatDevice_2s_ease-in-out_infinite]">
    <div className="w-full h-2 bg-[#1BC5FF]/40 rounded-t-xl" />
    <div className="p-2 space-y-1">
      <div className="h-1 bg-white/20 rounded" />
      <div className="h-1 bg-white/10 rounded" />
      <div className="h-1 bg-white/15 rounded w-2/3" />
    </div>
  </div>

  {/* Energy particles */}
  <div className="absolute left-[60%] top-6 w-2 h-2 bg-[#1BC5FF] rounded-full animate-ping" />
  <div className="absolute left-[65%] top-12 w-1.5 h-1.5 bg-[#D4A048] rounded-full animate-pulse" />

</div>

                    </div>
                  </div>

                  {/* small arrow */}
                  <div className="absolute -left-2 rtl:-left-auto rtl:-right-2 top-14 w-4 h-4 rotate-45 bg-[#0A0A0A]/70 border-l border-t border-[#D4A048]/30" />
                </div>
              </div>

              {/* =========================
                  FUTURE POTENTIAL (BOTTOM-RIGHT)
                 ========================= */}
              <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 z-20 group/future">
                <div className="relative p-10 bg-[#0C1A3B] rounded-[3rem] border-2 border-[#1BC5FF]/40 shadow-[0_0_50px_rgba(27,197,255,0.2)] glow-blue backdrop-blur-xl transition-transform group-hover/future:scale-110 duration-500">
                  <Brain className="w-24 h-24 text-[#1BC5FF]" />
                  <div className="absolute -bottom-6 -left-6 rtl:-left-auto rtl:-right-6 px-5 py-2 bg-[#1BC5FF] text-[#0C1A3B] rounded-full text-xs font-black tracking-widest whitespace-nowrap">
                    {t.futurePotential}
                  </div>
                </div>

                {/* 🎬 POPUP PANEL (FUTURE) */}
                <div
                  className="
                    pointer-events-none absolute bottom-2 right-[110%] rtl:right-auto rtl:left-[110%]
                    w-[380px]
                    opacity-0 translate-y-3 scale-95
                    transition-all duration-300
                    group-hover/future:opacity-100 group-hover/future:translate-y-0 group-hover/future:scale-100
                  "
                >
                  <div className="relative rounded-[2rem] border border-[#1BC5FF]/30 bg-[#0A0A0A]/70 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1BC5FF]/20 to-[#D4A048]/10" />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#1BC5FF]/20 rounded-full blur-[70px]" />

                    <div className="relative p-6">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#F4F3EC]/50 font-bold">
                        Receiver Mode
                      </p>
                      <h4 className="mt-2 text-xl font-black text-[#F4F3EC] leading-tight">
                        Ready to receive the future…
                      </h4>
                      <p className="mt-2 text-sm text-[#F4F3EC]/60 leading-relaxed">
                        The next generation is prepared — knowledge becomes action.
                      </p>

                      {/* Mini Illustration: young boy receiving */}
                      <div className="mt-5 relative h-48 rounded-2xl border border-white/10 overflow-hidden bg-[#0C1A3B]/40">

  {/* Background glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#1BC5FF]/20 to-transparent" />

  {/* Future Person Image */}
  <img
    src={futureImg}
    alt="Future Potential"
    className="absolute bottom-0 right-4 h-full object-contain drop-shadow-[0_0_30px_rgba(27,197,255,0.4)] transition-transform duration-500 group-hover/future:scale-105"
  />

  {/* Receiving light beam */}
  <div className="absolute top-10 left-4 w-20 h-2 bg-gradient-to-r from-[#D4A048] to-[#1BC5FF] blur-md opacity-80 animate-[beamPulse_2s_ease-in-out_infinite]" />

  {/* Floating energy particles */}
  <div className="absolute right-[55%] top-6 w-2 h-2 bg-[#1BC5FF] rounded-full animate-ping" />
  <div className="absolute right-[60%] top-12 w-1.5 h-1.5 bg-[#D4A048] rounded-full animate-pulse" />

  {/* Subtle glow circle */}
  <div className="absolute bottom-6 right-10 w-24 h-24 bg-[#1BC5FF]/10 rounded-full blur-2xl animate-pulse" />

</div>

                    </div>
                  </div>

                  {/* small arrow */}
                  <div className="absolute -right-2 rtl:-right-auto rtl:-left-2 top-14 w-4 h-4 rotate-45 bg-[#0A0A0A]/70 border-r border-t border-[#1BC5FF]/30" />
                </div>
              </div>

              {/* PATH + ZAP */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 500"
              >
                <path
                  d={
                    lang === "en"
                      ? "M150,150 Q250,250 350,350"
                      : "M350,150 Q250,250 150,350"
                  }
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="3"
                  strokeDasharray="15,15"
                  className="animate-[pulse_3s_ease-in-out_infinite]"
                />

                <circle r="6" fill="#1BC5FF">
                  <animateMotion
                    path={
                      lang === "en"
                        ? "M150,150 Q250,250 350,350"
                        : "M350,150 Q250,250 150,350"
                    }
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>

                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#D4A048", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1BC5FF", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#1BC5FF]/20 rounded-full blur-[60px] animate-pulse" />
                  <Zap className="w-16 h-16 text-[#1BC5FF] animate-bounce" />
                </div>
              </div>

              {/* HUD */}
              <div className="absolute bottom-10 left-0 rtl:left-auto rtl:right-0 p-6 bg-[#0A0A0A]/95 border border-[#1E3A75] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[240px] backdrop-blur-2xl transform -translate-x-8 rtl:translate-x-8">
                <div className="font-mono text-[11px] space-y-3">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <p className="text-[#D4A048] font-bold tracking-tighter uppercase">
                    {t.transferring}
                  </p>
                  <div className="w-full h-2 bg-[#1E3A75] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4A048] to-[#1BC5FF] animate-[loading_4s_ease-in-out_infinite]"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <p className="text-[#1BC5FF] font-bold">&gt; PKT_XFER: SUCCESS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center opacity-40 animate-bounce lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-[#1BC5FF] to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 100%; transform: translateX(100%); }
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes beam {
          0% { transform: translateX(-10px); opacity: .25; }
          50% { transform: translateX(10px); opacity: .9; }
          100% { transform: translateX(-10px); opacity: .25; }
        }
          @keyframes floatDevice {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
  @keyframes beamPulse {
  0% { opacity: 0.3; transform: scaleX(0.8); }
  50% { opacity: 1; transform: scaleX(1); }
  100% { opacity: 0.3; transform: scaleX(0.8); }
}


      `}</style>
    </div>
  );
};

export default Hero;
