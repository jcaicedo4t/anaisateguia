import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-background border-t border-border">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14">
                <Image 
                  src="/logo.png" 
                  alt="Anaisa Te Guía"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-gold">Anaisa</h3>
                <p className="text-xs text-gold/50 tracking-[0.3em] uppercase">Te Guía</p>
              </div>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed">
              Anaisa no predice tu futuro, te ayuda a crearlo. Guía espiritual y consejera profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-gold mb-6 tracking-wide">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#galeria', label: 'Galería' },
                { href: '#contacto', label: 'Contacto' },
                { href: '/checkout', label: 'Reservar' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-foreground/50 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-gold mb-6 tracking-wide">Servicios</h4>
            <ul className="space-y-3">
              {[
                'Lecturas Espirituales',
                'Consultas Personalizadas',
                'Guía Ancestral',
                'Rituales de Protección',
                'Abre Caminos'
              ].map((service) => (
                <li key={service}>
                  <span className="text-foreground/50 text-sm flex items-center gap-2">
                    <span className="text-gold/50">☾</span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold mb-6 tracking-wide">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.link/94krap"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/50 hover:text-gold transition-colors duration-300 text-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-foreground/70">WhatsApp</span>
                    <span className="text-xs">+57 3147115539</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@anaisateguia"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/50 hover:text-gold transition-colors duration-300 text-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-foreground/70">TikTok</span>
                    <span className="text-xs">@anaisateguia</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/40 text-sm">
              &copy; {new Date().getFullYear()} Anaisa Te Guía. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-foreground/30 text-xs">
              <span className="text-gold/40">✦</span>
              <span>Hecho con fe y amor</span>
              <span className="text-gold/40">✦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
