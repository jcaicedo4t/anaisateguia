'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { cartItems } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
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
        className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:border-gold/50 transition-all duration-200 relative group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-gold group-hover:text-gold-light transition-all duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`} 
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
        <div className={`absolute -top-1 -right-1 bg-gold text-background text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
          {itemCount}
        </div>
      )}
    </div>
  );
}
