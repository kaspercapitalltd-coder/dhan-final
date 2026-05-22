"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";

const CountUp = ({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function outQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsBar() {
  const stats = [
    { value: 1000, suffix: "+", label: "Users" },
    { value: 80, suffix: "%+", label: "Accuracy" },
    { value: 3, suffix: "Cr+", currency: "₹", label: "Combined Profits" },
    { value: 8, suffix: "+ Yrs", label: "Experience" },
  ];

  return (
    <section className="bg-bg-primary border-y border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-border">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="font-bebas text-5xl md:text-6xl text-accent-gold tracking-widest mb-2 drop-shadow-[0_0_15px_rgba(245,197,24,0.3)]">
                {stat.currency}
                {<CountUp end={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-text-secondary font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
