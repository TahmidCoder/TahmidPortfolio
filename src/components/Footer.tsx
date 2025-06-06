
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-cyber-dark border-t border-cyber-blue/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyber-blue neon-text font-mono mb-4">
              {'<TAHMID/>'}
            </h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Fullstack Web Developer crafting powerful applications with modern 
              technologies and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-cyber-purple mb-4 font-mono">
              {'{ QUICK_LINKS }'}
            </h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-cyber-blue transition-colors font-mono text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-bold text-cyber-green mb-4 font-mono">
              {'{ TECH_STACK }'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'MongoDB', 'JWT', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded text-xs font-mono border border-cyber-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-mono text-sm mb-4 md:mb-0">
            © 2024 Tahmid. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 font-mono text-sm">
              Coded with 💻 by Tahmid
            </span>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            <span className="text-cyber-green font-mono text-xs">
              ONLINE
            </span>
          </div>
        </div>

        {/* Glitch effect text */}
        <div className="absolute bottom-4 right-4 text-cyber-blue/20 font-mono text-xs animate-glitch">
          {'{ SYSTEM_ONLINE }'}
        </div>
      </div>
    </footer>
  );
};
