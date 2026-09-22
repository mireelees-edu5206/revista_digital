import React from 'react';

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Navigation = ({ currentView, setCurrentView, currentArticle, setCurrentArticle }) => {
  const views = [
    { id: 'home', label: 'Inicio', icon: HomeIcon },
    { id: 'articles', label: 'Artículos', icon: FileTextIcon },
    { id: 'authors', label: 'Autores', icon: UsersIcon },
  ];

  return (
    <nav className="p-4 mb-6" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '1rem'
    }}>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => {
                setCurrentView(view.id);
                setCurrentArticle(null);
              }}
              className={`jelly-button flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                currentView === view.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
              style={{
                backgroundColor: currentView === view.id ? '#9333ea' : '#e0e5ec',
                boxShadow: currentView === view.id 
                  ? '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff'
                  : '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
              }}
            >
              <view.icon />
              <span className="font-medium">{view.label}</span>
            </button>
          ))}
        </div>
        
        {currentArticle && (
          <button
            onClick={() => setCurrentArticle(null)}
            className="jelly-button flex items-center space-x-2 px-4 py-2 rounded-xl text-white hover:bg-red-600"
            style={{
              backgroundColor: '#ef4444',
              boxShadow: '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'
            }}
          >
            <XIcon />
            <span className="font-medium">Cerrar</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;