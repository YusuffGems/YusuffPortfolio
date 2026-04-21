import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";

const langs: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ta", label: "தமிழ்", short: "TA" },
  { code: "hi", label: "हिंदी", short: "HI" },
];

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

  const current = langs.find((l) => l.code === lang) ?? langs[0];

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
        <div className="absolute right-0 mt-2 w-36 glass rounded-lg overflow-hidden border border-border shadow-lg z-50">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-heading transition-colors ${
                lang === l.code
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
