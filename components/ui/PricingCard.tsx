"use client"
import { useState } from 'react';
import PriceNode from './PriceNode';

interface PricingCardProps {
  tier: 'starter' | 'pro' | 'enterprise';
  title: string;
  features: string[];
  highlight?: boolean;
}

export default function PricingCard({ tier, title, features, highlight }: PricingCardProps) {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  return (
    <article 
      className={`group relative flex flex-col overflow-hidden w-full md:w-1/3 min-h-[400px] border rounded-xl bg-white shadow-sm cursor-pointer ${highlight ? 'ring-2 ring-artic' : ''}`}
      onClick={() => setIsMobileExpanded(!isMobileExpanded)}
    >
      
      {/* Front Face: Visible initially */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out md:group-hover:-translate-y-full ${isMobileExpanded ? '-translate-y-full' : ''}`}
      >
        <h3 className="text-4xl font-bold text-noctural">{title}</h3>
      </div>

      {/* Back Face: Rolls up on hover/click */}
      <div 
        className={`absolute top-full inset-x-0 h-full flex flex-col justify-between p-8 bg-gray-50 transition-transform duration-300 ease-out md:group-hover:-translate-y-full ${isMobileExpanded ? '-translate-y-full' : ''}`}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-noctural">{title}</h3>
          
          <PriceNode tier={tier} />
          
          <ul className="flex flex-col gap-3">
            {features.map((feature, idx) => (
              <li key={idx} className="text-noctural text-sm">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-center bg-noctural text-artic py-3 rounded-lg hover:bg-artic hover:text-noctural transition-colors duration-200">
          <span className="font-semibold text-sm uppercase tracking-wide">Deploy {title}</span>
        </div>
      </div>

    </article>
  );
}