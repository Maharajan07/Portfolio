import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { TerminalEasterEgg } from './components/TerminalEasterEgg';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-primary min-h-screen font-sans selection:bg-accent selection:text-background">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Architecture />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <TerminalEasterEgg />
    </div>
  );
}

export default App;
