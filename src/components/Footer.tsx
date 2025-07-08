import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-t from-purple-50 to-rose-50 text-gray-800 py-12 border-t border-purple-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600">✨ Anaisa Te Guía</h3>
            <p className="text-gray-600 mb-4">
              Guía espiritual y consejera psíquica profesional. Ayudando a las personas a encontrar
              su camino y propósito en la vida.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600">Contacto</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
                  href="https://wa.me/+TUNUMERO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rose-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">📱</span> WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@TUUSUARIO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rose-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">🎵</span> TikTok
                </a>
              </li>
              <li>
                <a 
                  href="mailto:tucorreo@ejemplo.com"
                  className="hover:text-rose-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">✉️</span> Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#servicios" className="hover:text-rose-500 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-rose-500 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="hover:text-rose-500 transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Anaisa Te Guía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}