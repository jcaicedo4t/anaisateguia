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
        ? 'bg-black/98 backdrop-blur-xl shadow-2xl' 
        : 'bg-black/80 backdrop-blur-md'
    } border-b border-gray-800`}>
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-200 hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0">
            <span className="hidden sm:inline">✨ Anaisa Te Guía</span>
            <span className="sm:hidden">✨ Anaisa</span>
          </h1>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
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
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden sm:block relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 group overflow-hidden text-sm sm:text-base">
              <span className="relative z-10 font-semibold">
                <span className="hidden md:inline">Reservar Consulta</span>
                <span className="md:hidden">Reservar</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              className="lg:hidden text-indigo-200 hover:text-pink-300 transition-colors p-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-1 py-4 border-t border-gray-700">
            <a 
              href="#servicios" 
              className="text-indigo-200 hover:text-pink-300 hover:bg-white/5 transition-all duration-200 px-4 py-3 rounded-lg flex items-center gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-pink-400">🔮</span>
              <span className="font-medium">Servicios</span>
            </a>
            <a 
              href="#galeria" 
              className="text-indigo-200 hover:text-pink-300 hover:bg-white/5 transition-all duration-200 px-4 py-3 rounded-lg flex items-center gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-pink-400">🎬</span>
              <span className="font-medium">Galería</span>
            </a>
            <a 
              href="#contacto" 
              className="text-indigo-200 hover:text-pink-300 hover:bg-white/5 transition-all duration-200 px-4 py-3 rounded-lg flex items-center gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-pink-400">📱</span>
              <span className="font-medium">Contacto</span>
            </a>
            
            {/* Botón de reserva en móvil */}
            <div className="pt-4 border-t border-gray-700 mt-4">
              <button 
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 group overflow-hidden font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>✨</span>
                  Reservar Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}