import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import CyberCard from './common/CyberCard';

const AchievementCard = ({ title, award, date, icon: Icon, color }) => (
  <CyberCard 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    padding="1.5rem"
    accentColor={color}
    style={{ 
      borderTop: `4px solid ${color}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        background: `${color}22`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: `1px solid ${color}`
      }}>
        <Icon size={20} color={color} />
      </div>
      <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: '700', fontFamily: 'var(--font-body)' }}>{date}</span>
    </div>
    
    <div>
      <h4 style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>{title}</h4>
      <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: '1.4' }}>{award}</p>
    </div>
  </CyberCard>
);

const Achievements = () => {
  const achievements = [
    {
      title: "HackTheBlock Recognition",
      award: "Achieved 2nd place among 1,000+ participants and won a $300 prize for a high-impact blockchain project.",
      date: "JUN 2025",
      icon: Trophy,
      color: "#f59e0b"
    },
    {
      title: "AI in Web Development Challenge",
      award: "Secured 2nd Rank for developing an AI-driven language learning platform using Python.",
      date: "MAY 2024",
      icon: Award,
      color: "#10b981"
    }
  ];

  return (
    <section id="achievements" style={{ padding: '6rem 0', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}
        >
          <Trophy size={32} color="var(--achievements-accent)" />
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }}>
            Major <span style={{ color: 'var(--achievements-accent)' }}>Achievements</span>
          </h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {achievements.map((item, idx) => (
            <AchievementCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
