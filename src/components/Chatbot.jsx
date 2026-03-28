import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Terminal, Cpu, Zap } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import CyberCard from './common/CyberCard';

// Portfolio Data for Gemini Context
const PORTFOLIO_CONTEXT = `
You are the AI Assistant for Ajay Gangwar's Portfolio. 
Your goal is to answer questions about Ajay's skills, projects, and experience in a clear, professional, and friendly manner. 

AJAY GANGWAR'S DETAILS:
- Role: Aspiring Data Scientist | AI Enthusiast
- Education: B.Tech Computer Science & Engineering @ Lovely Professional University (LPU), Phagwara, PB (Aug 2023 - Present). CGPA: 7.46.
- Location: Bareilly, Uttar Pradesh, India.
- Focus: AI/ML, Data Science, and Web Development.

TONE & STYLE:
- Use simple, clear, and professional language.
- Avoid overly robotic or complex jargon unless necessary.
- Be helpful and encouraging.
- Frame responses as if you are helping the visitor get to know Ajay better.
- Use bullet points for lists to keep them readable.

COMPLETE PORTFOLIO DATA:
- Skills (Languages): Python, JavaScript, C, C++, Java.
- Skills (Frontend): React, HTML5, CSS3, Tailwind CSS.
- Skills (Backend/DB): Node.js, Express.js, MySQL, MongoDB.
- Skills (Tools): Figma, Canva, MS Excel, Power BI, Git, GitHub, Linux.
- Projects: MedPath Pro (shortest-path visualizer), AI Legal Advisor, ATS Resume Score, Intelligence Explorer, Cyber Warfare Intrusion Detection, Indian Rainfall Data Analysis, Ayush FHIR, SoftHub.
- Achievements: 5th Place @ IIT Ropar (CodeHunt Feb 2025), National Runner-up @ BlockseBlock Hackathon (Jun 2025), 2nd Rank @ AI in Web Development Challenge (May 2024).
- Certifications: Agile Project Management (HP), Data Science & Analytics (HP), Introduction to Modern AI (Cisco), Python for Data Science (NPTEL), Software Engineering (Coursera), Networking (Coursera).
`;

const INITIAL_MESSAGE = {
  id: 'init-1',
  text: "Hello! I'm Ajay's digital assistant. I can help you learn more about his projects, skills, and background. What would you like to know?",
  sender: 'bot',
};

const SUGGESTIONS = [
  "Tell me about Ajay's AI projects",
  "What are your core skills?",
  "Show me your achievements",
  "How can I contact Ajay?"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (text) => {
    if (!text.trim() || isTyping) return;

    const newUserMsg = {
      id: crypto.randomUUID(),
      text: text,
      sender: 'user',
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        throw new Error("API_KEY_MISSING");
      }

      console.log("Attempting to connect to Gemini 2.5 AI...");
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `${PORTFOLIO_CONTEXT}\n\nUSER QUESTION: ${text}\nAI RESPONSE:`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();

      const newBotMsg = {
        id: crypto.randomUUID(),
        text: responseText,
        sender: 'bot',
      };
      setMessages(prev => [...prev, newBotMsg]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      let errorText = "SYSTEM ERROR: Unable to process request. Please check connection or try again later.";
      
      if (error.message === "API_KEY_MISSING") {
        errorText = "SYSTEM NOTICE: Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file to enable AI responses.";
      }

      const errorMsg = {
        id: crypto.randomUUID(),
        text: errorText,
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(inputValue);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{ perspective: '1000px' }}
          >
            <CyberCard
              className="chatbot-window"
              padding="0"
              accentColor="var(--primary-accent)"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <div className="chatbot-header">
                <div className="chatbot-header-title">
                  <div className="glitch-flicker">
                    <Bot size={18} />
                  </div>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>AG ASSISTANT</span>
                </div>
                <button 
                  className="chatbot-close" 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Chat"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="chatbot-messages">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`chat-message ${msg.sender}`}
                    style={{
                      background: msg.sender === 'bot' ? 'var(--chatbot-msg-bot)' : 'var(--primary-accent)',
                      border: msg.sender === 'bot' ? '1px solid rgba(var(--primary-accent-rgb), 0.2)' : 'none',
                      color: msg.sender === 'bot' ? 'var(--text-primary)' : 'var(--bg-color)',
                      fontFamily: msg.sender === 'bot' ? 'var(--font-body)' : 'inherit',
                      fontSize: '0.85rem'
                    }}
                  >
                    {msg.sender === 'bot' && (
                       <Bot size={14} style={{ marginBottom: '0.5rem', color: 'var(--primary-accent)' }} />
                    )}
                    {msg.text.split('\n').map((line, i) => (
                      <div key={i} style={{ marginBottom: line ? '0.2rem' : '0.8rem' }}>
                        {line}
                      </div>
                    ))}
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="chat-message bot"
                    style={{ background: 'transparent', border: 'none' }}
                  >
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} style={{ width: 8, height: 8, background: 'var(--primary-accent)', borderRadius: '50%' }} />
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} style={{ width: 8, height: 8, background: 'var(--primary-accent)', borderRadius: '50%' }} />
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} style={{ width: 8, height: 8, background: 'var(--primary-accent)', borderRadius: '50%' }} />
                    </div>
                  </motion.div>
                )}

                {messages.length === 1 && !isTyping && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5 }}
                    className="chat-options"
                  >
                    {SUGGESTIONS.map((suggestion, index) => (
                      <button
                        key={index}
                        className="chat-option-btn"
                        onClick={() => handleSend(suggestion)}
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.5rem 1rem',
                          borderColor: 'rgba(var(--primary-accent-rgb), 0.4)',
                          color: 'var(--primary-accent)'
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chatbot-input-area" style={{ borderTop: '1px solid rgba(var(--primary-accent-rgb), 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', display: 'flex', gap: '0.5rem' }}>
                   <input
                    type="text"
                    className="chatbot-input"
                    placeholder="Ask me anything about Ajay..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isTyping}
                    style={{
                      borderRadius: '2px',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-body)',
                      background: 'var(--chatbot-input-bg)'
                    }}
                  />
                  <button 
                    className="chatbot-send"
                    onClick={() => handleSend(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    aria-label="Send Message"
                    style={{ borderRadius: '2px' }}
                  >
                    {isTyping ? <Bot size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
              </div>
            </CyberCard>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(var(--primary-accent-rgb), 0.6)' }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 180, opacity: 0, scale: 0 } : { rotate: 0, opacity: 1, scale: 1 }}
        style={{ 
          pointerEvents: isOpen ? 'none' : 'auto',
          background: 'var(--primary-accent)',
          width: '56px',
          height: '56px'
        }}
        aria-label="Open Chat"
      >
        <Zap size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
