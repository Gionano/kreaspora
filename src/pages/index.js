import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import komponen
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import Navbar from '@/components/sections/Navbar';
import FadeInBackground from '@/components/layout/FadeInBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/ui/LoadingScreen';

const Programs = dynamic(() => import('@/components/sections/Programs'), {
  ssr: false,
});

const backgroundImages = [
  '/background/sport-1.jpg',
  '/background/sport-3.jpg',
  '/background/sport-2.jpg',
  '/background/melukis.jpg',
];

const MPKOSISLanding = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false); // State baru untuk transisi fade-out
  const [activeIndex, setActiveIndex] = useState(0);

  // Efek untuk simulasi loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Mulai proses fade-out, jangan langsung hilangkan loading screen
          setFadingOut(true);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Efek untuk menghilangkan loading screen setelah animasi fade-out selesai
  useEffect(() => {
    if (fadingOut) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // Durasi harus sama dengan transisi di CSS
      return () => clearTimeout(timer);
    }
  }, [fadingOut]);

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref, index) => {
      if (ref.current && index !== 2) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref, index) => {
        if (ref.current && index !== 2) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [loading]);

  return (
    <div className="min-h-screen">
      {/* Loading screen tetap di-render selama proses loading & fade-out */}
      {loading && <LoadingScreen progress={progress} isFadingOut={fadingOut} />}
      
      {/* Konten utama tetap di-render di belakang untuk transisi mulus */}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Head>
          <title>Kreaspora - Beranda</title>
        </Head>
        <Navbar />
        <FadeInBackground images={backgroundImages} activeIndex={activeIndex} />
        <main className="relative">
          <Section id="beranda" ref={sectionRefs[0]}>
            <Hero isLoaded={!loading} />
          </Section>
          <Section id="tentang" ref={sectionRefs[1]}>
            <About />
          </Section>
          <Programs />
          <Section id="kontak" ref={sectionRefs[3]}>
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MPKOSISLanding;