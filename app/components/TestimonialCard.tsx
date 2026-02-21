'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  tour: string;
  text: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({ name, location, tour, text, rating, index = 0 }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 28px 24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      whileHover={{ y: -4 }}
      onHoverStart={e => (e.target as HTMLElement)}
    >
      {/* Background quote icon */}
      <div style={{
        position: 'absolute', top: 16, right: 20,
        opacity: 0.04,
      }}>
        <Quote size={80} />
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < rating ? 'var(--accent)' : 'transparent'}
            color={i < rating ? 'var(--accent)' : 'var(--text-dim)'}
          />
        ))}
      </div>

      {/* Review text */}
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.93rem',
        lineHeight: 1.75,
        marginBottom: 22,
        fontStyle: 'italic',
        position: 'relative',
      }}>
        &ldquo;{text}&rdquo;
      </p>

      {/* Tour tag */}
      <div className="badge badge-primary" style={{ marginBottom: 16 }}>
        {tour}
      </div>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 42, height: 42,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.88rem',
          fontWeight: 700,
          color: '#fff',
          flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)' }}>{name}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{location}</div>
        </div>
      </div>
    </motion.div>
  );
}
