"use client";

import { useT } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row">
        <div>
          © {new Date().getFullYear()} Metin Atılgan · {t.footer.copyright}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {t.footer.builtWith}
        </div>
      </div>
    </footer>
  );
}
