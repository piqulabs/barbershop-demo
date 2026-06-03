"use client";

import { LocaleGate } from "./locale-gate";
import { LandingPage } from "@/components/landing-page";

export function AppShell() {
  return (
    <LocaleGate>
      <LandingPage />
    </LocaleGate>
  );
}
