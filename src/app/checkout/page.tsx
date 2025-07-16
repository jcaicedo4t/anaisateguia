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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-600 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Finalizar Compra
          </h1>
          
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