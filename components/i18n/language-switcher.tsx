"use client";

import { useLanguage } from "./language-provider";
import type { Locale } from "@/lib/i18n/types";

const options: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "id", label: "ID" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  if (!locale || !t) return null;

  return (
    <div
      className={`flex items-center border border-line ${className}`.trim()}
      role="group"
      aria-label={t.nav.languageAria}
    >
      {options.map(({ locale: code, label }, index) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            aria-label={code === "en" ? "English" : "Bahasa Indonesia"}
            className={`touch-target min-h-11 min-w-11 px-3 text-[0.625rem] font-medium uppercase tracking-[0.18em] transition-colors ${
              index > 0 ? "border-s border-line" : ""
            } ${
              isActive
                ? "bg-gold/10 text-gold"
                : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
