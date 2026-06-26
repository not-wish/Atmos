"use client"
import { useState, useEffect } from 'react';

const featuresData = [
  { id: 0, title: "Neural Sync", desc: "Real-time data synchronization across all AI agent nodes." },
  { id: 1, title: "Predictive Analytics", desc: "Forecast market trends with 99% accuracy using our LLM backend." },
  { id: 2, title: "Automated Workflows", desc: "Chain multiple AI tasks together without writing a single line of code." },
  { id: 3, title: "Enterprise Security", desc: "Bank-grade encryption for all your proprietary training data." }
];

export default function FeatureShowcase() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-9/10 gap-12">
      <div className="flex flex-col gap-2 items-center">
        <h2 className='text-4xl font-bold font-jetbrains-mono'>Platform Capabilities</h2>
        <p className=''>Everything you need to scale your enterprise.</p>
      </div>

      <div className="flex flex-col w-full md:grid md:grid-cols-3 gap-4">
        {featuresData.map((feature, index) => (
          <div 
            key={feature.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`
              flex flex-col p-6 border rounded-xl transition-colors duration-200 ease-out cursor-pointer text-noctural
              ${activeIndex === index ? 'bg-linear-to-br to-forsythia from-safron' : 'bg-linear-to-br from-forsythia to-safron'}
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'} 
            `}
          >
            <h3 className='font-bold'>{feature.title}</h3>
            <p className={` ${activeIndex === index ? 'block' : 'hidden md:block'}`}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}