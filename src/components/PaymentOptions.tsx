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
    
    // Simulación de procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className={`bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-purple-200/50 transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">¡Pago Exitoso!</h2>
          <p className="text-black mb-8">Tu consulta ha sido programada. Recibirás un correo electrónico con los detalles.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-purple-200/50 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <h2 className="text-2xl font-bold mb-6 text-black">Método de Pago</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-8">
          {/* PayPal */}
          <div 
            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPayment === 'paypal' ? 'border-purple-400 bg-purple-50/50' : 'border-gray-200 hover:border-purple-200'}`}
            onClick={() => handlePaymentSelect('paypal')}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'paypal' ? 'border-purple-500' : 'border-gray-300'}">
                {selectedPayment === 'paypal' && (
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 relative">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#0070BA"></circle> <path d="M32.3305 18.0977C32.3082 18.24 32.2828 18.3856 32.2542 18.5351C31.2704 23.5861 27.9046 25.331 23.606 25.331H21.4173C20.8916 25.331 20.4486 25.7127 20.3667 26.2313L19.2461 33.3381L18.9288 35.3527C18.8755 35.693 19.1379 36 19.4815 36H23.3634C23.8231 36 24.2136 35.666 24.286 35.2127L24.3241 35.0154L25.055 30.3772L25.1019 30.1227C25.1735 29.6678 25.5648 29.3338 26.0245 29.3338H26.6051C30.3661 29.3338 33.3103 27.8068 34.1708 23.388C34.5303 21.5421 34.3442 20.0008 33.393 18.9168C33.1051 18.59 32.748 18.3188 32.3305 18.0977Z" fill="white" fillOpacity="0.6"></path> <path d="M31.3009 17.6871C31.1506 17.6434 30.9955 17.6036 30.8364 17.5678C30.6766 17.5328 30.5127 17.5018 30.3441 17.4748C29.754 17.3793 29.1074 17.334 28.4147 17.334H22.5676C22.4237 17.334 22.2869 17.3666 22.1644 17.4254C21.8948 17.5551 21.6944 17.8104 21.6459 18.1229L20.402 26.0013L20.3662 26.2311C20.4481 25.7126 20.8911 25.3308 21.4168 25.3308H23.6055C27.9041 25.3308 31.2699 23.5851 32.2537 18.5349C32.2831 18.3854 32.3078 18.2398 32.33 18.0975C32.0811 17.9655 31.8115 17.8525 31.5212 17.7563C31.4496 17.7324 31.3757 17.7094 31.3009 17.6871Z" fill="white" fillOpacity="0.8"></path> <path d="M21.6461 18.1231C21.6946 17.8105 21.895 17.5552 22.1646 17.4264C22.2879 17.3675 22.4239 17.3349 22.5678 17.3349H28.4149C29.1077 17.3349 29.7542 17.3803 30.3444 17.4757C30.513 17.5027 30.6768 17.5338 30.8367 17.5687C30.9957 17.6045 31.1508 17.6443 31.3011 17.688C31.3759 17.7103 31.4498 17.7334 31.5222 17.7564C31.8125 17.8527 32.0821 17.9664 32.331 18.0976C32.6237 16.231 32.3287 14.9601 31.3194 13.8093C30.2068 12.5424 28.1986 12 25.629 12H18.169C17.6441 12 17.1963 12.3817 17.1152 12.9011L14.0079 32.5969C13.9467 32.9866 14.2473 33.3381 14.6402 33.3381H19.2458L20.4022 26.0014L21.6461 18.1231Z" fill="white"></path> </g></svg>
                </div>
                <span className="font-medium text-black">PayPal</span>
              </div>
            </div>
          </div>
          
          {/* PSE */}
          <div 
            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPayment === 'pse' ? 'border-purple-400 bg-purple-50/50' : 'border-gray-200 hover:border-purple-200'}`}
            onClick={() => handlePaymentSelect('pse')}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'pse' ? 'border-purple-500' : 'border-gray-300'}">
                {selectedPayment === 'pse' && (
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
           <Image src={
            "/pse.png"
           }
           alt="Logo PSE"
           width={40}
           height={40}/>
             <span className="font-medium text-black">Pse</span>
              </div>
            </div>
            
            {selectedPayment === 'pse' && (
              <div className="mt-4 pl-9">
                <label className="block text-sm text-black mb-2">Selecciona tu banco</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-black">
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
            className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPayment === 'bancolombia' ? 'border-purple-400 bg-purple-50/50' : 'border-gray-200 hover:border-purple-200'}`}
            onClick={() => handlePaymentSelect('bancolombia')}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPayment === 'bancolombia' ? 'border-purple-500' : 'border-gray-300'}">
                {selectedPayment === 'bancolombia' && (
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                )}
              </div>
              <div className="flex items-center gap-2">
                 <Image src={
            "/bancolombia.png"
           }
           alt="Logo PSE"
           width={40}
           height={40}/>
                <span className="font-medium text-black">Bancolombia</span>
              </div>
            </div>
            
            {selectedPayment === 'bancolombia' && (
              <div className="mt-4 pl-9 space-y-4">
                <div>
                  <label className="block text-sm text-black mb-2">Número de cuenta</label>
                  <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                    <span className="text-black select-none">1234-5678-9012-3456</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-black mb-2">Referencia de pago</label>
                  <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                    <span className="text-black select-none">REF-12345678</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isProcessing}
          className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-pink-500/25 cursor-pointer'}`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </span>
          ) : (
            <>
              <span className="relative z-10">Realizar Pago</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          )}
        </button>
      </form>
    </div>
  );
}