import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-03-012T00:00:00");

export function getCountdownToMarch112026(now = new Date()) {
  const millisecondsRemaining = Math.max(TARGET_DATE.getTime() - now.getTime(), 0);
  const totalSeconds = Math.floor(millisecondsRemaining / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return {
    milliseconds: millisecondsRemaining,
    days,
    hours,
    minutes,
    seconds,
    isComplete: millisecondsRemaining === 0,
  };
}

export function useCountdownToMarch112026(intervalMs = 1000) {
  const [countdown, setCountdown] = useState(() => getCountdownToMarch112026());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(getCountdownToMarch112026());
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [intervalMs]);

  return countdown;
}
