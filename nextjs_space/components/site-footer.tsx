'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { personal } from '@/lib/cv-data';
import type { Locale } from '@/i18n/config';

export function SiteFooter({ locale }: { locale: Locale }) {
  const tNav = useTranslations('Nav');
  const tFooter = useTranslations('Footer');
  const year = 2026;
  const base = `/${locale}`;

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link
            href={base}
            className="inline-flex items-center gap-2 font-display text-base font-bold"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              {personal.initials}
            </span>
            <span>{personal.name}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {tFooter('tagline')}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">
            {tFooter('sections.navigate')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {(['about', 'experience', 'skills', 'projects', 'blog', 'contact'] as const).map(
              (key) => (
                <li key={key}>
                  <Link
                    href={key === 'blog' ? `${base}/blog` : `${base}#${key}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">
            {tFooter('sections.connect')}
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {year} {personal.name}. {tFooter('rights')}
          </p>
          <p className="font-mono">{tFooter('builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}
