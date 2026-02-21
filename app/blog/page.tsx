'use client';

import { ArrowRight, Camera, ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const blogPosts = [
  { slug: '1', title: 'Top 10 Hidden Gems in Kerala You Must Visit in 2025', category: 'Destinations', readTime: '6 min', date: 'Jan 15, 2025', author: 'Arjun Nair', excerpt: 'Beyond the famous backwaters and Munnar, Kerala hides extraordinary places that most tourists never discover. We reveal the best-kept secrets.' },
  { slug: '2', title: 'Complete Guide to the Char Dham Yatra: Planning, Routes & Tips', category: 'Pilgrimage', readTime: '10 min', date: 'Jan 22, 2025', author: 'Priya Menon', excerpt: "Embarking on the Char Dham Yatra is a life-changing spiritual journey. Here's everything you need to know to plan it properly." },
  { slug: '3', title: 'Best Time to Visit Ladakh: Month-by-Month Breakdown', category: 'Travel Tips', readTime: '7 min', date: 'Feb 1, 2025', author: 'Karan Singh', excerpt: "Ladakh's climate varies dramatically through the year. We break down the best months for different activities — from biking to lake visits." },
  { slug: '4', title: 'How to Travel India on a Budget Without Missing Out', category: 'Budget Travel', readTime: '8 min', date: 'Feb 8, 2025', author: 'Sneha Patel', excerpt: 'India can be incredibly affordable — if you know the right tricks. From train bookings to dharamshalas, our budget travel guide has it all.' },
  { slug: '5', title: "Meghalaya's Living Root Bridges: How to Get There", category: 'Adventure', readTime: '5 min', date: 'Feb 14, 2025', author: 'Arjun Nair', excerpt: 'The double-decker root bridge at Nongriat is one of India\'s most extraordinary sights. Here\'s the complete trekking guide to reach it.' },
  { slug: '6', title: "India's Best Honeymoon Destinations by Season", category: 'Honeymoon', readTime: '9 min', date: 'Feb 19, 2025', author: 'Priya Menon', excerpt: 'Book the right honeymoon destination for the right season. From Kashmir in summer to Goa in winter — romance awaits all year round.' },
  { slug: '7', title: 'Solo Travel in India: Safety Tips for Women Travellers', category: 'Travel Tips', readTime: '8 min', date: 'Jan 10, 2025', author: 'Sneha Patel', excerpt: 'India is increasingly welcoming solo women travellers. With the right preparation and knowledge, it can be one of life\'s most rewarding adventures.' },
  { slug: '8', title: 'Rajasthan Road Trip: The Ultimate 14-Day Route', category: 'Road Trips', readTime: '11 min', date: 'Jan 5, 2025', author: 'Karan Singh', excerpt: "From Jaipur's pink streets to Jaisalmer's golden dunes — map out the perfect Rajasthan road trip with our tested 14-day itinerary." },
  { slug: '9', title: 'Wildlife Safari in India: Beyond the Tiger', category: 'Wildlife', readTime: '6 min', date: 'Dec 28, 2024', author: 'Arjun Nair', excerpt: 'India is home to far more than just tigers. Discover the best parks for leopards, one-horned rhinos, elephants, and rare Asiatic lions.' },
];

const POSTS_PER_PAGE = 6;

const categoryColors: Record<string, string> = {
  'Destinations': 'var(--primary)',
  'Pilgrimage': 'var(--accent)',
  'Travel Tips': '#8B5CF6',
  'Budget Travel': '#10B981',
  'Adventure': '#EF4444',
  'Honeymoon': '#EC4899',
  'Road Trips': '#F97316',
  'Wildlife': '#84CC16',
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const paginated = blogPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <>
      <PageHero
        tag="Travel Tips & Stories"
        title="Inspire Your"
        titleHighlight="Next Adventure"
        subtitle="Expert travel guides, insider tips, and destination stories curated by our experienced travel team."
        breadcrumbs={[{ label: 'Travel Tips & Blog' }]}
      />

      <section className="section">
        <div className="container">
          {/* Featured Post */}
          <AnimatedSection style={{ marginBottom: 48 }}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                transition: 'all 0.35s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border-primary)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div className="img-placeholder" style={{ minHeight: 320 }}>
                <Camera size={36} color="var(--text-dim)" />
                <span style={{ fontSize: '0.8rem' }}>Featured Post Image — Add your photo</span>
              </div>
              <div style={{ padding: '36px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'var(--primary)',
                  color: '#fff',
                  padding: '4px 14px',
                  borderRadius: 100,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 16,
                  width: 'fit-content',
                }}>
                  Featured
                </span>
                <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: 14, lineHeight: 1.3 }}>
                  {blogPosts[0].title}
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 24, fontSize: '0.92rem' }}>
                  {blogPosts[0].excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <User size={13} color="var(--text-dim)" />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{blogPosts[0].author}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Clock size={13} color="var(--text-dim)" />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{blogPosts[0].readTime} read</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{blogPosts[0].date}</span>
                </div>
                <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--primary-light)', fontWeight: 700, fontSize: '0.88rem' }}>
                  Read Full Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Blog Grid */}
          <div className="grid-3">
            {paginated.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border-primary)';
                    el.style.transform = 'translateY(-6px)';
                    el.style.boxShadow = 'var(--shadow-card)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div className="img-placeholder" style={{ height: 180 }}>
                    <Camera size={24} color="var(--text-dim)" />
                    <span style={{ fontSize: '0.7rem' }}>Blog Image — Add photo</span>
                  </div>
                  <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      display: 'inline-block',
                      background: categoryColors[post.category] ? `${categoryColors[post.category]}22` : 'rgba(10,123,110,0.12)',
                      color: categoryColors[post.category] || 'var(--primary-light)',
                      padding: '3px 12px',
                      borderRadius: 100,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: 10,
                    }}>
                      {post.category}
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10, lineHeight: 1.4, fontFamily: 'inherit', flex: 1 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                      {post.excerpt.slice(0, 100)}...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Clock size={12} color="var(--text-dim)" />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{post.readTime} read</span>
                      </div>
                      <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--primary-light)', fontSize: '0.78rem', fontWeight: 700 }}>
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-btn"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="page-btn"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                style={{ opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
