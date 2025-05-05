import React, { useEffect, useState } from 'react';

const MatchTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0); // Track elapsed time
  const [homeScore, setHomeScore] = useState(0); // Track home team score
  const [awayScore, setAwayScore] = useState(2); // Track away team score (example)

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => {
        if (prev >= 90 * 60) {
          clearInterval(timer);
          return 90 * 60; // End of match (90 minutes)
        }
        return prev + 1; // Increment by 1 second
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getHalf = () => {
    return elapsedTime < 45 * 60 ? 'First Half' : 'Second Half';
  };

  return (
    <div className="text-center">
      <div className="text-xl">
        <p className="text-blue-700 font-bold text-3xl">
          Man U <span className="text-red-700">{homeScore} : {awayScore}</span> Ars
        </p>
      </div>
      <div className="text-xl sm:text-xl md:text-xl text-center text-green-600 mt-4">
        {getHalf()}: {formatTime(elapsedTime)}
      </div>
    </div>
  );
};

export default MatchTimer;
