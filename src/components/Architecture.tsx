import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Architecture = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const tiers = [
    { name: "CLIENT", desc: "React / Browser", details: "Handles UI state, routing, and user interactions." },
    { name: "REST API", desc: "Spring Controllers", details: "Exposes endpoints, handles request validation and mapping." },
    { name: "SERVICE LAYER", desc: "Business Logic", details: "Core application rules, AI integration, data processing." },
    { name: "DATABASE", desc: "Persistence", details: "Relational (MySQL) or Document (MongoDB) storage." }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".arch-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto relative z-10">
      <div className="mb-24">
        <div className="text-accent text-sm tracking-[0.2em] mb-4 font-mono">04</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">UNDER THE HOOD</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {tiers.map((tier, index) => (
          <div key={index} className="arch-item group relative h-48 rounded-xl bg-surface border border-white/5 p-6 hover:bg-white/5 hover:border-accent/30 transition-all cursor-crosshair flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold tracking-wide mb-1">{tier.name}</h3>
              <div className="text-xs font-mono text-secondary">{tier.desc}</div>
            </div>

            <div className="relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-sm text-secondary">
              {tier.details}
            </div>
            
            {index < tiers.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-px bg-white/10 z-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
