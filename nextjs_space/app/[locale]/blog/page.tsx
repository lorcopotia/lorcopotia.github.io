import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import { getAllPosts } from '@/lib/posts';
import { BlogList } from '@/components/blog/blog-list';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function BlogIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params?.locale ?? 'es') as Locale;
  const posts = getAllPosts(locale);
  return <BlogList locale={locale} posts={posts} />;
}
