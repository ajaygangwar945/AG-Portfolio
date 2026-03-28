/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, Mail, Github, Linkedin, ExternalLink, 
  GraduationCap, Award, Briefcase, 
  Database, Layout, Server, Brain, Code2, Globe, 
  Activity, Shield, Terminal, Zap, ChevronRight, Cpu, User
} from 'lucide-react';
import CyberCard from './common/CyberCard';

const Resume = () => {
  const [activeNode, setActiveNode] = useState('EDUCATION');
  const [glitching, setGlitching] = useState(false);

  const resumeUrl = "/resume.pdf"; 

  const personalSpecs = [
    { label: 'NAME', value: 'Ajay Gangwar', icon: User },
    { label: 'ROLE', value: 'Software Engineer', icon: Terminal },
    { label: 'EMAIL', value: 'ajaygangwar945@gmail.com', icon: Mail },
    { label: 'MOBILE', value: '+91-8283024392', icon: Activity },
    { label: 'LOCATION', value: 'Bareilly / Punjab', icon: Globe },
  ];

  const contactLinks = [
    { icon: Mail, href: 'mailto:ajaygangwar945@gmail.com', color: '#ef4444' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ajaygangwar945', color: '#3b82f6' },
    { icon: Github, href: 'https://github.com/ajaygangwar945', color: 'var(--github-accent)' },
  ];

  const nodes = [
    { id: 'EDUCATION', icon: GraduationCap, label: 'EDUCATION' },
    { id: 'SKILLS', icon: Cpu, label: 'SKILLS' },
    { id: 'PROJECTS', icon: Zap, label: 'PROJECTS' },
    { id: 'EXP', icon: Award, label: 'CERTIFICATES' },
    { id: 'HONORS', icon: Award, label: 'ACHIEVEMENTS' },
  ];

  const data = {
    EDUCATION: [
      { title: "B.Tech Computer Science & Engineering", org: "Lovely Professional University", date: "Aug '23 – Present", stat: "7.46 CGPA" },
      { title: "Intermediate (12th)", org: "Vidya Bhavan Public School", date: "Apr '21 – Apr '22", stat: "72%" },
      { title: "Matriculation (10th)", org: "Vidya Bhavan Public School", date: "Apr '19 – Apr '20", stat: "94%" },
    ],
    SKILLS: [
      { cat: "Languages", items: ["Python", "C/C++", "JavaScript", "Java"] },
      { cat: "Frameworks", items: ["React", "NodeJS", "HTML / CSS", "Tailwind CSS"] },
      { cat: "Tools / Platforms", items: ["MySQL", "MongoDB", "Figma", "Power BI", "Git / GitHub", "Linux", "AWS", "Docker"] },
      { cat: "Core CS", items: ["DBMS", "OS", "Computer Networks", "SQL", "OOPs"] },
      { cat: "AI/ML & Data", items: ["Pandas", "NumPy", "Seaborn", "Scikit-learn", "Matplotlib"] },
      { cat: "Soft Skills", items: ["Problem-Solving", "Time Management", "Leadership", "Team Work", "Adaptability"] },
    ],
    PROJECTS: [
      { title: "Cyber Warfare Intrusion Detection", tech: "Python / ML", desc: "Designed a real-time intrusion detection system using machine learning. Developed an optimized SVM model with RBF kernel achieving 98.5% accuracy." },
      { title: "Ayush Intelligence", tech: "FastAPI / React", desc: "Scalable decoupled architecture for AYUSH–ICD-11 interoperability. Developed REST APIs for intelligent medical search." },
      { title: "ATS Resume Score", tech: "Streamlit / AI", desc: "AI-powered resume analysis system with ATS scoring. Integrated Gemini API to extract key skills and career recommendations." },
    ],
    EXP: [
      { title: "Data Science & Analytics", org: "HP (Hewlett Packard)", date: "2024 - 2025", desc: "Comprehensive training in data analysis techniques, predictive modeling, and business analytics." },
      { title: "Introduction to Modern AI", org: "Cisco", date: "2024 - 2025", desc: "Foundational AI certification covering machine learning concepts, neural networks, and AI deployment." },
    ],
    HONORS: [
      { title: "HackTheBlock Winner", rank: "#2", prize: "$300", desc: "Achieved 2nd place among 1,000+ participants for a high-impact blockchain project." },
      { title: "AI in Web Development", rank: "#2", prize: "Rank", desc: "Secured 2nd rank and developed an AI-driven language learning platform using Python." },
    ]
  };

  useEffect(() => {
    if (glitching) {
      const timer = setTimeout(() => setGlitching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [glitching]);

  const handleNodeClick = (nodeId) => {
    setGlitching(true);
    setActiveNode(nodeId);
  };

  return (
    <section id="resume" className="resume-section-mobile" style={{ padding: '4rem 0', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      
      <div className="container">
        {/* Terminal Header */}
        <div className="resume-header-flex" style={{ 
          marginBottom: '2rem', 
          borderBottom: '1px solid var(--card-border)', 
          paddingBottom: '1rem',
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <FileText size={24} color="var(--resume-accent)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--resume-accent)', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>CURRICULUM VITAE</span>
            </div>
            <h2 style={{ fontSize: '3rem', margin: '0', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
              My <span style={{ color: 'var(--resume-accent)' }}>Resume</span>
            </h2>
          </motion.div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: 'fit-content' }}>
            <motion.a 
               href={resumeUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-secondary"
               whileHover={{ y: -2 }}
               style={{
                 padding: '0.4rem 0.8rem',
                 fontSize: '0.7rem',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.4rem',
                 borderColor: 'var(--resume-accent)',
                 color: 'var(--resume-accent)',
                 background: 'transparent'
               }}
            >
              <ExternalLink size={14} /> VIEW ONLINE
            </motion.a>
            <motion.a 
               href={resumeUrl}
               download="Ajay_Gangwar_Resume.pdf"
               className="btn btn-primary"
               whileHover={{ y: -2 }}
               style={{
                 padding: '0.4rem 0.8rem',
                 fontSize: '0.7rem',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.4rem',
                 background: 'var(--resume-accent)',
                 color: 'var(--bg-color)',
                 borderColor: 'transparent'
               }}
            >
              <Download size={14} /> DOWNLOAD
            </motion.a>
          </div>
        </div>

        {/* Console Grid */}
        <div className="resume-grid resume-grid-mobile" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(280px, 320px) 1fr', 
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left Panel: Identity Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <CyberCard padding="1.5rem" accentColor="var(--resume-accent)" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(10px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ width: '60px', height: '60px', border: '1px solid var(--resume-accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                   <User size={30} color="var(--resume-accent)" />
                   <div style={{ position: 'absolute', top: -5, right: -5, width: 10, height: 10, background: 'var(--resume-accent)', borderRadius: '50%' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>Personal Details</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {personalSpecs.map((spec, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>{spec.label}</div>
                     <div className="resume-text-wrap" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '700', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <spec.icon size={12} color="var(--resume-accent)" style={{ flexShrink: 0 }} />
                       {spec.value}
                     </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '2.5rem' }}>
                 {contactLinks.map((link, i) => (
                   <motion.a 
                     key={i} 
                     href={link.href} 
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ y: -5, shadow: `0 5px 15px ${link.color}44` }}
                     style={{ width: '35px', height: '35px', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}
                   >
                     <link.icon size={16} color={link.color} />
                   </motion.a>
                 ))}
              </div>
            </CyberCard>


          </div>

          {/* Center Panel: Active Node Feed */}
          <div style={{ position: 'relative' }}>
             {/* Node Selector (Mini Hud) */}
             <div style={{ 
               display: 'flex', 
               gap: '0.75rem', 
               marginBottom: '2rem', 
               overflowX: 'auto', 
               paddingBottom: '0.5rem',
               flexWrap: 'wrap', // Added wrap to prevent spill
               justifyContent: 'flex-start'
             }}>
                {nodes.map(node => (
                  <button
                    key={node.id}
                    onClick={() => handleNodeClick(node.id)}
                    className="btn-node-selector"
                    style={{
                      background: activeNode === node.id ? 'var(--resume-accent)' : 'transparent',
                      color: activeNode === node.id ? 'var(--bg-color)' : 'var(--text-dim)',
                      border: activeNode === node.id ? 'none' : '1px solid var(--card-border)',
                      padding: '0.6rem 1rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.65rem',
                      cursor: 'pointer',
                      transition: '0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      whiteSpace: 'nowrap',
                      clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' // Standardized slant
                    }}
                  >
                    <node.icon size={14} />
                    <span style={{ marginTop: '2px' }}>{node.label}</span>
                  </button>
                ))}
             </div>

             <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ 
                    opacity: 1, 
                    filter: glitching ? 'blur(5px) hue-rotate(90deg)' : 'blur(0px) hue-rotate(0deg)' 
                  }}
                  exit={{ opacity: 0, filter: 'blur(20px)' }}
                  transition={{ duration: 0.3 }}
                >
                  {activeNode === 'EDUCATION' && data.EDUCATION.map((item, i) => (
                    <div key={i} style={{ marginBottom: i === data.EDUCATION.length - 1 ? 0 : '1.5rem', padding: '1.5rem', border: '1px solid var(--card-border)', background: 'var(--card-bg)', backdropFilter: 'blur(10px)', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--resume-accent)' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h4 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2.8vw, 1.15rem)', lineHeight: '1.3', wordBreak: 'break-word' }}>{item.title}</h4>
                        <span style={{ color: 'var(--resume-accent)', fontWeight: '800', fontSize: '0.8rem' }}>{item.stat}</span>
                      </div>
                      <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{item.org}</p>
                      <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '1px' }}>DATED: {item.date}</div>
                    </div>
                  ))}

                  {activeNode === 'PROJECTS' && data.PROJECTS.map((item, i) => (
                    <div key={i} style={{ marginBottom: i === data.PROJECTS.length - 1 ? 0 : '1.5rem', padding: '1.5rem', border: '1px solid var(--card-border)', background: 'var(--card-bg)', backdropFilter: 'blur(10px)', cursor: 'default' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                         <h4 style={{ color: 'var(--resume-accent)', fontSize: 'clamp(1rem, 4vw, 1.3rem)', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>{item.title}</h4>
                         <span style={{ fontSize: '0.6rem', padding: '0.2rem 0.5rem', border: '1px solid var(--resume-accent)', color: 'var(--resume-accent)', whiteSpace: 'nowrap' }}>{item.tech}</span>
                      </div>
                      <p style={{ marginTop: '1rem', color: 'var(--text-primary)', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', lineHeight: '1.6' }}>
                        <ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem', flexShrink: 0 }} color="var(--resume-accent)" />
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  {activeNode === 'EXP' && data.EXP.map((item, i) => (
                    <div key={i} style={{ marginBottom: i === data.EXP.length - 1 ? 0 : '2rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                         <div style={{ width: '40px', height: '1px', background: 'var(--resume-accent)' }} />
                         <span style={{ color: 'var(--resume-accent)', fontSize: '0.7rem', fontWeight: '800' }}>{item.date}</span>
                      </div>
                      <div style={{ padding: '1rem 0 0 3rem' }}>
                        <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{item.title}</h4>
                        <p style={{ color: 'var(--text-dim)', marginTop: '0.2rem' }}>{item.org}</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  {activeNode === 'HONORS' && data.HONORS.map((item, i) => (
                    <div key={i} style={{ 
                      display: 'flex', 
                      gap: '1.5rem', 
                      marginBottom: i === data.HONORS.length - 1 ? 0 : '1.5rem', 
                      alignItems: 'center',
                      background: 'var(--card-bg)',
                      backdropFilter: 'blur(10px)',
                      padding: '1.5rem',
                      border: '1px solid var(--card-border)',
                      position: 'relative'
                    }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--resume-accent)' }} />
                       <div style={{ width: '60px', height: '60px', border: '1px solid var(--resume-accent)', color: 'var(--resume-accent)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '900' }}>
                          {item.rank}
                       </div>
                       <div>
                         <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{item.title}</h4>
                         <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{item.desc}</p>
                       </div>
                    </div>
                  ))}

                  {activeNode === 'SKILLS' && (
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                      gap: '1.25rem' 
                    }}>
                       {data.SKILLS.map((group, i) => (
                         <div key={i} style={{ padding: '1rem', border: '1px solid var(--card-border)', background: 'var(--card-bg)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ fontSize: '0.7rem', color: 'var(--resume-accent)', fontWeight: '800', marginBottom: '1rem', borderBottom: '1px solid var(--resume-accent-alpha)', paddingBottom: '0.3rem' }}>
                               {group.cat}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                               {group.items.map((skill, si) => (
                                 <span key={si} style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>&gt; {skill}</span>
                               ))}
                            </div>
                         </div>
                       ))}
                    </div>
                  )}
                </motion.div>
             </AnimatePresence>
          </div>



        </div>

        {/* Custom Layout Style */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1100px) {
            .resume-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            .btn-node-selector {
              padding: 0.5rem 0.8rem !important;
              font-size: 0.6rem !important;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default Resume;
