'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Nav');

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = theme === 'system' ? resolvedTheme : theme;
  const label = t('theme');

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      className="relative h-9 w-9"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
    >
      {mounted ? (
        current === 'dark' ? (
          <Moon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Sun className="h-4 w-4" aria-hidden="true" />
        )
      ) : (
        <Sun className="h-4 w-4 opacity-0" aria-hidden="true" />
      )}
      <span className="sr-only">{label}</span>
    </Button>
  );
}
