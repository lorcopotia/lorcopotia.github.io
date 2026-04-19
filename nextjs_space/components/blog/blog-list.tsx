'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, Tag, ArrowRight, Rss } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import type { Post } from '@/lib/posts';
import type { Locale } from '@/i18n/config';

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

export function BlogList({ locale, posts }: { locale: Locale; posts: Post[] }) {
  const t = useTranslations('Blog');
  const base = `/${locale}`;

  return (
    <section className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-2 text-primary">
            <Rss className="h-4 w-4" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.18em]">{t('label')}</p>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{t('subtitle')}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-5">
          {posts.length === 0 && (
            <div className="rounded-xl bg-secondary/60 p-10 text-center text-muted-foreground">
              {t('empty')}
            </div>
          )}
          {posts.map((post, idx) => (
            <SectionReveal key={post.slug} delay={idx * 0.05}>
              <Link
                href={`${base}/blog/${post.slug}`}
                className="group block rounded-xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {formatDate(post.date, locale)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readingTime} {t('minRead')}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{post.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                    >
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {t('readMore')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
