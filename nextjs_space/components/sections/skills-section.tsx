'use client';

import { useTranslations } from 'next-intl';
import { Server, Wrench, Cloud, Terminal, ShieldCheck } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import { skillGroups } from '@/lib/cv-data';
import type { Locale } from '@/i18n/config';

const groupIcons = {
  platforms: Server,
  iac: Wrench,
  cloud: Cloud,
  scripting: Terminal,
} as const;

export function SkillsSection({ locale }: { locale: Locale }) {
  const t = useTranslations('Skills');

  const certs = [
    'gcp',
    'cka',
    'terraform',
    'rhAnsible',
    'aplus',
    'linuxplus',
    'lpic',
  ] as const;

  const groupKeys = Object.keys(skillGroups) as (keyof typeof skillGroups)[];

  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {t('label')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('subtitle')}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groupKeys.map((key, idx) => {
            const Icon = groupIcons[key];
            return (
              <SectionReveal key={key} delay={idx * 0.05}>
                <div className="group flex h-full flex-col rounded-xl bg-card p-5 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                    {t(`groups.${key}` as any)}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {skillGroups[key].map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.1} className="mt-10">
          <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="font-display text-base font-semibold tracking-tight">
                {t('certificationsLabel')}
              </h3>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {certs.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 rounded-md bg-secondary/60 px-3 py-2 text-sm"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{t(`certifications.${c}` as any)}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
