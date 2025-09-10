import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Rocket, Star, Shield, Zap, Globe, Users, Award, Clock, ArrowRight, CheckCircle, Sparkles, Target, TrendingUp } from 'lucide-react';

const GetStarted = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    projectType: '',
    budget: '',
    timeline: '',
    features: [] as string[],
    description: '',
    urgency: 'standard'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectTypes = [
    { id: 'website', name: 'Business Website', icon: <Globe className="w-6 h-6" />, popular: true },
    { id: 'ecommerce', name: 'E-Commerce Store', icon: <Star className="w-6 h-6" />, popular: true },
    { id: 'portfolio', name: 'Portfolio/Personal', icon: <Users className="w-6 h-6" /> },
    { id: 'blog', name: 'Blog/News Site', icon: <Award className="w-6 h-6" /> },
    { id: 'saas', name: 'SaaS Platform', icon: <Zap className="w-6 h-6" /> },
    { id: 'custom', name: 'Custom Solution', icon: <Target className="w-6 h-6" /> }
  ];

  const features = [
    'SEO Optimization', 'Mobile Responsive', 'Payment Integration', 'Social Media Integration',
    'Analytics Dashboard', 'Live Chat', 'Booking System', 'Newsletter Signup',
    'Multi-language Support', 'Admin Panel', 'User Authentication', 'API Integration',
    'Real-time Updates', 'Push Notifications', 'Advanced Security', 'Cloud Hosting'
  ];

  const budgetRanges = [
    { id: 'starter', range: '₦30k - ₦50k', label: 'Starter', popular: false },
    { id: 'professional', range: '₦50k - ₦100k', label: 'Professional', popular: true },
    { id: 'enterprise', range: '₦100k - ₦300k', label: 'Enterprise', popular: false },
    { id: 'custom', range: '₦300k+', label: 'Custom Quote', popular: false }
  ];

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
                <span className="neon-text-cyan">Get Started </span>
                <span className="text-white">Now</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business in 48 hours. Let's build something amazing together.
              </p>
              
              {/* Progress Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-neon-cyan text-black border-neon-cyan'
                          : 'border-gray-600 text-gray-400'
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-neon-cyan to-neon-magenta h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Form Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="glass border-2 border-neon-cyan/30 rounded-3xl p-8">
                
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-orbitron font-bold text-center mb-8 neon-text-cyan">
                      Tell Us About Yourself
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full neon-input rounded-lg px-4 py-3"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full neon-input rounded-lg px-4 py-3"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full neon-input rounded-lg px-4 py-3"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                          className="w-full neon-input rounded-lg px-4 py-3"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        className="w-full neon-input rounded-lg px-4 py-3"
                      >
                        <option value="">Select business type</option>
                        <option value="retail">Retail/E-commerce</option>
                        <option value="service">Service Provider</option>
                        <option value="restaurant">Restaurant/Food</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Type */}
                {currentStep === 2 && (
                  <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-orbitron font-bold text-center mb-8 neon-text-magenta">
                      What Do You Need?
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {projectTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                            formData.projectType === type.id
                              ? 'ring-2 ring-neon-cyan'
                              : ''
                          }`}
                          onClick={() => setFormData({...formData, projectType: type.id})}
                        >
                          {type.popular && (
                            <div className="absolute -top-3 -right-3 bg-neon-magenta text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                              POPULAR
                            </div>
                          )}
                          <div className={`glass border-2 rounded-2xl p-6 text-center ${
                            formData.projectType === type.id
                              ? 'border-neon-cyan bg-neon-cyan/10'
                              : 'border-gray-600'
                          }`}>
                            <div className="text-neon-cyan mb-4 flex justify-center">
                              {type.icon}
                            </div>
                            <h3 className="font-orbitron font-bold text-white mb-2">{type.name}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <div className="grid md:grid-cols-4 gap-4">
                        {budgetRanges.map((budget) => (
                          <div
                            key={budget.id}
                            className={`relative cursor-pointer transition-all duration-300 ${
                              formData.budget === budget.id
                                ? 'ring-2 ring-neon-green'
                                : ''
                            }`}
                            onClick={() => setFormData({...formData, budget: budget.id})}
                          >
                            {budget.popular && (
                              <div className="absolute -top-2 -right-2 bg-neon-green text-black px-2 py-1 rounded-full text-xs font-bold">
                                BEST
                              </div>
                            )}
                            <div className={`glass border-2 rounded-xl p-4 text-center ${
                              formData.budget === budget.id
                                ? 'border-neon-green bg-neon-green/10'
                                : 'border-gray-600'
                            }`}>
                              <div className="font-bold text-white">{budget.label}</div>
                              <div className="text-sm text-gray-300">{budget.range}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Features */}
                {currentStep === 3 && (
                  <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-orbitron font-bold text-center mb-8 neon-text-purple">
                      Choose Your Features
                    </h2>
                    
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                      {features.map((feature) => (
                        <div
                          key={feature}
                          className={`cursor-pointer transition-all duration-300 ${
                            formData.features.includes(feature)
                              ? 'ring-2 ring-neon-purple'
                              : ''
                          }`}
                          onClick={() => handleFeatureToggle(feature)}
                        >
                          <div className={`glass border-2 rounded-xl p-4 text-center ${
                            formData.features.includes(feature)
                              ? 'border-neon-purple bg-neon-purple/10'
                              : 'border-gray-600'
                          }`}>
                            <div className="flex items-center justify-between">
                              <span className="text-white text-sm">{feature}</span>
                              {formData.features.includes(feature) && (
                                <CheckCircle className="w-4 h-4 text-neon-purple" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline Preference
                      </label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { id: 'rush', label: 'Rush (24-48h)', extra: '+50% cost', color: 'neon-magenta' },
                          { id: 'standard', label: 'Standard (48-72h)', extra: 'Most popular', color: 'neon-cyan' },
                          { id: 'extended', label: 'Extended (1 week)', extra: 'More features', color: 'neon-green' }
                        ].map((timeline) => (
                          <div
                            key={timeline.id}
                            className={`cursor-pointer transition-all duration-300 ${
                              formData.timeline === timeline.id ? 'ring-2 ring-' + timeline.color : ''
                            }`}
                            onClick={() => setFormData({...formData, timeline: timeline.id})}
                          >
                            <div className={`glass border-2 rounded-xl p-4 text-center border-gray-600 ${
                              formData.timeline === timeline.id ? `border-${timeline.color} bg-${timeline.color}/10` : ''
                            }`}>
                              <div className="font-bold text-white">{timeline.label}</div>
                              <div className="text-sm text-gray-300">{timeline.extra}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Final Details */}
                {currentStep === 4 && (
                  <div className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-orbitron font-bold text-center mb-8 neon-text-green">
                      Final Details
                    </h2>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={6}
                        className="w-full neon-input rounded-lg px-4 py-3 resize-none"
                        placeholder="Tell us about your project goals, target audience, design preferences, and any specific requirements..."
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Urgency Level
                      </label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { id: 'low', label: 'Low Priority', desc: 'Can wait a few days' },
                          { id: 'standard', label: 'Standard', desc: 'Normal timeline' },
                          { id: 'urgent', label: 'Urgent', desc: 'Need ASAP' }
                        ].map((urgency) => (
                          <div
                            key={urgency.id}
                            className={`cursor-pointer transition-all duration-300 ${
                              formData.urgency === urgency.id ? 'ring-2 ring-neon-green' : ''
                            }`}
                            onClick={() => setFormData({...formData, urgency: urgency.id})}
                          >
                            <div className={`glass border-2 rounded-xl p-4 text-center ${
                              formData.urgency === urgency.id
                                ? 'border-neon-green bg-neon-green/10'
                                : 'border-gray-600'
                            }`}>
                              <div className="font-bold text-white">{urgency.label}</div>
                              <div className="text-sm text-gray-300">{urgency.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Summary */}
                    <div className="glass border-2 border-neon-cyan/50 rounded-2xl p-6 mb-8">
                      <h3 className="text-xl font-orbitron font-bold text-white mb-4">Project Summary</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-400">Name:</span> <span className="text-white">{formData.name}</span></div>
                        <div><span className="text-gray-400">Project:</span> <span className="text-white">{projectTypes.find(p => p.id === formData.projectType)?.name}</span></div>
                        <div><span className="text-gray-400">Budget:</span> <span className="text-white">{budgetRanges.find(b => b.id === formData.budget)?.range}</span></div>
                        <div><span className="text-gray-400">Features:</span> <span className="text-white">{formData.features.length} selected</span></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  {currentStep > 1 && (
                    <button
                      onClick={prevStep}
                      className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
                    >
                      Previous
                    </button>
                  )}
                  
                  <div className="flex-1" />
                  
                  {currentStep < 4 ? (
                    <button
                      onClick={nextStep}
                      className="neon-button-cyan px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                      Next Step
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="neon-button-magenta px-12 py-4 rounded-xl text-lg font-bold flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
                    >
                      <Sparkles className="w-6 h-6" />
                      Launch My Project
                      <Rocket className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="glass rounded-2xl p-6">
                <TrendingUp className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                <div className="text-2xl font-orbitron font-bold text-white">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <Clock className="w-12 h-12 text-neon-green mx-auto mb-4" />
                <div className="text-2xl font-orbitron font-bold text-white">&lt;48h</div>
                <div className="text-gray-300">Average Delivery</div>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <Shield className="w-12 h-12 text-neon-purple mx-auto mb-4" />
                <div className="text-2xl font-orbitron font-bold text-white">100%</div>
                <div className="text-gray-300">Secure & Safe</div>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <Star className="w-12 h-12 text-neon-magenta mx-auto mb-4" />
                <div className="text-2xl font-orbitron font-bold text-white">4.9/5</div>
                <div className="text-gray-300">Client Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetStarted;