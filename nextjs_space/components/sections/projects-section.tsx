'use client';

import { useTranslations } from 'next-intl';
import { ExternalLink, Code2, FolderGit2, ShieldCheck } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/cv-data';
import type { Locale } from '@/i18n/config';

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="scroll-mt-28 bg-secondary/40 py-20 sm:py-24">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <SectionReveal key={p.id} delay={idx * 0.05}>
              <article className="group flex h-full flex-col rounded-xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FolderGit2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {t('placeholder')}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {t(`items.${p.id}.title` as any)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`items.${p.id}.description` as any)}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2 pt-4">
                  {p.codeUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Code2 className="mr-1.5 h-3.5 w-3.5" />
                        {t('viewCode')}
                      </a>
                    </Button>
                  )}
                  {p.demoUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        {t('viewDemo')}
                      </a>
                    </Button>
                  )}
                  {p.policyUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/${locale}${p.policyUrl}`}>
                        <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                        {t('viewPolicy')}
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
