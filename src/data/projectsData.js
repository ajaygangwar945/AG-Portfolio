import { Activity, Heart, Box, Layers, Terminal, Globe, AppWindow, Cpu, Database, ShieldAlert, CloudRain, Scale, Map } from 'lucide-react';
import projectAts from '../assets/project-ats.png';
import projectPet from '../assets/project-pet.png';

import projectIcd from '../assets/project-icd.png';
import projectEventfolio from '../assets/project-eventfolio.png';
import projectSofthub from '../assets/project-softhub.png';
import projectAccident from '../assets/project-accident.png';
import projectAchievements from '../assets/project-achievements.png';
import projectPortfolioHub from '../assets/project-portfolio-hub.png';
import projectMedpath from '../assets/project-medpath.png';
import projectIntelligence from '../assets/project-intelligence.png';
import projectTerrorism from '../assets/project-terrorism.png';
import projectCyber from '../assets/project-cyber.png';
import projectWeather from '../assets/project-weather.png';
import projectLegal from '../assets/project-legal.png';
import projectRainfall from '../assets/project-rainfall.png';
import projectConference from '../assets/project-conference.png';
import projectStudent from '../assets/project-student.png';

export const allProjects = [
  {
    title: "MedPath Pro",
    description: "Interactive hospital shortest-path visualizer using Dijkstra’s algorithm with real-time emergency routing.",
    tech: ["JavaScript", "Node.js", "MongoDB", "Three.js"],
    github: "https://github.com/ajaygangwar945/MedPath-Pro",
    live: "https://medpath-pro.onrender.com/",
    icon: Activity,
    color: "#0ea5e9", // Sky Blue
    image: projectMedpath,
    category: "Full Stack, AI & Data",
    uid: "MED-11"
  },
  {
    title: "Intelligence Explorer",
    description: "Interactive AI learning dashboard presenting key AI topics in an animated interface.",
    tech: ["HTML", "CSS", "Three.js"],
    github: "https://github.com/ajaygangwar945/Intelligence-Explorer",
    live: "https://intelligence-explorer.vercel.app",
    icon: Cpu,
    color: "#8b5cf6", // Violet
    image: projectIntelligence,
    category: "Frontend, AI & Data",
    uid: "INT-12"
  },
  {
    title: "AI Legal Advisor",
    description: "AI-powered legal assistance platform providing real-time responses to legal queries through Gemini AI.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/ajaygangwar945/AI-Legal-Advisor",
    live: "https://ai-legal-advisor-chatbot.vercel.app/",
    icon: Scale,
    color: "#f59e0b", // Gold
    image: projectLegal,
    category: "AI & Data, Full Stack",
    uid: "LGL-16"
  },
  {
    title: "Student Portal",
    description: "Python-based tool that processes Excel data to generate a modern, searchable dashboard.",
    tech: ["Python", "Pandas", "HTML", "CSS"],
    github: "https://github.com/ajaygangwar945/Student-Portal",
    live: "https://student-portal-2023.vercel.app/",
    icon: AppWindow,
    color: "#10b981", // Emerald
    image: projectStudent,
    category: "Full Stack",
    uid: "STU-19"
  },
  {
    title: "Road Accident Dashboard",
    description: "Data visualization project analyzing road accident trends and hotspots.",
    tech: ["HTML", "CSS", "Excel"],
    github: "https://github.com/ajaygangwar945/Road-Accident-Dashboard",
    live: "https://road-accident-dashboard.vercel.app/",
    icon: Map,
    color: "#ef4444", // Red
    image: projectAccident,
    category: "Data Visualization",
    uid: "RAD-08"
  },
  {
    title: "Conference Paper Submission Portal",
    description: "Web-based portal utilizing Oracle 19c and Oracle APEX to manage conference workflows.",
    tech: ["Oracle APEX", "Oracle 19c", "SQL"],
    github: "https://github.com/ajaygangwar945/Conference-Paper-Submission-Portal",
    live: "https://oracleapex.com/ords/r/ajaygangwar945/conference-paper-submission-portal/login?session=6858581372541",
    icon: Database,
    color: "#6366f1", // Indigo
    image: projectConference,
    category: "Full Stack",
    uid: "CONF-18"
  },
  {
    title: "Eventfolio",
    description: "Ghibli-inspired interactive portfolio showcasing hackathons, leadership, and technical journeys.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ajaygangwar945/Eventfolio",
    live: "https://eventfolio.vercel.app",
    icon: AppWindow,
    color: "#f97316", // Orange
    image: projectEventfolio,
    category: "Frontend",
    uid: "EVT-06"
  },
  {
    title: "Portfolio Hub",
    description: "Premium multi-portfolio hub featuring a glassmorphic interface, 3D visuals, and data dashboards.",
    tech: ["HTML", "CSS", "Three.js"],
    github: "https://github.com/ajaygangwar945/Portfolio-Hub",
    live: "https://ajay-portfolio-hub.vercel.app",
    icon: AppWindow,
    color: "#ec4899", // Pink
    image: projectPortfolioHub,
    category: "Frontend",
    uid: "HUB-10"
  },
  {
    title: "Stylish Achievements",
    description: "Modern interactive portfolio built with React, TypeScript, and 3D web technologies to showcase achievements.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/ajaygangwar945/Stylish-Achievements",
    live: "https://stylish-achievements.vercel.app",
    icon: Layers,
    color: "#fbbf24", // Amber
    image: projectAchievements,
    category: "Frontend",
    uid: "ACH-09"
  },
  {
    title: "Cyber Warfare Intrusion Detection",
    description: "Machine learning intrusion detection system for identifying and classifying malicious network traffic.",
    tech: ["Python", "Scikit-Learn", "Machine Learning"],
    github: "https://github.com/ajaygangwar945/Cyber-Warfare-Intrusion-Detection",
    live: "https://cyber-warfare-intrusion-detection.onrender.com",
    icon: ShieldAlert,
    color: "#22c55e", // Green
    image: projectCyber,
    category: "AI & Data, Cybersecurity",
    uid: "CWID-14"
  },
  {
    title: "Indian Rainfall Data Analysis",
    description: "Comprehensive Rainfall Exploratory Data Analysis and Machine Learning project.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/ajaygangwar945/Indian-Rainfall-Data-Analysis",
    live: "https://ajaygangwar945.github.io/Indian-Rainfall-Data-Analysis/",
    icon: CloudRain,
    color: "#3b82f6", // Blue
    image: projectRainfall,
    category: "Data Visualization, AI & Data",
    uid: "RAIN-17"
  },
  {
    title: "Global Terrorism Analysis",
    description: "Interactive Power BI dashboard analyzing global terrorism trends using GTD with multiple KPIs.",
    tech: ["Python", "Power BI", "DAX"],
    github: "https://github.com/ajaygangwar945/Global-Terrorism-Analysis",
    live: "https://app.powerbi.com/view?r=eyJrIjoiNTY4YWQxMGItNGFhMC00ZWQ4LThlZjUtMDY0NWY4OGJkYjdhIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
    icon: Globe,
    color: "#ef4444", // Red (Terrorism Alert)
    image: projectTerrorism,
    category: "Data Visualization",
    uid: "GTA-13"
  },
  {
    title: "Ayush Intelligence",
    description: "Healthcare interoperability platform enabling dual coding with global standards (FHIR R4, ICD-11, SNOMED CT, LOINC).",
    tech: ["TypeScript", "FHIR", "SNOMED CT"],
    github: "https://github.com/ajaygangwar945/ICD-Mapping",
    live: "https://icd-mapping.onrender.com",
    icon: Activity,
    color: "#06b6d4", // Cyan
    image: projectIcd,
    category: "Full Stack, Data Visualization",
    uid: "ICD-05"
  },
  {
    title: "ATS Resume Score",
    description: "AI engine utilizing Google Gemini for deep-scan resume optimization and job alignment analysis.",
    tech: ["Python", "Streamlit", "Gemini AI", "NLP"],
    github: "https://github.com/ajaygangwar945/ATS-Resume-Score",
    live: "https://ats-resume-score-945.streamlit.app/",
    icon: Cpu,
    color: "#059669", // Dark Green
    image: projectAts,
    category: "AI & Data",
    uid: "ATS-CORE-02"
  },
  {
    title: "SoftHub",
    description: "SoftHub is a high-performance, full-stack software distribution platform with a robust Node.js backend.",
    tech: ["Node.js", "Express", "MongoDB", "HTML"],
    github: "https://github.com/ajaygangwar945/SoftHub",
    live: "https://softhub-bwnd.onrender.com",
    icon: Database,
    color: "#d946ef", // Fuchsia
    image: projectSofthub,
    category: "Full Stack",
    uid: "SOFT-07"
  },
  {
    title: "Weather App",
    description: "React-based weather application that provides real-time data using OpenWeatherMap API.",
    tech: ["React", "JavaScript", "API"],
    github: "https://github.com/ajaygangwar945/Weather-App",
    live: "https://weather-forcasting-temperature.netlify.app/",
    icon: CloudRain,
    color: "#60a5fa", // Light Blue
    image: projectWeather,
    category: "Frontend",
    uid: "WTH-15"
  },
  {
    title: "Pet Adoption & Animal Welfare",
    description: "Responsive portal for pet community engagement and listing management using modern UI paradigms.",
    tech: ["JavaScript", "CSS3", "Swiper.js", "Netlify"],
    github: "https://github.com/ajaygangwar945/Pet-Adoption-Animal-Welfare",
    live: "https://pet-adoption-animal-welfare.netlify.app",
    icon: Heart,
    color: "#f472b6", // Pink
    image: projectPet,
    category: "Frontend",
    uid: "HUB-PET-03"
  }
];
