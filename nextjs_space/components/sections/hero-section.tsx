"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { personal } from "@/lib/cv-data";
import type { Locale } from "@/i18n/config";

export function HeroSection({ locale }: { locale: Locale }) {
  const t = useTranslations("Hero");
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden hero-gradient"
      id="top"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 md:flex-row md:items-center md:justify-between md:gap-16 md:pt-32 lg:px-8">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {t("location")}
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-primary">
            {t("greeting")}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-foreground">{t("title")}</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("tagline")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="outline">
              <a href="#experience">
                {t("ctaResume")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="flex items-center gap-1 pl-1">
              <Button variant="ghost" size="icon" asChild className="h-10 w-10">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-10 w-10">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-indigo-500 to-sky-500 p-1 shadow-lg sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(theme(borderRadius.2xl)-2px)] bg-background">
              <Image
                src="/avatar.jpg"
                alt={t("avatarAlt")}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -right-4 -top-4 hidden rounded-lg border border-border bg-background px-3 py-2 text-xs shadow-md sm:block">
            <p className="font-mono text-muted-foreground">20y experience</p>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden rounded-lg border border-border bg-background px-3 py-2 text-xs shadow-md sm:block">
            <p className="font-mono text-primary">Kubernetes · Cloud</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
