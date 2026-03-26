import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, ExternalLink, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, link, color }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="cyber-card"
    style={{ 
      padding: '1.5rem', 
      background: 'rgba(255, 255, 255, 0.02)',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      cursor: 'pointer'
    }}
  >
    <div style={{ 
      width: '50px', 
      height: '50px', 
      background: `${color}11`, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      border: `1px solid ${color}44`
    }}>
      <Icon size={24} color={color} />
    </div>
    <div>
      <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase' }}>{label}</p>
      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '600' }}>{value}</p>
    </div>
    <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.3 }} />
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Get in <span style={{ color: 'var(--primary-accent)' }}>Touch</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
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
              color="#66fcf1"
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
              color="#ffffff"
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
          <div className="cyber-card" style={{ padding: '2.5rem', background: 'var(--card-bg)' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Send size={18} color="var(--primary-accent)" />
              <span>Send a Message</span>
            </h3>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.5rem', fontWeight: '700' }}>NAME</label>
                <input type="text" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', outline: 'none' }} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.5rem', fontWeight: '700' }}>EMAIL</label>
                <input type="email" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', outline: 'none' }} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.5rem', fontWeight: '700' }}>MESSAGE</label>
                <textarea rows="4" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', outline: 'none', resize: 'none' }} placeholder="How can I help you?"></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={18} />
                <span>SEND MESSAGE</span>
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <MapPin size={14} color="var(--primary-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>LOCATION: PHAGWARA / BAREILLY, INDIA</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: '700' }}>
            <span>© 2026 AJAY GANGWAR</span>
            <span>POWERED BY REACT + FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
