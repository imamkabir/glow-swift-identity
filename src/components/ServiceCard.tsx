import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  glowColor: 'cyan' | 'magenta' | 'purple';
}

const ServiceCard = ({ icon, title, description, features, glowColor }: ServiceCardProps) => {
  const getGlowClass = () => {
    switch (glowColor) {
      case 'cyan': return 'hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]';
      case 'magenta': return 'hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.3)]';
      case 'purple': return 'hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]';
    }
  };

  const getIconColor = () => {
    switch (glowColor) {
      case 'cyan': return 'text-neon-cyan';
      case 'magenta': return 'text-neon-magenta';
      case 'purple': return 'text-neon-purple';
    }
  };

  const getBorderColor = () => {
    switch (glowColor) {
      case 'cyan': return 'border-neon-cyan/30';
      case 'magenta': return 'border-neon-magenta/30';
      case 'purple': return 'border-neon-purple/30';
    }
  };

  return (
    <div className={`glass border-2 ${getBorderColor()} rounded-2xl p-8 card-3d transition-all duration-500 ${getGlowClass()} group`}>
      {/* Icon */}
      <div className={`w-16 h-16 ${getIconColor()} mb-6 group-hover:animate-pulse`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 font-poppins">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-400">
            <div className={`w-2 h-2 ${getIconColor()} rounded-full mr-3 animate-pulse`}></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Learn More Button */}
      <button className={`mt-8 w-full py-3 rounded-lg border-2 ${getBorderColor()} ${getIconColor()} bg-transparent transition-all duration-300 hover:bg-${glowColor === 'cyan' ? 'neon-cyan' : glowColor === 'magenta' ? 'neon-magenta' : 'neon-purple'} hover:text-black font-medium`}>
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;