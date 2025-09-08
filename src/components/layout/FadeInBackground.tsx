import React from 'react';

interface FadeInBackgroundProps {
  images: string[];
  activeIndex: number;
}

const FadeInBackground: React.FC<FadeInBackgroundProps> = ({ images, activeIndex }) => {
  return (
    <div className="fixed inset-0 -z-10">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 h-full w-full bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: index === activeIndex ? 1 : 0,
          }}
        />
      ))}
      {/* Overlay gelap untuk semua gambar */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default FadeInBackground;
