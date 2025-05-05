import React, { useEffect, useState } from 'react';

const MatchTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0); 
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => {
        if (prev >= 90 * 60) {
          clearInterval(timer);
          return 90 * 60; 
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="text-4xl font-bold text-center text-white mt-10">
      First Half: {formatTime(elapsedTime)}
    </div>
  );
};

export default MatchTimer;
