import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { Calendar, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: '2025',
      title: 'Founded in Nigeria',
      description: 'Started with a vision to revolutionize digital identity',
      icon: <Zap className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      year: '2026',
      title: 'Global Expansion',
      description: 'Expanding operations across Africa and beyond',
      icon: <Globe className="w-6 h-6" />,
      color: 'magenta'
    },
    {
      year: '2030',
      title: 'First AI OS',
      description: 'Launching our revolutionary AI operating system',
      icon: <Users className="w-6 h-6" />,
      color: 'purple'
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
                <span className="text-white">About </span>
                <span className="neon-text-cyan">Neon Tech</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just a company — we're a movement revolutionizing digital identity.
              </p>
            </div>
          </div>
        </section>

        {/* Split Screen Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Image/Visual */}
              <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  <div className="glass rounded-2xl p-8 border-2 border-neon-cyan/30">
                    <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center mb-6 animate-glow-pulse">
                          <span className="text-background font-orbitron font-bold text-3xl">N</span>
                        </div>
                        <p className="text-gray-300 font-poppins">Futuristic Office Visualization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
                <h2 className="text-3xl font-orbitron font-bold mb-6">
                  <span className="neon-text-magenta">Our Vision</span>
                </h2>
                <div className="space-y-6 text-gray-300 font-poppins">
                  <p className="text-lg">
                    Neon Tech Enterprises is not just a company — it's a movement. We make it possible for anyone, 
                    from a startup founder to a government agency, to go digital in under 48 hours.
                  </p>
                  <p>
                    Our cutting-edge technology stack combines AI, blockchain, and quantum computing to deliver 
                    solutions that are not just fast, but revolutionary. We believe that in the digital age, 
                    speed and security should never be compromised.
                  </p>
                  <p>
                    Every project we undertake is infused with our core values: innovation, transparency, 
                    and the relentless pursuit of excellence. We don't just build websites — we craft 
                    digital experiences that leave lasting impressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="neon-text-cyan">Journey</span>
              </h2>
              <p className="text-xl text-gray-300">Milestones that define our path to the future</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-magenta opacity-30"></div>

              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                    style={{animationDelay: `${1.2 + index * 0.3}s`}}
                  >
                    {/* Content */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="glass border-2 border-white/10 rounded-xl p-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                          milestone.color === 'cyan' ? 'bg-neon-cyan/20 text-neon-cyan' :
                          milestone.color === 'magenta' ? 'bg-neon-magenta/20 text-neon-magenta' :
                          'bg-neon-purple/20 text-neon-purple'
                        }`}>
                          {milestone.icon}
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 font-poppins">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="md:w-2/12 flex justify-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                        milestone.color === 'cyan' ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan' :
                        milestone.color === 'magenta' ? 'border-neon-magenta bg-neon-magenta/20 text-neon-magenta' :
                        'border-neon-purple bg-neon-purple/20 text-neon-purple'
                      } font-orbitron font-bold text-sm animate-pulse`}>
                        {milestone.year}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:w-5/12"></div>
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