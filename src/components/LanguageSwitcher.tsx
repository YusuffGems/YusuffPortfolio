import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, LANG_META } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANG_META.find((l) => l.code === lang) ?? LANG_META[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-10 px-3 rounded-full border border-border flex items-center gap-2 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="text-xs font-heading font-semibold">{current.short}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto glass rounded-lg border border-border shadow-lg z-50">
          {LANG_META.map((l) => {
            const active = lang === l.code;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-heading transition-colors flex items-center justify-between gap-2 ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
                dir={l.rtl ? "rtl" : "ltr"}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs opacity-60 font-mono w-8">{l.short}</span>
                  <span>{l.label}</span>
                </span>
                {active && <Check size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
