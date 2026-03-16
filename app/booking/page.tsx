'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, FileText, MapPin, Send, User } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';

const STEPS = ['Trip Details', 'Personal Info', 'Review & Confirm'];

const destinations = ['Kerala Backwaters', 'Golden Triangle', 'Himachal Adventure', 'Rajasthan Royal', 'Goa Beach', 'Char Dham Yatra', 'Andaman Islands', 'Kashmir Valley', 'Leh Ladakh', 'Meghalaya', 'Custom Destination'];
const categories = ['Adventure', 'Cultural', 'Beach', 'Pilgrimage', 'Honeymoon', 'Family', 'Nature', 'Wildlife'];

interface FormData {
  destination: string;
  category: string;
  departureDate: string;
  returnDate: string;
  adults: string;
  children: string;
  rooms: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  requests: string;
  agreeTerms: boolean;
}

const defaultForm: FormData = {
  destination: '', category: '', departureDate: '', returnDate: '',
  adults: '2', children: '0', rooms: '1',
  firstName: '', lastName: '', email: '', phone: '', city: '', requests: '',
  agreeTerms: false,
};

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const next = () => { setDir(1); setStep(s => Math.min(2, s + 1)); };
  const prev = () => { setDir(-1); setStep(s => Math.max(0, s - 1)); };
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const InputRow = ({ children }: { children: React.ReactNode }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>{children}</div>
  );

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
    </div>
  );

  if (submitted) {
    return (
      <>
        <PageHero tag="Booking" title="Complete Your" titleHighlight="Journey" breadcrumbs={[{ label: 'Booking' }]} minHeight="30vh" />
        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container" style={{ maxWidth: 600 }}>
            <div style={{ textAlign: 'center', padding: '60px 40px', background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(10,123,110,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle size={36} color="var(--primary-light)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: 12 }}>Booking Request Received!</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 28 }}>
                Thank you <strong style={{ color: 'var(--text)' }}>{form.firstName}</strong>! Our team will call you on <strong style={{ color: 'var(--primary-light)' }}>{form.phone}</strong> within 24 hours to confirm your trip to <strong style={{ color: 'var(--text)' }}>{form.destination || 'your chosen destination'}</strong>.
              </p>
              <div style={{ background: 'rgba(10,123,110,0.08)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius)', padding: '16px 20px', marginBottom: 28, textAlign: 'left' }}>
                {[
                  { l: 'Destination', v: form.destination },
                  { l: 'Departure', v: form.departureDate },
                  { l: 'Travellers', v: `${form.adults} Adults${form.children !== '0' ? `, ${form.children} Children` : ''}` },
                  { l: 'Email', v: form.email },
                ].filter(r => r.v).map(row => (
                  <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border)', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{row.l}</span>
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{row.v}</span>
                  </div>
                ))}
              </div>
              <a href="/" className="btn-primary" style={{ display: 'inline-flex' }}>Back to Home</a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        tag="Book Your Trip"
        title="Plan Your"
        titleHighlight="Dream Journey"
        subtitle="Fill in 3 quick steps and our experts will craft the perfect itinerary for you."
        breadcrumbs={[{ label: 'Booking' }]}
        minHeight="38vh"
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 800 }}>

          {/* Step Indicator */}
          <div style={{ position: 'relative', maxWidth: 500, margin: '0 auto 52px', width: '100%' }}>
            {/* Track Line */}
            <div style={{ position: 'absolute', top: 21, left: '16.66%', right: '16.66%', height: 2, background: 'var(--border)', zIndex: 0 }} />
            {/* Progress Line */}
            <div style={{ position: 'absolute', top: 21, left: '16.66%', width: `calc(66.66% * ${step / (STEPS.length - 1)})`, height: 2, background: 'var(--primary)', zIndex: 0, transition: 'width 0.4s' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
              {STEPS.map((label, i) => (
                <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: i < step ? 'var(--primary)' : i === step ? 'var(--primary)' : 'var(--bg-card)',
                    border: `2px solid ${i <= step ? 'var(--primary)' : 'var(--border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.4s',
                    boxShadow: i === step ? 'var(--shadow-glow)' : 'none',
                  }}>
                    {i < step
                      ? <CheckCircle size={20} color="#fff" />
                      : <span style={{ fontSize: '0.88rem', fontWeight: 700, color: i === step ? '#fff' : 'var(--text-dim)' }}>{i + 1}</span>
                    }
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: i === step ? 'var(--primary-light)' : 'var(--text-dim)', textAlign: 'center', lineHeight: 1.2, padding: '0 4px' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'clamp(28px, 5vw, 48px)', overflow: 'hidden', minHeight: 420 }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {/* ── STEP 1: Trip Details ── */}
                {step === 0 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(10,123,110,0.12)', border: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MapPin size={18} color="var(--primary-light)" />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Trip Details</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>Where and when do you want to travel?</p>
                      </div>
                    </div>

                    <InputRow>
                      <Field label="Destination *">
                        <select name="destination" required value={form.destination} onChange={change} className="form-input">
                          <option value="">Select destination</option>
                          {destinations.map(d => <option key={d}>{d}</option>)}
                        </select>
                      </Field>
                      <Field label="Tour Category">
                        <select name="category" value={form.category} onChange={change} className="form-input">
                          <option value="">Any category</option>
                          {categories.map(c => <option key={c}>{c}</option>)}
                        </select>
                      </Field>
                    </InputRow>

                    <InputRow>
                      <Field label="Departure Date *">
                        <input name="departureDate" type="date" required value={form.departureDate} onChange={change} className="form-input" />
                      </Field>
                      <Field label="Return Date">
                        <input name="returnDate" type="date" value={form.returnDate} onChange={change} className="form-input" />
                      </Field>
                    </InputRow>

                    <InputRow>
                      <Field label="Adults">
                        <select name="adults" value={form.adults} onChange={change} className="form-input">
                          {['1','2','3','4','5','6','7','8','9','10+'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </Field>
                      <Field label="Children (under 12)">
                        <select name="children" value={form.children} onChange={change} className="form-input">
                          {['0','1','2','3','4','5'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </Field>
                      <Field label="Rooms">
                        <select name="rooms" value={form.rooms} onChange={change} className="form-input">
                          {['1','2','3','4','5'].map(n => <option key={n}>{n}</option>)}
                        </select>
                      </Field>
                    </InputRow>
                  </div>
                )}

                {/* ── STEP 2: Personal Info ── */}
                {step === 1 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(10,123,110,0.12)', border: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={18} color="var(--primary-light)" />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Personal Information</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>Tell us a bit about yourself</p>
                      </div>
                    </div>

                    <InputRow>
                      <Field label="First Name *">
                        <input name="firstName" required value={form.firstName} onChange={change} placeholder="First name" className="form-input" />
                      </Field>
                      <Field label="Last Name *">
                        <input name="lastName" required value={form.lastName} onChange={change} placeholder="Last name" className="form-input" />
                      </Field>
                    </InputRow>

                    <InputRow>
                      <Field label="Email Address *">
                        <input name="email" type="email" required value={form.email} onChange={change} placeholder="your@email.com" className="form-input" />
                      </Field>
                      <Field label="Phone Number *">
                        <input name="phone" required value={form.phone} onChange={change} placeholder="+91 XXXXX XXXXX" className="form-input" />
                      </Field>
                    </InputRow>

                    <Field label="City / State">
                      <input name="city" value={form.city} onChange={change} placeholder="e.g. Mumbai, Maharashtra" className="form-input" />
                    </Field>

                    <Field label="Special Requests / Notes">
                      <textarea name="requests" value={form.requests} onChange={change} placeholder="Dietary requirements, accessibility needs, anniversary surprises, preferred activities..." className="form-input" rows={4} style={{ resize: 'vertical' }} />
                    </Field>
                  </div>
                )}

                {/* ── STEP 3: Review ── */}
                {step === 2 && (
                  <form onSubmit={submit}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(10,123,110,0.12)', border: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileText size={18} color="var(--primary-light)" />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Review & Confirm</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>Verify your details before submitting</p>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
                      {/* Trip Summary */}
                      <div style={{ background: 'rgba(10,123,110,0.06)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius)', padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                          <MapPin size={14} color="var(--primary-light)" />
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Trip Details</span>
                        </div>
                        {[
                          { l: 'Destination', v: form.destination || '—' },
                          { l: 'Category', v: form.category || 'Any' },
                          { l: 'Departure', v: form.departureDate || '—' },
                          { l: 'Return', v: form.returnDate || '—' },
                          { l: 'Adults', v: form.adults },
                          { l: 'Children', v: form.children },
                          { l: 'Rooms', v: form.rooms },
                        ].map(r => (
                          <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid var(--border)', fontSize: '0.84rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>{r.l}</span>
                            <span style={{ color: 'var(--text)', fontWeight: 600 }}>{r.v}</span>
                          </div>
                        ))}
                      </div>
                      {/* Personal Summary */}
                      <div style={{ background: 'rgba(10,123,110,0.06)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius)', padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                          <User size={14} color="var(--primary-light)" />
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Personal Info</span>
                        </div>
                        {[
                          { l: 'Name', v: `${form.firstName} ${form.lastName}` || '—' },
                          { l: 'Email', v: form.email || '—' },
                          { l: 'Phone', v: form.phone || '—' },
                          { l: 'City', v: form.city || '—' },
                        ].map(r => (
                          <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid var(--border)', fontSize: '0.84rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>{r.l}</span>
                            <span style={{ color: 'var(--text)', fontWeight: 600 }}>{r.v}</span>
                          </div>
                        ))}
                        {form.requests && (
                          <div style={{ marginTop: 10, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Requests: </span>{form.requests}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Terms */}
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', marginBottom: 24 }}>
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={form.agreeTerms}
                        onChange={change}
                        required
                        style={{ marginTop: 3, accentColor: 'var(--primary)', width: 16, height: 16 }}
                      />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        I agree to the <a href="#" style={{ color: 'var(--primary-light)' }}>Terms & Conditions</a> and <a href="#" style={{ color: 'var(--primary-light)' }}>Privacy Policy</a>. I understand this is a booking request and confirmation will be provided within 24 hours.
                      </span>
                    </label>

                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                      <button type="button" onClick={prev} className="btn-outline">
                        <ArrowLeft size={15} /> Back
                      </button>
                      <button type="submit" className="btn-accent" style={{ padding: '13px 32px' }}>
                        <Send size={15} /> Submit
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Nav Buttons (steps 0 & 1 only) */}
            {step < 2 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
                {step > 0 ? (
                  <button onClick={prev} className="btn-outline"><ArrowLeft size={15} /> Back</button>
                ) : <div />}
                <button onClick={next} className="btn-primary">
                  Continue <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>

          {/* Trust note */}
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
              🔒 Your data is safe · No payment required at this stage · Free consultation
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
