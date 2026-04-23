'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Linkedin, Github } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import { personal } from '@/lib/cv-data';
import type { Locale } from '@/i18n/config';

export function ContactSection({ locale }: { locale: Locale }) {
  const t = useTranslations('Contact');

  const items = [
    {
      icon: MapPin,
      label: t('locationLabel'),
      value: locale === 'es' ? 'Barcelona, España' : 'Barcelona, Spain',
      href: null,
    },
    {
      icon: Linkedin,
      label: t('linkedinLabel'),
      value: 'linkedin.com/in/lorcopotia',
      href: personal.linkedin,
    },
    {
      icon: Github,
      label: t('githubLabel'),
      value: 'github.com/lorcopotia',
      href: personal.github,
    },
  ] as const;

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {t('label')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        </SectionReveal>

        <div className="mt-10">
          <SectionReveal delay={0.05}>
            <div className="grid gap-3 sm:grid-cols-3">
              {items.map((item) => {
                const Inner = (
                  <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate font-mono text-sm">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href?.startsWith?.('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
