'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, Cloud, Boxes } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import type { Locale } from '@/i18n/config';
import { education, personal } from '@/lib/cv-data';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold tracking-tight">
      {display}
      {suffix}
    </span>
  );
}

export function AboutSection({ locale }: { locale: Locale }) {
  const t = useTranslations('About');

  const facts = [
    { icon: Briefcase, value: 20, suffix: '+', label: t('facts.years') },
    { icon: Award, value: 7, suffix: '', label: t('facts.certs') },
    { icon: Cloud, value: 3, suffix: '', label: t('facts.clouds') },
  ] as const;

  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {t('label')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <SectionReveal className="lg:col-span-3" delay={0.05}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('body')}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t('body2')}
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              {education[locale].map((line) => (
                <p key={line} className="flex items-start gap-2">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{line}</span>
                </p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-2" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map((f) => (
                <motion.div
                  key={f.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border"
                >
                  <f.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <div className="mt-3">
                    <AnimatedNumber value={f.value} suffix={f.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
                </motion.div>
              ))}
              <div className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border">
                <Boxes className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-lg font-semibold">
                  {t('facts.clustersValue')}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t('facts.clustersLabel')}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-card p-5 shadow-sm ring-1 ring-border">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t('languagesLabel')}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li className="flex items-center justify-between">
                  <span>{t('languages.spanish')}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{t('languages.english')}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{t('languages.italian')}</span>
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
