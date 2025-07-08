'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-indigo-900/98 to-pink-900/98 backdrop-blur-xl shadow-2xl shadow-indigo-500/20' 
        : 'bg-gradient-to-r from-indigo-900/80 to-pink-900/80 backdrop-blur-md'
    } border-b border-indigo-300/20`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-200 hover:scale-105 transition-transform duration-300 cursor-pointer">
            ✨ Anaisa Te Guía
          </h1>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="relative text-indigo-200 hover:text-pink-300 transition-all duration-300 group">
              <span className="relative z-10">Servicios</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#galeria" className="relative text-indigo-200 hover:text-pink-300 transition-all duration-300 group">
              <span className="relative z-10">Galería</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contacto" className="relative text-indigo-200 hover:text-pink-300 transition-all duration-300 group">
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 group overflow-hidden">
              <span className="relative z-10 font-semibold">Reservar Consulta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              className="md:hidden text-indigo-200 hover:text-pink-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 py-4 border-t border-indigo-300/20">
            <a href="#servicios" className="text-indigo-200 hover:text-pink-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Servicios
            </a>
            <a href="#galeria" className="text-indigo-200 hover:text-pink-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Galería
            </a>
            <a href="#contacto" className="text-indigo-200 hover:text-pink-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}