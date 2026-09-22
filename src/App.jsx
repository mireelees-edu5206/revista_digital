import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Article1 from './components/Article1';
import Article2 from './components/Article2';
import PDFViewer from './components/PDFViewer';
import FlipCard from './components/FlipCard';
import Building3D from './components/Building3D';

const BookOpenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  const openPDFViewer = (url) => {
    setPdfUrl(url);
    setIsPDFViewerOpen(true);
  };

  const closePDFViewer = () => {
    setIsPDFViewerOpen(false);
    setPdfUrl(null);
  };

  if (loading) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const renderContent = () => {
    if (currentArticle === 1) {
      return <Article1 />;
    }
    if (currentArticle === 2) {
      return <Article2 />;
    }

    switch (currentView) {
      case 'home':
        return (
          <div className="space-y-8" style={{ animation: 'slideUp 0.5s ease-out' }}>
            {/* Hero Section Landing Page */}
            <div className="text-center py-16 relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '1.5rem',
              boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
              padding: '4rem 2rem'
            }}>
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-left">
                  <div className="mb-6">
                    <h1 className="text-5xl font-bold text-white mb-4">Revista Digital Interactiva</h1>
                    <p className="text-xl text-white/90 max-w-2xl mb-8">
                      Descubre nuestros artículos sobre tecnología, comunidad y ética digital con una experiencia innovadora
                    </p>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <button
                      onClick={() => setCurrentView('articles')}
                      className="jelly-button flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                    >
                      <BookOpenIcon />
                      <span>Explorar Artículos</span>
                    </button>
                    <button
                      onClick={() => openPDFViewer('/documents/principios-eticos-original.pdf')}
                      className="jelly-button flex items-center space-x-2 px-6 py-3 bg-purple-800 text-white rounded-xl font-medium hover:bg-purple-900 transition-colors"
                    >
                      <ExternalLinkIcon />
                      <span>Visor PDF</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <Building3D />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                animation: 'jelly 3s infinite'
              }}></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                animation: 'jelly 4s infinite'
              }}></div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6" style={{
                backgroundColor: '#e0e5ec',
                borderRadius: '1rem',
                boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
                padding: '1.5rem'
              }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                  backgroundColor: '#9333ea',
                  boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2)'
                }}>
                  <StarIcon style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Contenido de Calidad</h3>
                <p className="text-gray-600">Artículos researched y escritos por expertos en tecnología y ética digital</p>
              </div>

              <div className="text-center p-6" style={{
                backgroundColor: '#e0e5ec',
                borderRadius: '1rem',
                boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
                padding: '1.5rem'
              }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                  backgroundColor: '#9333ea',
                  boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2)'
                }}>
                  <ZapIcon style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Experiencia Interactiva</h3>
                <p className="text-gray-600">Navegación fluida con animaciones y efectos visuales modernos</p>
              </div>

              <div className="text-center p-6" style={{
                backgroundColor: '#e0e5ec',
                borderRadius: '1rem',
                boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
                padding: '1.5rem'
              }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                  backgroundColor: '#9333ea',
                  boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2)'
                }}>
                  <BookOpenIcon style={{ width: '32px', height: '32px', color: 'white' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Documentos Integrados</h3>
                <p className="text-gray-600">Visor de PDF integrado para consultar documentos directamente</p>
              </div>
            </div>

            {/* Quick Access to Articles */}
            <div style={{
              backgroundColor: '#e0e5ec',
              borderRadius: '1rem',
              boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
              padding: '2rem'
            }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Artículos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  onClick={() => setCurrentArticle(1)}
                  className="jelly-card cursor-pointer hover:bg-purple-50 transition-colors p-6"
                  style={{
                    backgroundColor: '#e0e5ec',
                    borderRadius: '1rem',
                    boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
                    padding: '1.5rem'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-4" style={{
                      backgroundColor: '#9333ea',
                      boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2)'
                    }}>
                      <BookOpenIcon style={{ width: '32px', height: '32px', color: 'white' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Proyecto "Informa mi Comunidad"</h3>
                      <p className="text-gray-600 mb-4">
                        PWA intuitiva y accesible diseñada para concentrar información importante de la comunidad
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          Accesibilidad
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          Tecnología
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          Comunidad
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setCurrentArticle(2)}
                  className="jelly-card cursor-pointer hover:bg-purple-50 transition-colors p-6"
                  style={{
                    backgroundColor: '#e0e5ec',
                    borderRadius: '1rem',
                    boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
                    padding: '1.5rem'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-4" style={{
                      backgroundColor: '#9333ea',
                      boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2)'
                    }}>
                      <BookOpenIcon style={{ width: '32px', height: '32px', color: 'white' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Principios éticos en el uso de la tecnología</h3>
                      <p className="text-gray-600 mb-4">
                        Guía de principios éticos para empleados y usuarios de la UTVT
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                          Ética
                        </span>
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          Seguridad
                        </span>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                          Responsabilidad
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-8" style={{
              backgroundColor: '#e0e5ec',
              borderRadius: '1rem',
              boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
              padding: '2rem'
            }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Quieres conocer a nuestros autores?</h2>
              <button
                onClick={() => setCurrentView('authors')}
                className="jelly-button flex items-center space-x-2 px-6 py-3 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors mx-auto"
                style={{ backgroundColor: '#9333ea' }}
              >
                <span>Ver Autores</span>
              </button>
            </div>
          </div>
        );

      case 'articles':
        return (
          <div className="space-y-6" style={{ animation: 'slideUp 0.5s ease-out' }}>
            <div style={{
              backgroundColor: '#e0e5ec',
              borderRadius: '1rem',
              boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
              padding: '1.5rem'
            }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Artículos Disponibles</h2>
              <div className="space-y-4">
                <div
                  onClick={() => setCurrentArticle(1)}
                  className="jelly-card p-6 cursor-pointer hover:bg-purple-50 transition-colors"
                  style={{
                    backgroundColor: '#e0e5ec',
                    borderRadius: '1rem',
                    boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
                    padding: '1.5rem'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Artículo 1: Proyecto "Informa mi Comunidad"</h3>
                      <p className="text-gray-600">
                        Cordero Montoya Ximena, Rodríguez Calderón Manuel, Morales Piña Keyra, Miranda Huerta Ana Karen, 
                        Segura Segura Jael Sebastian, Arriaga Pérez Diego Álvaro, Brayan Eduardo Heras Mireles
                      </p>
                    </div>
                    <div className="text-3xl text-purple-600">
                      <BookOpenIcon />
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setCurrentArticle(2)}
                  className="jelly-card p-6 cursor-pointer hover:bg-purple-50 transition-colors"
                  style={{
                    backgroundColor: '#e0e5ec',
                    borderRadius: '1rem',
                    boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
                    padding: '1.5rem'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Artículo 2: Principios éticos de empleados y usuarios</h3>
                      <p className="text-gray-600">
                        Universidad Tecnológica del Valle de Toluca (UTVT)
                      </p>
                    </div>
                    <div className="text-3xl text-purple-600">
                      <BookOpenIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'authors':
        return (
          <div className="space-y-6" style={{ animation: 'slideUp 0.5s ease-out' }}>
            <div style={{
              backgroundColor: '#e0e5ec',
              borderRadius: '1rem',
              boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
              padding: '2rem'
            }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Nuestros Autores</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Conoce a los autores detrás de nuestros artículos. Haz clic en las tarjetas para ver más información y acceder a sus documentos de compromiso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FlipCard 
                  name="Cordero Montoya Ximena"
                  description="Autora del proyecto Informa mi Comunidad y colaboradora en principios éticos digitales."
                  documentUrl="/documents/autor-6-ximena.pdf"
                  onOpenDocument={openPDFViewer}
                />
                <FlipCard 
                  name="Rodríguez Calderón Manuel"
                  description="Coautor del proyecto de comunidad y experto en accesibilidad tecnológica."
                  documentUrl="/documents/autor-4-manuel.pdf"
                  onOpenDocument={openPDFViewer}
                />
                <FlipCard 
                  name="Morales Piña Keyra"
                  description="Investigadora en principios éticos y tecnología responsable."
                  documentUrl="/documents/autor-7-keyra.pdf"
                  onOpenDocument={openPDFViewer}
                />
                <FlipCard 
                  name="Miranda Huerta Ana Karen"
                  description="Especialista en diseño de interfaces accesibles y用户体验."
                  documentUrl="/documents/autor-1-ana-karen.pdf"
                  onOpenDocument={openPDFViewer}
                />
                <FlipCard 
                  name="Segura Segura Jael Sebastian"
                  description="Desarrollador de tecnologías de reconocimiento facial y voz."
                  documentUrl="/documents/autor-5-jael.pdf"
                  onOpenDocument={openPDFViewer}
                />
                <FlipCard 
                  name="Arriaga Pérez Diego Álvaro"
                  description="Experto en seguridad digital y protección de datos personales."
                  documentUrl="/documents/autor-2-diego.pdf"
                  onOpenDocument={openPDFViewer}
                />
                <FlipCard 
                  name="Brayan Eduardo Heras Mireles"
                  description="Colaborador en el proyecto de principios éticos y tecnología."
                  documentUrl="/documents/autor-3-brayan.pdf"
                  onOpenDocument={openPDFViewer}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e0e5ec' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView}
          currentArticle={currentArticle}
          setCurrentArticle={setCurrentArticle}
        />
        
        <main className="animate-fade-in">
          {renderContent()}
        </main>
      </div>

      <PDFViewer 
        isOpen={isPDFViewerOpen} 
        onClose={closePDFViewer}
        pdfUrl={pdfUrl}
      />
    </div>
  );
}

export default App;