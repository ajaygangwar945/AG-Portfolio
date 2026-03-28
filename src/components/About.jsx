/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Heart, Sparkles, Rocket, Code2, Languages, BookOpen, Music, Gamepad2, Compass } from 'lucide-react';
import CyberCard from './common/CyberCard';

const Card = ({ title, icon: Icon, iconColor, children, className = "", style = {}, ...framerProps }) => {
  return (
    <CyberCard
      accentColor="var(--about-accent)"
      padding="2rem"
      className={className}
      style={{
        '--card-border': 'var(--about-accent-alpha)',
        '--primary-accent': 'var(--about-accent)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...style
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...framerProps}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{
          padding: '0.6rem',
          borderRadius: '0',
          backgroundColor: `color-mix(in srgb, ${iconColor} 15%, transparent)`,
          border: `1px solid color-mix(in srgb, ${iconColor} 50%, transparent)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          flexShrink: 0
        }}>
          {Icon && <Icon size={22} color={iconColor} />}
        </div>
        <h3 style={{
          fontSize: '1.25rem',
          color: 'var(--text-primary)',
          fontWeight: '700',
        }}>{title}</h3>
      </div>

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </CyberCard>
  );
};

const FactItem = ({ icon: Icon, title, value, iconColor }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{
        padding: '0.6rem',
        borderRadius: '0',
        backgroundColor: `color-mix(in srgb, ${iconColor} 15%, transparent)`,
        border: `1px solid color-mix(in srgb, ${iconColor} 50%, transparent)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        flexShrink: 0
      }}>
        <Icon size={18} color={iconColor} />
      </div>
      <div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>{title}</div>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '600' }}>{value}</div>
      </div>
    </div>
  );
};

const HobbyItem = ({ icon: Icon, label, iconColor }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem 1rem',
        borderRadius: '0',
        backgroundColor: `color-mix(in srgb, ${iconColor} 10%, transparent)`,
        border: `1px solid color-mix(in srgb, ${iconColor} 30%, transparent)`,
        marginBottom: '0.85rem',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '0',
        backgroundColor: `color-mix(in srgb, ${iconColor} 20%, transparent)`,
        border: `1px solid color-mix(in srgb, ${iconColor} 40%, transparent)`,
        flexShrink: 0
      }}>
        <Icon size={18} color={iconColor} />
      </div>
      <span style={{ fontWeight: '500', color: 'var(--text-primary)', fontSize: '0.95rem' }}>{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Compass size={24} color="var(--about-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--about-accent)', fontWeight: '800', letterSpacing: '3px' }}>IDENTITY</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            About <span style={{ color: 'var(--about-accent)' }}>Me</span>
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>

          <Card title="Quick Facts" icon={Sparkles} iconColor="#fbbf24">
            <FactItem icon={MapPin} title="Location" value="Bareilly, Uttar Pradesh" iconColor="#ef4444" />
            <FactItem icon={GraduationCap} title="Education" value="B.Tech Computer Science @ LPU" iconColor="#3b82f6" />
            <FactItem icon={Briefcase} title="Focus" value="Data Science and AI/ML" iconColor="#10b981" />
            <FactItem icon={Languages} title="Languages" value="English, Hindi" iconColor="#f59e0b" />
          </Card>

          <Card title="My Journey" icon={Rocket} iconColor="#8b5cf6">
            <p style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.7', fontSize: '0.95rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>
              Hello! I'm <span style={{ color: 'var(--about-accent)' }}>Ajay Gangwar</span>, a Computer Science and Engineering student at <span style={{ color: 'var(--about-accent)' }}>LPU</span> with a strong interest in technology and software development.
            </p>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1.25rem', lineHeight: '1.7', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              My journey in tech began with curiosity about how software and websites work, which led me to learn <span style={{ color: '#a78bfa' }}>C, C++, Java, and Python</span> and explore web development, data analysis, and algorithms.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              I enjoy building practical projects, creating useful digital solutions, and continuously improving my skills by exploring new technologies.
            </p>
          </Card>

          <Card title="Interests" icon={Heart} iconColor="#ec4899">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <HobbyItem icon={BookOpen} label="AI Research" iconColor="#eab308" />
              <HobbyItem icon={Code2} label="Web Development" iconColor="#06b6d4" />
              <HobbyItem icon={Music} label="Classical & Lo-fi" iconColor="#8b5cf6" />
              <HobbyItem icon={Gamepad2} label="Gaming & Strategy" iconColor="#f43f5e" />

            </div>
          </Card>

          <Card title="My Approach" icon={Code2} iconColor="#06b6d4">
            <p style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.7', fontSize: '0.95rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>
              I believe in building technology that is not only functional but also practical and efficient. I focus on writing clean and well-structured code that helps solve real-world problems and improves user experience.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              My approach is centered on problem solving, continuous learning, and building meaningful projects. I aim to develop solutions that are simple, reliable, and user-friendly while constantly improving my skills and exploring new technologies.
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default About;
