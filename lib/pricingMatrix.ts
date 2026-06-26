// Wrote by: Vishesh Agarwal (not-wish on github)
// Do not copy

export const pricingMatrix = {

  tiers: {
    starter: 49,
    pro: 149,
    enterprise: 199,
  },

  // Tarrifs as of 26-06-2026 from wise.com
  regionalTariffs: {
    USD: { rate: 1.0, symbol: '$' },
    EUR: { rate: 0.88, symbol: '€' },
    INR: { rate: 94.37, symbol: '₹' },
  },
  
  billingMultiplier: {
    monthly: 1.0,
    annual: 0.8, 
  }
};


export const calculatePrice = (tier: keyof typeof pricingMatrix.tiers, currency: string, isAnnual: boolean) => {
  const base = pricingMatrix.tiers[tier];
  const tariff = pricingMatrix.regionalTariffs[currency as keyof typeof pricingMatrix.regionalTariffs].rate;
  const multiplier = isAnnual ? pricingMatrix.billingMultiplier.annual : pricingMatrix.billingMultiplier.monthly;
  

  const finalPrice = base * tariff * multiplier;
  return Math.round(finalPrice); 
};