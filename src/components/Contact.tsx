import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../data/profile';
import { FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 min-h-[70vh] flex flex-col items-center justify-center relative z-10">
      <div className="contact-reveal text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          WHAT SHOULD WE<br />
          <span className="text-accent">BUILD NEXT?</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-mono tracking-widest uppercase">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open to opportunities
        </div>
      </div>

      <div className="contact-reveal flex flex-wrap justify-center gap-6 max-w-2xl">
        <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all">
          <FiMail className="text-secondary group-hover:text-accent transition-colors" size={20} />
          <span className="font-medium">Email</span>
        </a>
        
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all">
          <FiLinkedin className="text-secondary group-hover:text-accent transition-colors" size={20} />
          <span className="font-medium">LinkedIn</span>
        </a>

        <a href={profile.github} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all">
          <FiGithub className="text-secondary group-hover:text-accent transition-colors" size={20} />
          <span className="font-medium">GitHub</span>
        </a>

        <a href={profile.resume} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-accent text-background hover:bg-accent/90 transition-all font-bold">
          <FiFileText size={20} />
          <span>View Resume</span>
        </a>
      </div>
    </section>
  );
};
