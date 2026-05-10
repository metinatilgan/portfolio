"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionaries, type Locale, type Dict } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx>({
  locale: "tr",
  setLocale: () => {},
  t: dictionaries.tr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("locale");
    if (stored === "tr" || stored === "en") {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    } else {
      const browser = navigator.language.toLowerCase();
      const guess: Locale = browser.startsWith("tr") ? "tr" : "en";
      setLocaleState(guess);
      document.documentElement.lang = guess;
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", l);
      document.documentElement.lang = l;
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}
