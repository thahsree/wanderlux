'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className,
  style,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const initialMap = {
    up:    { opacity: 0, y: 40 },
    down:  { opacity: 0, y: -40 },
    left:  { opacity: 0, x: 60 },
    right: { opacity: 0, x: -60 },
    none:  { opacity: 0 },
  };

  const animateMap = {
    up:    { opacity: 1, y: 0 },
    down:  { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    none:  { opacity: 1 },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={initialMap[direction]}
      whileInView={animateMap[direction]}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
