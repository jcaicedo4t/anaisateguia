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
    <div className={`bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-purple-200/50 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Resumen de Compra</h2>
      
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between border-b border-purple-100 pb-4">
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">${item.price * item.quantity}</div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-rose-500 hover:text-rose-600 transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Descuento</span>
              <span className="text-green-500">-${discount}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">${total}</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-purple-100">
            <Link href="/" className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Continuar comprando
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Tu carrito está vacío</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            Explorar servicios
          </Link>
        </div>
      )}
    </div>
  );
}