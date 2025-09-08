// src/pages/index.tsx
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import Navbar from '@/components/sections/Navbar';
import FadeInBackground from '@/components/layout/FadeInBackground';

// Import konten section
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

// Dynamically import Programs component only on the client side
const Programs = dynamic(() => import('@/components/sections/Programs'), { ssr: false });

// Daftar gambar background kita
const backgroundImages = [
  '/background/sport-1.jpg',
  '/background/sport-3.jpg',
  '/background/sport-2.jpg',
  '/background/melukis.jpg',
];

const MPKOSISLanding: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Buat satu ref untuk setiap section
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Temukan index dari ref yang berpotongan
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Memicu saat 50% section terlihat
    );

    sectionRefs.forEach((ref, index) => {
      // Do not observe the Programs component (index 2) which is loaded dynamically
      if (ref.current && index !== 2) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref, index) => {
        // Do not unobserve the Programs component (index 2)
        if (ref.current && index !== 2) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]); // Dependency array

  return (
    <div className="min-h-screen">
      <Navbar />
      <FadeInBackground images={backgroundImages} activeIndex={activeIndex} />
      
      <main className="relative">
        <Section id="beranda" ref={sectionRefs[0]}>
          <Hero isLoaded={true} />
        </Section>

        <Section id="tentang" ref={sectionRefs[1]}>
          <About />
        </Section>

        <Programs ref={sectionRefs[2]} />

        <Section id="kontak" ref={sectionRefs[3]}>
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default MPKOSISLanding;