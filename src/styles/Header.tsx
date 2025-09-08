"use client";

import React from 'react';

interface HeaderProps {
  isLoaded: boolean;
}

const navItems = ['Beranda', 'Tentang', 'Program', 'Kontak'];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC<HeaderProps> = ({ isLoaded }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className={`text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            MPKOSIS
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => {
              const targetId = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  onClick={(e) => handleScroll(e, targetId)}
                  className={`cursor-pointer hover:text-teal-300 transition-all duration-300 transform hover:scale-110 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;