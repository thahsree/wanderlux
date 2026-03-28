'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PackageCardProps {
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  category: string;
  highlights: string[];
  image: string;
  index?: number;
}

export default function PackageCard({
  title,
  destination,
  duration,
  groupSize,
  price,
  originalPrice,
  rating,
  reviews,
  category,
  highlights,
  image,
  index = 0,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -8 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category badge */}
        <div className="badge badge-primary" style={{
          position: 'absolute', top: 12, left: 12,
        }}>
          {category}
        </div>
        {/* Rating badge */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(11,14,26,0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: 8,
          padding: '4px 10px',
          display: 'flex', alignItems: 'center', gap: 5,
          border: '1px solid var(--border)',
        }}>
          <Star size={12} fill="var(--accent)" color="var(--accent)" />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text)' }}>{rating}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>({reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 22px' }}>
        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
          <MapPin size={13} color="var(--primary-light)" />
          <span style={{ fontSize: '0.78rem', color: 'var(--primary-light)', fontWeight: 600 }}>{destination}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.08rem',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 12,
          fontFamily: 'inherit',
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        {/* Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {highlights.slice(0, 3).map(h => (
            <span key={h} style={{
              background: 'rgba(10,123,110,0.08)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              borderRadius: 6,
              padding: '3px 10px',
              fontSize: '0.72rem',
              fontWeight: 500,
            }}>
              {h}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div style={{
          display: 'flex',
          gap: 18,
          marginBottom: 18,
          paddingBottom: 16,
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Clock size={13} color="var(--text-dim)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <Users size={13} color="var(--text-dim)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{groupSize}</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-light)' }}>{price}</span>
              {originalPrice && (
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                  {originalPrice}
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>per person</span>
          </div>
          <Link href="/booking" className="btn-primary" style={{ padding: '9px 18px', fontSize: '0.82rem', gap: 5 }}>
            Book <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
