import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-lg flex items-center justify-center">
              <span className="text-background font-orbitron font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-bold neon-text-cyan">
                NEON TECH
              </h1>
              <p className="text-xs text-gray-400 -mt-1">ENTERPRISES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-neon-cyan ${
                  location.pathname === item.path
                    ? 'neon-text-cyan'
                    : 'text-gray-300 hover:text-neon-cyan'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="neon-button-cyan px-6 py-2 rounded-lg text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-neon-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'neon-text-cyan'
                      : 'text-gray-300 hover:text-neon-cyan'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/get-started"
                onClick={() => setIsOpen(false)}
                className="neon-button-cyan px-6 py-2 rounded-lg text-sm font-medium text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;