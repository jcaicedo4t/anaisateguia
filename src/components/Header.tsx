'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        ? 'bg-background/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(201,166,72,0.1)]' 
        : 'bg-background/80 backdrop-blur-md'
    } border-b border-gold/20`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="no-underline flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 glow">
              <Image 
                src="/logo.png" 
                alt="Anaisa Te Guía"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl md:text-2xl font-semibold text-gold group-hover:text-gold-light transition-colors duration-300">
                Anaisa
              </h1>
              <p className="text-xs text-gold/60 tracking-[0.3em] uppercase">Te Guía</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {['Servicios', 'Galería', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-foreground/70 hover:text-gold transition-all duration-300 group font-serif text-sm tracking-wide"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/checkout"
              className="hidden sm:flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-5 py-2.5 rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-serif text-sm tracking-wide group"
            >
              <span className="relative">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <span>Reservar</span>
            </Link>
            
            <div className="hidden sm:block">
              <CartIcon />
            </div>
            
            <button 
              className="lg:hidden text-gold hover:text-gold-light transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col py-4 border-t border-gold/20">
            {['Servicios', 'Galería', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-foreground/70 hover:text-gold hover:bg-gold/5 transition-all duration-200 px-4 py-3 flex items-center gap-3 font-serif" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
                {item}
              </a>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gold/20 space-y-3 px-4">
              <Link 
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full bg-gold text-background px-6 py-3 rounded-full hover:bg-gold-light transition-all duration-300 font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reservar Consulta
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
