import AnimatedNumber from '@/components/ui/AnimatedNumber';

const stats = [
  { id: 1, target: 10, decimals: 0, suffix: "M+", label: "Workflows Automated" },
  { id: 2, target: 99.9, decimals: 1, suffix: "%", label: "Uptime SLA" },
  { id: 3, target: 24, decimals: 0, suffix: "/7", label: "Enterprise Support" }
];

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full py-20 min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row w-[90%] max-w-6xl gap-12 items-center">
        
        <div className="flex flex-col w-full md:w-1/2 gap-6">
          <h2 className="text-4xl font-bold font-jetbrains-mono text-noctural">Architecting the Future</h2>
          <div className="flex flex-col gap-4 text-noctural text-lg">
            <p>
              At Atmos, we believe that artificial intelligence shouldn't be a black box. We built this platform to give enterprise teams absolute control over their autonomous agents.
            </p>
            <p>
              By combining neural synchronization with deterministic workflows, we eliminate the friction between raw data and actionable intelligence.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 gap-6">
          <div className="flex flex-col gap-4 w-full">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center justify-between p-6 bg-white border rounded-xl shadow-sm">
                
                {/* The new native ticker replaces the static number */}
                <AnimatedNumber 
                  target={stat.target} 
                  decimals={stat.decimals} 
                  suffix={stat.suffix} 
                />
                
                <span className="text-noctural font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}