"use client";
import { useEffect, useState } from "react";

export default function CycleText() {
  const words = ["Atmos", "Vishesh Agarwal"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-grid overflow-hidden items-center mx-1 font-bold text-artic">
      {words.map((word, i) => (
        <span
          key={word}
          className={`col-start-1 row-start-1 transition-all duration-500 ease-out
            ${index === i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
          `}
        >
          {word}
        </span>
      ))}
    </span>
  );
}