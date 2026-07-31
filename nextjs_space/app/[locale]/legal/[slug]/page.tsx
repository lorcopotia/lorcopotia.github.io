import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllLegalParams, getLegalDoc } from '@/lib/legal';
import { LegalDocView } from '@/components/legal/legal-doc-view';
import type { Locale } from '@/i18n/config';

export function generateStaticParams() {
  return getAllLegalParams();
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const doc = getLegalDoc(params?.locale as Locale, params?.slug);
  return {
    title: doc?.title ?? 'Legal',
    description: doc?.summary ?? '',
  };
}

export default function LegalDocPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params?.locale ?? 'es') as Locale;
  const doc = getLegalDoc(locale, params?.slug);
  if (!doc) notFound();
  return <LegalDocView locale={locale} doc={doc} />;
}
