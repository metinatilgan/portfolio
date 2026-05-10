"use client";

import { useT } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/dictionaries";

const LOCALES: Locale[] = ["tr", "en"];

export default function LanguageToggle() {
  const { locale, setLocale } = useT();

  return (
    <div
      className="relative flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 p-0.5"
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "relative z-10 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors",
            locale === l
              ? "bg-orange-500 text-black"
              : "text-zinc-500 hover:text-zinc-200"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
