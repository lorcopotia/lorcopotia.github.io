import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lorcopotia.github.io'),
  title: {
    default: 'Duanel Garrido Milán · DevOps Engineer',
    template: '%s · Duanel Garrido Milán',
  },
  description:
    'DevOps Engineer with 20 years of experience in Linux, Kubernetes, Openshift, Terraform, Ansible and public clouds.',
  verification: {
    google: 'ZZVmKfGW8tbdbNO2MwMmTK9B6-AWUBEyUDhZXY4hpAw',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Duanel Garrido Milán · DevOps Engineer',
    description:
      'Senior DevOps Engineer · Kubernetes · Cloud. Portfolio, experience and technical notes.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duanel Garrido Milán · DevOps Engineer',
    description: 'Senior DevOps Engineer · Kubernetes · Cloud.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

