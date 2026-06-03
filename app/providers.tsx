"use client";

import { LanguageProvider } from "@/components/i18n/language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
