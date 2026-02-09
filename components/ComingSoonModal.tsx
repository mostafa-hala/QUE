import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Language } from "../types";

type Props = {
  open: boolean;
  onClose: () => void;
  lang: Language;
  title?: string;
  desc?: string;
};

const rtlStyle = (lang: Language) =>
  lang === "ar"
    ? ({
        direction: "rtl",
        textAlign: "right" as const,
        fontFamily: `'Cairo','Tajawal','Segoe UI',sans-serif`,
      } as const)
    : ({
        direction: "ltr",
        textAlign: "left" as const,
      } as const);

const ComingSoonModal: React.FC<Props> = ({
  open,
  onClose,
  lang,
  title,
  desc,
}) => {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const defaultTitle = lang === "ar" ? "قريبًا" : "Coming Soon";
  const defaultDesc =
    lang === "ar"
      ? "الميزة دي تحت التطوير. تابعنا وهتكون متاحة قريبًا."
      : "This feature is under development. Stay tuned — it’s coming soon.";

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative h-full w-full flex items-center justify-center px-4">
        <div
          className="w-full max-w-lg rounded-[2rem] border border-[#1E3A75] bg-[#0C1A3B]/95 shadow-2xl overflow-hidden"
          style={rtlStyle(lang)}
        >
          <div className="h-1 bg-gradient-to-r from-[#1BC5FF] via-[#D4A048] to-[#1BC5FF]" />

          <div className="p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A]/60 border border-[#1E3A75] flex items-center justify-center text-[#D4A048]">
                  <Sparkles size={22} />
                </div>

                <div>
                  <h3
                    className={`text-2xl font-black text-[#F4F3EC] ${
                      lang === "ar" ? "" : "poppins-font"
                    }`}
                    style={
                      lang === "ar"
                        ? { fontFamily: `'Cairo','Tajawal','Segoe UI',sans-serif` }
                        : undefined
                    }
                  >
                    {title || defaultTitle}
                  </h3>

                  <p className="text-[#F4F3EC]/60 mt-1">
                    {desc || defaultDesc}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl border border-[#1E3A75] bg-[#0A0A0A]/40 text-[#F4F3EC]/80 hover:text-[#F4F3EC] hover:border-[#1BC5FF]/60 transition"
                aria-label="Close modal"
              >
                <div className="flex items-center justify-center">
                  <X size={18} />
                </div>
              </button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-[#D4A048] hover:bg-[#D4A048]/85 text-[#0C1A3B] font-black py-3 rounded-xl transition"
              >
                {lang === "ar" ? "تمام" : "OK"}
              </button>

              <button
                onClick={onClose}
                className="flex-1 border border-[#1BC5FF]/50 text-[#1BC5FF] hover:bg-[#1BC5FF]/10 font-black py-3 rounded-xl transition"
              >
                {lang === "ar" ? "إغلاق" : "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
