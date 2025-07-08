'use client';

import { useState, useEffect } from 'react';

// Función para obtener la miniatura de TikTok usando oEmbed API
const getTikTokThumbnail = async (url: string): Promise<string | null> => {
  try {
    const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data.thumbnail_url || null;
  } catch (error) {
    console.error('Error fetching TikTok thumbnail:', error);
    return null;
  }
};

interface VideoProps {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
}

const videos: VideoProps[] = [
  {
    id: '7513050770359487750',
    title: 'Preparando el Altar a José Gregorio Hernández',
    description: 'Mi espacio de calma y fe ✨🕯️ Te muestro cómo preparo el altar dedicado al Dr. José Gregorio Hernández con respeto, intención y mucho corazón 💛',
    url: 'https://www.tiktok.com/@anaisateguia/video/7513050770359487750'
  },
  {
    id: '7511212059921501446',
    title: 'Oración Poderosa al Doctor José Gregorio Hernández',
    description: '🙏 Oración poderosa para la salud y el bienestar. Eleva tu fe y conéctate con su energía sanadora 🌿🕊️',
    url: 'https://www.tiktok.com/@anaisateguia/video/7511212059921501446'
  },
  {
    id: '7510070257462021382',
    title: 'Oración de las Tres Potencias: Guía y Protección',
    description: '✨ Una plegaria poderosa para atraer guía, protección y claridad espiritual 💫 Que la luz te acompañe en cada paso 🕊️',
    url: 'https://www.tiktok.com/@anaisateguia/video/7510070257462021382'
  },
  {
    id: '7515647552801361158',
    title: 'Ritual para Reconectar con Esa Persona Especial',
    description: '¿Sientes que esa persona se ha alejado? Este ritual activa dulcemente la conexión emocional y armoniza los sentimientos 💫',
    url: 'https://www.tiktok.com/@anaisateguia/video/7515647552801361158'
  },
  {
    id: '7503655679643897143',
    title: 'Baño Espiritual para Abrir Caminos',
    description: '✨ ¿Sientes que tus caminos están bloqueados? Este baño espiritual libera energías estancadas y atrae prosperidad 🌟',
    url: 'https://www.tiktok.com/@anaisateguia/video/7503655679643897143'
  },
  {
    id: '7512299322852052280',
    title: 'Ritual con Girasol y Cerveza para Abundancia',
    description: '💰🌻 Poderoso baño espiritual para atraer abundancia y abrir caminos económicos. Sencillo pero muy efectivo con fe e intención ✨',
    url: 'https://www.tiktok.com/@anaisateguia/video/7512299322852052280'
  }
];

const VideoCard = ({ video, index }: { video: VideoProps; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [thumbnailLoading, setThumbnailLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const loadThumbnail = async () => {
      if (video.url) {
        const thumbnailUrl = await getTikTokThumbnail(video.url);
        setThumbnail(thumbnailUrl);
        setThumbnailLoading(false);
      }
    };
    loadThumbnail();
  }, [video.url]);

  const handleVideoClick = () => {
    window.open(video.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`group relative bg-gradient-to-br from-white/80 to-rose-50/80 backdrop-blur-xl rounded-3xl p-6 border border-rose-200/50 transition-all duration-500 transform cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:border-purple-300/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-rose-100/30 to-pink-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="aspect-video bg-gradient-to-br from-purple-100/60 to-rose-100/60 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group">
          {/* Miniatura de TikTok o placeholder */}
          {thumbnail && !thumbnailLoading ? (
            <>
              <img 
                src={thumbnail} 
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                onError={() => setThumbnail(null)}
              />
              {/* Overlay con efecto de hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <div className={`text-6xl transition-all duration-300 transform ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}>

                </div>
              </div>
            </>
          ) : (
            <>
              {/* Efecto de ondas para placeholder */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                {thumbnailLoading ? (
                  <div className="animate-spin text-4xl">⏳</div>
                ) : (
                  <div className={`text-5xl transition-all duration-300 transform ${
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">▶️</span>
                  </div>
                )}
                <span className="text-purple-600 text-sm font-medium bg-white/70 px-3 py-1 rounded-full flex items-center gap-1">
                  <span>📱</span> Ver en TikTok
                </span>
              </div>
            </>
          )}
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-purple-600 group-hover:from-purple-600 group-hover:to-rose-600 transition-all duration-300">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {video.description}
          </p>
        </div>
        
        {/* Indicador de interactividad */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full animate-pulse"></div>
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
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-purple-50 to-rose-50 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600">
              ✨ Galería Espiritual
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre contenido exclusivo, testimonios reales y la sabiduría que transformará tu vida
          </p>
        </div>

        {/* Navegación de pestañas mejorada */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-300 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-3 border border-purple-200/50 shadow-2xl">
            {/* Indicador deslizante */}
            <div 
              className={`absolute top-3 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl transition-all duration-300 shadow-lg ${
                activeTab === 'videos' ? 'left-3 w-32' : 'left-36 w-40'
              }`}
            />
            
            <div className="relative z-10 flex">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'videos'
                    ? 'text-white scale-105'
                    : 'text-gray-500 hover:text-white hover:bg-purple-500/20 hover:scale-105'
                }`}
              >
                <span className="text-xl">🎬</span> Videos
              </button>
              <button
                onClick={() => setActiveTab('testimonios')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === 'testimonios'
                    ? 'text-white scale-105'
                    : 'text-gray-500 hover:text-white hover:bg-purple-500/20 hover:scale-105'
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
                <div className="text-center bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-xl rounded-3xl p-8 border border-purple-200/50">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 mb-2">
                    500+
                  </div>
                  <p className="text-gray-600">Consultas Realizadas</p>
                </div>
                <div className="text-center bg-gradient-to-br from-white/70 to-rose-50/70 backdrop-blur-xl rounded-3xl p-8 border border-rose-200/50">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 mb-2">
                    98%
                  </div>
                  <p className="text-gray-600">Satisfacción</p>
                </div>
                <div className="text-center bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-xl rounded-3xl p-8 border border-purple-200/50">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 mb-2">
                    5⭐
                  </div>
                  <p className="text-gray-600">Calificación Promedio</p>
                </div>
              </div>

              {/* Testimonios */}
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`group bg-gradient-to-br from-white/70 via-purple-50/50 to-rose-50/70 backdrop-blur-xl p-8 rounded-3xl border border-purple-200/50 hover:border-rose-300/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                      index % 2 === 0 ? 'md:translate-y-8' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-rose-100/30 to-purple-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
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
                      <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 italic text-center group-hover:text-gray-700 transition-colors duration-300">
                        &quot;{testimonial.text}&quot;
                      </blockquote>
                      
                      {/* Información del cliente */}
                      <div className="text-center border-t border-purple-200/30 pt-6">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600 font-bold text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                          <span>📍</span> {testimonial.location}
                        </p>
                      </div>
                      
                      {/* Decoración */}
                      <div className="absolute top-4 left-4 text-6xl text-purple-300/20 group-hover:text-purple-400/30 transition-colors duration-300">
                        &quot;
                      </div>
                      <div className="absolute bottom-4 right-4 text-6xl text-rose-300/20 group-hover:text-rose-400/30 transition-colors duration-300 rotate-180">
                        &quot;
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