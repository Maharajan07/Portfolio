import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialization Sequence
      const tl = gsap.timeline();
      
      tl.to(".init-text", { opacity: 1, duration: 0.5, ease: "power2.out" })
        .to(".init-text", { opacity: 0, duration: 0.5, delay: 0.5, ease: "power2.in" })
        .to(".role-text", { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" })
        .to(".name-text", { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.2, ease: "expo.out" }, "-=0.4")
        .to(".sub-text", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.8")
        .to(".scroll-indicator", { opacity: 1, duration: 1 }, "-=0.4");

      // Scroll out effect
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        yPercent: 30,
        opacity: 0,
        scale: 0.95,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background noise/grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
      <div className="z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        <div className="init-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs tracking-[0.3em] text-muted opacity-0">
          INITIALIZING...
        </div>

        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="role-text opacity-0 translate-y-4 text-sm md:text-base tracking-[0.2em] text-accent font-medium uppercase">
            SOFTWARE ENGINEER
          </span>
          <span className="role-text opacity-0 translate-y-4 text-xs md:text-sm tracking-widest text-secondary uppercase">
            BACKEND • FULL-STACK • AI
          </span>
        </div>

        <h1 
          ref={textRef}
          className="name-text opacity-0 scale-105 blur-sm text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8"
        >
          {profile.name}
        </h1>

        <p className="sub-text opacity-0 translate-y-4 text-secondary text-lg md:text-xl max-w-2xl text-balance">
          {profile.tagline}
        </p>
      </div>

      <div className="scroll-indicator absolute bottom-12 flex flex-col items-center gap-3 opacity-0">
        <span className="text-[10px] tracking-[0.3em] text-muted uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </div>
    </section>
  );
};
