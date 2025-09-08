import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  return (
    <div id="beranda" className="w-full pt-16 px-4">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-green-400 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            Kreaspora
          </span>
        </h1>
        
        <h2 className="text-lg sm:text-2xl lg:text-3xl mb-8 text-gray-300">
          Kreasi dan Sporta. <br />
          <span className="text-green-300">Lorem ipsum dolor sit amet</span>
        </h2>
        
        <p className="text-base sm:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-gradient-to-r from-teal-500 to-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            Lorem Ipsum
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Hero;
