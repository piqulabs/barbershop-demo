import { AppShell } from "@/components/i18n/app-shell";
import { LanguageProvider } from "@/components/i18n/language-provider";

export default function Home() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
