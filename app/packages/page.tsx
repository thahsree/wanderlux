'use client';

import { Filter } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PackageCard from '../components/PackageCard';
import PageHero from '../components/PageHero';

const categories = ['All', 'Cultural', 'Nature', 'Adventure', 'Honeymoon', 'Family', 'Pilgrimage', 'Beach'];

const allPackages = [
  { title: 'Golden Triangle Classic', destination: 'Delhi • Agra • Jaipur', duration: '7 Days', groupSize: '2–12', price: '₹24,999', originalPrice: '₹32,000', rating: 4.9, reviews: 312, category: 'Cultural', highlights: ['Taj Mahal', 'Red Fort', 'Amber Fort', 'City Palace'] },
  { title: 'Kerala Backwaters Escape', destination: 'Kochi • Munnar • Alleppey', duration: '6 Days', groupSize: '2–8', price: '₹21,499', originalPrice: '₹28,000', rating: 4.8, reviews: 248, category: 'Nature', highlights: ['Houseboat', 'Tea Estates', 'Backwaters', 'Kathakali'] },
  { title: 'Himalayan Adventure Trek', destination: 'Manali • Spiti • Leh', duration: '10 Days', groupSize: '4–16', price: '₹34,999', originalPrice: '₹45,000', rating: 4.7, reviews: 186, category: 'Adventure', highlights: ['Rohtang Pass', 'Pangong Lake', 'Monastery', 'Camping'] },
  { title: 'Rajasthan Royal Tour', destination: 'Jaipur • Jodhpur • Udaipur', duration: '8 Days', groupSize: '2–10', price: '₹27,999', originalPrice: '₹36,000', rating: 4.8, reviews: 420, category: 'Cultural', highlights: ['Mehrangarh Fort', 'Lake Pichola', 'Pushkar Fair', 'Desert Safari'] },
  { title: 'Goa Beach Getaway', destination: 'North Goa • South Goa', duration: '4 Days', groupSize: '2–20', price: '₹12,499', originalPrice: '₹18,000', rating: 4.6, reviews: 534, category: 'Beach', highlights: ['Calangute Beach', 'Fort Aguada', 'Water Sports', 'Night Market'] },
  { title: 'Char Dham Yatra', destination: 'Badrinath • Kedarnath • Gangotri • Yamunotri', duration: '12 Days', groupSize: '4–30', price: '₹38,999', originalPrice: '₹50,000', rating: 4.9, reviews: 892, category: 'Pilgrimage', highlights: ['Badrinath Temple', 'Kedarnath Trek', 'Gangotri Glacier', 'Yamunotri Dham'] },
  { title: 'Andaman Islands Paradise', destination: 'Port Blair • Havelock • Neil Island', duration: '6 Days', groupSize: '2–12', price: '₹29,999', originalPrice: '₹38,000', rating: 4.7, reviews: 167, category: 'Beach', highlights: ['Radhanagar Beach', 'Cellular Jail', 'Scuba Diving', 'Glass-bottom Boat'] },
  { title: 'Himachal Honeymoon Special', destination: 'Shimla • Manali • Kasauli', duration: '8 Days', groupSize: '2', price: '₹32,499', originalPrice: '₹42,000', rating: 5.0, reviews: 298, category: 'Honeymoon', highlights: ['Snow Experience', 'Rohtang Pass', 'Candle-light Dinner', 'Spa & Wellness'] },
  { title: 'Magical Meghalaya', destination: 'Shillong • Cherrapunji • Dawki', duration: '6 Days', groupSize: '2–15', price: '₹22,999', originalPrice: '₹30,000', rating: 4.8, reviews: 134, category: 'Nature', highlights: ['Living Root Bridges', 'Dawki River', 'Nohkalikai Falls', 'Mawlynnong'] },
  { title: 'Varanasi Spiritual Tour', destination: 'Varanasi • Bodhgaya • Ayodhya', duration: '5 Days', groupSize: '2–20', price: '₹14,999', originalPrice: '₹20,000', rating: 4.9, reviews: 678, category: 'Pilgrimage', highlights: ['Ganga Aarti', 'Kashi Vishwanath', 'Sarnath', 'Boat Ride at Dawn'] },
  { title: 'Jim Corbett Wildlife Safari', destination: 'Jim Corbett • Nainital', duration: '4 Days', groupSize: '4–10', price: '₹18,499', originalPrice: '₹25,000', rating: 4.7, reviews: 211, category: 'Adventure', highlights: ['Tiger Safari', 'Jeep Safari', 'Nainital Lake', 'Bird Watching'] },
  { title: 'Kerala Family Package', destination: 'Kochi • Thekkady • Munnar • Kovalam', duration: '9 Days', groupSize: '4–20', price: '₹31,999', originalPrice: '₹42,000', rating: 4.8, reviews: 345, category: 'Family', highlights: ['Elephant Encounter', 'Spice Garden', 'Beach Club', 'Boat House'] },
];

const ITEMS_PER_PAGE = 6;

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeFilter === 'All'
    ? allPackages
    : allPackages.filter(p => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <PageHero
        tag="Explore Tours"
        title="Our Tour"
        titleHighlight="Packages"
        subtitle="From spiritual pilgrimages to adrenaline-pumping adventures — find the perfect India tour for you."
        breadcrumbs={[{ label: 'Packages' }]}
      />

      <section className="section">
        <div className="container">

          {/* Filter Bar */}
          <AnimatedSection style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 8 }}>
                <Filter size={15} color="var(--text-muted)" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Filter</span>
              </div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 100,
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    border: `1.5px solid ${activeFilter === cat ? 'var(--primary)' : 'var(--border)'}`,
                    background: activeFilter === cat ? 'var(--primary)' : 'var(--bg-card)',
                    color: activeFilter === cat ? '#fff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Results Count */}
          <AnimatedSection style={{ marginBottom: 28 }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Showing <strong style={{ color: 'var(--text)' }}>{filtered.length}</strong> packages
              {activeFilter !== 'All' && <> in <span style={{ color: 'var(--primary-light)' }}>{activeFilter}</span></>}
            </p>
          </AnimatedSection>

          {/* Package Grid */}
          {paginated.length > 0 ? (
            <div className="grid-3">
              {paginated.map((pkg, i) => (
                <PackageCard key={pkg.title} {...pkg} index={i} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No packages found for this category.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-btn"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              >
                ‹
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
                ›
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
