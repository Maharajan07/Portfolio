import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '../data/skills';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSkill, setActiveSkill] = useState<{name: string, detail: string} | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-cat", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-24">
        <div className="text-accent text-sm tracking-[0.2em] mb-4 font-mono">06</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-cat flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white/40 border-b border-white/10 pb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, j) => (
                <button
                  key={j}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-accent hover:bg-accent/10 transition-colors text-sm font-medium text-secondary hover:text-primary cursor-crosshair"
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 h-24 border border-white/5 bg-surface rounded-xl p-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeSkill ? (
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-center"
            >
              <div className="text-accent font-mono text-sm mb-1">{activeSkill.name}</div>
              <div className="text-secondary">{activeSkill.detail}</div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted text-sm font-mono"
            >
              HOVER NODE FOR DETAILS
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
