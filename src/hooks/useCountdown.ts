// hooks/useCountdown.ts
import { useEffect, useState } from 'react';

export function useCountdown(targetDate: Date) {
  const getTimeLeft = () => {
    const now = Date.now();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      return {
        totalMs: 0,
        days: 0,
        hours: 0,
        minutes: 0,
      };
    }

    return {
      totalMs: distance,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60_000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
