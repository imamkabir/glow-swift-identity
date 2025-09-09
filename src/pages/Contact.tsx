import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { MessageCircle, Mail, Twitter, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      description: 'Get instant support',
      action: 'Chat Now',
      glowColor: 'green',
      href: 'https://wa.me/1234567890'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Send us a message',
      action: 'Send Email',
      glowColor: 'cyan',
      href: 'mailto:hello@neontech.enterprises'
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      title: 'Twitter/X',
      description: 'Follow our journey',
      action: 'Follow Us',
      glowColor: 'purple',
      href: 'https://twitter.com/neontech'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text-cyan">Contact </span>
                <span className="text-white">Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We're always one click away. Ready to transform your digital presence?
              </p>
              <p className="text-2xl font-orbitron font-bold neon-text-magenta">
                Response Time: &lt; 2 Hours
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${0.3 + index * 0.2}s`}}
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block glass border-2 rounded-2xl p-8 text-center card-3d transition-all duration-500 ${
                      method.glowColor === 'green' ? 'border-neon-green/30 hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.3)]' :
                      method.glowColor === 'cyan' ? 'border-neon-cyan/30 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]' :
                      'border-neon-purple/30 hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]'
                    } group`}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      method.glowColor === 'green' ? 'text-neon-green' :
                      method.glowColor === 'cyan' ? 'text-neon-cyan' :
                      'text-neon-purple'
                    } group-hover:animate-pulse`}>
                      {method.icon}
                    </div>
                    
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-3">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 font-poppins">
                      {method.description}
                    </p>
                    
                    <button className={`px-8 py-3 rounded-lg border-2 bg-transparent transition-all duration-300 font-medium ${
                      method.glowColor === 'green' ? 'border-neon-green text-neon-green hover:bg-neon-green hover:text-black' :
                      method.glowColor === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black' :
                      'border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black'
                    }`}>
                      {method.action}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                  <span className="text-white">Send Us a </span>
                  <span className="neon-text-magenta">Message</span>
                </h2>
                <p className="text-gray-300 font-poppins">
                  Tell us about your project and we'll get back to you within 2 hours.
                </p>
              </div>

              <div className={`glass border-2 border-neon-cyan/30 rounded-2xl p-8 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full neon-input rounded-lg px-4 py-3"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full neon-input rounded-lg px-4 py-3"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full neon-input rounded-lg px-4 py-3"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Blueprints</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="digital-fingerprint">Digital Fingerprints</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full neon-input rounded-lg px-4 py-3 resize-none"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="neon-button-magenta px-12 py-4 rounded-xl text-lg font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.5s'}}>
                <MapPin className="w-8 h-8 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 font-poppins">Lagos, Nigeria<br />& Global Remote</p>
              </div>
              
              <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.7s'}}>
                <Phone className="w-8 h-8 text-neon-magenta mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 font-poppins">+234 XXX XXX XXXX<br />24/7 Support</p>
              </div>
              
              <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.9s'}}>
                <Clock className="w-8 h-8 text-neon-purple mx-auto mb-4" />
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">Response Time</h3>
                <p className="text-gray-300 font-poppins">&lt; 2 Hours<br />Every Day</p>
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