import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '@/img/logo.jpeg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    const targetId = path.substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Beranda', path: '#beranda' },
    { name: 'Tentang', path: '#tentang' },
    { name: 'Program', path: '#program' },
    { name: 'Kontak', path: '#kontak' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#beranda" className="flex items-center gap-3">
          <Image src={logo} alt="MPKOSIS Logo" width={32} height={32} className="rounded-full" />
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
            MPKOSIS
          </span>
        </a>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                onClick={(e) => handleScrollToSection(e, item.path)}
                className="font-medium text-gray-300 hover:text-teal-300 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Buka menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-16 left-0 h-[calc(100vh-4rem)] w-1/2 max-w-xs bg-slate-900/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-start space-y-6 p-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                onClick={(e) => {
                  handleScrollToSection(e, item.path);
                  setIsMenuOpen(false);
                }}
                className="font-medium text-gray-200 hover:text-teal-300 text-xl cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
