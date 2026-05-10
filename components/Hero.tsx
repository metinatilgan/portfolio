"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail, Download, Sparkles } from "lucide-react";
import { useT } from "@/lib/i18n/LanguageProvider";
import { withBase } from "@/lib/basePath";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { t } = useT();
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % t.hero.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [t.hero.roles.length]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-[15%] top-[30%] h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute right-[10%] top-[50%] h-[400px] w-[400px] rounded-full bg-orange-600/15 blur-[100px] animate-blob animation-delay-2000" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl space-y-7"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            {t.hero.badge}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block text-zinc-100">{t.hero.greeting}</span>
            <span className="gradient-text mt-2 block">Metin Atılgan</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 font-mono text-base text-orange-400 sm:text-lg md:text-xl"
            style={{ minHeight: 32 }}
          >
            <span className="text-zinc-600">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="whitespace-nowrap"
              >
                {t.hero.roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="ml-0.5 inline-block h-5 w-[2px] bg-orange-400"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/30"
            >
              <Mail size={16} />
              {t.hero.contactBtn}
              <span className="ml-0.5 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={withBase("/cv.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
            >
              <Download size={16} />
              {t.hero.cvBtn}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <Sparkles size={16} />
              {t.hero.projectsBtn}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-zinc-800 pt-8"
          >
            {t.hero.stats.map((s, i) => (
              <div key={i}>
                <div className="font-mono text-3xl font-bold text-orange-500 md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-orange-500"
        aria-label={t.hero.scrollLabel}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
