"use client"
import PricingCard from '@/components/ui/PricingCard';
import BillingToggle from '../ui/BillingToggle';
import CurrencyMenu from '../ui/CurrencyMenu';

const pricingTiers = [
  {
    id: 'starter',
    tier: 'starter' as const,
    title: 'Starter',
    features: ['10 AI Agents', 'Basic Analytics', 'Community Support'],
    highlight: false
  },
  {
    id: 'pro',
    tier: 'pro' as const,
    title: 'Pro',
    features: ['Unlimited AI Agents', 'Predictive Analytics', 'Priority Support'],
    highlight: true
  },
  {
    id: 'enterprise',
    tier: 'enterprise' as const,
    title: 'Enterprise',
    features: ['Custom Data Models', 'Dedicated Support', 'SLA Agreement'],
    highlight: false
  }
];

export default function PricingSection() {

  const firePricingUpdate = (currency: string, isAnnual: boolean) => {
    const event = new CustomEvent('pricing-update', {
      detail: { currency, isAnnual }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-6 gap-12">
      
      <div className="flex flex-col items-center gap-16 w-full">
        <h2 className="text-4xl font-bold font-jetbrains-mono text-artic">Transparent Pricing</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-6/10">
          <BillingToggle />
          
          <CurrencyMenu/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-[90%] max-w-6/10 justify-center gap-8">
        {pricingTiers.map((tierData) => (
          <PricingCard 
            key={tierData.id}
            tier={tierData.tier}
            title={tierData.title}
            features={tierData.features}
            highlight={tierData.highlight}
          />
        ))}
      </div>

    </div>
  );
}