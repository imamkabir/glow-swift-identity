import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { Calendar, Users, Globe, Zap, Star, Trophy, Target, Rocket, Shield, Cpu, Heart, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setStatsAnimated(true), 1000);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const milestones = [
    {
      year: '2025',
      title: 'Founded in Nigeria',
      description: 'Started with a vision to revolutionize digital identity',
      icon: <Zap className="w-6 h-6" />,
      color: 'cyan',
      details: 'Launched in Lagos with a dream to democratize web presence'
    },
    {
      year: '2026', 
      title: 'Global Expansion',
      description: 'Expanding operations across Africa and beyond',
      icon: <Globe className="w-6 h-6" />,
      color: 'magenta',
      details: 'Serving 50+ countries with 48-hour delivery'
    },
    {
      year: '2030',
      title: 'First AI OS',
      description: 'Launching our revolutionary AI operating system',
      icon: <Cpu className="w-6 h-6" />,
      color: 'purple',
      details: 'The future of digital interaction begins here'
    }
  ];

  const achievements = [
    { number: '10,000+', label: 'Websites Delivered', icon: <Globe className="w-8 h-8" /> },
    { number: '48hrs', label: 'Average Delivery', icon: <Zap className="w-8 h-8" /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '50+', label: 'Countries Served', icon: <Trophy className="w-8 h-8" /> }
  ];

  const features = [
    'Revolutionary 48-hour delivery', 'AI-powered design automation', 'Blockchain security integration',
    'Quantum-grade encryption', 'Global CDN network', 'Multi-language support',
    'Voice command interface', 'Biometric authentication', 'Neural network analytics',
    'Holographic projections', 'Augmented reality previews', 'Virtual reality walkthroughs',
    'Machine learning optimization', 'Predictive user behavior', 'Auto-scaling infrastructure',
    'Real-time collaboration', 'Cloud-native architecture', 'Edge computing deployment'
  ];

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
      </div>
      
      {/* Main Content */}
      <main className="pt-24 relative z-10">
        {/* Hero Section with Giant N */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            {/* Giant Floating N Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[40rem] font-orbitron font-bold neon-text-cyan opacity-5 animate-pulse select-none">
                N
              </div>
            </div>
            
            <div className={`text-center mb-16 relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-8xl font-orbitron font-bold mb-6">
                <span className="text-white">About </span>
                <span className="neon-text-cyan text-glow animate-glow-pulse">Neon Tech</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                We're not just a company — we're a <span className="neon-text-magenta font-bold">digital revolution</span>
              </p>
            </div>

            {/* Interactive Stats Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="glass border-2 border-neon-cyan/30 rounded-2xl p-6 text-center card-3d hover:scale-110 transition-all duration-500 cursor-pointer group"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <div className="text-neon-cyan mb-4 group-hover:animate-spin transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className={`text-4xl font-orbitron font-bold neon-text-cyan mb-2 ${statsAnimated ? 'animate-bounce' : ''}`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section with Interactive Elements */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Interactive Visual */}
              <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
                <div className="relative">
                  <div className="glass rounded-2xl p-8 border-2 border-neon-cyan/30 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-xl flex items-center justify-center relative">
                      {/* Animated Elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full grid grid-cols-8 grid-rows-6 gap-1">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-sm animate-pulse"
                              style={{animationDelay: `${i * 0.1}s`}}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Central Logo */}
                      <div className="text-center relative z-10">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center mb-6 animate-glow-pulse hover:rotate-180 transition-transform duration-1000">
                          <span className="text-background font-orbitron font-bold text-6xl">N</span>
                        </div>
                        <p className="text-gray-300 font-poppins">Futuristic Innovation Hub</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Enhanced Content */}
              <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
                <h2 className="text-5xl font-orbitron font-bold mb-8">
                  <span className="neon-text-magenta text-glow">Our Vision</span>
                </h2>
                <div className="space-y-8 text-gray-300 font-poppins">
                  <p className="text-xl leading-relaxed">
                    Neon Tech Enterprises is not just a company — it's a <span className="neon-text-cyan font-bold">digital revolution</span>. 
                    We make it possible for anyone, from a startup founder to a government agency, to go digital in under 48 hours.
                  </p>
                  <p className="text-lg">
                    Our cutting-edge technology stack combines <span className="neon-text-magenta">AI</span>, 
                    <span className="neon-text-cyan"> blockchain</span>, and 
                    <span className="neon-text-purple"> quantum computing</span> to deliver 
                    solutions that are not just fast, but revolutionary.
                  </p>
                  
                  {/* Interactive Feature Tags */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {features.slice(0, 6).map((feature, index) => (
                      <div
                        key={feature}
                        className="glass rounded-lg p-3 text-sm hover:bg-neon-cyan/10 transition-all cursor-pointer hover:scale-105"
                        style={{animationDelay: `${1.2 + index * 0.1}s`}}
                      >
                        ✨ {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
              <h2 className="text-3xl md:text-6xl font-orbitron font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="neon-text-cyan text-glow">Journey</span>
              </h2>
              <p className="text-2xl text-gray-300">Milestones that define our path to the future</p>
            </div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-purple opacity-50 animate-pulse"></div>

              <div className="space-y-20">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                    style={{animationDelay: `${1.5 + index * 0.3}s`}}
                    onMouseEnter={() => setActiveSection(index)}
                  >
                    {/* Enhanced Content */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className={`glass border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-500 ${
                        activeSection === index ? 'border-neon-cyan/50 bg-neon-cyan/5' : 'border-white/10'
                      }`}>
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                          milestone.color === 'cyan' ? 'bg-neon-cyan/20 text-neon-cyan' :
                          milestone.color === 'magenta' ? 'bg-neon-magenta/20 text-neon-magenta' :
                          'bg-neon-purple/20 text-neon-purple'
                        } animate-bounce`}>
                          {milestone.icon}
                        </div>
                        <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-lg text-gray-300 font-poppins mb-4">
                          {milestone.description}
                        </p>
                        <p className="text-sm text-gray-400 italic">
                          {milestone.details}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Year Badge */}
                    <div className="md:w-2/12 flex justify-center">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${
                        milestone.color === 'cyan' ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan' :
                        milestone.color === 'magenta' ? 'border-neon-magenta bg-neon-magenta/20 text-neon-magenta' :
                        'border-neon-purple bg-neon-purple/20 text-neon-purple'
                      } font-orbitron font-bold text-lg animate-pulse hover:animate-spin cursor-pointer`}>
                        {milestone.year}
                      </div>
                    </div>

                    <div className="md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Interactive Features Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-16">
              <span className="neon-text-magenta text-glow">Revolutionary Features</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`glass rounded-xl p-4 text-center hover:bg-neon-cyan/10 transition-all duration-300 cursor-pointer card-3d ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{animationDelay: `${2 + index * 0.05}s`}}
                >
                  <div className="text-neon-cyan mb-2">
                    {index < 6 ? <Rocket className="w-6 h-6 mx-auto" /> :
                     index < 12 ? <Shield className="w-6 h-6 mx-auto" /> :
                     <Lightbulb className="w-6 h-6 mx-auto" />}
                  </div>
                  <p className="text-xs text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass border-2 border-neon-magenta/30 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-orbitron font-bold mb-8">
                <span className="text-white">Built with </span>
                <span className="neon-text-magenta text-glow">❤️ Passion</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Every project we undertake is infused with our core values: innovation, transparency, 
                and the relentless pursuit of excellence. We don't just build websites — we craft 
                digital experiences that leave lasting impressions and transform businesses.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: <Heart className="w-8 h-8" />, label: 'Passion' },
                  { icon: <Target className="w-8 h-8" />, label: 'Precision' },
                  { icon: <Award className="w-8 h-8" />, label: 'Excellence' },
                  { icon: <Rocket className="w-8 h-8" />, label: 'Innovation' }
                ].map((value, index) => (
                  <div key={value.label} className="text-center">
                    <div className="text-neon-cyan mb-4 animate-pulse">
                      {value.icon}
                    </div>
                    <p className="text-white font-orbitron font-bold">{value.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatBot />
    </div>
  );
};

export default About;