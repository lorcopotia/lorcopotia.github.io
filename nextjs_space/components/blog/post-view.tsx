'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MdxContent } from '@/components/mdx-content';
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

export function PostView({ locale, post }: { locale: Locale; post: Post }) {
  const t = useTranslations('Blog');
  const base = `/${locale}`;

  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <Button variant="ghost" size="sm" asChild className="-ml-2">
            <Link href={`${base}/blog`}>
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              {t('backToBlog')}
            </Link>
          </Button>
        </SectionReveal>

        <SectionReveal delay={0.05} className="mt-6">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-mono">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              {t('publishedOn')} {formatDate(post.date, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime} {t('minRead')}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
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
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <MdxContent source={post.content} />
        </SectionReveal>
      </div>
    </article>
  );
}
