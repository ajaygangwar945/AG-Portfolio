import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Monitor, BookOpen, Music, Heart, Sparkles, Rocket, Code2, Languages, Gamepad2 } from 'lucide-react';

const Card = ({ title, icon: Icon, iconColor, children, className = "", style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: 'spring', damping: 20 }}
      className={`glass-card ${className}`}
      style={{ 
        padding: '2.5rem', 
        textAlign: 'left', 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ...style
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: `linear-gradient(90deg, transparent, ${iconColor}, transparent)`,
        opacity: 0.3
      }} />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ 
          background: `rgba(${parseInt(iconColor.slice(1,3), 16)}, ${parseInt(iconColor.slice(3,5), 16)}, ${parseInt(iconColor.slice(5,7), 16)}, 0.1)`,
          padding: '0.75rem',
          borderRadius: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${iconColor}33`
        }}>
          <Icon size={24} color={iconColor} />
        </div>
        <h3 style={{ 
          fontSize: '1.75rem', 
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-heading)',
          fontWeight: '700'
        }}>{title}</h3>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {children}
      </div>
    </motion.div>
  );
};

const InfoItem = ({ icon: Icon, label, value, color }) => {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}
    >
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.03)', 
        padding: '0.8rem', 
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <Icon size={20} color={color} />
      </div>
      <div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-accent-violet)', fontWeight: '500' }}>{label}</p>
        <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{value}</p>
      </div>
    </motion.div>
  );
};

const HobbyItem = ({ icon: Icon, label, color }) => {
  return (
    <motion.div 
      whileHover={{ 
        x: 10, 
        background: 'rgba(255, 255, 255, 0.05)',
        borderColor: color 
      }}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1.25rem', 
        background: 'rgba(255, 255, 255, 0.02)',
        padding: '1.25rem',
        borderRadius: '1.25rem',
        marginBottom: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.03)',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: `${color}11`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon size={20} color={color} />
      </div>
      <span style={{ fontWeight: '600', color: 'var(--text-accent-cyan)' }}>{label}</span>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div style={{ 
            width: '80px', 
            height: '6px', 
            background: 'var(--primary-gradient)', 
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
          }}></div>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          alignItems: 'stretch'
        }}>
          <Card title="Quick Facts" icon={Sparkles} iconColor="#facc15">
            <InfoItem icon={MapPin} label="Location" value="Bareilly, Uttar Pradesh" color="#ef4444" />
            <InfoItem icon={GraduationCap} label="Education" value="B.Tech Computer Science @ LPU" color="#3b82f6" />
            <InfoItem icon={Briefcase} label="Focus" value="Data Science and AI/ML" color="#10b981" />
            <InfoItem icon={Languages} label="Languages" value="English, Hindi" color="#f59e0b" />
          </Card>

          <Card title="My Journey" icon={Rocket} iconColor="#818cf8">
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.6' }}>
              Hello! I'm <span className="gradient-text">Ajay Gangwar</span>, a Computer Science and Engineering student at <span style={{ color: 'var(--text-accent-cyan)' }}>LPU</span> with a strong interest in technology and software development.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
              My journey in tech began with curiosity about how software and websites work, which led me to learn <span style={{ color: 'var(--text-accent-violet)' }}>C, C++, Java, and Python</span> and explore web development, data analysis, and algorithms.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              I enjoy building practical projects, creating useful digital solutions, and continuously improving my skills by exploring new technologies.
            </p>
          </Card>

          <Card title="Interests" icon={Heart} iconColor="#f472b6">
            <HobbyItem icon={BookOpen} label="AI Research" color="#f59e0b" />
            <HobbyItem icon={Music} label="Classical & Lo-fi" color="#8b5cf6" />
            <HobbyItem icon={Gamepad2} label="Gaming & Strategy" color="#f43f5e" />
          </Card>

          <Card title="My Approach" icon={Code2} iconColor="#22d3ee">
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.7', fontSize: '1.05rem', fontWeight: '500' }}>
              I believe in building technology that is not only functional but also practical and efficient. I focus on writing clean and well-structured code that helps solve real-world problems and improves user experience.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
              My approach is centered on problem solving, continuous learning, and building meaningful projects. I aim to develop solutions that are simple, reliable, and user-friendly while constantly improving my skills and exploring new technologies.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
