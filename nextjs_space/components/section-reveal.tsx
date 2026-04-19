'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'article' | 'li';
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = (motion as any)[as] ?? motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
