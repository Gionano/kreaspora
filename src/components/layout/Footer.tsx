import React from 'react';
import Image from 'next/image';

const sponsors = [
  { src: '/sponsors/logo_nesta.png', width: 50, height: 10 },
  { src: '/sponsors/perari.png', width: 50, height: 10 },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/50 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <h3 className="text-lg text-gray-400 mb-6">Didukung oleh:</h3>
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {sponsors.map((sponsor, index) => (
              <div key={sponsor.src} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <Image
                  src={sponsor.src}
                  alt={`Logo Sponsor ${index + 1}`}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-12 w-auto"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Giovano. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
