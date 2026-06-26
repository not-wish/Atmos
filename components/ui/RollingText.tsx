"use client"
import { useState } from 'react';

interface RollingTextProps extends React.ComponentPropsWithoutRef<"div"> {
  initialText: string;
  finalText: string;
  textClassName?: string;
  initialTextClassName?: string;
  finalTextClassName?: string;
}

export default function RollingText({
  initialText,
  finalText,
  className = "",
  textClassName = "",
  initialTextClassName = "",
  finalTextClassName = "",
  ...props
}: RollingTextProps) {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const longWord = finalText.length > initialText.length ? finalText : null;

  return (
    <div {...props} className={`relative overflow-hidden text-foreground ${className}`}>
      <div 
        className={`group cursor-pointer select-none text-3xl font-bold ${textClassName}`}
        onClick={() => setIsMobileActive(!isMobileActive)}
      >
        <span
          className={`flex flex-col transition-transform duration-200 ease-out md:group-hover:-translate-y-full ${isMobileActive ? '-translate-y-full' : ''} ${initialTextClassName}`}
        >
          {initialText}
          {Boolean(longWord?.length) && <span className="invisible h-0">{longWord}</span>}
        </span>
        <span
          className={`absolute top-full left-0 transition-transform duration-200 ease-out md:group-hover:-translate-y-full ${isMobileActive ? '-translate-y-full' : ''} ${finalTextClassName}`}
        >
          {finalText}
        </span>
      </div>
    </div>
  );
}