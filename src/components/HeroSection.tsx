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
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center">
            <svg className="w-48 h-32" viewBox="0 0 400 200" fill="none">
              {/* Stylized N with speed lines */}
              <g>
                {/* Speed lines */}
                <rect x="20" y="60" width="25" height="4" fill="white" className="opacity-90"/>
                <rect x="20" y="70" width="20" height="4" fill="white" className="opacity-80"/>
                <rect x="20" y="80" width="30" height="4" fill="white" className="opacity-85"/>
                <rect x="20" y="90" width="22" height="4" fill="white" className="opacity-75"/>
                <rect x="20" y="100" width="28" height="4" fill="white" className="opacity-95"/>
                <rect x="20" y="110" width="18" height="4" fill="white" className="opacity-70"/>
                <rect x="20" y="120" width="26" height="4" fill="white" className="opacity-88"/>
                
                {/* Main N letter */}
                <path d="M70 50 L90 50 L90 150 L70 150 Z" fill="white"/>
                <path d="M70 50 L140 130 L140 50 L160 50 L160 150 L140 150 L70 70 L70 150 L50 150 L50 50 Z" fill="white"/>
              </g>
              
              {/* NEON TECH text */}
              <text x="200" y="85" className="fill-white font-orbitron text-2xl font-bold tracking-wider">NEON</text>
              <text x="200" y="115" className="fill-white font-orbitron text-2xl font-bold tracking-wider">TECH</text>
              
              {/* ENTERPRISES text */}
              <text x="200" y="140" className="fill-white font-orbitron text-sm font-normal tracking-widest opacity-90">ENTERPRISES</text>
            </svg>
          </div>
        </div>

        {/* Main Headlines */}
        <div className={`space-y-8 mb-16 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-orbitron font-bold leading-tight">
            <span className="text-white">YOUR BUSINESS</span>
            <br />
            <span className="text-white">ONLINE IN </span>
            <span className="neon-text-cyan text-glow animate-pulse">48 HOURS</span>
            <span className="text-6xl">.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-poppins leading-relaxed">
            Even a baby can own a website — <br />
            <span className="neon-text-cyan font-semibold">fast, affordable, futuristic.</span>
          </p>
          
          {/* Floating elements */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="text-9xl font-orbitron font-bold neon-text-cyan opacity-20 animate-pulse">
              N
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <Link
            to="/get-started"
            className="neon-button-cyan px-12 py-5 rounded-2xl text-xl font-bold flex items-center gap-4 group transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <Rocket className="w-6 h-6 group-hover:animate-bounce" />
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-neon-cyan border-2 border-neon-cyan/50 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-neon-cyan hover:text-black transition-all duration-300 group"
          >
            See Features
            <ArrowRight className="w-6 h-6 inline ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.9s'}} id="features">
          <div className="text-center glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <Rocket className="w-12 h-12 text-neon-cyan mx-auto mb-4 animate-pulse" />
            <div className="text-2xl font-orbitron font-bold text-white mb-2">Speed</div>
            <div className="text-sm text-neon-cyan">48hrs or less</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 text-neon-cyan mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
            <div className="text-2xl font-orbitron font-bold text-white mb-2">Affordable</div>
            <div className="text-sm text-neon-cyan">₦30k—₦100k</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 text-neon-cyan mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C14.8,12.4 14.4,13.2 13.7,13.7V16.5C13.7,17.1 13.3,17.5 12.7,17.5H11.3C10.7,17.5 10.3,17.1 10.3,16.5V13.7C9.6,13.2 9.2,12.4 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7Z"/>
            </svg>
            <div className="text-2xl font-orbitron font-bold text-white mb-2">Professional</div>
            <div className="text-sm text-neon-cyan">hosting + security</div>
          </div>
          <div className="text-center glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 text-neon-cyan mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,3H21A2,2 0 0,1 23,5V19A2,2 0 0,1 21,21H3A2,2 0 0,1 1,19V5A2,2 0 0,1 3,3M3,5V19H21V5H3M5,7H19V9H5V7M5,11H19V13H5V11M5,15H19V17H5V15Z"/>
            </svg>
            <div className="text-2xl font-orbitron font-bold text-white mb-2">Easy-to-use</div>
            <div className="text-sm text-neon-cyan">dashboard</div>
          </div>
        </div>
        
        {/* Contact Quick Access */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
          <h3 className="text-3xl font-orbitron font-bold text-white text-center mb-8">Contact Us</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://wa.me/1234567890" className="flex flex-col items-center group">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-3 group-hover:bg-neon-green/20 transition-all">
                <svg className="w-8 h-8 text-neon-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                </svg>
              </div>
              <span className="text-white font-medium">WhatsApp</span>
            </a>
            
            <a href="mailto:hello@neontech.enterprises" className="flex flex-col items-center group">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-3 group-hover:bg-neon-cyan/20 transition-all">
                <svg className="w-8 h-8 text-neon-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
              </div>
              <span className="text-white font-medium">Email</span>
            </a>
            
            <a href="https://twitter.com/neontech" className="flex flex-col items-center group">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-3 group-hover:bg-neon-purple/20 transition-all">
                <svg className="w-8 h-8 text-neon-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                </svg>
              </div>
              <span className="text-white font-medium">Twitter</span>
            </a>
            
            <a href="https://instagram.com/neontech" className="flex flex-col items-center group">
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-3 group-hover:bg-neon-magenta/20 transition-all">
                <svg className="w-8 h-8 text-neon-magenta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                </svg>
              </div>
              <span className="text-white font-medium">Instagram</span>
            </a>
          </div>
          
          <p className="text-center text-neon-cyan font-orbitron text-xl font-bold mt-8 animate-pulse">
            Chat with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;