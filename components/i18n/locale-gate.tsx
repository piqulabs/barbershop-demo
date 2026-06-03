"use client";

import { LanguageGate } from "./language-gate";
import { useLanguage } from "./language-provider";

function LoadingScreen() {
  return <div className="fixed inset-0 z-[100] bg-background" aria-hidden />;
}

export function LocaleGate({ children }: { children: React.ReactNode }) {
  const { locale, isReady } = useLanguage();

  if (!isReady) return <LoadingScreen />;
  if (!locale) return <LanguageGate />;
  return children;
}
