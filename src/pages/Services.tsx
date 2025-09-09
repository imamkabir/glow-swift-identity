import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import ChatBot from '@/components/ChatBot';
import { Globe, Shield, Fingerprint } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-full h-full" />,
      title: 'Website Blueprints',
      description: 'Launch a complete website in 48 hours with our revolutionary blueprint system.',
      features: [
        'Custom design & development',
        'Responsive mobile-first approach',
        'SEO optimization included',
        'Content management system',
        '48-hour delivery guarantee'
      ],
      glowColor: 'cyan' as const
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade AI-powered security solutions.',
      features: [
        'AI threat detection',
        'Real-time monitoring',
        'Penetration testing',
        'Compliance auditing',
        '24/7 security operations'
      ],
      glowColor: 'magenta' as const
    },
    {
      icon: <Fingerprint className="w-full h-full" />,
      title: 'Digital Fingerprints',
      description: 'Own your online identity with blockchain-secured digital fingerprinting.',
      features: [
        'Blockchain identity verification',
        'Secure payment integration',
        'Multi-platform authentication',
        'Privacy protection',
        'Decentralized storage'
      ],
      glowColor: 'purple' as const
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
                <span className="text-white">Our </span>
                <span className="neon-text-cyan">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary solutions that transform your digital presence in 48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${0.3 + index * 0.2}s`}}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
                <span className="text-white">How We </span>
                <span className="neon-text-magenta">Work</span>
              </h2>
              <p className="text-xl text-gray-300">Our streamlined process ensures rapid delivery without compromising quality</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', description: 'We understand your vision and requirements' },
                { step: '02', title: 'Design', description: 'Create stunning prototypes and wireframes' },
                { step: '03', title: 'Development', description: 'Build using cutting-edge technology stack' },
                { step: '04', title: 'Deployment', description: 'Launch your solution within 48 hours' }
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`text-center ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${1.2 + index * 0.2}s`}}
                >
                  <div className="glass border-2 border-neon-cyan/30 rounded-xl p-6 mb-6">
                    <div className="text-4xl font-orbitron font-bold neon-text-cyan mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-poppins">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '2s'}}>
              <div className="glass border-2 border-neon-magenta/30 rounded-2xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                  <span className="text-white">Ready to Go </span>
                  <span className="neon-text-magenta">Digital?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 font-poppins">
                  Join thousands of satisfied clients who transformed their business in just 48 hours.
                </p>
                <button className="neon-button-magenta px-12 py-4 rounded-xl text-lg font-medium">
                  Start Your Project
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

export default Services;