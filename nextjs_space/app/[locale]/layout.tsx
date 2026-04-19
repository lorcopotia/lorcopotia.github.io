import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/config';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { I18nProvider } from '@/components/i18n-provider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (params?.locale ?? 'es') as Locale;
  let messages: any = {};
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    /* fallback empty */
  }
  const meta = messages?.Meta ?? {};
  return {
    title: meta.title ?? 'Duanel Garrido Milán',
    description: meta.description ?? '',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale as Locale;
  if (!locales.includes(locale)) notFound();

  let messages: Record<string, unknown> = {};
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <I18nProvider locale={locale} messages={messages} timeZone="Europe/Madrid">
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader locale={locale} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} />
      </div>
    </I18nProvider>
  );
}
