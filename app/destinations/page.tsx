'use client';

import { ArrowRight, Camera, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const destinations = [
  { name: 'Kerala', region: 'South India', tag: "God's Own Country", packages: 24, desc: 'Backwaters, tea estates, spice gardens, beaches, and Ayurveda retreats.' },
  { name: 'Rajasthan', region: 'West India', tag: 'Land of Kings', packages: 31, desc: 'Majestic forts, golden deserts, royal palaces, and vibrant bazaars.' },
  { name: 'Himachal Pradesh', region: 'North India', tag: 'Mountain Paradise', packages: 18, desc: 'Snow-capped peaks, apple orchards, Buddhist monasteries, and adventure sports.' },
  { name: 'Goa', region: 'West India', tag: 'Beach Capital', packages: 15, desc: 'Golden beaches, Portuguese heritage, water sports, and buzzing nightlife.' },
  { name: 'Uttarakhand', region: 'North India', tag: 'Dev Bhoomi', packages: 22, desc: 'Char Dham pilgrimage, Rishikesh yoga, Jim Corbett wildlife, and river rafting.' },
  { name: 'Andaman Islands', region: 'Bay of Bengal', tag: 'Island Paradise', packages: 12, desc: 'Crystal-clear waters, coral reefs, white-sand beaches, and scuba diving.' },
  { name: 'Leh Ladakh', region: 'North India', tag: 'Land of High Passes', packages: 14, desc: 'Pangong Lake, magnetic hill, ancient monasteries, and high-altitude desert.' },
  { name: 'Meghalaya', region: 'Northeast India', tag: 'Abode of Clouds', packages: 9, desc: 'Living root bridges, cleanest village, crystal rivers, and cascading waterfalls.' },
  { name: 'Tamil Nadu', region: 'South India', tag: 'Temple Land', packages: 19, desc: 'Ancient Dravidian temples, Ooty hills, Marina beach, and silk textiles.' },
  { name: 'Kashmir', region: 'North India', tag: 'Paradise on Earth', packages: 16, desc: 'Dal Lake houseboats, Gulmarg skiing, Pahalgam valleys, and saffron fields.' },
  { name: 'Assam & NE India', region: 'Northeast India', tag: 'Wild Northeast', packages: 11, desc: 'Kaziranga one-horned rhinos, tea gardens, Brahmaputra river, and tribal culture.' },
  { name: 'Gujarat', region: 'West India', tag: 'Vibrant Gujarat', packages: 13, desc: 'Rann of Kutch, Gir lions, Dwaraka pilgrimage, and the Statue of Unity.' },
];

const ITEMS_PER_PAGE = 9;

export default function DestinationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE);
  const paginated = destinations.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <>
      <PageHero
        tag="Explore India"
        title="Popular"
        titleHighlight="Destinations"
        subtitle="India is impossibly vast and stunningly diverse. Here are the regions that consistently steal travellers' hearts."
        breadcrumbs={[{ label: 'Destinations' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {paginated.map((dest, i) => (
              <AnimatedSection key={dest.name} delay={i * 0.07}>
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  <div className="img-placeholder" style={{ height: 200 }}>
                    <Camera size={30} color="var(--text-dim)" />
                    <span style={{ fontSize: '0.75rem', textAlign: 'center', padding: '0 16px' }}>
                      {dest.name} — Add your photo
                    </span>
                  </div>
                  <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                      <MapPin size={12} color="var(--primary-light)" />
                      <span style={{ fontSize: '0.72rem', color: 'var(--primary-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {dest.region}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4, fontFamily: 'inherit' }}>{dest.name}</h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600, marginBottom: 10 }}>{dest.tag}</p>
                    <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 18, flex: 1 }}>{dest.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="badge badge-primary">{dest.packages} Packages</span>
                      <Link href="/packages" style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--primary-light)', fontSize: '0.82rem', fontWeight: 600 }}>
                        Explore <ArrowRight size={13} />
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
