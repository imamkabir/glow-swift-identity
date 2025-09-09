import { useEffect, useState } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-purple-950/20"></div>
      
      {/* Floating Cards Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-48 glass rounded-xl opacity-20 card-3d animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-32 glass rounded-xl opacity-20 card-3d animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-52 glass rounded-xl opacity-20 card-3d animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-40 glass rounded-xl opacity-20 card-3d animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo Animation */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center animate-glow-pulse">
            <span className="text-background font-orbitron font-bold text-4xl">N</span>
          </div>
        </div>

        {/* Main Headlines */}
        <div className={`space-y-6 mb-12 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <h1 className="text-4xl md:text-7xl font-orbitron font-bold">
            <span className="text-white">We Build Your </span>
            <span className="neon-text-cyan">Digital Identity</span>
            <br />
            <span className="text-white">in </span>
            <span className="neon-text-magenta">48 Hours</span>
            <span className="ml-4">🚀</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-poppins">
            From websites to digital fingerprints, <span className="neon-text-cyan">Neon Tech</span> makes your business unforgettable.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <Link
            to="/login"
            className="neon-button-cyan px-8 py-4 rounded-xl text-lg font-medium flex items-center gap-3 group"
          >
            <Rocket className="w-5 h-5 group-hover:animate-pulse" />
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="neon-button-magenta px-8 py-4 rounded-xl text-lg font-medium flex items-center gap-3"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats or Features */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold neon-text-cyan">48h</div>
            <div className="text-sm text-gray-400">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold neon-text-magenta">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold neon-text-cyan">100%</div>
            <div className="text-sm text-gray-400">Secure</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold neon-text-magenta">∞</div>
            <div className="text-sm text-gray-400">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;