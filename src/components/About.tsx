import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../data/profile';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      const lines = textRef.current?.children;
      if (lines) {
        gsap.from(lines, {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 about-header">
          <div className="text-accent text-sm tracking-[0.2em] mb-4 font-mono">01</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">WHO I AM</h2>
        </div>
        
        <div ref={textRef} className="lg:col-span-8 flex flex-col gap-8 text-xl md:text-2xl text-secondary leading-relaxed">
          {profile.about.map((paragraph, index) => (
            <p key={index} className="max-w-3xl text-balance">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
