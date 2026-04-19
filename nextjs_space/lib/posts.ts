// Simple in-repo blog: each post is a TypeScript object with pre-parsed MDX content.
// This keeps things compatible with Next.js static export without extra filesystem plumbing.

import type { Locale } from './cv-data';

export type Post = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: number; // minutes
  tags: string[];
  cover?: string;
  content: string; // Markdown/MDX source
};

import { posts as allPosts } from '@/content/posts';

export function getAllPosts(locale: Locale): Post[] {
  return [...allPosts]
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(locale: Locale, slug: string): Post | undefined {
  return allPosts.find((p) => p.locale === locale && p.slug === slug);
}

export function getAllPostParams(): { locale: Locale; slug: string }[] {
  return allPosts.map((p) => ({ locale: p.locale, slug: p.slug }));
}
