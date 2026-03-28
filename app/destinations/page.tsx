'use client';

import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const destinations = [
  { name: 'Kerala', region: 'South India', tag: "God's Own Country", packages: 24, desc: 'Backwaters, tea estates, spice gardens, beaches, and Ayurveda retreats.', image: 'https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww' },
  { name: 'Rajasthan', region: 'West India', tag: 'Land of Kings', packages: 31, desc: 'Majestic forts, golden deserts, royal palaces, and vibrant bazaars.', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop' },
  { name: 'Himachal Pradesh', region: 'North India', tag: 'Mountain Paradise', packages: 18, desc: 'Snow-capped peaks, apple orchards, Buddhist monasteries, and adventure sports.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop' },
  { name: 'Goa', region: 'West India', tag: 'Beach Capital', packages: 15, desc: 'Golden beaches, Portuguese heritage, water sports, and buzzing nightlife.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Uttarakhand', region: 'North India', tag: 'Dev Bhoomi', packages: 22, desc: 'Char Dham pilgrimage, Rishikesh yoga, Jim Corbett wildlife, and river rafting.', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop' },
  { name: 'Andaman Islands', region: 'Bay of Bengal', tag: 'Island Paradise', packages: 12, desc: 'Crystal-clear waters, coral reefs, white-sand beaches, and scuba diving.', image: 'https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QW5kYW1hbiUyMElzbGFuZHN8ZW58MHx8MHx8fDA%3D' },
  { name: 'Leh Ladakh', region: 'North India', tag: 'Land of High Passes', packages: 14, desc: 'Pangong Lake, magnetic hill, ancient monasteries, and high-altitude desert.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop' },
  { name: 'Meghalaya', region: 'Northeast India', tag: 'Abode of Clouds', packages: 9, desc: 'Living root bridges, cleanest village, crystal rivers, and cascading waterfalls.', image: 'https://images.unsplash.com/photo-1625654325562-762dcec9e6f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVnaGFsYXlhfGVufDB8fDB8fHww' },
  { name: 'Tamil Nadu', region: 'South India', tag: 'Temple Land', packages: 19, desc: 'Ancient Dravidian temples, Ooty hills, Marina beach, and silk textiles.', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFtaWwlMjBOYWR1fGVufDB8fDB8fHww' },
  { name: 'Kashmir', region: 'North India', tag: 'Paradise on Earth', packages: 16, desc: 'Dal Lake houseboats, Gulmarg skiing, Pahalgam valleys, and saffron fields.', image: 'https://images.unsplash.com/photo-1566833912196-17b5f1352932?q=80&w=800&auto=format&fit=crop' },
  { name: 'Assam & NE India', region: 'Northeast India', tag: 'Wild Northeast', packages: 11, desc: 'Kaziranga one-horned rhinos, tea gardens, Brahmaputra river, and tribal culture.', image: 'https://images.unsplash.com/photo-1554930121-665e7be84fb3?q=80&w=800&auto=format&fit=crop' },
  { name: 'Gujarat', region: 'West India', tag: 'Vibrant Gujarat', packages: 13, desc: 'Rann of Kutch, Gir lions, Dwaraka pilgrimage, and the Statue of Unity.', image: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=800&auto=format&fit=crop' },
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
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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
