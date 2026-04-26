'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

interface PaqueteProps {
  id: string;
  minutos: number;
  precio: number;
  caracteristicas: string[];
  popular?: boolean;
  index: number;
}

const Paquete = ({ id, minutos, precio, caracteristicas, popular = false, index }: PaqueteProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);
  
  const handleSelectPackage = () => {
    addToCart({
      id,
      name: `Consulta ${minutos} Minutos`,
      price: precio,
      description: caracteristicas.join(', ')
    });
    window.location.href = '/checkout';
  };

  return (
    <div 
      className={`relative bg-card/80 backdrop-blur-xl p-8 rounded-2xl border transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${
        popular 
          ? 'border-gold shadow-[0_0_40px_rgba(201,166,72,0.2)] scale-105' 
          : 'border-border hover:border-gold/50'
      } ${
        isHovered && !popular ? 'scale-105 shadow-[0_0_30px_rgba(201,166,72,0.15)]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gold text-background px-4 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase">
            Recomendado
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-4xl font-serif font-bold text-gold mb-2">
          {minutos}
        </h3>
        <p className="text-sm text-foreground/60 tracking-wider uppercase mb-4">Minutos</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-serif font-bold text-foreground">${precio}</span>
          <span className="text-foreground/50 text-sm">USD</span>
        </div>
      </div>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6"></div>
      
      <ul className="space-y-3 mb-8">
        {caracteristicas.map((caracteristica, idx) => (
          <li key={idx} className="text-foreground/70 flex items-start gap-3 text-sm">
            <span className="text-gold mt-0.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span>{caracteristica}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-4 rounded-full font-serif tracking-wide transition-all duration-300 transform hover:scale-105 ${
          popular
            ? 'bg-gold text-background hover:bg-gold-light shadow-[0_0_20px_rgba(201,166,72,0.3)]'
            : 'bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-background'
        }`}
        onClick={handleSelectPackage}
      >
        Seleccionar
      </button>
    </div>
  );
};

// Smoke effect component
const SmokeEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-10 w-32 h-64 opacity-20">
      <svg viewBox="0 0 100 200" className="w-full h-full">
        <path
          d="M50 200 Q30 150 50 120 Q70 90 50 60 Q30 30 50 0"
          fill="none"
          stroke="url(#smokeGradient)"
          strokeWidth="8"
          className="animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <defs>
          <linearGradient id="smokeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1a2535" stopOpacity="0" />
            <stop offset="50%" stopColor="#243448" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1a2535" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute top-1/3 right-10 w-24 h-48 opacity-15">
      <svg viewBox="0 0 100 200" className="w-full h-full">
        <path
          d="M50 200 Q70 160 50 130 Q30 100 50 70 Q70 40 50 0"
          fill="none"
          stroke="url(#smokeGradient2)"
          strokeWidth="6"
          className="animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        <defs>
          <linearGradient id="smokeGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1a2535" stopOpacity="0" />
            <stop offset="50%" stopColor="#243448" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1a2535" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const paquetes = [
    {
      id: 'paquete-15',
      minutos: 15,
      precio: 10,
      caracteristicas: [
        "Consulta rápida",
        "1 pregunta específica",
        "Lectura ancestral",
        "Orientación inmediata"
      ],
      index: 0
    },
    {
      id: 'paquete-30',
      minutos: 30,
      precio: 18,
      caracteristicas: [
        "Consulta completa",
        "Múltiples preguntas",
        "Lectura detallada",
        "Consejos personalizados",
        "Análisis energético"
      ],
      popular: true,
      index: 1
    },
    {
      id: 'paquete-60',
      minutos: 60,
      precio: 32,
      caracteristicas: [
        "Sesión profunda",
        "Análisis completo",
        "Lectura de múltiples métodos",
        "Guía espiritual",
        "Plan de acción personalizado"
      ],
      index: 2
    }
  ];

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
        
        {/* Stars/sparkles */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-gold/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-gold/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-gold/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <SmokeEffect />

      <div className="relative z-20 max-w-6xl mx-auto text-center">
        {/* Logo and Title */}
        <div className={`mb-16 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 float glow">
              <Image 
                src="/logo.png" 
                alt="Anaisa Te Guía"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="shimmer-gold">Anaisa</span>
          </h1>
          <p className="text-gold/70 text-lg sm:text-xl tracking-[0.5em] uppercase font-serif mb-6">
            Te Guía
          </p>
          
          <p className={`text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 font-sans italic transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            &ldquo;Anaisa no predice tu futuro, te ayuda a crearlo&rdquo;
          </p>
          
          <div className={`flex flex-wrap justify-center gap-6 text-sm transition-all duration-1000 delay-500 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {[
              { icon: '☾', text: 'Conexión Ancestral' },
              { icon: '✦', text: '+5 años experiencia' },
              { icon: '◎', text: 'Consultas 24/7' }
            ].map((item, idx) => (
              <span 
                key={idx}
                className="flex items-center gap-2 bg-card/50 border border-border px-5 py-2 rounded-full text-foreground/70"
              >
                <span className="text-gold">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold/50"></div>
          <span className="text-gold/50">✦</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold/50"></div>
        </div>

        {/* Packages */}
        <div id="servicios" className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {paquetes.map((paquete, index) => (
            <Paquete key={index} {...paquete} index={index} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <a 
            href="https://wa.link/94krap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-background px-8 py-4 rounded-full text-lg font-serif tracking-wide hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(201,166,72,0.3)] pulse-gold"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            1 Pregunta GRATIS
          </a>
          
          <p className="mt-6 text-foreground/40 text-sm">
            WhatsApp: +57 3147115539
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-foreground/50 text-sm">
            {['Disponible 24/7', 'Respuesta inmediata', '100% confidencial'].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-gold/60">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
