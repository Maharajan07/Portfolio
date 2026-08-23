import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectCards = gsap.utils.toArray<HTMLElement>('.project-card');
      
      projectCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-24">
        <div className="text-accent text-sm tracking-[0.2em] mb-4 font-mono">03</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">SELECTED WORK</h2>
      </div>

      <div ref={projectsRef} className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card grid grid-cols-1 lg:grid-cols-12 gap-12 group">
            <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="text-muted font-mono text-sm mb-4">0{index + 1} — {project.status || 'Production'}</div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-lg text-secondary mb-8 text-balance">{project.shortDesc}</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-white/40 mb-2 uppercase">Problem</h4>
                  <p className="text-secondary">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-white/40 mb-2 uppercase">Solution</h4>
                  <p className="text-secondary">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                    <FiGithub size={18} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                    <FiExternalLink size={18} /> Live Site
                  </a>
                )}
              </div>
            </div>

            <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="aspect-[4/3] rounded-2xl bg-surface border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Simulated UI for project */}
                <div className="w-full h-full p-8 flex flex-col">
                  <div className="w-full flex justify-between items-center mb-8 opacity-50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4">
                    {project.keyFeatures.map((feature, i) => (
                      <div key={i} className="flex-1 rounded-lg bg-white/5 border border-white/5 flex items-center px-6">
                        <span className="text-sm font-mono text-secondary opacity-70">_ {feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
