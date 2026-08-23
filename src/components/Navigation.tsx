import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { profile } from '../data/profile';

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Lenis handles the smooth scroll if we just dispatch a standard behavior or use window.scrollTo
      // Better yet, just use standard scrollTo and Lenis will intercept it if it's set up correctly, 
      // or we just let native anchor handle it. But to be safe:
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        hasScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-primary font-bold text-lg tracking-wider" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0, behavior: 'smooth'}); }}>
          MAHARAJAN P.
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }} className="hover:text-primary transition-colors">About</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); handleScroll('work'); }} className="hover:text-primary transition-colors">Work</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleScroll('experience'); }} className="hover:text-primary transition-colors">Experience</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }} className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }} className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center">
          <a 
            href={profile.resume} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-primary px-4 py-2 rounded-full transition-all"
          >
            <span>Resume</span>
            <span className="text-accent">↗</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};
