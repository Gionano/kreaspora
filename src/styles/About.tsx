import React from 'react';
import { achievements } from '@/data/landingPageData';

const About: React.FC = () => {
  return (
    <section id="tentang" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
            Tentang MPKOSIS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MPKOSIS adalah lembaga tertinggi yang mewadahi seluruh aspirasi siswa dalam mengembangkan potensi dan menciptakan perubahan positif di lingkungan sekolah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Visi Kami</h3>
              <p className="text-gray-300">
                Menjadi organisasi siswa yang unggul, demokratis, dan berkarakter dalam mewujudkan lingkungan sekolah yang kondusif untuk pengembangan potensi siswa.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-lime-400">Misi Kami</h3>
              <ul className="space-y-2 text-gray-300">
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="bg-gradient-to-br from-teal-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:scale-110 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default About;