import React from 'react';

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Article2 = () => {
  const employeePrinciples = [
    { 
      icon: ShieldIcon, 
      title: 'Responsabilidad', 
      description: 'Usar correctamente los recursos de la institución',
      color: 'blue'
    },
    { 
      icon: LockIcon, 
      title: 'Confidencialidad', 
      description: 'Proteger la información privada y sensible',
      color: 'green'
    },
    { 
      icon: HeartIcon, 
      title: 'Respeto', 
      description: 'Tratar adecuadamente a compañeros y usuarios',
      color: 'pink'
    },
    { 
      icon: EyeIcon, 
      title: 'Honestidad', 
      description: 'Actuar con transparencia en todas las acciones',
      color: 'yellow'
    },
    { 
      icon: AlertCircleIcon, 
      title: 'Seguridad', 
      description: 'Cuidar contraseñas y equipos de trabajo',
      color: 'red'
    },
  ];

  const userPrinciples = [
    { 
      icon: LockIcon, 
      title: 'Proteger privacidad personal', 
      description: 'Mantener seguros los datos personales',
      color: 'blue'
    },
    { 
      icon: GlobeIcon, 
      title: 'Respeto digital', 
      description: 'Evitar acosos o insultos en línea',
      color: 'green'
    },
    { 
      icon: CheckCircleIcon, 
      title: 'Uso responsable', 
      description: 'Utilizar la tecnología de manera ética',
      color: 'pink'
    },
    { 
      icon: ShieldIcon, 
      title: 'Seguridad personal', 
      description: 'Usar contraseñas seguras y autenticación',
      color: 'yellow'
    },
    { 
      icon: FileTextIcon, 
      title: 'Honestidad', 
      description: 'Evitar plagio y suplantación de identidad',
      color: 'red'
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    pink: 'bg-pink-100 text-pink-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700',
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center" style={{
        backgroundColor: '#e0e5ec',
        borderRadius: '1rem',
        boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        padding: '1.5rem'
      }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Principios éticos de empleados y usuarios en el uso de la tecnología</h1>
        <div className="mb-4">
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
            Universidad Tecnológica del Valle de Toluca (UTVT)
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {['Ximena Cordero Montoya', 'Ana Karen Miranda Huerta', 'Manuel Rodríguez Calderón', 
            'Brayan Eduardo Heras Mireles', 'Diego Álvaro Arriaga Perez', 'Jael Sebastián Segura Segura', 
            'Keira Morales Piña'].map((author, index) => (
            <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              {author}
            </span>
          ))}
        </div>
      </div>

      {/* Employee Principles */}
      <div style={{
        backgroundColor: '#e0e5ec',
        borderRadius: '1rem',
        boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        padding: '1.5rem'
      }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2 text-purple-600"><UsersIcon /></span>
          Principios éticos de los empleados
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Los principios éticos de los empleados se basan en los siguientes fundamentos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {employeePrinciples.map((principle, index) => (
            <div
              key={index}
              className="jelly-card p-5 cursor-pointer hover:bg-purple-50 transition-colors"
              style={{
                backgroundColor: '#e0e5ec',
                borderRadius: '1rem',
                boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
                padding: '1.25rem'
              }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${colorClasses[principle.color]}`}>
                <div className="text-2xl">
                  <principle.icon />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-center">{principle.title}</h3>
              <p className="text-sm text-gray-600 text-center">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Principles */}
      <div style={{
        backgroundColor: '#e0e5ec',
        borderRadius: '1rem',
        boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        padding: '1.5rem'
      }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-2 text-purple-600"><GlobeIcon /></span>
          Principios éticos de los usuarios
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Los usuarios deben seguir estos principios éticos en su interacción con la tecnología:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userPrinciples.map((principle, index) => (
            <div
              key={index}
              className="jelly-card p-5 cursor-pointer hover:bg-purple-100/50 transition-colors"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '1rem'
              }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${colorClasses[principle.color]}`}>
                <div className="text-2xl">
                  <principle.icon />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-center">{principle.title}</h3>
              <p className="text-sm text-gray-600 text-center">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center" style={{
        backgroundColor: '#e0e5ec',
        borderRadius: '1rem',
        boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        padding: '1.5rem'
      }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <span className="mr-2 text-purple-600"><CheckCircleIcon /></span>
          Importancia de los principios éticos
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          El cumplimiento de estos principios éticos tanto por empleados como por usuarios es fundamental 
          para crear un entorno digital seguro, respetuoso y productivo que beneficie a toda la comunidad 
          académica y social de la UTVT.
        </p>
      </div>
    </div>
  );
};

export default Article2;