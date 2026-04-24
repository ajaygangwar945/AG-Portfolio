
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ShieldCheck, ArrowLeft, Star, Award, Zap } from 'lucide-react';
import CyberCard from './common/CyberCard';
import Navbar from './Navbar';
import BackgroundElements from './BackgroundElements';
import { positionsData } from '../data/positionsData';

const PositionDetails = ({ theme, toggleTheme }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const position = positionsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!position) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CyberCard accentColor="var(--error-accent)" padding="2rem">
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }}>MISSION FAILED: POSITION NOT FOUND</h2>
          <button onClick={() => navigate('/')} style={{ marginTop: '1rem', background: 'var(--primary-accent)', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>RETURN TO BASE</button>
        </CyberCard>
      </div>
    );
  }

  const color = "var(--positions-accent)";

  return (
    <>
      <BackgroundElements />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '2rem' }}
          >
            <button 
              onClick={() => navigate(-1)}
              style={{
                background: 'transparent',
                border: `1px solid ${color}`,
                color: color,
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '800',
                fontFamily: 'var(--font-heading)',
                cursor: 'pointer',
                marginBottom: '2rem'
              }}
            >
              <ArrowLeft size={16} />
              &lt; BACK TO TIMELINE
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <Briefcase size={24} color={color} />
              <span style={{ fontSize: '0.8rem', color: color, fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>Position Details</span>
            </div>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '2rem', 
              alignItems: 'center', 
              marginBottom: '2rem' 
            }}>
              {position.image && (
                <div style={{ 
                  flex: '1 1 280px',
                  height: '240px', 
                  overflow: 'hidden', 
                  border: `1px solid ${color}44`, 
                  borderRadius: '4px',
                  flexShrink: 0
                }}>
                  <img src={position.image} alt={position.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
              )}
              <div style={{ flex: '10 1 320px' }}>

                <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                  {position.title}
                </h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: color, fontWeight: '700', fontSize: '0.9rem' }}>
                    <Zap size={16} />
                    {position.role.toUpperCase()}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    <Calendar size={16} />
                    {position.date}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
            gap: '2rem', 
            marginBottom: '3rem' 
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CyberCard accentColor={color} padding="clamp(1.25rem, 5vw, 2rem)" style={{ background: 'var(--card-bg)', height: '100%' }}>
                <h3 style={{ fontSize: '1rem', color: color, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>&gt; MISSION OBJECTIVE</h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 0 }}>
                  {position.fullDescription || position.description}
                </p>
              </CyberCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CyberCard accentColor={color} padding="clamp(1.25rem, 5vw, 2rem)" style={{ background: 'var(--card-bg)', height: '100%' }}>
                <h3 style={{ fontSize: '1rem', color: color, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>&gt; CORE RESPONSIBILITIES</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {position.responsibilities.map((resp, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        background: `${color}22`, 
                        border: `1px solid ${color}`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <ShieldCheck size={14} color={color} />
                      </div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>{resp}</p>
                    </div>
                  ))}
                </div>
              </CyberCard>
            </motion.div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {position.events && position.events.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
                  <span style={{ color: color }}>&gt;</span> KEY INITIATIVES & EVENTS
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '1.5rem' 
                }}>
                  {position.events.map((event, idx) => (
                    <CyberCard key={idx} accentColor={color} padding="0" style={{ background: 'var(--card-bg)', overflow: 'hidden', height: '100%' }}>
                      {event.image && (
                        <div style={{ height: '220px', overflow: 'hidden', borderBottom: `1px solid ${color}22` }}>
                          <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                        </div>
                      )}
                      <div style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                          <Star size={20} color={color} fill={color} style={{ marginTop: '4px', flexShrink: 0 }} />
                          <div>
                            <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 0 0.75rem 0' }}>{event.title}</h4>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </CyberCard>
                  ))}
                </div>
              </motion.div>
            )}

            {position.certificates && position.certificates.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
                  <span style={{ color: color }}>&gt;</span> RECOGNITIONS & ACHIEVEMENTS
                </h3>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '2rem',
                  maxWidth: '1200px',
                  margin: '0 auto'
                }}>
                  {position.certificates.map((cert, idx) => (
                    <CyberCard key={idx} accentColor={color} padding="1.5rem" style={{ background: 'var(--card-bg)', overflow: 'hidden' }}>
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '2rem',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                      }}>
                        {cert.image && (
                          <div style={{ 
                            flex: '1 1 400px',
                            background: '#ffffff', 
                            borderRadius: '8px', 
                            overflow: 'hidden',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                            border: `1px solid ${color}22`,
                          }}>
                            <img 
                              src={cert.image} 
                              alt={cert.title} 
                              style={{ 
                                width: '100%', 
                                height: 'auto', 
                                objectFit: 'contain',
                                display: 'block'
                              }} 
                            />
                          </div>
                        )}
                        
                        <div style={{ flex: '1.5 1 300px' }}>
                          <h4 style={{ 
                            color: 'var(--text-secondary)', 
                            fontSize: '1.25rem', 
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <Award size={24} color={color} />
                            {cert.title}
                          </h4>
                          <p style={{ 
                            color: 'var(--text-primary)', 
                            fontSize: '1.05rem', 
                            lineHeight: '1.6', 
                            opacity: 0.9
                          }}>
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </CyberCard>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default PositionDetails;
