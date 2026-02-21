'use client';

import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Tour Packages' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Travel Tips' },
];

const destinations = [
  'Kerala Backwaters',
  'Rajasthan Royale',
  'Himachal Hills',
  'Goa Beaches',
  'Uttarakhand Adventure',
  'Andaman Islands',
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      {/* Main Footer */}
      <div className="container" style={{ padding: '72px 24px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
        }}>

          {/* Brand Column */}
          <div style={{ maxWidth: 280 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 40, height: 40,
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MapPin size={20} color="#fff" />
              </div>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>WanderLux</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--primary-light)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Travels & Tours</div>
              </div>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 24 }}>
              Crafting unforgettable journeys across India since 2009. Every trip is a story — let us write yours.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 38, height: 38,
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--primary)';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'inherit' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary-light)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                  >
                    <ArrowRight size={13} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'inherit' }}>
              Popular Destinations
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {destinations.map(d => (
                <li key={d}>
                  <Link href="/destinations" style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary-light)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                  >
                    <ArrowRight size={13} />
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'inherit' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Mail, text: 'hello@wanderlux.in' },
                { icon: MapPin, text: '42, MG Road, Kochi, Kerala 682001' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'rgba(10,123,110,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={14} color="var(--primary-light)" />
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: 24 }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 10 }}>Subscribe for travel deals</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-input"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                />
                <button className="btn-primary" style={{ padding: '10px 16px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>
            © 2025 WanderLux Travels & Tours. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map(t => (
              <Link key={t} href="#" style={{ color: 'var(--text-dim)', fontSize: '0.82rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--primary-light)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-dim)'}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
