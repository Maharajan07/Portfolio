import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../data/experience';

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.exp-item');
      
      gsap.to('.timeline-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none"
      });

      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-32 px-6 max-w-4xl mx-auto relative z-10">
      <div className="mb-24">
        <div className="text-accent text-sm tracking-[0.2em] mb-4 font-mono">05</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EXPERIENCE</h2>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10">
          <div className="timeline-line absolute top-0 left-0 w-full h-full bg-accent scale-y-0" />
        </div>

        <div className="flex flex-col gap-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-item relative">
              <div className="absolute -left-10 md:-left-[3.25rem] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />
              
              <div className="text-sm font-mono text-accent mb-2">{exp.year}</div>
              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
              <div className="text-secondary font-medium mb-4">{exp.company}</div>
              <p className="text-muted leading-relaxed max-w-2xl text-balance">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
