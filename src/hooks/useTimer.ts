import { useEffect, useRef, useState } from 'react';

export const useTimer = (
  initialSeconds: number,
  active: boolean,
  onExpire: () => void
) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const expiredRef = useRef(false);

  useEffect(() => {
    setTimeLeft(initialSeconds);
    expiredRef.current = false;
  }, [initialSeconds]);

  useEffect(() => {
    if (!active) return;
    if (timeLeft <= 0) {
      if (!expiredRef.current) {
        expiredRef.current = true;
        onExpire();
      }
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [active, timeLeft, onExpire]);

  const reset = () => {
    setTimeLeft(initialSeconds);
    expiredRef.current = false;
  };

  return { timeLeft, reset };
};
