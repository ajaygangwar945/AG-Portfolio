import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import CyberCard from './common/CyberCard';

const EducationItem = ({ school, degree, period, location, cgpa, color = "var(--edu-accent)" }) => (
  <CyberCard 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    padding="2rem"
    accentColor={color}
    style={{ 
      marginBottom: '1.5rem',
      borderLeft: `4px solid ${color}`
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
      <div>
        <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>{school}</h4>
        <p style={{ color, fontSize: '0.9rem', fontWeight: '700', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '1px' }}>{degree}</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: '700' }}>
          <Calendar size={12} />
          <span>{period}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          <MapPin size={12} />
          <span>{location}</span>
        </div>
      </div>
    </div>
    
    {cgpa && (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Award size={14} color="var(--warning-accent)" />
        <span style={{ color: 'var(--text-primary)', fontWeight: '900', fontSize: '0.9rem' }}>GRADE: {cgpa}</span>
      </div>
    )}
  </CyberCard>
);

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}
        >
          <GraduationCap size={32} color="var(--edu-accent)" />
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }}>
            Academic <span style={{ color: 'var(--edu-accent)' }}>Journey</span>
          </h2>
        </motion.div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <EducationItem 
            school="Lovely Professional University" 
            degree="Bachelor of Technology (Computer Science and Engineering)" 
            period="AUG 2023 - PRESENT"
            location="PHAGWARA, PB"
            cgpa="7.46 CGPA"
            color="#3b82f6"
          />
          <EducationItem 
            school="Vidya Bhavan Public School" 
            degree="Intermediate (Class XII - Science)" 
            period="APR 2021 - APR 2022"
            location="BAREILLY, UP"
            cgpa="72%"
            color="#8b5cf6"
          />
          <EducationItem 
            school="Vidya Bhavan Public School" 
            degree="Matriculation (Class X)" 
            period="APR 2019 - APR 2020"
            location="BAREILLY, UP"
            cgpa="94%"
            color="#10b981"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
