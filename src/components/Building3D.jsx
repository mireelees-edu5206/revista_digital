import React from 'react';

const Building3D = () => {
  return (
    <div className="building-container" style={{
      perspective: '1000px',
      width: '200px',
      height: '300px',
      position: 'relative',
      transformStyle: 'preserve-3d',
      animation: 'rotateBuilding 20s infinite linear'
    }}>
      <div className="building" style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(-10deg) rotateY(-20deg)'
      }}>
        {/* Front Face */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '300px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          transform: 'translateZ(50px)',
          borderRadius: '8px',
          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Windows */}
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              width: '30px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '4px',
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.2)',
              animation: `windowGlow ${2 + Math.random()}s infinite alternate`
            }} />
          ))}
        </div>

        {/* Back Face */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '300px',
          background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
          transform: 'translateZ(-50px) rotateY(180deg)',
          borderRadius: '8px',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              width: '30px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '4px'
            }} />
          ))}
        </div>

        {/* Right Face */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '300px',
          background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
          transform: 'rotateY(90deg) translateZ(100px)',
          borderRadius: '8px',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              width: '25px',
              height: '35px',
              background: 'rgba(255, 255, 255, 0.25)',
              borderRadius: '4px'
            }} />
          ))}
        </div>

        {/* Left Face */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '300px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          transform: 'rotateY(-90deg) translateZ(100px)',
          borderRadius: '8px',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              width: '25px',
              height: '35px',
              background: 'rgba(255, 255, 255, 0.25)',
              borderRadius: '4px'
            }} />
          ))}
        </div>

        {/* Top Face */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '100px',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
          transform: 'rotateX(90deg) translateZ(50px)',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
        }} />

        {/* Bottom Face */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '100px',
          background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
          transform: 'rotateX(-90deg) translateZ(250px)',
          borderRadius: '8px'
        }} />
      </div>

      <style jsx>{`
        @keyframes rotateBuilding {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes windowGlow {
          0% { background: rgba(255, 255, 255, 0.3); }
          100% { background: rgba(255, 255, 255, 0.6); }
        }

        .building-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Building3D;