import { profile } from '../data/profile';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <span className="font-bold text-secondary">{profile.name}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>{profile.role}</span>
        </div>
        
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">Email</a>
        </div>
        
        <div>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
