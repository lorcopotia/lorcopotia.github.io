import { renderMarkdown } from '@/lib/markdown';

export function MdxContent({ source }: { source: string }) {
  const html = renderMarkdown(source ?? '');
  return (
    <div
      className="prose-custom max-w-none"
      // Content is authored in-repo; safe to render as HTML.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
