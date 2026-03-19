import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, Calendar } from 'lucide-react';

const EducationItem = ({ school, degree, period, location, cgpa }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    style={{ 
      padding: '1.5rem', 
      background: 'rgba(255, 255, 255, 0.02)', 
      borderRadius: '1.25rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      marginBottom: '1.5rem'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '700' }}>{school}</h4>
      <span style={{ color: 'var(--text-accent-cyan)', fontSize: '0.85rem', fontWeight: '600' }}>{period}</span>
    </div>
    <p style={{ color: 'var(--text-accent-violet)', fontWeight: '600', marginBottom: '0.25rem' }}>{degree}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{location}</span>
      {cgpa && <span style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem' }}>CGPA: {cgpa}</span>}
    </div>
  </motion.div>
);

const AchievementItem = ({ title, award, date }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1.25rem', 
      padding: '1.25rem', 
      background: 'rgba(34, 211, 238, 0.05)', 
      borderRadius: '1rem',
      border: '1px solid rgba(34, 211, 238, 0.1)',
      marginBottom: '1rem'
    }}
  >
    <Trophy size={20} color="var(--accent-cyan)" />
    <div style={{ flex: 1 }}>
      <p style={{ fontWeight: '700', color: 'white', fontSize: '0.95rem' }}>{title}</p>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{award}</p>
    </div>
    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{date}</span>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '4rem' 
        }}>
          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <GraduationCap size={32} color="var(--accent-cyan)" />
              <h2 style={{ fontSize: '2.5rem' }}>Education</h2>
            </div>
            
            <EducationItem 
              school="Lovely Professional University" 
              degree="Bachelor of Technology - Computer Science and Engineering" 
              period="Aug '23 - Present"
              location="Phagwara, Punjab"
              cgpa="7.38"
            />
            <EducationItem 
              school="Vidya Bhavan Public School" 
              degree="Intermediate (Science)" 
              period="Apr '21 - Apr '22"
              location="Bareilly, Uttar Pradesh"
              cgpa="74%"
            />
            <EducationItem 
              school="Vidya Bhavan Public School" 
              degree="Matriculation" 
              period="Apr '19 - Apr '20"
              location="Bareilly, Uttar Pradesh"
              cgpa="90%"
            />
          </div>

          {/* Achievements & Certs Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <Trophy size={32} color="var(--accent-violet)" />
              <h2 style={{ fontSize: '2.5rem' }}>Achievements</h2>
            </div>
            
            <AchievementItem 
              title="HackTheBlock Runner Up" 
              award="2nd place among 1k+ participants, won $300" 
              date="Jun '25" 
            />
            <AchievementItem 
              title="AI in Web Development" 
              award="Secured 2nd Rank in AI/Web Dev challenge" 
              date="May '24" 
            />

            <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Award size={32} color="var(--accent-cyan)" />
              <h2 style={{ fontSize: '2.5rem' }}>Certificates</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Introduction to Modern AI | Cisco', 'Flutter UI Bootcamp | Udemy', 'Python for Data Science | NPTEL', 'Software Engineering | Coursera'].map(cert => (
                <div key={cert} style={{ 
                  padding: '1rem', 
                  borderLeft: '2px solid var(--accent-cyan)', 
                  background: 'rgba(255,255,255,0.02)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
