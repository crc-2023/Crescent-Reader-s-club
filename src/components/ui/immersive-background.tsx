import { ReactNode, useEffect, useRef } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

interface ImmersiveBackgroundProps {
  children: ReactNode;
  className?: string;
  height?: string;
  overlay?: 'dark' | 'light' | 'none';
}

export default function ImmersiveBackground({ 
  children, 
  className = '', 
  height = 'min-h-[50vh]',
  overlay = 'dark'
}: ImmersiveBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        backgroundRef.current.style.transform = `translate3d(0, ${parallax}px, 0) scale(1.1)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const moveX = (clientX - innerWidth / 2) * 0.01;
        const moveY = (clientY - innerHeight / 2) * 0.01;
        
        mouseRef.current = { x: moveX, y: moveY };
        
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        
        backgroundRef.current.style.transform = `translate3d(${moveX}px, ${parallax + moveY}px, 0) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const overlayClasses = {
    dark: 'hero-gradient opacity-90',
    light: 'bg-gradient-to-b from-white/80 via-white/60 to-white/80',
    none: ''
  };

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with Parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: 'translate3d(0, 0, 0) scale(1.1)',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {overlay !== 'none' && (
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        )}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/10 animate-float" />
        <div 
          className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-secondary/20 animate-float" 
          style={{ animationDelay: '1s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary/15 animate-float" 
          style={{ animationDelay: '2s' }} 
        />
        <div 
          className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-primary/10 animate-float" 
          style={{ animationDelay: '3s' }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}