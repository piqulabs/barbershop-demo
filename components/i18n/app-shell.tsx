"use client";

import { LanguageGate } from "./language-gate";
import { useLanguage } from "./language-provider";
import { LandingPage } from "@/components/landing-page";

function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[100] bg-background"
      aria-hidden
    />
  );
}

export function AppShell() {
  const { locale, isReady } = useLanguage();

  if (!isReady) {
    return <LoadingScreen />;
  }

  if (!locale) {
    return <LanguageGate />;
  }

  return <LandingPage />;
}
