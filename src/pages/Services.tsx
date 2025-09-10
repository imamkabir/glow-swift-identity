import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import ChatBot from '@/components/ChatBot';
import { Globe, Shield, Fingerprint, Cpu, Database, Cloud, Lock, Zap, Rocket, Star, Trophy, Target, Eye, Brain, Wifi, Smartphone, Monitor, Server, Code, Palette, Search, BarChart, Users, MessageSquare, Calendar, Folder, Settings, Headphones } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Globe className="w-full h-full" />,
      title: 'Website Blueprints',
      description: 'Launch a complete website in 48 hours with our revolutionary blueprint system.',
      features: [
        'AI-Powered Design Generation', 'Quantum-Speed Deployment', 'Neural Network Optimization',
        'Holographic Preview System', 'Voice Command Interface', 'Biometric Authentication',
        'Real-Time Collaboration Hub', 'Blockchain Security Layer', 'AR/VR Integration Ready',
        'Auto-Scaling Architecture', 'Global CDN Network', 'Multi-Language Support',
        'Advanced Analytics Dashboard', 'Social Media Integration', 'E-commerce Ready',
        'Progressive Web App (PWA)', 'API-First Architecture', 'Cloud-Native Deployment',
        'Machine Learning SEO', 'Custom Domain Setup', 'SSL Certificate Included',
        'Mobile-First Design', 'Cross-Browser Compatibility', 'Performance Optimization',
        '24/7 Monitoring', 'Automatic Backups', 'Version Control', 'Team Management',
        'White-Label Options', 'Custom Branding', 'Interactive Prototyping'
      ],
      glowColor: 'cyan' as const,
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      deliverables: ['Responsive Website', 'Admin Dashboard', 'Mobile App', 'API Documentation']
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade AI-powered security solutions.',
      features: [
        'AI Threat Intelligence', 'Quantum Encryption', 'Behavioral Analysis', 'Zero-Trust Architecture',
        'Real-Time Threat Detection', 'Automated Incident Response', 'Penetration Testing Suite',
        'Compliance Monitoring', 'Dark Web Scanning', 'Vulnerability Assessment',
        'Security Awareness Training', 'Firewall Management', 'Intrusion Detection System',
        'Data Loss Prevention', 'Email Security Gateway', 'Web Application Firewall',
        'Endpoint Protection', 'Network Segmentation', 'Identity Access Management',
        'Multi-Factor Authentication', 'Security Information Management', 'Forensic Analysis',
        'Risk Assessment Tools', 'Security Policy Development', 'Incident Response Plan',
        'Business Continuity Planning', 'Disaster Recovery Solutions', 'Cloud Security',
        'IoT Security Management', 'Mobile Device Management', 'Secure Code Review'
      ],
      glowColor: 'magenta' as const,
      techStack: ['Python', 'Kubernetes', 'Docker', 'Splunk', 'Wireshark', 'Nessus'],
      deliverables: ['Security Assessment', 'Implementation Plan', 'Training Materials', '24/7 SOC']
    },
    {
      icon: <Fingerprint className="w-full h-full" />,
      title: 'Digital Fingerprints',
      description: 'Own your online identity with blockchain-secured digital fingerprinting.',
      features: [
        'Blockchain Identity Verification', 'Decentralized Authentication', 'Biometric Integration',
        'Smart Contract Deployment', 'Cross-Platform Identity', 'Privacy-First Design',
        'Digital Asset Management', 'Secure Payment Gateway', 'Multi-Signature Wallets',
        'Identity Recovery System', 'Reputation Scoring', 'Credential Verification',
        'KYC/AML Compliance', 'Digital Rights Management', 'Intellectual Property Protection',
        'Timestamping Services', 'Document Authentication', 'Certificate Management',
        'Access Control Systems', 'Audit Trail Generation', 'Compliance Reporting',
        'Integration APIs', 'Mobile SDK', 'Web3 Compatibility', 'NFT Integration',
        'Cryptocurrency Support', 'DeFi Protocol Integration', 'DAO Governance Tools',
        'Staking Mechanisms', 'Reward Distribution', 'Community Management'
      ],
      glowColor: 'purple' as const,
      techStack: ['Solidity', 'Ethereum', 'IPFS', 'MetaMask', 'Web3.js', 'Hardhat'],
      deliverables: ['Digital Identity System', 'Blockchain Integration', 'Mobile Wallet', 'Admin Portal']
    }
  ];

  const additionalServices = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Automation',
      description: 'Intelligent business process automation',
      color: 'cyan'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Advanced business intelligence solutions',
      color: 'magenta'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless cloud transformation services',
      color: 'purple'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
      color: 'cyan'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Mastery',
      description: 'Dominate search engine rankings',
      color: 'magenta'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Real-time business metrics and KPIs',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Interactive Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.5s ease'
          }}
        />
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Code className="w-8 h-8 text-neon-cyan/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
          <Server className="w-10 h-10 text-neon-magenta/20" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <Wifi className="w-6 h-6 text-neon-purple/20" />
        </div>
      </div>
      
      {/* Main Content */}
      <main className="pt-24 relative z-10">
        {/* Enhanced Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            {/* Giant N Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[35rem] font-orbitron font-bold neon-text-cyan opacity-5 animate-pulse select-none">
                S
              </div>
            </div>
            
            <div className={`text-center mb-20 relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-8xl font-orbitron font-bold mb-8">
                <span className="text-white">Professional </span>
                <span className="neon-text-cyan text-glow animate-glow-pulse">Services</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary solutions that transform your digital presence in 
                <span className="neon-text-magenta font-bold"> 48 hours</span>.
              </p>
              
              {/* Service Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {[
                  { number: '200+', label: 'Features', icon: <Star className="w-6 h-6" /> },
                  { number: '48hrs', label: 'Delivery', icon: <Zap className="w-6 h-6" /> },
                  { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> },
                  { number: '24/7', label: 'Support', icon: <Headphones className="w-6 h-6" /> }
                ].map((stat, index) => (
                  <div key={stat.label} className="glass rounded-2xl p-6 text-center card-3d hover:scale-110 transition-all">
                    <div className="text-neon-cyan mb-3 animate-pulse">{stat.icon}</div>
                    <div className="text-3xl font-orbitron font-bold neon-text-cyan mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${0.3 + index * 0.2}s`}}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className={`glass border-2 rounded-3xl p-8 card-3d transition-all duration-500 ${
                    activeService === index ? 'border-neon-cyan/50 bg-neon-cyan/5 scale-105' : 'border-white/10'
                  }`}>
                    {/* Service Header */}
                    <div className="text-center mb-8">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                        service.glowColor === 'cyan' ? 'bg-neon-cyan/20 text-neon-cyan' :
                        service.glowColor === 'magenta' ? 'bg-neon-magenta/20 text-neon-magenta' :
                        'bg-neon-purple/20 text-neon-purple'
                      } animate-pulse`}>
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-orbitron font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-lg">{service.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-orbitron font-bold text-neon-cyan mb-4">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-xs text-neon-cyan">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features (First 8) */}
                    <div className="mb-8">
                      <h4 className="text-sm font-orbitron font-bold text-neon-magenta mb-4">KEY FEATURES</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 8).map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-300 hover:text-white transition-colors p-2 rounded hover:bg-white/5">
                            ✨ {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h4 className="text-sm font-orbitron font-bold text-neon-purple mb-4">DELIVERABLES</h4>
                      <div className="space-y-2">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-center text-sm text-gray-300">
                            <Trophy className="w-4 h-4 text-neon-purple mr-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-4 rounded-xl font-orbitron font-bold transition-all duration-300 ${
                      service.glowColor === 'cyan' ? 'neon-button-cyan' :
                      service.glowColor === 'magenta' ? 'neon-button-magenta' :
                      'neon-button-purple'
                    }`}>
                      Get Started - ₦50,000
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16">
              <span className="neon-text-magenta text-glow">More Services</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`glass border-2 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
                    service.color === 'cyan' ? 'border-neon-cyan/30 hover:bg-neon-cyan/10' :
                    service.color === 'magenta' ? 'border-neon-magenta/30 hover:bg-neon-magenta/10' :
                    'border-neon-purple/30 hover:bg-neon-purple/10'
                  } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{animationDelay: `${1.5 + index * 0.1}s`}}
                >
                  <div className={`mb-4 ${
                    service.color === 'cyan' ? 'text-neon-cyan' :
                    service.color === 'magenta' ? 'text-neon-magenta' :
                    'text-neon-purple'
                  } animate-pulse`}>
                    {service.icon}
                  </div>
                  <h3 className="font-orbitron font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-gray-300">{service.description}</p>
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