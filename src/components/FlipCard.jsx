import React, { useState } from 'react';

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const FlipCard = ({ name, description, documentUrl, onOpenDocument }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-80 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 transform-style-3d"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s'
        }}
      >
        {/* Front */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center p-6"
          style={{
            backgroundColor: '#e0e5ec',
            boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
            backfaceVisibility: 'hidden',
            borderRadius: '1rem'
          }}
        >
          <div className="w-20 h-20 rounded-full mb-4 flex items-center justify-center" style={{
            backgroundColor: '#9333ea',
            boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.1)'
          }}>
            <span className="text-3xl font-bold text-white">
              {name.charAt(0)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{name}</h3>
          <p className="text-sm text-gray-600 text-center">Haz clic para ver más información</p>
        </div>

        {/* Back */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center p-6"
          style={{
            backgroundColor: '#e0e5ec',
            boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '1rem'
          }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{name}</h3>
          <p className="text-sm text-gray-600 text-center mb-4 flex-1 overflow-auto">
            {description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDocument(documentUrl);
            }}
            className="flex items-center space-x-2 px-4 py-2 text-white rounded-xl hover:bg-purple-700 transition-colors"
            style={{ backgroundColor: '#9333ea' }}
          >
            <ExternalLinkIcon />
            <span>Abrir Documento</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;