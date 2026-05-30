"use client";

import { useLanguage } from "./language-provider";
import type { Locale } from "@/lib/i18n/types";
function LanguageOption({
  locale,
  label,
  nativeLabel,
  ariaLabel,
  onSelect,
}: {
  locale: Locale;
  label: string;
  nativeLabel: string;
  ariaLabel: string;
  onSelect: (locale: Locale) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(locale)}
      aria-label={ariaLabel}
      className="group flex w-full min-h-[4.5rem] flex-col items-center justify-center border border-line bg-background/40 px-8 py-6 text-center transition-all duration-500 hover:border-gold/60 hover:bg-gold/5 active:bg-gold/10 sm:min-h-[5rem]"
    >
      <span className="headline text-2xl text-foreground transition-colors group-hover:text-gold sm:text-3xl">
        {label}
      </span>
      <span className="mt-2 text-xs font-light uppercase tracking-[0.22em] text-muted">
        {nativeLabel}
      </span>
    </button>
  );
}

export function LanguageGate() {
  const { setLocale } = useLanguage();

  const handleSelect = (locale: Locale) => {
    setLocale(locale);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <div className="fixed inset-0 z-[100] flex min-h-svh flex-col items-center justify-center bg-background px-5 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(179,155,94,0.12),transparent)]"
        aria-hidden
      />

      <div
        className="relative w-full max-w-md text-center"
        style={{ animation: "reveal 1s ease-out both" }}
      >
        <p className="headline text-3xl tracking-[0.14em] uppercase sm:text-4xl">
          Piqu
        </p>
        <div className="hairline mx-auto mt-8 w-20" />
        <p className="eyebrow mt-10">Welcome · Selamat datang</p>
        <h1 className="headline mt-5 text-3xl sm:text-4xl">
          Choose your language
        </h1>
        <p className="headline mt-2 text-xl text-muted sm:text-2xl">
          Pilih bahasa Anda
        </p>
        <p className="body-lg mx-auto mt-6 max-w-sm">
          Select a language to continue · Pilih bahasa untuk melanjutkan
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:mt-14">
          <LanguageOption
            locale="en"
            label="English"
            nativeLabel="United Kingdom / US"
            ariaLabel="Continue in English"
            onSelect={handleSelect}
          />
          <LanguageOption
            locale="id"
            label="Bahasa Indonesia"
            nativeLabel="Indonesia"
            ariaLabel="Lanjutkan dalam Bahasa Indonesia"
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
}
