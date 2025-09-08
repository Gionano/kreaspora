import React, { forwardRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string; // Add id prop
}

// Gunakan forwardRef untuk meneruskan ref ke elemen DOM
const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, className = '', id }, ref) => { // Destructure id
  return (
    <section id={id} ref={ref} className={`relative h-screen-dvh w-full flex items-center justify-center ${className}`}> {/* Pass id to section */}
      {/* Konten tidak lagi memerlukan z-index karena background sudah terpisah */}
      <div className="text-center text-white p-4">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
