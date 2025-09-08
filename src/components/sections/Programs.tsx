import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { programs } from '@/data/landingPageData';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Programs: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [snapPoints, setSnapPoints] = useState([0]);
  const [progressPoints, setProgressPoints] = useState([0]);

  useEffect(() => {
    if (containerRef.current && cardRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth;
      const gap = parseInt(window.getComputedStyle(cardRef.current.parentElement!).gap) || 32;
      const cardPlusGap = cardWidth + gap;

      const start = containerWidth / 2 - cardWidth / 2;
      
      const points = programs.map((_, i) => start - i * cardPlusGap);
      setSnapPoints(points);

      const numPrograms = programs.length;
      if (numPrograms > 1) {
        const progress = programs.map((_, i) => i / (numPrograms - 1));
        setProgressPoints(progress);
      } else {
        setProgressPoints([0]);
      }
    }
  }, []);

  const x = useTransform(scrollYProgress, progressPoints, snapPoints);
  const xSpring = useSpring(x, { stiffness: 200, damping: 40 });

  return (
    <div id="program" ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div ref={containerRef} className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
                Program Lomba
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto break-words">
                Scroll down to explore our programs.
              </p>
            </div>
          </motion.div>

          <motion.div ref={scrollContentRef} style={{ x: xSpring }} className="inline-flex gap-6 sm:gap-8">
            {programs.map((program, index) => {
              return (
                <div
                  ref={index === 0 ? cardRef : null}
                  key={program.id}
                  className="group min-w-[18rem] max-w-sm sm:w-80 flex-shrink-0 select-none bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 640px) 288px, 320px"
                      className="object-cover"
                      draggable="false"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white break-words">
                      {program.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base break-words">
                      {program.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Programs;