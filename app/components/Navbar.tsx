'use client';

import { MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Travel Tips' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '10px 0' : '18px 0',
        background: scrolled ? 'rgba(11,14,26,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40,
            background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px var(--primary-glow)',
          }}>
            <MapPin size={20} color="#fff" />
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
              The Travel Designer
            </div>
            <div style={{ fontSize: '0.6rem', color: 'var(--primary-light)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Travels & Tours
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/booking" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          aria-label="Toggle menu"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text)',
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(11,14,26,0.97)',
          backdropFilter: 'blur(24px)',
          borderTop: '1px solid var(--border)',
          padding: '16px 0 24px',
        }}>
          <div className="container">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '13px 0',
                  color: pathname === link.href ? 'var(--primary-light)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: 20, display: 'inline-flex' }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
