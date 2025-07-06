'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-indigo-900/80 via-indigo-800/80 to-indigo-900/80 backdrop-blur-sm z-50 border-b border-indigo-300/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-pink-200 to-indigo-100 hover:from-pink-200 hover:to-indigo-200 transition-all duration-300">
            ✨ Anaisa
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="#servicios" 
              className="text-indigo-200 hover:text-pink-200 transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="#galeria" 
              className="text-indigo-200 hover:text-pink-200 transition-colors"
            >
              Galería
            </Link>
            <Link 
              href="#contacto" 
              className="text-indigo-200 hover:text-pink-200 transition-colors"
            >
              Contacto
            </Link>
          </div>
          <Link 
            href="#contacto" 
            className="bg-indigo-400/30 text-indigo-100 px-6 py-2 rounded-full hover:bg-indigo-400/50 transition-all duration-300 border border-indigo-300/20 hover:border-indigo-300/40 backdrop-blur-sm"
          >
            Reservar Consulta
          </Link>
        </div>
      </nav>
    </header>
  );
}