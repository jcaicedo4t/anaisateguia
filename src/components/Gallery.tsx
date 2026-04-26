'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    description: 'Mi espacio de calma y fe. Te muestro cómo preparo el altar dedicado al Dr. José Gregorio Hernández con respeto, intención y mucho corazón.',
    url: 'https://www.tiktok.com/@anaisateguia/video/7513050770359487750'
  },
  {
    id: '7511212059921501446',
    title: 'Oración Poderosa al Doctor José Gregorio Hernández',
    description: 'Oración poderosa para la salud y el bienestar. Eleva tu fe y conéctate con su energía sanadora.',
    url: 'https://www.tiktok.com/@anaisateguia/video/7511212059921501446'
  },
  {
    id: '7510070257462021382',
    title: 'Oración de las Tres Potencias: Guía y Protección',
    description: 'Una plegaria poderosa para atraer guía, protección y claridad espiritual. Que la luz te acompañe en cada paso.',
    url: 'https://www.tiktok.com/@anaisateguia/video/7510070257462021382'
  },
  {
    id: '7515647552801361158',
    title: 'Ritual para Reconectar con Esa Persona Especial',
    description: '¿Sientes que esa persona se ha alejado? Este ritual activa dulcemente la conexión emocional y armoniza los sentimientos.',
    url: 'https://www.tiktok.com/@anaisateguia/video/7515647552801361158'
  },
  {
    id: '7503655679643897143',
    title: 'Baño Espiritual para Abrir Caminos',
    description: '¿Sientes que tus caminos están bloqueados? Este baño espiritual libera energías estancadas y atrae prosperidad.',
    url: 'https://www.tiktok.com/@anaisateguia/video/7503655679643897143'
  },
  {
    id: '7512299322852052280',
    title: 'Ritual con Girasol y Cerveza para Abundancia',
    description: 'Poderoso baño espiritual para atraer abundancia y abrir caminos económicos. Sencillo pero muy efectivo con fe e intención.',
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
      className={`group relative bg-card/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-border transition-all duration-500 transform cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:border-gold/50 hover:shadow-[0_0_40px_rgba(201,166,72,0.15)]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      <div className="relative">
        <div className="aspect-[9/12] bg-muted relative overflow-hidden">
          {thumbnail && !thumbnailLoading ? (
            <>
              <Image 
                src={thumbnail} 
                alt={video.title}
                fill
                className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                onError={() => setThumbnail(null)}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-smoke to-background">
              {thumbnailLoading ? (
                <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin"></div>
              ) : (
                <span className="text-gold/40 text-4xl">☾</span>
              )}
            </div>
          )}
          
          {/* Play button overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <svg className="w-6 h-6 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          
          {/* TikTok badge */}
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs">
            <svg className="w-3.5 h-3.5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-foreground/70">TikTok</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-gold transition-colors duration-300">
            {video.title}
          </h3>
          <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2">
            {video.description}
          </p>
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
    <section id="galeria" className="relative py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/3 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <p className="text-gold/60 text-sm tracking-[0.4em] uppercase mb-4 font-serif">Contenido Exclusivo</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="shimmer-gold">Galería Espiritual</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Descubre rituales, oraciones y sabiduría ancestral que transformará tu vida
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex bg-card/50 border border-border rounded-full p-1.5">
            {[
              { id: 'videos', label: 'Videos', icon: '◎' },
              { id: 'testimonios', label: 'Testimonios', icon: '✦' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-serif text-sm tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gold text-background'
                    : 'text-foreground/60 hover:text-gold'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'videos' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          ) : (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { value: '500+', label: 'Consultas Realizadas' },
                  { value: '98%', label: 'Satisfacción' },
                  { value: '5.0', label: 'Calificación Promedio' }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="text-center bg-card/40 border border-border rounded-2xl p-8"
                  >
                    <div className="text-4xl font-serif font-bold text-gold mb-2">
                      {stat.value}
                    </div>
                    <p className="text-foreground/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="group bg-card/40 border border-border hover:border-gold/30 rounded-2xl p-8 transition-all duration-500"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold text-sm">★</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-foreground/70 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    
                    {/* Author */}
                    <div className="border-t border-border pt-6">
                      <p className="font-serif font-semibold text-gold">
                        {testimonial.name}
                      </p>
                      <p className="text-foreground/40 text-sm mt-1">
                        {testimonial.location}
                      </p>
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
