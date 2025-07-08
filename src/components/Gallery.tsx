'use client';

import { useState, useEffect } from 'react';

interface VideoProps {
  id: string;
  title: string;
  description: string;
}

const videos: VideoProps[] = [
  {
    id: '1',
    title: 'Lectura del Día: Energías de la Semana',
    description: 'Descubre las energías que te acompañarán durante esta semana'
  },
  {
    id: '2',
    title: 'Consejos para Limpiar tu Energía',
    description: 'Técnicas efectivas para purificar tu aura y renovar tu espíritu'
  },
  {
    id: '3',
    title: 'Predicciones del Mes',
    description: 'Las revelaciones que el universo tiene preparadas para ti'
  },
  {
    id: '4',
    title: 'Ritual de Luna Llena',
    description: 'Aprovecha el poder de la luna llena para manifestar tus deseos'
  },
  {
    id: '5',
    title: 'Señales del Universo',
    description: 'Aprende a interpretar los mensajes que te envía el cosmos'
  },
  {
    id: '6',
    title: 'Meditación Guiada',
    description: 'Encuentra la paz interior con esta sesión de meditación'
  }
];

const VideoCard = ({ video, index }: { video: VideoProps; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-xl rounded-3xl p-6 border border-indigo-200/20 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:border-pink-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="aspect-video bg-gradient-to-br from-indigo-800/40 to-purple-800/40 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group">
          {/* Efecto de ondas */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className={`text-5xl transition-all duration-300 transform ${
              isHovered ? 'scale-110 rotate-12' : ''
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">▶️</span>
            </div>
            <span className="text-indigo-300 text-sm font-medium bg-indigo-900/50 px-3 py-1 rounded-full">
              Ver Video
            </span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 group-hover:from-pink-200 group-hover:to-white transition-all duration-300">
            {video.title}
          </h3>
          <p className="text-indigo-200/80 text-sm leading-relaxed group-hover:text-indigo-100 transition-colors duration-300">
            {video.description}
          </p>
        </div>
        
        {/* Indicador de interactividad */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('videos');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const testimonials = [
    {
      name: "María González",
      text: "Anaisa me ayudó a encontrar claridad en un momento muy difícil. Sus lecturas son increíblemente precisas y llenas de sabiduría.",
      rating: 5,
      location: "Madrid, España"
    },
    {
      name: "Carlos Rodríguez",
      text: "Las predicciones se cumplieron exactamente como me dijo. Su conexión espiritual es genuina y poderosa.",
      rating: 5,
      location: "México DF, México"
    },
    {
      name: "Ana Martínez",
      text: "Profesional, empática y con un don especial. Gracias por guiarme en mi camino espiritual y personal.",
      rating: 5,
      location: "Buenos Aires, Argentina"
    },
    {
      name: "Luis Fernández",
      text: "Cada consulta con Anaisa es transformadora. Su energía y conocimiento me han ayudado enormemente.",
      rating: 5,
      location: "Barcelona, España"
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-pink-200 to-purple-200">
              ✨ Galería Espiritual
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
            Descubre contenido exclusivo, testimonios reales y la sabiduría que transformará tu vida
          </p>
        </div>

        {/* Navegación de pestañas mejorada */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-300 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-3 border border-indigo-200/20 shadow-2xl">
            {/* Indicador deslizante */}
            <div 
              className={`absolute top-3 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl transition-all duration-300 shadow-lg ${
                activeTab === 'videos' ? 'left-3 w-32' : 'left-36 w-40'
              }`}
            />
            
            <div className="relative z-10 flex">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'videos'
                    ? 'text-white'
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                <span className="text-xl">🎬</span> Videos
              </button>
              <button
                onClick={() => setActiveTab('testimonios')}
                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'testimonios'
                    ? 'text-white'
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                <span className="text-xl">⭐</span> Testimonios
              </button>
            </div>
          </div>
        </div>

        {/* Contenido de las pestañas */}
        <div className="min-h-[600px]">
          {activeTab === 'videos' ? (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 transform ${
              activeTab === 'videos' ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          ) : (
            <div className={`transition-all duration-500 transform ${
              activeTab === 'testimonios' ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              {/* Estadísticas de testimonios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-8 border border-indigo-200/20">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 mb-2">
                    500+
                  </div>
                  <p className="text-indigo-200">Consultas Realizadas</p>
                </div>
                <div className="text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-8 border border-pink-200/20">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                    98%
                  </div>
                  <p className="text-indigo-200">Satisfacción</p>
                </div>
                <div className="text-center bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-8 border border-indigo-200/20">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-2">
                    5⭐
                  </div>
                  <p className="text-indigo-200">Calificación Promedio</p>
                </div>
              </div>

              {/* Testimonios */}
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`group bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-xl p-8 rounded-3xl border border-indigo-200/20 hover:border-pink-300/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 ${
                      index % 2 === 0 ? 'md:translate-y-8' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Estrellas */}
                      <div className="flex mb-6 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span 
                            key={i} 
                            className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      
                      {/* Texto del testimonio */}
                      <blockquote className="text-indigo-100 text-lg leading-relaxed mb-6 italic text-center group-hover:text-white transition-colors duration-300">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Información del cliente */}
                      <div className="text-center border-t border-indigo-300/20 pt-6">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 font-bold text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-indigo-400 text-sm flex items-center justify-center gap-2">
                          <span>📍</span> {testimonial.location}
                        </p>
                      </div>
                      
                      {/* Decoración */}
                      <div className="absolute top-4 left-4 text-6xl text-pink-400/10 group-hover:text-pink-400/20 transition-colors duration-300">
                        "
                      </div>
                      <div className="absolute bottom-4 right-4 text-6xl text-indigo-400/10 group-hover:text-indigo-400/20 transition-colors duration-300 rotate-180">
                        "
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}