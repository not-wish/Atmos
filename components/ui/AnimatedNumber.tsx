"use client";
import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  target: number;
  decimals?: number;
  suffix?: string;
}

export default function AnimatedNumber({ target, decimals = 0, suffix = "" }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          const duration = 1500; // 1.5 seconds

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCurrent(easeOut * target);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl font-bold text-noctural">
      {current.toFixed(decimals)}{suffix}
    </span>
  );
}