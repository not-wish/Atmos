"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface FeatureCardProps {
  index: number;
  title: string;
  desc: string;
}

export default function FeatureCard({ index, title, desc }: FeatureCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleFocus = (e: CustomEvent) => {
      setIsActive(e.detail.index === index);
    };

    window.addEventListener("bento-focus", handleFocus as EventListener);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("bento-focus", handleFocus as EventListener);
    };
  }, [index]);

  const broadcastFocus = (targetIndex: number | null) => {
    window.dispatchEvent(new CustomEvent("bento-focus", { detail: { index: targetIndex } }));
  };

  const handleInteraction = (type: 'hover' | 'click' | 'leave') => {
    if (type === 'hover' && !isMobile) broadcastFocus(index);
    if (type === 'leave' && !isMobile) broadcastFocus(null);
    if (type === 'click' && isMobile) broadcastFocus(isActive ? null : index);
  };

  return (
    <article
      onMouseEnter={() => handleInteraction('hover')}
      onMouseLeave={() => handleInteraction('leave')}
      onClick={() => handleInteraction('click')}
      className={`
        relative overflow-hidden flex flex-col p-6 border rounded-xl cursor-pointer text-noctural md:min-h-[250px] bg-safron
        ${index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"} 
      `}
    >
      <div 
        className={`absolute inset-0 bg-linear-to-br from-forsythia to-safron transition-opacity duration-100 ease-out ${isActive ? 'opacity-0' : 'opacity-100'}`} 
      />
      <div 
        className={`absolute inset-0 bg-linear-to-br to-forsythia from-safron transition-opacity duration-150 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Content Layer (Z-10 to sit above backgrounds) */}
      <div className="relative z-10 flex flex-col h-full gap-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">{title}</h3>
          
          <div className="relative h-6 w-6 md:hidden">
            <Image
              src="/SVGs/chevron-down.svg"
              alt="Toggle"
              fill
              className={`object-contain transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {/* Native CSS Grid Accordion Transition - Margin Free! */}
        <div 
          className={`grid transition-all duration-300 ease-in-out 
          ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100"}`}
        >
          <div className="overflow-hidden flex flex-col">
            <p className="text-noctural">{desc}</p>
          </div>
        </div>
      </div>
    </article>
  );
}