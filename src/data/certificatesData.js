import { Cpu, Code, Network, Layers, Database, Globe } from 'lucide-react';
import agileCert from '../assets/certificates/agile.png';
import ciscoCert from '../assets/certificates/cisco.png';
import dataScienceCert from '../assets/certificates/data_science.png';
import networkCert from '../assets/certificates/network.png';
import nptelCert from '../assets/certificates/nptel.png';
import softwareCert from '../assets/certificates/software.png';

export const certificationsData = [
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
