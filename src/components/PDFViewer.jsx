import React, { useState, useRef, useEffect } from 'react';

const XIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ZoomInIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const PDFViewer = ({ isOpen, onClose, pdfUrl: initialPdfUrl }) => {
  const [localPdf, setLocalPdf] = useState(null);
  const [scale, setScale] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const iframeRef = useRef(null);
  
  // Cargar automáticamente el PDF de principios éticos si no se proporciona uno
  const displayPdf = localPdf || initialPdfUrl || '/documents/principios-eticos.pdf';

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setLocalPdf(url);
      setScale(1);
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleDownload = () => {
    if (displayPdf) {
      const link = document.createElement('a');
      link.href = displayPdf;
      link.download = 'documento.pdf';
      link.click();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
      <div className="w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden flex flex-col" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '1.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Header */}
        <div className="p-4 flex items-center justify-between" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '1rem 1.5rem'
        }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <FileIcon style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Visor de Documentos</h2>
              <p className="text-sm text-white/70">Visualización de PDF</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 rounded-lg px-2 py-1" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                title="Reducir zoom"
              >
                <ZoomOutIcon />
              </button>
              <span className="text-white font-medium text-sm px-2">{Math.round(scale * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                title="Aumentar zoom"
              >
                <ZoomInIcon />
              </button>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="jelly-button flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors text-white"
              title="Descargar PDF"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <DownloadIcon />
            </button>

            {/* Open in New Tab Button */}
            <button
              onClick={() => {
                if (displayPdf) {
                  window.open(displayPdf, '_blank');
                }
              }}
              className="jelly-button flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors text-white"
              title="Abrir en nueva pestaña"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <ExternalLinkIcon />
            </button>

            {/* Upload Button */}
            <label className="jelly-button flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition-colors text-white" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <UploadIcon />
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="jelly-button flex items-center justify-center w-10 h-10 rounded-lg hover:bg-red-500/80 transition-colors text-white"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              title="Cerrar"
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto p-6" style={{ backgroundColor: '#f8fafc' }}>
          {displayPdf ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div 
                className="transition-transform duration-300"
                style={{ 
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  width: '100%',
                  maxWidth: '100%'
                }}
              >
                <iframe
                  ref={iframeRef}
                  src={`${displayPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="rounded-xl shadow-2xl"
                  style={{
                    width: '100%',
                    height: '75vh',
                    border: 'none',
                    borderRadius: '1rem',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                  }}
                  title="PDF Viewer"
                  type="application/pdf"
                />
              </div>
              
              {/* Page Info */}
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                <span className="px-3 py-1 rounded-full" style={{
                  backgroundColor: '#e0e5ec',
                  boxShadow: 'inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff'
                }}>
                  Zoom: {Math.round(scale * 100)}%
                </span>
                <span className="px-3 py-1 rounded-full" style={{
                  backgroundColor: '#e0e5ec',
                  boxShadow: 'inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff'
                }}>
                  Documento: {displayPdf.split('/').pop()}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" style={{
                backgroundColor: '#e0e5ec',
                boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff'
              }}>
                <FileIcon style={{ width: '48px', height: '48px', color: '#9333ea' }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No hay PDF cargado</h3>
              <p className="text-gray-600 mb-6 text-center max-w-md">
                Haz clic en el botón de carga para seleccionar un archivo PDF de tu dispositivo
              </p>
              <label className="jelly-button flex items-center space-x-2 px-6 py-3 text-white rounded-xl cursor-pointer hover:bg-purple-700 transition-colors" style={{ backgroundColor: '#9333ea' }}>
                <UploadIcon />
                <span className="font-medium">Cargar PDF</span>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 flex items-center justify-between" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '0.75rem 1.5rem'
        }}>
          <div className="flex items-center space-x-2 text-white/70 text-sm">
            <FileIcon style={{ width: '16px', height: '16px' }} />
            <span>Visor de PDF mejorado</span>
          </div>
          <div className="flex items-center space-x-4 text-white/70 text-sm">
            <span>Usa los controles de zoom para ajustar la vista</span>
            <span>•</span>
            <span>Descarga el documento para offline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;