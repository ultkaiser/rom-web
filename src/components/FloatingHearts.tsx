import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 15 + Math.random() * 10,
          delay: Math.random() * 20,
          size: 16 + Math.random() * 16
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            bottom: '-50px'
          }}
        >
          <Heart
            className="text-pink-300 fill-current"
            style={{ width: `${heart.size}px`, height: `${heart.size}px` }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;