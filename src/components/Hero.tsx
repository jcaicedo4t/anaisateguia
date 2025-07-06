'use client';

import Image from 'next/image';

interface PaqueteProps {
  minutos: number;
  precio: number;
  caracteristicas: string[];
}

const Paquete = ({ minutos, precio, caracteristicas }: PaqueteProps) => (
  <div className="bg-indigo-50/5 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-indigo-200/20 hover:border-indigo-300/40 transition-all">
    <h3 className="text-2xl font-bold text-indigo-200 mb-2">{minutos} Minutos</h3>
    <p className="text-3xl font-bold text-white mb-4">${precio}</p>
    <ul className="space-y-2">
      {caracteristicas.map((caracteristica, index) => (
        <li key={index} className="text-indigo-100 flex items-center gap-2">
          <span className="text-pink-300">✨</span>
          {caracteristica}
        </li>
      ))}
    </ul>
    <button 
      className="w-full mt-6 bg-indigo-400 text-white py-3 rounded-full hover:bg-indigo-500 transition-colors"
      onClick={() => alert('Función de reserva en desarrollo')}
    >
      Seleccionar
    </button>
  </div>
);

export default function Hero() {
  const paquetes: PaqueteProps[] = [
    {
      minutos: 15,
      precio: 25,
      caracteristicas: [
        'Lectura rápida',
        'Una pregunta específica',
        'Consejo inmediato'
      ]
    },
    {
      minutos: 30,
      precio: 45,
      caracteristicas: [
        'Lectura detallada',
        'Múltiples preguntas',
        'Guía espiritual',
        'Grabación de la sesión'
      ]
    },
    {
      minutos: 60,
      precio: 80,
      caracteristicas: [
        'Lectura completa',
        'Análisis profundo',
        'Plan de acción',
        'Seguimiento posterior',
        'Grabación de la sesión'
      ]
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-900/40 via-indigo-900/60 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block text-3xl md:text-4xl text-pink-300 mb-4">✨ Hola, soy</span>
            <span className="bg-gradient-to-r from-indigo-300 via-pink-200 to-indigo-200 text-transparent bg-clip-text">
              Anaisa Te Guía
            </span>
          </h1>
          <p className="text-2xl text-indigo-200 font-light max-w-2xl mx-auto">
            Tu Guía Espiritual y Psíquica Personal
          </p>
          <p className="text-lg text-indigo-300/80 max-w-3xl mx-auto">
            Descubre las respuestas que buscas y encuentra claridad en tu camino espiritual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {paquetes.map((paquete, index) => (
            <Paquete key={index} {...paquete} />
          ))}
        </div>
      </div>
    </section>
  );
}