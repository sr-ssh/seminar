import { useState, useEffect, useCallback } from 'react';

interface CountdownTime {
  minutes: number;
  seconds: number;
}

interface UseCountdown {
  time: CountdownTime;
  reset: (newTimeInSeconds?: number) => void;
}

function useCountdown(startTimeInSeconds: number): UseCountdown {
  const [timeLeft, setTimeLeft] = useState<number>(startTimeInSeconds);

  useEffect(() => {
    // Exit early when we reach 0
    if (timeLeft <= 0) {
      return;
    }

    // Save intervalId to clear the interval when the
    // component re-renders or unmounts
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Reset function to reset or set a new countdown time
  const reset = useCallback((newTimeInSeconds: number = startTimeInSeconds) => {
    setTimeLeft(newTimeInSeconds);
  }, [startTimeInSeconds]);

  // Compute minutes and seconds from timeLeft
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return { time: { minutes, seconds }, reset };
}

export default useCountdown;