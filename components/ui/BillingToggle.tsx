"use client"
import { useState } from 'react';

export default function BillingToggle() {
  // Localized state: ONLY this tiny button group will re-render when clicked
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual);
    
    // Fire the custom event that your PriceNodes are listening for
    const event = new CustomEvent('pricing-update', {
      // Note: If you need dynamic currency tracking later, you can pass it via a prop or read from a store
      detail: { currency: 'USD', isAnnual: annual } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="flex gap-2 p-1 border rounded-lg bg-artic">
      <button 
        onClick={() => handleToggle(false)} 
        className={`px-4 py-1 rounded text-noctural transition-colors duration-200 ease-out 
          ${!isAnnual ? 'bg-white shadow-sm font-semibold' : 'hover:bg-white/50'}`}
      >
        Monthly
      </button>
      
      <button 
        onClick={() => handleToggle(true)} 
        className={`px-4 py-1 rounded text-noctural transition-colors duration-200 ease-out 
          ${isAnnual ? 'bg-white shadow-sm font-semibold' : 'hover:bg-white/50'}`}
      >
        Annual (20% Off)
      </button>
    </div>
  );
}