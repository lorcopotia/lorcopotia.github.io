// Legal documents (privacy policies, terms) for side projects, kept out of the
// blog feed but reusing the same in-repo markdown content model as lib/posts.ts.

import type { Locale } from './cv-data';
import { legalDocs as allLegalDocs } from '@/content/legal';

export type LegalDoc = {
  slug: string;
  locale: Locale;
  appName: string;
  title: string;
  summary: string;
  lastUpdated: string; // ISO yyyy-mm-dd
  packageName?: string;
  content: string; // Markdown source
};

export function getLegalDoc(locale: Locale, slug: string): LegalDoc | undefined {
  return allLegalDocs.find((d) => d.locale === locale && d.slug === slug);
}

export function getAllLegalParams(): { locale: Locale; slug: string }[] {
  return allLegalDocs.map((d) => ({ locale: d.locale, slug: d.slug }));
}
