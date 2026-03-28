'use client';

import { Award, Heart, Target } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const teamMembers = [
  { name: 'Arjun Nair', role: 'Founder & CEO', bio: 'Seasoned traveller with 20+ years crafting iconic Indian journeys.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Priya Menon', role: 'Head of Experiences', bio: 'Destination expert specialising in offbeat and cultural itineraries.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
  { name: 'Karan Singh', role: 'Adventure Lead', bio: 'Certified mountaineer and trekking guide for Himalayan expeditions.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sneha Patel', role: 'Customer Relations', bio: 'Ensures every traveller feels heard, cared for, and absolutely delighted.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
];


const milestones = [
  { year: '2009', event: 'The Travel Designer founded in Kochi with a team of 3 travel enthusiasts.' },
  { year: '2012', event: 'Expanded to 20 destinations across India. First international package launched.' },
  { year: '2016', event: 'Crossed 1,000 happy travelers. Launched digital booking platform.' },
  { year: '2020', event: 'Pioneered virtual travel planning during COVID. Supported stranded travelers.' },
  { year: '2024', event: '5,000+ travelers served. Expanded to Nepal, Bhutan, and Sri Lanka.' },
];

const values = [
  { icon: Heart, title: 'Passion for Travel', desc: 'We live and breathe travel. Every itinerary is crafted with genuine love for exploration.' },
  { icon: Target, title: 'Personalised Journeys', desc: 'No two trips are alike. We tailor every detail to match your unique travel personality.' },
  { icon: Award, title: 'Quality Over Quantity', desc: 'We partner only with trusted hotels, guides, and vehicles that meet our high standards.' },
];

const awards = [
  { title: 'Best Tour Operator Kerala', year: '2023', org: 'Kerala Tourism Dept.' },
  { title: 'Excellence in Eco Tourism', year: '2022', org: 'India Tourism Board' },
  { title: 'Top Rated on TripAdvisor', year: '2021–2024', org: 'TripAdvisor India' },
  { title: 'Customer Choice Award', year: '2023', org: 'Travel & Tourism India' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Our Story"
        title="We Are"
        titleHighlight="The Travel Designer"
        subtitle="Born from a love of travel and a belief that every Indian journey deserves to be legendary."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ═══ MISSION & VISION ═══════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* Team / Mission Image */}
            <AnimatedSection direction="left">
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                height: 420,
                border: '1px solid var(--border)',
                position: 'relative',
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="Our Team"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-tag">🌿 Our Mission</span>
              <h2 className="section-title" style={{ marginBottom: 18 }}>
                Making India&apos;s Beauty <span className="text-gradient">Accessible to All</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 18, fontSize: '0.97rem' }}>
                At The Travel Designer, we believe that a great journey is more than just visiting places — it&apos;s about experiencing cultures, forming connections, and returning home transformed.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 28, fontSize: '0.97rem' }}>
                Since 2009, we have been curating personalised travel experiences for thousands of Indians and international travellers — from weekend getaways to month-long odysseys across the subcontinent.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {[
                  { n: '5,000+', l: 'Travelers' },
                  { n: '200+', l: 'Packages' },
                  { n: '50+', l: 'Destinations' },
                ].map(s => (
                  <div key={s.l} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary-light)', fontFamily: 'var(--font-montserrat)' }}>{s.n}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">💡 What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid-3">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 28px',
                  height: '100%',
                  transition: 'all 0.35s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: 'rgba(10,123,110,0.12)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <v.icon size={24} color="var(--primary-light)" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, fontFamily: 'inherit' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">📅 Our Journey</span>
            <h2 className="section-title">How We Grew</h2>
          </AnimatedSection>
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 68, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, var(--primary), transparent)',
            }} />
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1} direction="left">
                <div style={{ display: 'flex', gap: 24, marginBottom: 32, alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: 56, height: 56,
                    borderRadius: 14,
                    background: 'var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 800, color: '#fff',
                    boxShadow: 'var(--shadow-glow)',
                    flexShrink: 0,
                    zIndex: 1,
                  }}>
                    {m.year}
                  </div>
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '16px 20px',
                    flex: 1,
                  }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">👥 Meet the Team</span>
            <h2 className="section-title">The People Behind Your Journey</h2>
          </AnimatedSection>
          <div className="grid-4">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  textAlign: 'center',
                  transition: 'all 0.35s',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ position: 'relative', height: 190, overflow: 'hidden' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
                    />
                  </div>
                  <div style={{ padding: '18px 16px 20px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4, fontFamily: 'inherit' }}>{member.name}</h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{member.role}</div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AWARDS ═════════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="section-tag">🏆 Recognition</span>
            <h2 className="section-title">Awards & Certifications</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 16 }}>
            {awards.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.08}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                >
                  <Award size={28} color="var(--accent)" style={{ margin: '0 auto 12px' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--primary-light)' }}>{a.year}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{a.org}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
