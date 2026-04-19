'use client';

import { useTranslations } from 'next-intl';
import { Briefcase, BadgeCheck } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import { jobs, type Locale } from '@/lib/cv-data';

export function ExperienceSection({ locale }: { locale: Locale }) {
  const t = useTranslations('Experience');

  return (
    <section id="experience" className="scroll-mt-28 bg-secondary/40 py-20 sm:py-24">
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

        <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {jobs.map((job, idx) => (
            <SectionReveal as="li" key={job.id} delay={Math.min(idx * 0.05, 0.25)}>
              <div className="relative">
                <span
                  className="absolute -left-[31px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-secondary/40 sm:-left-[45px]"
                  aria-hidden="true"
                />
                <div className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border transition-all hover:shadow-md sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {job.role[locale]}
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1.5 text-sm text-primary">
                        <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.company}
                      </p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
                      {job.period[locale]}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {job.bullets[locale].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <BadgeCheck
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
