"use client"
import { useState, useEffect } from 'react';
import { calculatePrice, pricingMatrix } from '@/lib/pricingMatrix';

type PriceNodeProps = {
  tier: 'starter' | 'pro' | 'enterprise';
};

export default function PriceNode({ tier }: PriceNodeProps) {
  const [priceData, setPriceData] = useState({
    price: calculatePrice(tier, 'USD', false),
    symbol: '$',
    period: '/mo'
  });

  useEffect(() => {
    // Listen for our custom event without re-rendering any parent containers
    const handlePricingChange = (e: CustomEvent) => {
      const { currency, isAnnual } = e.detail;
      const newPrice = calculatePrice(tier, currency, isAnnual);
      const newSymbol = pricingMatrix.regionalTariffs[currency as keyof typeof pricingMatrix.regionalTariffs].symbol;
      
      setPriceData({
        price: newPrice,
        symbol: newSymbol,
        period: isAnnual ? '/yr' : '/mo'
      });
    };

    window.addEventListener('pricing-update', handlePricingChange as EventListener);
    return () => window.removeEventListener('pricing-update', handlePricingChange as EventListener);
  }, [tier]);

  return (
    <div className="flex items-baseline text-noctural">
      <span className="text-4xl font-bold transition-all duration-300">{priceData.symbol}{priceData.price}</span>
      <span className="text-gray-500 ml-1">{priceData.period}</span>
    </div>
  );
}