"use client"
import { useState } from 'react';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center w-[90%] min-h-screen max-w-6xl mx-auto py-20 gap-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold font-jetbrains-mono text-artic">Get in Touch</h2>
        <p className="">Ready to scale? Our enterprise architects are standing by.</p>
      </div>

      <div className="flex flex-col w-full max-w-2xl p-8 bg-artic border rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-sm font-bold text-noctural">Full Name</label>
              <input type="text" id="name" required className="p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-artic" placeholder="Vishesh Agarwal" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-sm font-bold text-noctural">Work Email</label>
              <input type="email" id="email" required className="p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-artic" placeholder="vishesh.agarwal.dev@gmail.com" />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message" className="text-sm font-bold text-noctural">How can we help?</label>
            <textarea id="message" required rows={4} className="p-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-artic resize-none" placeholder="Tell me if you liked my work on Atmos..."></textarea>
          </div>

          <button 
            type="submit" 
            className="flex justify-center p-4 rounded-lg border bg-noctural text-artic font-bold transition-colors hover:bg-artic hover:text-noctural"
          >
            {isSubmitted ? "Message Sent!" : "Submit Inquiry"}
          </button>
          
        </form>
      </div>
    </section>
  );
}