'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  cta?: { label: string; href: string };
  minHeight?: string;
}

export default function PageHero({
  tag,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
  cta,
  minHeight = '52vh',
}: PageHeroProps) {
  return (
    <section style={{
      position: 'relative',
      minHeight,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: 100,
      background: 'var(--bg)',
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,123,110,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
      }} />
      {/* Orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(10,123,110,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 200, height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '48px 24px' }}>
        {/* Breadcrumb */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}
          >
            <Link href="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.82rem' }}>
              <Home size={13} /> Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ChevronRight size={13} color="var(--text-dim)" />
                {crumb.href ? (
                  <Link href={crumb.href} style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{crumb.label}</Link>
                ) : (
                  <span style={{ color: 'var(--primary-light)', fontSize: '0.82rem', fontWeight: 600 }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {/* Tag */}
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="section-tag">{tag}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: 16 }}
        >
          {title}{' '}
          {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: 560, lineHeight: 1.7 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: 28 }}
          >
            <Link href={cta.href} className="btn-primary">{cta.label}</Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
