'use client';

// We import IntlProvider directly from `use-intl` (the client-side core of
// next-intl) instead of using `NextIntlClientProvider` from `next-intl`. The
// server build of `next-intl` pulls in `next-intl/config` which is a stub that
// throws unless the optional `next-intl` Next.js plugin is wired into
// `next.config.js`. Since we fully drive i18n from the client with an
// explicit locale + messages, we can skip that plugin entirely by using the
// plain `use-intl` provider.

import { IntlProvider } from 'use-intl';
import type { ReactNode } from 'react';

type Props = {
  locale: string;
  messages: Record<string, unknown>;
  timeZone?: string;
  children: ReactNode;
};

export function I18nProvider({ locale, messages, timeZone, children }: Props) {
  return (
    <IntlProvider
      locale={locale}
      messages={messages as any}
      timeZone={timeZone ?? 'Europe/Madrid'}
    >
      {children}
    </IntlProvider>
  );
}
