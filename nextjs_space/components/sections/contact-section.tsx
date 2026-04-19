'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Lock } from 'lucide-react';
import { SectionReveal } from '@/components/section-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { personal } from '@/lib/cv-data';
import { toast } from 'sonner';
import type { Locale } from '@/i18n/config';

export function ContactSection({ locale }: { locale: Locale }) {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const items = [
    {
      icon: Mail,
      label: t('emailLabel'),
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: t('phoneLabel'),
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: t('locationLabel'),
      value: locale === 'es' ? 'Barcelona, España' : 'Barcelona, Spain',
      href: null,
    },
    {
      icon: Linkedin,
      label: t('linkedinLabel'),
      value: 'linkedin.com/in/lorcopotia',
      href: personal.linkedin,
    },
    {
      icon: Github,
      label: t('githubLabel'),
      value: 'github.com/lorcopotia',
      href: personal.github,
    },
  ] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Contacto desde lorcopotia.github.io`
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.name ?? ''}\n${formData.email ?? ''}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    toast.success(locale === 'es' ? 'Abriendo tu cliente de correo…' : 'Opening your email client…');
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {t('label')}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <SectionReveal className="lg:col-span-2" delay={0.05}>
            <div className="space-y-3">
              {items.map((item) => {
                const Inner = (
                  <div className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate font-mono text-sm">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href?.startsWith?.('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-7"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {t('form.title')}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{t('form.subtitle')}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t('form.name')}
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? '' })}
                    placeholder={t('form.namePlaceholder')}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t('form.email')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
                    placeholder={t('form.emailPlaceholder')}
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('form.subject')}
                </Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e?.target?.value ?? '' })}
                  placeholder={t('form.subjectPlaceholder')}
                  className="mt-1.5"
                />
              </div>

              <div className="mt-4">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('form.message')}
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
                  placeholder={t('form.messagePlaceholder')}
                  className="mt-1.5 resize-none"
                />
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  {t('form.privacy')}
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  {t('form.send')}
                </Button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
