'use client';

import { useEffect } from 'react';

/**
 * Root redirect that works both in dev (client-side replace) and in a static
 * export (meta refresh fallback). We render a small, accessible splash so the
 * page is never blank while navigation happens.
 */
export default function RootRedirect({ to }: { to: string }) {
  useEffect(() => {
    try {
      window?.location?.replace?.(to);
    } catch {
      // no-op: meta refresh will handle it.
    }
  }, [to]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      {/* Browsers honor meta refresh anywhere in the document. */}
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <span className="text-sm">Redirecting…</span>
    </div>
  );
}
