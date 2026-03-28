/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Terminal, Cpu, Brain } from 'lucide-react';
import CyberCard from './common/CyberCard';

// Achievement Images
import hacktheblockImg from '../assets/hacktheblock.jpg';
import aiWebImg from '../assets/aiweb.jpeg';
import iitRoparImg from '../assets/iitropar.jpeg';

const AchievementCard = ({ title, award, date, icon: Icon, color, image }) => {
  return (
    <CyberCard
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      padding="1.5rem"
      accentColor={color}
      notchedBorderWidth={1}
      style={{
        borderTop: `1px solid ${color}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%'
      }}
    >
      {image && (
        <div style={{
          width: 'calc(100% + 3rem)',
          height: '180px',
          margin: '-1.5rem -1.5rem 0.5rem -1.5rem',
          overflow: 'hidden',
          position: 'relative',
          borderBottom: `1px solid ${color}`
        }}>
          <motion.img
            src={image}
            alt={title}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.8) contrast(1.2) sepia(0.2)',
            }}
            whileHover={{ scale: 1.1, filter: 'brightness(1) contrast(1.1) sepia(0)' }}
            transition={{ duration: 0.6 }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: `linear-gradient(to top, color-mix(in srgb, ${color}, transparent 80%), transparent)`,
            pointerEvents: 'none'
          }} />
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          background: `var(--skills-accent)22`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid var(--skills-accent)`,
          flexShrink: 0
        }}>
          <Icon size={18} color="var(--skills-accent)" />
        </div>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontWeight: '700', fontFamily: 'var(--font-body)', background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>{date}</span>
      </div>

      <div>
        <h4 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', lineHeight: '1.2' }}>{title}</h4>
        <p style={{ color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{award}</p>
      </div>
    </CyberCard>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Advitiya IIT Ropar - CodeHunt",
      award: "Secured 5th Place at IIT Ropar Tech Fest. Tackled 4 coding questions and 2 puzzle rounds (Binary & High-Scoring) in a 90-minute sprint with team Mark42 M7.",
      date: "FEB 2025",
      icon: Terminal,
      color: "var(--achievements-accent)",
      image: iitRoparImg
    },
    {
      title: "BlockseBlock National Hackathon",
      award: "National Runner-up in a multi-campus blockchain hackathon, excelling among 1,000+ participants with a high-impact solution.",
      date: "JUN 2025",
      icon: Cpu,
      color: "var(--achievements-accent)",
      image: hacktheblockImg
    },
    {
      title: "AI in Web Development Challenge",
      award: "Secured 2nd Rank for developing an AI-driven language learning platform using Python.",
      date: "MAY 2024",
      icon: Brain,
      color: "var(--achievements-accent)",
      image: aiWebImg
    }
  ];

  return (
    <section id="achievements" style={{ padding: '64px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Trophy size={24} color="var(--achievements-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--achievements-accent)', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>MILESTONES</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Major <span style={{ color: 'var(--achievements-accent)' }}>Achievements</span>
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {achievements.map((item, idx) => (
            <AchievementCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
