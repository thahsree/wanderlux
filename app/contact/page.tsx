'use client';

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const infos = [
  { icon: Phone, title: 'Call Us', lines: ['+91 98765 43210'], sub: 'Mon–Sat, 9 AM–7 PM IST' },
  { icon: Mail, title: 'Email Us', lines: ['hello@thetraveldesigner.in'], sub: 'Reply within 24 hours' },
  { icon: MapPin, title: 'Visit Us', lines: ['42 MG Road, Kochi, Kerala 682001'], sub: 'Walk-in Mon–Sat' },
  { icon: Clock, title: 'Office Hours', lines: ['Mon–Fri: 9 AM–7 PM', 'Sat: 10 AM–5 PM'], sub: 'Closed Sun & Holidays' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <PageHero
        tag="Get in Touch"
        title="We'd Love to"
        titleHighlight="Hear From You"
        subtitle="Planning a trip? Have a question? Our friendly travel experts are here to help."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-sm">
        <div className="container">
          <div className="grid-4">
            {infos.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px 22px', height: '100%', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(10,123,110,0.12)', border: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <info.icon size={20} color="var(--primary-light)" />
                  </div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 8, fontFamily: 'inherit' }}>{info.title}</h3>
                  {info.lines.map(l => <p key={l} style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500, lineHeight: 1.5 }}>{l}</p>)}
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: 8 }}>{info.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'start' }}>

            <AnimatedSection direction="left">
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '40px 36px' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 30 }}>Fill in the form and we'll reply within 24 hours.</p>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '48px 24px', background: 'rgba(10,123,110,0.08)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✅</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Thank you! We'll reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="form-input" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="form-input" />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Subject *</label>
                        <select name="subject" required value={form.subject} onChange={handleChange} className="form-input">
                          <option value="">Select topic</option>
                          <option>Tour Package Enquiry</option>
                          <option>Custom Itinerary</option>
                          <option>Booking Support</option>
                          <option>Cancellation / Refund</option>
                          <option>General Question</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your travel plans..." className="form-input" rows={5} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: 4 }}>
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <div style={{ height: 280, width: '100%', overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.81520623238!2d75.334033288258!3d11.87622543884878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42a4929780517%3A0xcb1356f6c919d7d4!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1711655651551!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10, fontFamily: 'inherit' }}>The Travel Designer Head Office</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>Main Road, Near Payyambalam Beach<br />Kannur, Kerala 670001, India</p>
                  <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                    <a href="tel:+919876543210" className="btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '11px', fontSize: '0.82rem' }}><Phone size={14} /> Call Now</a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '11px', fontSize: '0.82rem' }}>WhatsApp</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
