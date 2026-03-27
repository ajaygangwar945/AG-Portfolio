import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const INITIAL_MESSAGE = {
  id: 1,
  text: "Initializing AG-Bot v1.0...\nHello! I'm your digital assistant. How can I help you explore this portfolio?",
  sender: 'bot',
};

const SUGGESTIONS = [
  "What are your skills?",
  "Show me your projects",
  "How can I contact you?",
  "Tell me about yourself"
];

const BOT_RESPONSES = {
  "skills": "My core skills include React, Node.js, Express, JavaScript/TypeScript, and modern web design techniques. I also work with databases like MongoDB and SQL.",
  "project": "I've built several full-stack applications, interactive UI components, and API integrations. You can check out the 'Projects' section above or my GitHub for code!",
  "contact": "You can reach me via the Contact form at the bottom of the page, or connect with me on LinkedIn and GitHub!",
  "about": "I'm a passionate developer focusing on building clean, interactive, and high-performance digital experiences.",
  "default": "I'm still learning! Please try asking about my skills, projects, or how to contact me, or explore the sections on this site."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();
    let responseText = BOT_RESPONSES["default"];

    if (lowerText.includes("skill") || lowerText.includes("tech")) {
      responseText = BOT_RESPONSES["skills"];
    } else if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("build")) {
      responseText = BOT_RESPONSES["project"];
    } else if (lowerText.includes("contact") || lowerText.includes("hire") || lowerText.includes("email")) {
      responseText = BOT_RESPONSES["contact"];
    } else if (lowerText.includes("about") || lowerText.includes("who")) {
      responseText = BOT_RESPONSES["about"];
    }

    return responseText;
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newUserMsg = {
      id: crypto.randomUUID(),
      text: text,
      sender: 'user',
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate network delay
    setTimeout(() => {
      const newBotMsg = {
        id: crypto.randomUUID(),
        text: generateResponse(text),
        sender: 'bot',
      };
      setMessages(prev => [...prev, newBotMsg]);
    }, 600);
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
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <div className="chatbot-header-title">
                <Bot size={20} />
                <span>AG-Bot Terminal</span>
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
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`chat-message ${msg.sender}`}
                >
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i !== msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </motion.div>
              ))}
              
              {messages.length === 1 && (
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
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-area">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Type your command..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button 
                className="chatbot-send"
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim()}
                aria-label="Send Message"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 90, opacity: 0, scale: 0 } : { rotate: 0, opacity: 1, scale: 1 }}
        style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
