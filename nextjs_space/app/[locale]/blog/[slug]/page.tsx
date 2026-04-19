import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPostParams, getPostBySlug } from '@/lib/posts';
import { PostView } from '@/components/blog/post-view';
import type { Locale } from '@/i18n/config';

export function generateStaticParams() {
  return getAllPostParams();
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params?.locale as Locale, params?.slug);
  return {
    title: post?.title ?? 'Blog',
    description: post?.description ?? '',
  };
}

export default function PostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params?.locale ?? 'es') as Locale;
  const post = getPostBySlug(locale, params?.slug);
  if (!post) notFound();
  return <PostView locale={locale} post={post} />;
}
