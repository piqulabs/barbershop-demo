"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getStoredLocale, setStoredLocale } from "@/lib/i18n/storage";
import {
  getTranslations,
  type Translations,
} from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";

type LanguageContextValue = {
  locale: Locale | null;
  t: Translations | null;
  isReady: boolean;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setLocaleState(getStoredLocale());
    setIsReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setStoredLocale(next);
    setLocaleState(next);
    document.documentElement.lang = next === "id" ? "id" : "en";
    document.title = getTranslations(next).meta.title;
  }, []);

  useEffect(() => {
    if (locale) {
      document.documentElement.lang = locale === "id" ? "id" : "en";
      document.title = getTranslations(locale).meta.title;
    }
  }, [locale]);

  const t = useMemo(
    () => (locale ? getTranslations(locale) : null),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, t, isReady, setLocale }),
    [locale, t, isReady, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
