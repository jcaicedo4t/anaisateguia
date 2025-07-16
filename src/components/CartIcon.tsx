'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { cartItems } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Total de items en el carrito
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  // Asegurarse de que el componente solo se renderice en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Animar el icono cuando cambia la cantidad de items
  useEffect(() => {
    if (isClient && itemCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [itemCount, isClient]);
  
  if (!isClient) return null;
  
  return (
    <div className="relative">
      <a 
        href="/checkout" 
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white transition-all duration-200 relative"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-6 w-6 text-purple-600 transition-transform duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
      </a>
      
      {itemCount > 0 && (
        <div className={`absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
          {itemCount}
        </div>
      )}
    </div>
  );
}