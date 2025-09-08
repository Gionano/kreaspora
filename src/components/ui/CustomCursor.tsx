import React from 'react';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  isLoaded: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition, isLoaded }) => {
  return (
    <div 
      className="fixed w-6 h-6 bg-gradient-to-r from-teal-400 to-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: `scale(${isLoaded ? 1 : 0})`
      }}
    />
  );
};

export default CustomCursor;
