'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, CalendarClock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/section-reveal';
import type { Locale } from '@/i18n/config';

type LegalDocHeaderInfo = {
  appName: string;
  title: string;
  summary: string;
  lastUpdated: string;
  packageName?: string;
};

function formatDate(date: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(`${date}T00:00:00`));
  } catch {
    return date;
  }
}

export function LegalDocView({
  locale,
  doc,
  children,
}: {
  locale: Locale;
  doc: LegalDocHeaderInfo;
  children: ReactNode;
}) {
  const t = useTranslations('Legal');
  const base = `/${locale}`;

  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <Button variant="ghost" size="sm" asChild className="-ml-2">
            <Link href={base}>
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              {t('backToHome')}
            </Link>
          </Button>
        </SectionReveal>

        <SectionReveal delay={0.05} className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {doc.appName}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {doc.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-mono">
              <CalendarClock className="h-3 w-3" aria-hidden="true" />
              {t('lastUpdated')} {formatDate(doc.lastUpdated, locale)}
            </span>
            {doc.packageName && (
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Package className="h-3 w-3" aria-hidden="true" />
                {doc.packageName}
              </span>
            )}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-8">
          <div className="rounded-xl bg-secondary/40 p-6 ring-1 ring-border">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              {t('summaryLabel')}
            </span>
            <p className="mt-2 text-sm text-muted-foreground">{doc.summary}</p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15} className="mt-10">
          {children}
        </SectionReveal>
      </div>
    </article>
  );
}
