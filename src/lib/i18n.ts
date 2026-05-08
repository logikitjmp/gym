export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const dictionaries = {
  en: {
    appName: "GymFlow AI",
    hero: "Manage Your Gym Smarter with AI",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo"
  },
  hi: {
    appName: "GymFlow AI",
    hero: "Manage Your Gym Smarter with AI",
    startTrial: "Start Free Trial",
    watchDemo: "Watch Demo"
  }
} satisfies Record<Locale, Record<string, string>>;

export function getDictionary(locale: string | undefined) {
  return dictionaries[locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale];
}
