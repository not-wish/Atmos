import FeatureCard from "@/components/ui/FeatureCard";

const featuresData = [
  {
    id: 0,
    title: "Neural Sync",
    desc: "Real-time data synchronization across all AI agent nodes.",
  },
  {
    id: 1,
    title: "Predictive Analytics",
    desc: "Forecast market trends with 99% accuracy using our LLM backend.",
  },
  {
    id: 2,
    title: "Automated Workflows",
    desc: "Chain multiple AI tasks together without writing a single line of code.",
  },
  {
    id: 3,
    title: "Enterprise Security",
    desc: "Bank-grade encryption for all your proprietary training data.",
  },
];

export default function FeatureShowcase() {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center min-h-screen w-[90%] max-w-6xl mx-auto gap-12 py-20">
      <div className="flex flex-col gap-2 items-center text-center">
        <h2 className="text-4xl font-bold font-jetbrains-mono text-artic">
          Platform Capabilities
        </h2>
        <p className="">Everything you need to scale your enterprise.</p>
      </div>

      {/* Desktop: Grid (Bento) | Mobile: Flex Column (Accordion) */}
      <div className="flex flex-col w-full md:grid md:grid-cols-3 gap-4">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            index={index}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}
