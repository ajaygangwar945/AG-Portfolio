import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import CyberCard from './common/CyberCard';

const EducationItem = ({ school, degree, period, location, cgpa, logo, color = "var(--education-accent)" }) => (
  <CyberCard 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    padding="2rem"
    accentColor={color}
    style={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      gap: '1.5rem',
      height: '100%'
    }}>
      {logo && (
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'rgba(255, 255, 255, 0.05)', 
          borderRadius: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img src={logo} alt={school} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>
      )}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h4 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', minHeight: '3rem', display: 'flex', alignItems: 'center', lineHeight: '1.2' }}>{school}</h4>
        <p style={{ color, fontSize: '0.8rem', fontWeight: '700', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem', opacity: 0.9 }}>{degree}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '700' }}>
            <Calendar size={12} />
            <span>{period}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.75rem' }}>
            <MapPin size={12} />
            <span>{location}</span>
          </div>
        </div>
        
        {cgpa && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '1.5rem' }}>
            <Award size={14} color="var(--warning-accent)" />
            <span style={{ color: 'var(--text-primary)', fontWeight: '900', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)' }}>GRADE: {cgpa}</span>
          </div>
        )}
      </div>
    </div>
  </CyberCard>
);

const Education = () => {
  return (
    <section id="education" style={{ padding: '4rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
        >
          <GraduationCap size={32} color="var(--education-accent)" style={{ flexShrink: 0 }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }}>
            Academic <span style={{ color: 'var(--education-accent)' }}>Journey</span>
          </h2>
        </motion.div>
        
        <div className="education-grid">
          <EducationItem 
            school="Lovely Professional University" 
            degree="Bachelor of Technology (CSE)" 
            period="AUG 2023 - PRESENT"
            location="PHAGWARA, PB"
            cgpa="7.46 CGPA"
            logo="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png"
            color="var(--education-accent)"
          />
          <EducationItem 
            school="Vidya Bhavan Public School" 
            degree="Intermediate (Class XII - Science)" 
            period="APR 2021 - APR 2022" 
            location="BAREILLY, UP" 
            cgpa="72%" 
            logo="/vidya.jpg" 
            color="var(--education-accent)" 
          />
          <EducationItem 
            school="Vidya Bhavan Public School" 
            degree="Matriculation (Class X)" 
            period="APR 2019 - APR 2020" 
            location="BAREILLY, UP" 
            cgpa="94%" 
            logo="/vidya.jpg" 
            color="var(--education-accent)" 
          />
        </div>
      </div>
    </section>
  );
};


export default Education;
