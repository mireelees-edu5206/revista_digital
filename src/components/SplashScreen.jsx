import React, { useEffect, useState } from 'react';

const BookIcon = () => (
  <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#e0e5ec' }}>
      <div className="text-center" style={{ animation: 'splash 2s ease-in-out' }}>
        <div className="mb-6 flex justify-center">
          <div className="rounded-full p-8" style={{ 
            backgroundColor: '#e0e5ec',
            borderRadius: '50%',
            boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
            padding: '2rem'
          }}>
            <BookIcon />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Revista Digital</h1>
        <p className="text-gray-600 text-lg">Cargando contenido...</p>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;