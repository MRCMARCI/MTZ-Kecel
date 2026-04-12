import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wrench } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
      
      // Add visual feedback
      element.style.transition = 'transform 0.3s ease-out';
      element.style.transform = 'scale(1.01)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center transition-transform hover:scale-110 duration-300">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MTZ-Kecel</h1>
              <p className="text-xs text-gray-600">Szerszám és Alkatrész</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Főoldal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Termékek
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Rólunk
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group"
            >
              Kapcsolat
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t animate-in slide-in-from-top duration-300">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 rounded-lg"
            >
              Főoldal
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 rounded-lg"
            >
              Termékek
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 rounded-lg"
            >
              Rólunk
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 rounded-lg"
            >
              Kapcsolat
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
