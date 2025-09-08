import React from 'react';
import { achievements } from '@/data/landingPageData';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div id="tentang" className="w-full px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
            (Tentang Event)
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400">Tujuan Event</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:scale-110 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
