import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, ExternalLink, Heart, Twitter } from 'lucide-react';
import CyberCard from './common/CyberCard';

const ContactItem = ({ icon: Icon, label, value, link, color }) => (
  <CyberCard 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={() => window.open(link, '_blank')}
    accentColor={color}
      style={{ 
        padding: '1.5rem', 
        background: 'var(--card-bg)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        cursor: 'pointer',
        '--card-border': `color-mix(in srgb, ${color}, transparent 80%)`,
        '--primary-accent': color
      }}
  >
    <div style={{ 
      width: '50px', 
      height: '50px', 
      background: `color-mix(in srgb, ${color}, transparent 93%)`, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      border: `1px solid color-mix(in srgb, ${color}, transparent 73%)`,
      borderRadius: '0',
      flexShrink: 0
    }}>
      {Icon && <Icon size={24} color={color} />}
    </div>
    <div>
      <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase' }}>{label}</p>
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '600' }}>{value}</p>
    </div>
    <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.3 }} />
  </CyberCard>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
          ...formData
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Mail size={24} color="var(--contact-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--contact-accent)', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>CONNECT</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Get in <span style={{ color: 'var(--contact-accent)' }}>Touch</span>
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)', marginBottom: '1.5rem' }} />
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px' }}>
            Available for freelance, full-time positions, and AI consultations. Reach out via any of the channels below.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <ContactItem 
              icon={Mail} 
              label="Email" 
              value="ajaygangwar945@gmail.com" 
              link="mailto:ajaygangwar945@gmail.com"
              color="var(--contact-accent)"
            />
            <ContactItem 
              icon={Linkedin} 
              label="LinkedIn" 
              value="linkedin.com/ajaygangwar945" 
              link="https://www.linkedin.com/in/ajaygangwar945/"
              color="#0a66c2"
            />
            <ContactItem 
              icon={Github} 
              label="GitHub" 
              value="github.com/ajaygangwar945" 
              link="https://github.com/ajaygangwar945"
              color="var(--github-accent)"
            />
            <ContactItem 
              icon={Twitter} 
              label="Twitter / X" 
              value="twitter.com/ajaygangwar945" 
              link="https://twitter.com/ajaygangwar945"
              color="#1da1f2"
            />
            <ContactItem 
              icon={Phone} 
              label="Phone" 
              value="+91-8283024392" 
              link="tel:+918283024392"
              color="#10b981"
            />
          </div>

          {/* Minimal Form / Extra Info */}
          <CyberCard 
            accentColor="var(--contact-accent)"
            padding="2.5rem"
            style={{ 
              background: 'var(--card-bg)',
              '--card-border': 'var(--contact-accent-alpha)',
              '--primary-accent': 'var(--contact-accent)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Send size={18} color="var(--contact-accent)" />
              <span>Send a Message</span>
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--contact-accent)', marginBottom: '0.5rem', fontWeight: '700' }}>NAME</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', outline: 'none' }} 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--contact-accent)', marginBottom: '0.5rem', fontWeight: '700' }}>EMAIL</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', outline: 'none' }} 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--contact-accent)', marginBottom: '0.5rem', fontWeight: '700' }}>MESSAGE</label>
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', outline: 'none', resize: 'none' }} 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', textAlign: 'center', fontSize: '0.9rem', borderRadius: '4px' }}>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', textAlign: 'center', fontSize: '0.9rem', borderRadius: '4px' }}>
                  Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-contact" 
                disabled={status === 'submitting'}
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
              >
                <Send size={18} />
                <span>{status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}</span>
              </button>
            </form>
          </CyberCard>
        </div>

        <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '700' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>© 2026 AJAY GANGWAR</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Made with <Heart size={12} color="var(--contact-accent)" /> in India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
