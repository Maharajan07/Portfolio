import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/profile';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';

export const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{type: 'cmd' | 'out', text: string}[]>([
    { type: 'out', text: 'Welcome to terminal mode. Type "help" to see available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'cmd' as const, text: cmd }];
      
      let output = '';
      switch (cmd) {
        case 'whoami':
          output = `${profile.name} - ${profile.role}\n${profile.tagline}`;
          break;
        case 'skills':
          output = skillCategories.map(c => `${c.title}:\n  ${c.skills.map(s => s.name).join(', ')}`).join('\n\n');
          break;
        case 'projects':
          output = projects.map(p => `${p.title} - ${p.shortDesc}`).join('\n');
          break;
        case 'contact':
          output = `Email: ${profile.email}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}`;
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'help':
          output = 'Available commands: whoami, skills, projects, contact, clear, help';
          break;
        default:
          output = `Command not found: ${cmd}. Type "help" for available commands.`;
      }

      setHistory([...newHistory, { type: 'out', text: output }]);
      setInput('');
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-secondary hover:text-accent hover:border-accent/50 transition-colors z-40 shadow-xl group"
      >
        <TerminalIcon size={20} />
        <span className="absolute right-14 bg-surface text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Terminal Mode
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-full max-w-md h-96 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden font-mono text-sm"
          >
            <div className="h-10 bg-surface border-b border-white/10 flex items-center justify-between px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-secondary text-xs">guest@portfolio:~</div>
              <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-white">
                <X size={16} />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 text-primary/80" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={line.type === 'cmd' ? 'text-accent' : 'whitespace-pre-wrap'}>
                  {line.type === 'cmd' && <span className="text-secondary mr-2">$</span>}
                  {line.text}
                </div>
              ))}
              <div className="flex items-center">
                <span className="text-secondary mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent outline-none text-accent"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
