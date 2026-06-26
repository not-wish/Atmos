"use client";
import { useEffect, useState } from "react";

export default function AnimatedList({ items }: { items: string[] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li
          key={item}
          className={`transition-all duration-500 ease-out
            ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}

          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}