'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    Camera,
    Headphones,
    MapPin, Phone,
    Shield,
    Star,
    TrendingUp,
    Users,
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './components/AnimatedSection';
import FAQAccordion from './components/FAQAccordion';
import PackageCard from './components/PackageCard';
import TestimonialCard from './components/TestimonialCard';

// ─── Data ────────────────────────────────────────────────────────────────────

const packages = [
  {
    title: 'Golden Triangle Classic',
    destination: 'Delhi • Agra • Jaipur',
    duration: '7 Days',
    groupSize: '2–12 People',
    price: '₹24,999',
    originalPrice: '₹32,000',
    rating: 4.9,
    reviews: 312,
    category: 'Cultural',
    highlights: ['Taj Mahal Sunrise', 'Red Fort', 'Amber Fort', 'City Palace'],
  },
  {
    title: 'Kerala Backwaters Escape',
    destination: 'Kochi • Munnar • Alleppey',
    duration: '6 Days',
    groupSize: '2–8 People',
    price: '₹21,499',
    originalPrice: '₹28,000',
    rating: 4.8,
    reviews: 248,
    category: 'Nature',
    highlights: ['Houseboat Stay', 'Tea Estates', 'Backwater Cruise', 'Kathakali Show'],
  },
  {
    title: 'Himalayan Adventure Trek',
    destination: 'Manali • Spiti • Leh',
    duration: '10 Days',
    groupSize: '4–16 People',
    price: '₹34,999',
    originalPrice: '₹45,000',
    rating: 4.7,
    reviews: 186,
    category: 'Adventure',
    highlights: ['Rohtang Pass', 'Pangong Lake', 'Monastery Visit', 'Camping'],
  },
];

const destinations = [
  { name: 'Kerala', packages: 24, tag: 'Backwaters & Hills' },
  { name: 'Rajasthan', packages: 31, tag: 'Forts & Palaces' },
  { name: 'Himachal', packages: 18, tag: 'Snow & Treks' },
  { name: 'Goa', packages: 15, tag: 'Beaches & Nightlife' },
  { name: 'Uttarakhand', packages: 22, tag: 'Pilgrimage & Rivers' },
  { name: 'Andaman', packages: 12, tag: 'Coral & Islands' },
];

const features = [
  { icon: Shield, title: 'Safe Certified', desc: 'All guides are NIMA-certified & trips are fully insured for your peace of mind.' },
  { icon: TrendingUp, title: 'Best Price Guarantee', desc: 'Found it cheaper? We match it + give you 10% extra off. No questions asked.' },
  { icon: Award, title: '15+ Years Experience', desc: 'Over a decade of crafting unforgettable Indian journeys with 5-star reviews.' },
  { icon: Headphones, title: '24/7 Travel Support', desc: 'Our on-ground team is available round the clock during your entire trip.' },
];

const stats = [
  { value: '5,000+', label: 'Happy Travelers', icon: Users },
  { value: '200+', label: 'Tour Packages', icon: MapPin },
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '50+', label: 'Destinations', icon: TrendingUp },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    tour: 'Kerala Backwaters',
    rating: 5,
    text: 'Absolutely magical experience! The houseboat stay in Alleppey was a dream come true. WanderLux took care of every single detail – nothing was left to chance.',
  },
  {
    name: 'Rahul Mehta',
    location: 'Bengaluru, Karnataka',
    tour: 'Golden Triangle',
    rating: 5,
    text: 'The Golden Triangle tour exceeded all our expectations. Watching the Taj Mahal at sunrise is something I will carry in my heart forever. Flawless execution!',
  },
  {
    name: 'Anjali & Rohan',
    location: 'Pune, Maharashtra',
    tour: 'Himachal Honeymoon',
    rating: 5,
    text: 'Our Himachal honeymoon was absolutely perfect. The resort selections, the personalised touches – WanderLux made us feel truly special throughout.',
  },
];

const faqs = [
  { question: 'How do I book a tour package?', answer: 'Simply browse our packages, click "Book Now", fill in the 3-step booking form, and our team will contact you within 24 hours to confirm your booking and discuss customisation options.' },
  { question: 'Can I customise the tour itinerary?', answer: 'Absolutely! All our packages are fully customisable. Let us know your preferences – dates, hotel category, activities, dietary needs – and we will tailor the itinerary specifically for you.' },
  { question: 'What is the cancellation policy?', answer: 'Cancellations made 30+ days before departure receive a full refund. 15–29 days: 50% refund. Under 15 days: no refund, but you can transfer the booking to a future date once free of charge.' },
  { question: 'Is GST/tax included in the package price?', answer: 'All prices displayed are inclusive of applicable taxes (5% GST). There are no hidden charges. Any optional add-ons such as travel insurance or special experiences will be quoted separately.' },
  { question: 'Do you arrange travel insurance?', answer: 'Yes! We strongly recommend travel insurance and can arrange comprehensive India travel insurance covering medical emergencies, trip cancellation, and baggage loss at very competitive rates.' },
  { question: 'Which states do you cover?', answer: 'We cover the entire Indian subcontinent – from Kashmir to Kanyakumari and from Gujarat to Arunachal Pradesh. We also offer Nepal, Bhutan, and Sri Lanka packages.' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        {/* Hero Background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(10,123,110,0.22) 0%, transparent 65%)',
        }} />
        {/* Orb 1 */}
        <div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,123,110,0.14) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        {/* Orb 2 */}
        <div style={{
          position: 'absolute', bottom: '20%', left: '5%',
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite 2s',
          pointerEvents: 'none',
        }} />
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 120, paddingBottom: 80 }}>
          <div style={{ maxWidth: 760 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag">🌏 Explore India Like Never Before</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', marginBottom: 24, lineHeight: 1.1 }}
            >
              Discover India&apos;s
              <br />
              <span className="text-gradient">Hidden Wonders</span>
              <br />
              With Expert Guides
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: 540, lineHeight: 1.8, marginBottom: 36 }}
            >
              From the snow-capped Himalayas to the tropical backwaters of Kerala —
              we curate experiences that turn your dream holiday into cherished memories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}
            >
              <Link href="/packages" className="btn-primary" style={{ fontSize: '0.95rem', padding: '14px 32px' }}>
                Explore Packages <ArrowRight size={16} />
              </Link>
              <Link href="/destinations" className="btn-outline" style={{ fontSize: '0.95rem', padding: '14px 32px' }}>
                View Destinations
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}
            >
              {[
                { icon: Star, text: '4.9/5 Rating', sub: 'from 2,400+ reviews' },
                { icon: Users, text: '5,000+ Travelers', sub: 'across India' },
                { icon: Award, text: '15 Years', sub: 'of trusted service' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(10,123,110,0.12)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.icon size={16} color="var(--primary-light)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>{item.text}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ POPULAR PACKAGES ═══════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div>
              <AnimatedSection>
                <span className="section-tag">✈️ Top Picks</span>
                <h2 className="section-title">Featured Tour Packages</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: 480, fontSize: '1rem', lineHeight: 1.7 }}>
                  Handpicked tours covering India&apos;s most spectacular destinations.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="right">
              <Link href="/packages" className="btn-outline">
                View All Packages <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
          <div className="grid-3">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.title} {...pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POPULAR DESTINATIONS ═══════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">🗺️ Explore India</span>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
              Explore India&apos;s most iconic regions — each with unique culture, landscapes, and experiences.
            </p>
          </AnimatedSection>

          <div className="grid-3">
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.name} delay={i * 0.08} direction="up">
                <Link href="/destinations" style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div className="img-placeholder" style={{ height: 180 }}>
                      <Camera size={28} color="var(--text-dim)" />
                      <span style={{ fontSize: '0.75rem' }}>{dest.name} — Add your photo</span>
                    </div>
                    <div style={{ padding: '18px 20px' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4, fontFamily: 'inherit' }}>{dest.name}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 12 }}>{dest.tag}</p>
                      <span className="badge badge-primary">{dest.packages} Packages</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">💎 Why WanderLux</span>
            <h2 className="section-title">Travel With Confidence</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
              We go beyond bookings — we craft journeys that are safe, seamless, and spectacular.
            </p>
          </AnimatedSection>
          <div className="grid-4">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
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
                    width: 52, height: 52, borderRadius: 14,
                    background: 'linear-gradient(135deg, rgba(10,123,110,0.2), rgba(10,123,110,0.05))',
                    border: '1px solid var(--border-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 18,
                    animation: 'pulse-glow 4s ease-in-out infinite',
                  }}>
                    <f.icon size={22} color="var(--primary-light)" />
                  </div>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10, fontFamily: 'inherit' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, #0d9b8c 100%)',
        padding: '70px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 32,
            textAlign: 'center',
          }}>
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} direction="up">
                <div>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-playfair)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', marginTop: 8, letterSpacing: '0.04em' }}>
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">❤️ Traveler Stories</span>
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
              Real experiences from real adventurers who trusted WanderLux for their journeys.
            </p>
          </AnimatedSection>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">❓ Have Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
              Everything you need to know before booking your dream trip with us.
            </p>
          </AnimatedSection>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ═══ CTA BANNER ═════════════════════════════════════════════════════ */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{
              background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(10,123,110,0.12) 100%)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(40px, 6vw, 70px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Background accent */}
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '60%', height: 1,
                background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
              }} />
              <span className="section-tag" style={{ marginBottom: 20 }}>🚀 Ready to Travel?</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: 16 }}>
                Plan Your <span className="text-gradient">Dream Trip</span> Today
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 }}>
                Talk to our travel experts and get a personalised itinerary crafted just for you — completely free.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/booking" className="btn-accent" style={{ padding: '14px 36px', fontSize: '0.95rem' }}>
                  Book Your Trip <ArrowRight size={16} />
                </Link>
                <a href="tel:+919876543210" className="btn-outline" style={{ padding: '14px 32px', fontSize: '0.95rem' }}>
                  <Phone size={16} /> Call Us Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
