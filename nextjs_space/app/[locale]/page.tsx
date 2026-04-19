import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params?.locale ?? 'es') as Locale;
  return (
    <>
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <ExperienceSection locale={locale} />
      <SkillsSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
