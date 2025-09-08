import React from 'react';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/data/landingPageData';

const Programs: React.FC = () => {
  return (
    <section id="program" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
            Program Unggulan
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Berbagai program inovatif yang dirancang untuk mengembangkan potensi siswa dan menciptakan perubahan positif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                // Praktik terbaik adalah menggunakan ID unik dari data, misal: program.id
                key={program.title || index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* TODO: Warna gradien ikon diambil dari data, Anda mungkin perlu mengubahnya juga di `landingPageData.ts` */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-base text-gray-300 mb-6">{program.description}</p>
                <div className="flex items-center text-teal-400 group-hover:text-green-400 transition-colors">
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;