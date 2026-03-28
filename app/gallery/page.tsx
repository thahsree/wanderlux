'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const TOTAL_PHOTOS = 20;
const PHOTOS_PER_PAGE = 12;

const PHOTO_URLS = [
  'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1645441510555-ad67c4b5be0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJpc20lMjBpbiUyMGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524492707943-593c447c948c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564507592333-c60657eea023?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
];

const photoSlots = Array.from({ length: TOTAL_PHOTOS }, (_, i) => ({
  id: i + 1,
  size: i % 5 === 0 ? 'large' : i % 3 === 0 ? 'medium' : 'small',
  image: PHOTO_URLS[i % PHOTO_URLS.length],
}));


const heights: Record<string, number> = { large: 380, medium: 280, small: 220 };

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_PHOTOS / PHOTOS_PER_PAGE);
  const paginatedSlots = photoSlots.slice((currentPage - 1) * PHOTOS_PER_PAGE, currentPage * PHOTOS_PER_PAGE);

  return (
    <>
      <PageHero
        tag="Photo Gallery"
        title="Moments That"
        titleHighlight="Inspire Travel"
        subtitle="A visual journey through India's most breathtaking landscapes, cultures, and experiences."
        breadcrumbs={[{ label: 'Gallery' }]}
      />
      <section className="section">
        <div className="container">
          {/* Masonry Grid */}
          <div style={{ columns: 'auto 280px', columnGap: 20, marginBottom: 20 }}>

            {paginatedSlots.map((photo, i) => (
              <AnimatedSection
                key={photo.id}
                delay={i * 0.05}
                style={{ breakInside: 'avoid', marginBottom: 20, display: 'block' }}
              >
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.35s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border-primary)';
                    el.style.transform = 'scale(1.02)';
                    el.style.boxShadow = 'var(--shadow-card)';
                    const overlay = el.querySelector('.gallery-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.transform = 'scale(1)';
                    el.style.boxShadow = 'none';
                    const overlay = el.querySelector('.gallery-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <div style={{ position: 'relative', height: heights[photo.size] || 250, overflow: 'hidden' }}>
                    <Image
                      src={photo.image}
                      alt={`Gallery Photo ${photo.id}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,123,110,0.6) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      display: 'flex', alignItems: 'flex-end', padding: 16,
                      pointerEvents: 'none',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>View Photo</span>
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
