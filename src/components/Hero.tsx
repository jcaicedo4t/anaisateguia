'use client';

import { useState, useEffect } from 'react';

interface PaqueteProps {
  minutos: number;
  precio: number;
  caracteristicas: string[];
  popular?: boolean;
  index: number;
}

const Paquete = ({ minutos, precio, caracteristicas, popular = false, index }: PaqueteProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`relative bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${
        popular 
          ? 'border-pink-400/50 shadow-pink-500/25 scale-105' 
          : 'border-indigo-200/20 hover:border-indigo-300/40'
      } ${
        isHovered ? 'scale-105 shadow-3xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Más Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-pink-200 mb-2">
          {minutos} Minutos
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold text-white">${precio}</span>
          <span className="text-indigo-300 text-lg">USD</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {caracteristicas.map((caracteristica, idx) => (
          <li key={idx} className="text-indigo-100 flex items-center gap-3 group">
            <span className="text-pink-400 group-hover:scale-110 transition-transform duration-200">✨</span>
            <span className="group-hover:text-white transition-colors duration-200">{caracteristica}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
          popular
            ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-pink-500/25'
            : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
        }`}
        onClick={() => alert('Función de reserva en desarrollo')}
      >
        <span className="relative z-10">Seleccionar Paquete</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const paquetes = [
    {
      minutos: 15,
      precio: 25,
      caracteristicas: [
        "Consulta rápida",
        "1 pregunta específica",
        "Lectura de cartas",
        "Orientación inmediata"
      ],
      index: 0
    },
    {
      minutos: 30,
      precio: 45,
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
      minutos: 60,
      precio: 80,
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
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 py-20 overflow-hidden">



      <div className="relative z-20 max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <div className={`mb-20 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-pink-200 to-purple-200 animate-pulse">
                ✨ Hola, soy Anaisa
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-indigo-300 to-pink-300">
                Te Guía
              </span>
            </h1>
            
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          </div>
          
          <p className={`text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Descubre tu camino con lecturas de tarot personalizadas. 
            Te ayudo a encontrar claridad en el amor, trabajo y vida espiritual.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-6 text-indigo-300 transition-all duration-1000 delay-500 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="flex items-center gap-2 bg-indigo-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-pink-400">🔮</span> Tarot Profesional
            </span>
            <span className="flex items-center gap-2 bg-indigo-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-pink-400">⭐</span> +5 años experiencia
            </span>
            <span className="flex items-center gap-2 bg-indigo-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-pink-400">💫</span> Consultas 24/7
            </span>
          </div>
        </div>

        {/* Paquetes de consulta */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {paquetes.map((paquete, index) => (
            <Paquete key={index} {...paquete} index={index} />
          ))}
        </div>

        {/* Call to action mejorado */}
        <div className={`text-center transition-all duration-1000 delay-700 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 mb-6">
            <span className="relative z-10">🌟 Reservar Mi Consulta Ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </button>
          
          <div className="flex flex-wrap justify-center gap-8 text-indigo-300">
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Disponible 24/7
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Respuesta inmediata
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 100% confidencial
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Satisfacción garantizada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}