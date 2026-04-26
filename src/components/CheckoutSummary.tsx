'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CheckoutSummary() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cartItems, updateQuantity, removeFromCart, subtotal, discount, total } = useCart();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`bg-card/60 backdrop-blur-xl rounded-2xl p-8 border border-border transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <h2 className="font-serif text-2xl font-bold mb-6 text-gold">Resumen de Compra</h2>
      
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between border-b border-border pb-4">
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-foreground/50">{item.description}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-card border border-border text-gold hover:border-gold/50 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-foreground">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-card border border-border text-gold hover:border-gold/50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-foreground">${item.price * item.quantity}</div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-400 hover:text-red-300 transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-foreground/60">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-foreground/60">
              <span>Descuento</span>
              <span className="text-green-400">-${discount}</span>
            </div>
            <div className="w-full h-px bg-border my-4"></div>
            <div className="flex justify-between font-bold text-lg">
              <span className="text-foreground">Total</span>
              <span className="text-gold">${total}</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <Link href="/" className="text-gold hover:text-gold-light transition-colors flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Continuar comprando
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-gold/30 text-5xl mb-4">☾</div>
          <p className="text-foreground/50 mb-6">Tu carrito está vacío</p>
          <Link href="/" className="inline-block bg-gold text-background px-6 py-3 rounded-full hover:bg-gold-light transition-all duration-300 font-serif">
            Explorar servicios
          </Link>
        </div>
      )}
    </div>
  );
}
