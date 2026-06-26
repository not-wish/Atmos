"use client";
import { useState, useRef, useEffect } from "react";

const currencies = [
  { id: "USD", symbol: "$", name: "US Dollar" },
  { id: "EUR", symbol: "€", name: "Euro" },
  { id: "INR", symbol: "₹", name: "Indian Rupee" }
];

export default function CurrencyMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState(currencies[0]);
  const rootRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleSelect = (currency: typeof currencies[0]) => {
    setActiveCurrency(currency);
    setIsOpen(false);
    
    const event = new CustomEvent("pricing-update", {
      detail: { currency: currency.id, isAnnual: false } 
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const radius = 60; 

  return (
    <div ref={rootRef} className="relative flex items-center justify-center w-12 h-12">
      <button
        onClick={toggle}
        className="absolute z-20 flex items-center justify-center w-12 h-12 rounded-full bg-noctural text-artic text-xl transition-all hover:text-noctural hover:bg-artic hover:scale-110"
        title="Select Currency"
      >
        {activeCurrency.symbol}
      </button>

      <ul className="absolute inset-0 p-0 list-none pointer-events-none">
        {currencies.map((curr, index) => {
          const angle = (360 / currencies.length) * index - 90; 
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <li
              key={curr.id}
              className={`absolute top-1 left-1 w-10 h-10 transition-all duration-300 ease-out ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              style={{
                transform: isOpen
                  ? `translate(${x}px, ${y}px) scale(1)`
                  : `translate(0px, 0px) scale(0.5)`,
              }}
            >
              <button
                onClick={() => handleSelect(curr)}
                title={curr.name}
                className="flex items-center justify-center border border-artic w-full h-full rounded-full bg-artic text-noctural hover:bg-background hover:text-artic transition-colors duration-200 ease-out"
              >
                {curr.symbol}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}