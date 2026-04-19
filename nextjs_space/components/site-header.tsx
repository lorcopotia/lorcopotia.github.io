'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { personal } from '@/lib/cv-data';
import type { Locale } from '@/i18n/config';

type NavItem = { key: string; href: string };

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = useTranslations('Nav');
  const pathname = usePathname() ?? '';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const basePath = `/${locale}`;

  const items: NavItem[] = [
    { key: 'about', href: `${basePath}#about` },
    { key: 'experience', href: `${basePath}#experience` },
    { key: 'skills', href: `${basePath}#skills` },
    { key: 'projects', href: `${basePath}#projects` },
    { key: 'blog', href: `${basePath}/blog` },
    { key: 'contact', href: `${basePath}#contact` },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled((window?.scrollY ?? 0) > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-background/0'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={basePath}
          className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105"
            aria-hidden="true"
          >
            {personal.initials}
          </span>
          <span className="hidden sm:inline">{personal.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {t(item.key as any)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-0.5 sm:flex">
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            aria-label={open ? t('closeMenu') : t('openMenu')}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
            aria-label="Mobile"
          >
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {t(item.key as any)}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-1">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
