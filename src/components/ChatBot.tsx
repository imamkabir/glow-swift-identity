import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);

  const getIntelligentResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('about') || msg.includes('neon tech') || msg.includes('company')) {
      return "Neon Tech Enterprises is not just a company — it's a movement! We revolutionize digital identity by getting anyone from startup founders to government agencies online in under 48 hours. Founded in Nigeria in 2025, we're expanding globally with our futuristic approach combining AI, blockchain, and quantum computing. Our mission: make digital transformation fast, affordable, and unforgettable! 🚀";
    }
    if (msg.includes('services') || msg.includes('what do you do')) {
      return "We offer 3 revolutionary services: 🌍 Website Blueprints (48-hour websites), 🛡️ Cybersecurity (AI-powered protection), and 🔐 Digital Fingerprints (blockchain identity). From ₦30k-₦100k, we deliver professional, secure, and lightning-fast solutions!";
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
      return "Our prices are incredibly affordable: ₦30,000 - ₦100,000 depending on your needs. That includes everything: design, development, hosting, security, and a dashboard so easy even a baby can use it! 💰";
    }
    if (msg.includes('time') || msg.includes('how long') || msg.includes('48 hours')) {
      return "48 hours or LESS! That's our guarantee. We're not just fast - we're revolutionary. Most companies take weeks or months, but we've perfected the art of rapid digital transformation without compromising quality! ⚡";
    }
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
      return "Contact us instantly! 📱 WhatsApp: 09039500022 | 📧 Email: imamkabir397@gmail.com | 🐦 Twitter & 📸 Instagram: @neontech | We respond in under 2 hours, every single day!";
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! Welcome to Neon Tech Enterprises! 🌟 I'm your AI assistant, ready to help you transform your digital presence. Whether you need a website, cybersecurity, or digital identity solutions - I've got you covered! What can I help you with today?";
    }
    if (msg.includes('founder') || msg.includes('team') || msg.includes('who')) {
      return "We're a revolutionary team of digital innovators based in Lagos, Nigeria, but operating globally! Our founders are visionaries who believe anyone deserves a stunning digital presence in 48 hours. We're not just developers - we're dream makers! 🌍✨";
    }
    
    return "I'm here to help with anything about Neon Tech! Ask me about our services, pricing, timeline, or how we can transform your business in 48 hours. What specific information do you need? 🚀";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    const currentMessage = message;
    setMessage('');

    // Intelligent bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: getIntelligentResponse(currentMessage),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 neon-button-cyan rounded-full flex items-center justify-center z-50 animate-float ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] glass border-2 border-neon-cyan/30 rounded-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                <span className="text-background font-orbitron font-bold text-sm">N</span>
              </div>
              <h3 className="font-orbitron font-bold neon-text-cyan">Neon Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-neon-cyan/20 text-white'
                      : 'glass text-gray-300'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 neon-input rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="neon-button-cyan p-2 rounded-lg"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;