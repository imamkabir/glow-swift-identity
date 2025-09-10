import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { MessageCircle, Mail, Twitter, MapPin, Phone, Clock, Instagram, Users, Star, Zap, Globe } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [showContactInfo, setShowContactInfo] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'WhatsApp',
      description: 'Get instant support',
      action: 'Call Now',
      glowColor: 'green',
      href: 'https://wa.me/09039500022',
      contactInfo: '09039500022',
      bgIcon: '📱'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Gmail',
      description: 'Send us a message',
      action: 'Send Email',
      glowColor: 'cyan',
      href: 'mailto:imamkabir397@gmail.com',
      contactInfo: 'imamkabir397@gmail.com',
      bgIcon: '📧'
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      title: 'Twitter/X',
      description: 'Follow our journey',
      action: 'Follow Us',
      glowColor: 'purple',
      href: 'https://twitter.com/neontech',
      contactInfo: '@neontech',
      bgIcon: '🐦'
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: 'Instagram',
      description: 'See our work',
      action: 'Follow Us',
      glowColor: 'magenta',
      href: 'https://instagram.com/neontech',
      contactInfo: '@neontech',
      bgIcon: '📸'
    }
  ];

  const handleContactClick = (index: number, contactInfo: string) => {
    setShowContactInfo(index);
    setTimeout(() => setShowContactInfo(null), 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Interactive Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        />
        
        {/* Floating Contact Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <MessageCircle className="w-8 h-8 text-neon-cyan/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
          <Users className="w-10 h-10 text-neon-magenta/20" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <Globe className="w-6 h-6 text-neon-purple/20" />
        </div>
      </div>
      
      {/* Contact Info Modal */}
      {showContactInfo !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="glass border-4 border-neon-cyan/50 rounded-3xl p-16 text-center animate-fade-in">
            <div className="text-[10rem] font-orbitron font-bold neon-text-cyan mb-8 animate-glow-pulse relative">
              N
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">{contactMethods[showContactInfo].bgIcon}</span>
              </div>
            </div>
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              {contactMethods[showContactInfo].title}
            </h2>
            <p className="text-2xl neon-text-cyan font-bold">
              {contactMethods[showContactInfo].contactInfo}
            </p>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="pt-24 relative z-10">
        {/* Enhanced Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            {/* Giant C Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[40rem] font-orbitron font-bold neon-text-cyan opacity-5 animate-pulse select-none">
                C
              </div>
            </div>
            
            <div className={`text-center mb-16 relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-8xl font-orbitron font-bold mb-8">
                <span className="neon-text-cyan text-glow animate-glow-pulse">Contact </span>
                <span className="text-white">Us</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                We're always one click away. Ready to transform your digital presence?
              </p>
              <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-4xl font-orbitron font-bold neon-text-magenta animate-pulse mb-4">
                  Response Time: &lt; 2 Hours
                </p>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <Star className="w-8 h-8 text-neon-cyan mx-auto mb-2 animate-pulse" />
                    <p className="text-sm text-gray-300">Premium Support</p>
                  </div>
                  <div>
                    <Zap className="w-8 h-8 text-neon-magenta mx-auto mb-2 animate-pulse" />
                    <p className="text-sm text-gray-300">Instant Response</p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 text-neon-purple mx-auto mb-2 animate-pulse" />
                    <p className="text-sm text-gray-300">Global Reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16">
              <span className="neon-text-magenta text-glow">Get In Touch</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${0.3 + index * 0.2}s`}}
                >
                  <div
                    onClick={() => handleContactClick(index, method.contactInfo)}
                    className={`block glass border-2 rounded-3xl p-8 text-center card-3d transition-all duration-500 cursor-pointer group ${
                      method.glowColor === 'green' ? 'border-neon-green/30 hover:shadow-[0_0_50px_hsl(var(--neon-green)/0.5)] hover:bg-neon-green/10' :
                      method.glowColor === 'cyan' ? 'border-neon-cyan/30 hover:shadow-[0_0_50px_hsl(var(--neon-cyan)/0.5)] hover:bg-neon-cyan/10' :
                      method.glowColor === 'purple' ? 'border-neon-purple/30 hover:shadow-[0_0_50px_hsl(var(--neon-purple)/0.5)] hover:bg-neon-purple/10' :
                      'border-neon-magenta/30 hover:shadow-[0_0_50px_hsl(var(--neon-magenta)/0.5)] hover:bg-neon-magenta/10'
                    } ${activeContact === index ? 'scale-110' : ''}`}
                    onMouseEnter={() => setActiveContact(index)}
                    onMouseLeave={() => setActiveContact(null)}
                  >
                    {/* Large N Background */}
                    <div className="relative mb-8">
                      <div className={`text-9xl font-orbitron font-bold opacity-10 absolute inset-0 flex items-center justify-center ${
                        method.glowColor === 'green' ? 'text-neon-green' :
                        method.glowColor === 'cyan' ? 'text-neon-cyan' :
                        method.glowColor === 'purple' ? 'text-neon-purple' :
                        'text-neon-magenta'
                      } group-hover:opacity-20 transition-opacity animate-pulse`}>
                        N
                      </div>
                      
                      {/* Icon with background symbol */}
                      <div className={`relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                        method.glowColor === 'green' ? 'text-neon-green bg-neon-green/20' :
                        method.glowColor === 'cyan' ? 'text-neon-cyan bg-neon-cyan/20' :
                        method.glowColor === 'purple' ? 'text-neon-purple bg-neon-purple/20' :
                        'text-neon-magenta bg-neon-magenta/20'
                      } group-hover:animate-bounce`}>
                        {method.icon}
                        <div className="absolute text-4xl opacity-30">
                          {method.bgIcon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 font-poppins">
                      {method.description}
                    </p>
                    
                    {/* Contact Info Preview */}
                    <div className={`text-sm font-mono mb-6 p-3 rounded-lg ${
                      method.glowColor === 'green' ? 'bg-neon-green/10 text-neon-green' :
                      method.glowColor === 'cyan' ? 'bg-neon-cyan/10 text-neon-cyan' :
                      method.glowColor === 'purple' ? 'bg-neon-purple/10 text-neon-purple' :
                      'bg-neon-magenta/10 text-neon-magenta'
                    }`}>
                      {method.contactInfo}
                    </div>
                    
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-8 py-3 rounded-lg border-2 bg-transparent transition-all duration-300 font-medium ${
                        method.glowColor === 'green' ? 'border-neon-green text-neon-green hover:bg-neon-green hover:text-black' :
                        method.glowColor === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black' :
                        method.glowColor === 'purple' ? 'border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black' :
                        'border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black'
                      } hover:scale-105`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {method.action}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                  <span className="text-white">Send Us a </span>
                  <span className="neon-text-magenta text-glow">Message</span>
                </h2>
                <p className="text-xl text-gray-300 font-poppins">
                  Tell us about your project and we'll get back to you within 2 hours.
                </p>
              </div>

              <div className={`glass border-2 border-neon-cyan/30 rounded-3xl p-12 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-3 font-orbitron">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full neon-input rounded-xl px-6 py-4 text-lg"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-3 font-orbitron">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full neon-input rounded-xl px-6 py-4 text-lg"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-lg font-medium text-gray-300 mb-3 font-orbitron">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full neon-input rounded-xl px-6 py-4 text-lg"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-lg font-medium text-gray-300 mb-3 font-orbitron">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full neon-input rounded-xl px-6 py-4 text-lg"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Blueprints</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="digital-fingerprint">Digital Fingerprints</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="mobile-app">Mobile Apps</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-lg font-medium text-gray-300 mb-3 font-orbitron">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full neon-input rounded-xl px-6 py-4 text-lg"
                    >
                      <option value="">Select budget range</option>
                      <option value="30k-50k">₦30,000 - ₦50,000</option>
                      <option value="50k-100k">₦50,000 - ₦100,000</option>
                      <option value="100k-200k">₦100,000 - ₦200,000</option>
                      <option value="200k+">₦200,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-3 font-orbitron">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      className="w-full neon-input rounded-xl px-6 py-4 text-lg resize-none"
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      required
                    />
                  </div>

                  {/* Priority Options */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass rounded-xl p-4 text-center">
                      <Clock className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                      <p className="text-sm text-gray-300">Standard (48hrs)</p>
                      <p className="text-neon-cyan font-bold">Free</p>
                    </div>
                    <div className="glass rounded-xl p-4 text-center border-2 border-neon-magenta/30">
                      <Zap className="w-8 h-8 text-neon-magenta mx-auto mb-2" />
                      <p className="text-sm text-gray-300">Express (24hrs)</p>
                      <p className="text-neon-magenta font-bold">+50%</p>
                    </div>
                    <div className="glass rounded-xl p-4 text-center border-2 border-neon-purple/30">
                      <Star className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                      <p className="text-sm text-gray-300">Rush (12hrs)</p>
                      <p className="text-neon-purple font-bold">+100%</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="neon-button-magenta px-16 py-6 rounded-2xl text-xl font-bold font-orbitron hover:scale-105 transition-all duration-300"
                    >
                      Send Message & Get Quote
                    </button>
                    <p className="text-sm text-gray-400 mt-4">
                      We'll respond with a detailed quote within 2 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center glass rounded-2xl p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.5s'}}>
                <MapPin className="w-12 h-12 text-neon-cyan mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Location</h3>
                <p className="text-lg text-gray-300 font-poppins">Lagos, Nigeria<br />& Global Remote</p>
                <p className="text-sm text-neon-cyan mt-2">Serving 50+ countries worldwide</p>
              </div>
              
              <div className={`text-center glass rounded-2xl p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.7s'}}>
                <Phone className="w-12 h-12 text-neon-magenta mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Direct Line</h3>
                <p className="text-lg text-gray-300 font-poppins">09039500022<br />24/7 Support</p>
                <p className="text-sm text-neon-magenta mt-2">WhatsApp & Voice calls</p>
              </div>
              
              <div className={`text-center glass rounded-2xl p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.9s'}}>
                <Clock className="w-12 h-12 text-neon-purple mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Response Time</h3>
                <p className="text-lg text-gray-300 font-poppins">&lt; 2 Hours<br />Every Day</p>
                <p className="text-sm text-neon-purple mt-2">Guaranteed response time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`glass border-2 border-neon-cyan/30 rounded-3xl p-16 text-center max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '2.1s'}}>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                <span className="text-white">Ready to Go </span>
                <span className="neon-text-cyan text-glow">Digital?</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12 font-poppins">
                Join thousands of satisfied clients who transformed their business in just 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button className="neon-button-cyan px-12 py-6 rounded-2xl text-xl font-orbitron font-bold">
                  Start Your Project
                </button>
                <button className="neon-button-magenta px-12 py-6 rounded-2xl text-xl font-orbitron font-bold">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatBot />
    </div>
  );
};

export default Contact;