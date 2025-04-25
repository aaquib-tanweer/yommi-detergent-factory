import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Products', to: '#products' },
  { label: 'Industries', to: '#industries' },
  { label: 'Contact', to: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Droplet size={32} className="text-[#006C35]" />
              </motion.div>
              <span className={`font-bold text-xl ${scrolled ? 'text-[#006C35]' : 'text-white'}`}>
                Yommi
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.to)}
                className={`${
                  scrolled ? 'text-gray-800 hover:text-[#006C35]' : 'text-white hover:text-sky-200'
                } transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#demo')}
              className="bg-[#006C35] text-white px-4 py-2 rounded-md font-medium hover:bg-[#005a2d] transition-colors duration-200"
            >
              Book a Demo
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? 'text-gray-800' : 'text-white'
              } transition-colors duration-200`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.to)}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#demo')}
              className="block w-full text-left px-3 py-2 text-white bg-[#006C35] hover:bg-[#005a2d] rounded-md"
            >
              Book a Demo
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;