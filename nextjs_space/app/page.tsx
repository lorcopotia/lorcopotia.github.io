import { defaultLocale } from '@/i18n/config';
import RootRedirect from '@/components/root-redirect';

// This page handles the `/` route for both dev (server redirect) and static
// export (client-side + meta refresh redirect). See <RootRedirect />.
export default function RootPage() {
  return <RootRedirect to={`/${defaultLocale}`} />;
}
