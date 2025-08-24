import { useState, useEffect } from 'react';

const GlassEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x - 35,
        top: mousePosition.y - 35,
        width: '70px',
        height: '70px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Inner highlight */}
      <div
        className="absolute inset-1 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
        }}
      />
      
      {/* Center dot */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.6)',
          boxShadow: '0 0 4px rgba(255, 255, 255, 0.4)',
        }}
      />
    </div>
  );
};

export default GlassEffect;