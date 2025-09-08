import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Programs from '@/components/sections/Programs';
import Contact from '@/components/sections/Contact';
import CustomCursor from '@/components/ui/CustomCursor';
import AnimatedBackground from '@/components/ui/Background';
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import TraditionalAnimatedBackground from '@/components/ui/TraditionalAnimatedBackground';

const MPKOSISLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
        <CustomCursor mousePosition={mousePosition} isLoaded={isLoaded} />
        <AnimatedBackground />
        <Header isLoaded={isLoaded} />
        <ParticlesBackground />
        <TraditionalAnimatedBackground />

        <main>
          <Hero isLoaded={isLoaded} />
          <About />
          <Programs />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MPKOSISLanding;