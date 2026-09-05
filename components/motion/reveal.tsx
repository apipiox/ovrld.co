'use client';
import { useRef } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
// Content is server-visible. The animation only starts on intersection; no-JS stays readable.
export function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const reduced = useReducedMotion();
  return (
    <div
      ref={ref}
      className={`${className} ${inView && !reduced ? 'reveal-enter' : ''}`}
    >
      {children}
    </div>
  );
}
