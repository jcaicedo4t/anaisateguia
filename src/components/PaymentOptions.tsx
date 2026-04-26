'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PaymentOptions() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>('paypal');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className={`bg-card/60 backdrop-blur-xl rounded-2xl p-8 border border-border transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl font-bold mb-4 text-gold">Pago Exitoso</h2>
          <p className="text-foreground/60 mb-8">Tu consulta ha sido programada. Recibirás confirmación por WhatsApp.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gold text-background px-8 py-3 rounded-full hover:bg-gold-light transition-all duration-300 font-serif"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card/60 backdrop-blur-xl rounded-2xl p-8 border border-border transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <h2 className="font-serif text-2xl font-bold mb-6 text-gold">Método de Pago</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-8">
          {/* PayPal */}
          <div 
            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPayment === 'paypal' ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/30'}`}
            onClick={() => handlePaymentSelect('paypal')}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'paypal' ? 'border-gold' : 'border-foreground/30'}`}>
                {selectedPayment === 'paypal' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 relative bg-foreground/10 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="#0070BA"></circle>
                    <path d="M32.3305 18.0977C32.3082 18.24 32.2828 18.3856 32.2542 18.5351C31.2704 23.5861 27.9046 25.331 23.606 25.331H21.4173C20.8916 25.331 20.4486 25.7127 20.3667 26.2313L19.2461 33.3381L18.9288 35.3527C18.8755 35.693 19.1379 36 19.4815 36H23.3634C23.8231 36 24.2136 35.666 24.286 35.2127L24.3241 35.0154L25.055 30.3772L25.1019 30.1227C25.1735 29.6678 25.5648 29.3338 26.0245 29.3338H26.6051C30.3661 29.3338 33.3103 27.8068 34.1708 23.388C34.5303 21.5421 34.3442 20.0008 33.393 18.9168C33.1051 18.59 32.748 18.3188 32.3305 18.0977Z" fill="white" fillOpacity="0.6"></path>
                    <path d="M21.6461 18.1231C21.6946 17.8105 21.895 17.5552 22.1646 17.4264C22.2879 17.3675 22.4239 17.3349 22.5678 17.3349H28.4149C29.1077 17.3349 29.7542 17.3803 30.3444 17.4757C30.513 17.5027 30.6768 17.5338 30.8367 17.5687C30.9957 17.6045 31.1508 17.6443 31.3011 17.688C31.3759 17.7103 31.4498 17.7334 31.5222 17.7564C31.8125 17.8527 32.0821 17.9664 32.331 18.0976C32.6237 16.231 32.3287 14.9601 31.3194 13.8093C30.2068 12.5424 28.1986 12 25.629 12H18.169C17.6441 12 17.1963 12.3817 17.1152 12.9011L14.0079 32.5969C13.9467 32.9866 14.2473 33.3381 14.6415 33.3381H19.2454L20.402 26.0013L21.6461 18.1231Z" fill="white"></path>
                  </svg>
                </div>
                <span className="font-medium text-foreground">PayPal</span>
              </div>
            </div>
          </div>
          
          {/* PSE */}
          <div 
            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPayment === 'pse' ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/30'}`}
            onClick={() => handlePaymentSelect('pse')}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'pse' ? 'border-gold' : 'border-foreground/30'}`}>
                {selectedPayment === 'pse' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Image src="/pse.png" alt="Logo PSE" width={40} height={40} className="rounded-lg"/>
                <span className="font-medium text-foreground">PSE</span>
              </div>
            </div>
            
            {selectedPayment === 'pse' && (
              <div className="mt-4 pl-8">
                <label className="block text-sm text-foreground/60 mb-2">Selecciona tu banco</label>
                <select className="w-full p-3 bg-card border border-border rounded-lg focus:outline-none focus:border-gold text-foreground">
                  <option value="">Seleccionar banco</option>
                  <option value="bancolombia">Bancolombia</option>
                  <option value="davivienda">Davivienda</option>
                  <option value="bbva">BBVA</option>
                  <option value="bogota">Banco de Bogotá</option>
                </select>
              </div>
            )}
          </div>
          
          {/* Bancolombia */}
          <div 
            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPayment === 'bancolombia' ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/30'}`}
            onClick={() => handlePaymentSelect('bancolombia')}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'bancolombia' ? 'border-gold' : 'border-foreground/30'}`}>
                {selectedPayment === 'bancolombia' && (
                  <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Image src="/bancolombia.png" alt="Logo Bancolombia" width={40} height={40} className="rounded-lg"/>
                <span className="font-medium text-foreground">Bancolombia</span>
              </div>
            </div>
            
            {selectedPayment === 'bancolombia' && (
              <div className="mt-4 pl-8 space-y-4">
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Número de cuenta</label>
                  <div className="flex items-center p-3 bg-muted rounded-lg">
                    <span className="text-foreground/70 select-none">1234-5678-9012-3456</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Referencia de pago</label>
                  <div className="flex items-center p-3 bg-muted rounded-lg">
                    <span className="text-foreground/70 select-none">REF-12345678</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isProcessing}
          className={`w-full py-4 rounded-full font-serif tracking-wide transition-all duration-300 ${
            isProcessing 
              ? 'bg-foreground/20 cursor-not-allowed text-foreground/40' 
              : 'bg-gold text-background hover:bg-gold-light shadow-[0_0_20px_rgba(201,166,72,0.3)]'
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </span>
          ) : (
            'Realizar Pago'
          )}
        </button>
      </form>
    </div>
  );
}
