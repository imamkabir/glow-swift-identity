import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ChatBot from '@/components/ChatBot';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ChatBot />
    </div>
  );
};

export default Home;