import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-20">
          {/* Back Button */}
          <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Link
              to="/"
              className="inline-flex items-center text-gray-300 hover:text-neon-cyan transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center animate-glow-pulse mb-4">
                <span className="text-background font-orbitron font-bold text-2xl">N</span>
              </div>
              <h1 className="text-2xl font-orbitron font-bold">
                <span className="neon-text-cyan">NEON TECH</span>
              </h1>
              <p className="text-xs text-gray-400">ENTERPRISES</p>
            </div>

            {/* Form Container */}
            <div className={`glass border-2 border-neon-cyan/30 rounded-2xl p-8 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              {/* Toggle Buttons */}
              <div className="flex mb-8 bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isLogin
                      ? 'neon-button-cyan'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    !isLogin
                      ? 'neon-button-magenta'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full neon-input rounded-lg px-4 py-3"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full neon-input rounded-lg px-4 py-3"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="w-full neon-input rounded-lg px-4 py-3 pr-12"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full neon-input rounded-lg px-4 py-3"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-gray-300">
                      <input
                        type="checkbox"
                        className="mr-2 rounded border-gray-600 text-neon-cyan focus:ring-neon-cyan"
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-neon-cyan hover:text-neon-magenta transition-colors">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isLogin ? 'neon-button-cyan' : 'neon-button-magenta'
                  }`}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-400 bg-black">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="glass border border-white/10 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Google
                  </button>
                  <button className="glass border border-white/10 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    GitHub
                  </button>
                </div>
              </div>

              {/* Footer Text */}
              <div className="mt-8 text-center text-sm text-gray-400">
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-neon-cyan hover:text-neon-magenta transition-colors"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-neon-cyan hover:text-neon-magenta transition-colors"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;