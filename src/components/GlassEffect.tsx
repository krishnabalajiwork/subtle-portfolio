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
        left: mousePosition.x - 30,
        top: mousePosition.y - 30,
        width: '60px',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(15px)',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.15)',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Inner glow effect */}
      <div
        className="absolute inset-2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Subtle ring effect */}
      <div
        className="absolute inset-4 rounded-full border border-white/30"
        style={{
          backdropFilter: 'blur(5px)',
        }}
      />
    </div>
  );
};

export default GlassEffect;