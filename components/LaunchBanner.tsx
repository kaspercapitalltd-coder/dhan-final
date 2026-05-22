"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function LaunchBanner() {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let intervalTimer: NodeJS.Timeout;

    if (localStorage.getItem("hideLaunchBanner") === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
      
      const endTimeStr = localStorage.getItem("launchEndTime");
      let endTime: number;

      if (!endTimeStr) {
        endTime = new Date().getTime() + 72 * 60 * 60 * 1000;
        localStorage.setItem("launchEndTime", endTime.toString());
      } else {
        endTime = parseInt(endTimeStr, 10);
        if (new Date().getTime() > endTime) {
          // Reset if expired
          endTime = new Date().getTime() + 72 * 60 * 60 * 1000;
          localStorage.setItem("launchEndTime", endTime.toString());
        }
      }

      const calculateTimeLeft = () => {
        const difference = endTime - new Date().getTime();
        if (difference > 0) {
          setTimeLeft({
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        }
      };

      calculateTimeLeft();
      intervalTimer = setInterval(calculateTimeLeft, 1000);
    }, 0);

    return () => {
      clearTimeout(timer);
      if (intervalTimer) clearInterval(intervalTimer);
    };
  }, []);

  if (!isVisible || !timeLeft) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem("hideLaunchBanner", "true");
  };

  return (
    <div className="w-full bg-accent-gold px-4 text-center hover:bg-accent-gold-dim py-2 relative flex items-center justify-center transition-all duration-300 min-h-[44px]">
      <div className="flex-1 flex items-center justify-center text-black font-bold text-[13px] tracking-wide gap-1">
        <span>
          🚀 LAUNCH OFFER — 25% OFF | Code: LAUNCH50 | ⏱{" "}
          {timeLeft.hours.toString().padStart(2, "0")}:
          {timeLeft.minutes.toString().padStart(2, "0")}:
          {timeLeft.seconds.toString().padStart(2, "0")} remaining
        </span>
      </div>
      <button
        onClick={handleClose}
        className="absolute right-4 text-black/80 hover:text-black p-1 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
