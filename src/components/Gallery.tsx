'use client';

import { useState } from 'react';

interface VideoProps {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
}

const videos: VideoProps[] = [
  {
    id: '1',
    thumbnail: '/placeholder-1.svg',
    title: 'Lectura del Día: Energías de la Semana',
    views: '2.5K'
  },
  {
    id: '2',
    thumbnail: '/placeholder-2.svg',
    title: 'Consejos para Limpiar tu Energía',
    views: '1.8K'
  },
  {
    id: '3',
    thumbnail: '/placeholder-3.svg',
    title: 'Predicciones del Mes',
    views: '3.2K'
  },
  {
    id: '4',
    thumbnail: '/placeholder-4.svg',
    title: 'Ritual de Luna Llena',
    views: '4.1K'
  },
  {
    id: '5',
    thumbnail: '/placeholder-5.svg',
    title: 'Señales del Universo',
    views: '2.9K'
  },
  {
    id: '6',
    thumbnail: '/placeholder-6.svg',
    title: 'Meditación Guiada',
    views: '1.7K'
  }
];

const VideoCard = ({ thumbnail, title, views }: VideoProps) => (
  <div className="bg-indigo-900/20 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-indigo-300/10 hover:border-indigo-300/20">
    <div className="aspect-[9/16] relative bg-indigo-800/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl text-indigo-400/50">▶️</span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-indigo-100 font-semibold mb-2 truncate">{title}</h3>
      <p className="text-indigo-300 text-sm">{views} visualizaciones</p>
    </div>
  </div>
);

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black via-indigo-950/40 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-pink-200 to-indigo-200">
          Explora Mi Contenido
        </h2>

        <div className="flex justify-center mb-8">
          <div className="bg-indigo-900/20 rounded-full p-1 border border-indigo-300/10">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-indigo-400/30 text-indigo-100 border border-indigo-300/20'
                  : 'text-indigo-300 hover:text-indigo-100'
              }`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'testimonios'
                  ? 'bg-indigo-400/30 text-indigo-100 border border-indigo-300/20'
                  : 'text-indigo-300 hover:text-indigo-100'
              }`}
              onClick={() => setActiveTab('testimonios')}
            >
              Testimonios
            </button>
          </div>
        </div>

        {activeTab === 'videos' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-300/10 hover:border-indigo-300/20 transition-all duration-300">
              <p className="text-indigo-100 mb-4">
                "Ana Isabel me ayudó a encontrar claridad en un momento muy difícil de mi vida. Su guía fue invaluable."
              </p>
              <p className="text-pink-300 font-semibold">- María G.</p>
            </div>
            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-300/10 hover:border-indigo-300/20 transition-all duration-300">
              <p className="text-indigo-100 mb-4">
                "Increíble experiencia. Las predicciones fueron muy precisas y los consejos muy útiles."
              </p>
              <p className="text-pink-300 font-semibold">- Carlos R.</p>
            </div>
            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-300/10 hover:border-indigo-300/20 transition-all duration-300">
              <p className="text-indigo-100 mb-4">
                "La mejor lectora que he consultado. Muy profesional y asertiva en sus interpretaciones."
              </p>
              <p className="text-pink-300 font-semibold">- Laura M.</p>
            </div>
            <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-300/10 hover:border-indigo-300/20 transition-all duration-300">
              <p className="text-indigo-100 mb-4">
                "Sus consejos me ayudaron a tomar decisiones importantes. Muy agradecida."
              </p>
              <p className="text-pink-300 font-semibold">- Pedro S.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}