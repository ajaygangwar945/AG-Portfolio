/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Cpu, Code, Network, Layers, Database, Globe } from 'lucide-react';
import CyberCard from './common/CyberCard';
import agileCert from '../assets/certificates/agile.png';
import ciscoCert from '../assets/certificates/cisco.png';
import dataScienceCert from '../assets/certificates/data_science.png';
import networkCert from '../assets/certificates/network.png';
import nptelCert from '../assets/certificates/nptel.png';
import softwareCert from '../assets/certificates/software.png';

const CertificateItem = ({ name, issuer, date, image, link, description, Icon }) => (
  <CyberCard
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    padding="0"
    accentColor="var(--certificates-accent)"
    style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: '100%'
    }}
  >
    {/* Certificate Screenshot Preview */}
    <div style={{
      position: 'relative',
      width: '100%',
      height: '250px',
      overflow: 'hidden',
      borderBottom: '1px solid var(--certificates-accent)'
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
    </div>

    <div style={{ 
      padding: '1.25rem', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: 'transparent',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <div>
        <h4 style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          fontWeight: '800',
          fontFamily: 'var(--font-heading)',
          lineHeight: '1.4',
          marginBottom: '0.5rem'
        }}>
          {name}
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)' }}>
          {Icon && <Icon size={12} color="var(--certificates-accent)" />}
          <p style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {issuer} • {date}
          </p>
        </div>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          marginTop: '0.75rem',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>
      </div>

      <motion.a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5, color: 'var(--certificates-accent)' }}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.75rem',
          fontWeight: '700',
          cursor: 'pointer',
          marginTop: '1.5rem',
          textDecoration: 'none',
          width: 'fit-content'
        }}
      >
        VIEW CREDENTIAL <ExternalLink size={14} />
      </motion.a>
    </div>
  </CyberCard>
);

const Certificates = () => {
  const certifications = [
    {
      name: "Agile Project Management",
      issuer: "HP",
      date: "FEB 2026",
      image: agileCert,
      link: "https://drive.google.com/file/d/1Imkpj4Dt2W_3Rqw2zp6vfdfuhJn3zrKQ/view?usp=drive_link",
      description: "Mastered agile methodologies, scrum framework, and project lifecycle management for delivering high-quality software.",
      Icon: Layers
    },
    {
      name: "Data Science & Analytics",
      issuer: "HP",
      date: "FEB 2026",
      image: dataScienceCert,
      link: "https://drive.google.com/file/d/1LnyFOshIj-p7J2e0JN72jEjGtb4Ei8xu/view?usp=drive_link",
      description: "Explored data visualization, statistical analysis, and machine learning techniques using industry-standard tools.",
      Icon: Database
    },
    {
      name: "Introduction to Modern AI",
      issuer: "Cisco",
      date: "NOV 2025",
      image: ciscoCert,
      link: "https://drive.google.com/file/d/1IXhi-QHVeFeNh2lrJTzpq3ni9L8zpZ_z/view?usp=drive_link",
      description: "Foundational knowledge in artificial intelligence, neural networks, and the ethical implications of AI development.",
      Icon: Cpu
    },
    {
      name: "Python for Data Science",
      issuer: "NPTEL",
      date: "FEB 2025",
      image: nptelCert,
      link: "https://drive.google.com/file/d/1gjxcSxIoeJkCGOZ1soOdwq0hej6ihmoC/view?usp=drive_link",
      description: "Advanced Python programming for data manipulation, cleaning, and predictive modeling in data science workflows.",
      Icon: Code
    },
    {
      name: "Fundamentals of Network Communication",
      issuer: "Coursera",
      date: "SEP 2024",
      image: networkCert,
      link: "https://drive.google.com/file/d/1zt4IwTnlaRmsrmTfzjhvZIIdPaRlnyzk/view?usp=drive_link",
      description: "Core understanding of networking protocols, OSI model, and secure data transmission across distributed systems.",
      Icon: Network
    },
    {
      name: "Software Engineering",
      issuer: "Coursera",
      date: "MAY 2024",
      image: softwareCert,
      link: "https://drive.google.com/file/d/1ZfN3j95W6HuIFe-32fPnCe5gO4TO86hv/view?usp=drive_link",
      description: "Deep dive into software design patterns, system architecture, and agile development practices for scalable applications.",
      Icon: Globe
    }
  ];

  return (
    <section id="certificates" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={24} color="var(--certificates-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--certificates-accent)', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>CREDENTIALS</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Verified <span style={{ color: 'var(--certificates-accent)' }}>Certifications</span>
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
        </motion.div>

        <div className="three-col-grid">
          {certifications.map((cert, idx) => (
            <CertificateItem key={idx} {...cert} />
          ))}
        </div>

        {/* View All Certificates Link */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <a 
            href="https://certificates-docs-portal.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ 
              padding: '0.8rem 2rem', 
              fontSize: '0.8rem', 
              letterSpacing: '2px',
              background: 'var(--certificates-accent)',
              color: 'var(--bg-color)',
              borderColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            &gt; VIEW ALL CERTIFICATES <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
