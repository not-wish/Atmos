"use client";
import { useEffect, useState } from "react";

export default function CycleText({ words = ["Atmos", "Vishesh Agarwal"] }: { words?: string[] }) {
  const [index, setIndex] = useState(0);
  const displayWords = words.length === 2 ? [...words, ...words] : words;

  useEffect(() => {
    if (displayWords.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % displayWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [displayWords.length]);

  if (displayWords.length === 0) return null;

  return (
    <span className="inline-grid overflow-hidden items-center mx-1 font-bold text-artic">
      {displayWords.map((word, i) => {
        let positionClass = "";

        if (i === index) {
          positionClass = "translate-y-0 opacity-100 z-10 transition-all duration-500 ease-out";
        } else if (i === (index - 1 + displayWords.length) % displayWords.length) {
          positionClass = "-translate-y-full opacity-0 z-0 transition-all duration-500 ease-out";
        } else {
          positionClass = "translate-y-full opacity-0 z-0";
        }

        return (
          <span
            key={`${word}-${i}`}
            className={`col-start-1 row-start-1 ${positionClass}`}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}