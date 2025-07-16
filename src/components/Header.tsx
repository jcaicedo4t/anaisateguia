'use client';

import { useState, useEffect } from 'react';
import CartIcon from './CartIcon';

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
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-white/80 backdrop-blur-md'
    } border-b border-rose-200`}>
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="no-underline">
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600 hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0">
              <span className="hidden sm:inline">✨ Anaisa Te Guía</span>
              <span className="sm:hidden">✨ Anaisa</span>
            </h1>
          </a>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#servicios" className="relative text-gray-600 hover:text-rose-500 transition-all duration-300 group">
              <span className="relative z-10">Servicios</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#galeria" className="relative text-gray-600 hover:text-rose-500 transition-all duration-300 group">
              <span className="relative z-10">Galería</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contacto" className="relative text-gray-600 hover:text-rose-500 transition-all duration-300 group">
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden sm:block relative bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:from-rose-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 group overflow-hidden text-sm sm:text-base">
              <span className="relative z-10 font-semibold">
                <span className="hidden md:inline">Reservar Consulta</span>
                <span className="md:hidden">Reservar</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="hidden sm:block">
              <CartIcon />
            </div>
            
            <button 
              className="lg:hidden text-gray-600 hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-gray-100"
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
          <nav className="flex flex-col space-y-1 py-4 border-t border-rose-200">
            <a 
              href="#servicios" 
              className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 px-4 py-3 rounded-lg flex items-center gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-rose-400">🔮</span>
              <span className="font-medium">Servicios</span>
            </a>
            <a 
              href="#galeria" 
              className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 px-4 py-3 rounded-lg flex items-center gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-rose-400">🎬</span>
              <span className="font-medium">Galería</span>
            </a>
            <a 
              href="#contacto" 
              className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 px-4 py-3 rounded-lg flex items-center gap-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-rose-400">📱</span>
              <span className="font-medium">Contacto</span>
            </a>
            
            {/* Botón de reserva en móvil */}
            <div className="pt-4 border-t border-rose-200 mt-4 space-y-3">
              <button 
                className="w-full bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 text-white px-6 py-3 rounded-full hover:from-rose-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25 group overflow-hidden font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>✨</span>
                  Reservar Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <a 
                href="/checkout" 
                className="flex items-center justify-center gap-2 w-full bg-white text-purple-600 border border-purple-200 px-6 py-3 rounded-full hover:bg-purple-50 transition-all duration-300 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Ver Carrito
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}