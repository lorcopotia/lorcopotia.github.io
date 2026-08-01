// Legal documents (privacy policies, data deletion instructions) for side projects,
// kept out of the blog feed but reusing the same in-repo content model as lib/posts.ts.

import type { Locale } from './cv-data';
import { legalDocs as allLegalDocs } from '@/content/legal';

type LegalDocBase = {
  slug: string;
  locale: Locale;
  appName: string;
  title: string;
  summary: string;
  lastUpdated: string; // ISO yyyy-mm-dd
  packageName?: string;
};

export type PrivacyDoc = LegalDocBase & {
  kind: 'markdown';
  content: string; // Markdown source
};

export type DeletionStep = {
  title: string;
  body: string; // inline markdown (bold/code/links), no block elements
};

export type DeletionRow = {
  data: string;
  where: string;
};

export type DeletionDoc = LegalDocBase & {
  kind: 'deletion';
  overviewMd: string;
  stepsIntroMd: string;
  steps: DeletionStep[];
  warningMd: string;
  whatDeletedIntroMd: string;
  deletionRows: DeletionRow[];
  whatDeletedOutroMd: string;
  noAccountMd: string;
  emailMd: string;
  timingMd: string;
  contactIntroMd: string;
  contactEmail: string;
};

export type LegalDoc = PrivacyDoc | DeletionDoc;

export function getLegalDoc(locale: Locale, slug: string): LegalDoc | undefined {
  return allLegalDocs.find((d) => d.locale === locale && d.slug === slug);
}

export function getAllLegalParams(): { locale: Locale; slug: string }[] {
  return allLegalDocs.map((d) => ({ locale: d.locale, slug: d.slug }));
}
