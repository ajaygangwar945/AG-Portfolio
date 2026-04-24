import { Terminal, Cpu, Brain } from 'lucide-react';
import hacktheblockImg from '../assets/hacktheblock.jpg';
import aiWebImg from '../assets/aiweb.jpeg';
import iitRoparImg from '../assets/iitropar.jpeg';

export const achievementsData = [
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
