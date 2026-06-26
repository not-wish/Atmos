const testimonials = [
  {
    id: 1,
    quote: "Atmos fundamentally changed how we handle data synchronization. We deployed our first 10 agents in an afternoon, cutting our manual workload by 70%.",
    name: "Sarah Jenkins",
    role: "VP of Engineering, DataFlow Inc."
  },
  {
    id: 2,
    quote: "The predictive analytics model is astonishingly accurate. We transitioned from our legacy systems without dropping a single packet. A masterclass in enterprise software.",
    name: "Marcus Thorne",
    role: "Chief Architect, Nexus Financial"
  },
  {
    id: 3,
    quote: "Bank-grade security wasn't just a marketing promise. Their LLM backend processes our proprietary training data entirely on-premise. It's exactly what we needed.",
    name: "Dr. Elena Rostova",
    role: "Head of AI Research, Synthetix"
  }
];

export default function SocialProof() {
  return (
    <section id="reviews" className="flex flex-col items-center justify-center min-h-screen w-[90%] max-w-6xl mx-auto py-20 gap-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold font-jetbrains-mono text-artic">Trusted by Industry Leaders</h2>
        <p className="">See how enterprise teams are scaling their intelligence.</p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6">
        {testimonials.map((review) => (
          <article key={review.id} className="flex flex-col justify-between p-8 border rounded-xl bg-white shadow-sm gap-6 w-full md:w-1/3">
            <blockquote className="text-noctural italic">
              "{review.quote}"
            </blockquote>
            <div className="flex flex-col gap-1 pt-4 border-t border-noctural">
              <cite className="font-bold text-noctural not-italic">{review.name}</cite>
              <span className="text-sm text-safron">{review.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}