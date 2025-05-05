import React, { useEffect, useRef, useState } from 'react';
import pitch from '../assets/pitch.png';

const Pitch = () => {
  const pitchRef = useRef(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const moveBall = () => {
    if (pitchRef.current) {
      const container = pitchRef.current.getBoundingClientRect();
      const ballSize = 20; 
      const maxLeft = container.width - ballSize;
      const maxTop = container.height - ballSize;

      const left = Math.floor(Math.random() * maxLeft);
      const top = Math.floor(Math.random() * maxTop);
      setPosition({ left, top });
    }
  };

  useEffect(() => {
    moveBall();
    const interval = setInterval(moveBall, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-2">
      <div
        ref={pitchRef}
        className="relative w-full max-w-[100%] mx-auto h-[50vh] sm:h-[60vh] md:h-[80vh]"
      >
        <img
          src={pitch}
          alt="Pitch"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div
          className="absolute bg-white border border-white/10 rounded-full w-5 h-5 transition-all duration-300 ease-in-out"
          style={{
            left: `${position.left}px`,
            top: `${position.top}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Pitch;
