import type { Locale } from "./types";
import { LOCALE_STORAGE_KEY } from "./types";

export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (value === "en" || value === "id") return value;
  return null;
}

export function setStoredLocale(locale: Locale): void {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}
