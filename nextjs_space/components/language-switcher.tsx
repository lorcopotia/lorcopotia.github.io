'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { locales, localeNames, type Locale } from '@/i18n/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('Nav');

  const handleChange = (next: Locale) => {
    if (next === currentLocale) return;
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    router.push('/' + segments.join('/'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t('language')}
          className="gap-1.5 px-2.5 font-medium"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs uppercase tracking-wide">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onSelect={(e) => {
              e.preventDefault();
              handleChange(loc);
            }}
            className={
              loc === currentLocale ? 'font-semibold text-primary' : undefined
            }
          >
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
