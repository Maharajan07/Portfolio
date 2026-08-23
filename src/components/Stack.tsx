import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Stack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

  const nodes = [
    { name: "JAVA", desc: "Core Logic" },
    { name: "SPRING BOOT", desc: "Framework" },
    { name: "REST API", desc: "Interface" },
    { name: "DATABASE", desc: "Persistence" },
    { name: "AI", desc: "Intelligence" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineElements = gsap.utils.toArray<HTMLElement>('.pipeline-line');
      const nodeElements = gsap.utils.toArray<HTMLElement>('.pipeline-node');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 1,
        }
      });

      nodeElements.forEach((node, i) => {
        tl.to(node, { opacity: 1, scale: 1, duration: 0.5 }, i * 1);
        if (i < lineElements.length) {
          tl.to(lineElements[i], { scaleY: 1, duration: 0.5 }, i * 1 + 0.5);
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <div className="text-accent text-sm tracking-[0.2em] mb-4 font-mono">02</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">ENGINEERING STACK</h2>
      </div>

      <div ref={pipelineRef} className="flex flex-col items-center">
        {nodes.map((node, i) => (
          <div key={node.name} className="flex flex-col items-center w-full">
            <div className="pipeline-node opacity-30 scale-90 flex items-center justify-between w-full max-w-lg p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col z-10">
                <span className="text-2xl font-bold tracking-wider">{node.name}</span>
                <span className="text-sm text-secondary font-mono">{node.desc}</span>
              </div>
              <div className="z-10 w-3 h-3 rounded-full bg-accent opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all" />
            </div>
            
            {i < nodes.length - 1 && (
              <div className="h-16 w-px bg-white/10 my-4 relative origin-top">
                <div className="pipeline-line absolute top-0 left-0 w-full h-full bg-accent scale-y-0 origin-top" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
