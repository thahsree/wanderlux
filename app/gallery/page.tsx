'use client';

import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const TOTAL_PHOTOS = 20;
const PHOTOS_PER_PAGE = 12;

const photoSlots = Array.from({ length: TOTAL_PHOTOS }, (_, i) => ({
  id: i + 1,
  size: i % 5 === 0 ? 'large' : i % 3 === 0 ? 'medium' : 'small',
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
          <AnimatedSection style={{ marginBottom: 40, textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Add your travel photos to these placeholder slots — replace the image source in code.
            </p>
          </AnimatedSection>

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
                  <div className="img-placeholder" style={{ height: heights[photo.size] || 250 }}>
                    <Camera size={28} color="var(--text-dim)" />
                    <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>
                      Photo {(currentPage - 1) * PHOTOS_PER_PAGE + i + 1}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', opacity: 0.5 }}>
                      Add your image here
                    </span>
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
