'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckoutSummary from '../../components/CheckoutSummary';
import PaymentOptions from '../../components/PaymentOptions';

export default function Checkout() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-gold/60 text-sm tracking-[0.4em] uppercase mb-4 font-serif">Reserva tu consulta</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              <span className="shimmer-gold">Finalizar Compra</span>
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <CheckoutSummary />
            <PaymentOptions />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
