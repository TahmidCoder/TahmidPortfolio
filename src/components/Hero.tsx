import React, { useEffect, useState } from "react";

export const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText =
    "Crafting full-power web applications with modern technologies.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Glitch Effect Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4 relative">
            <span className="text-white neon-text animate-float">
              Meet Tahmid
            </span>
            <div className="absolute inset-0 text-cyber-blue opacity-70 animate-glitch">
              Meet Tahmid
            </div>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-cyber-blue neon-text font-mono">
            Fullstack Code Warrior
          </h2>
        </div>

        {/* Subtitle with animation */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-cyber-purple mb-4 font-mono">
            Backend Architect. Frontend Magician. AI Explorer.
          </p>
        </div>

        {/* Typewriter Effect */}
        <div className="mb-12 h-16 flex items-center justify-center">
          <p className="text-lg md:text-xl text-gray-300 font-mono max-w-3xl">
            {typewriterText}
            <span className="animate-blink border-r-2 border-cyber-blue ml-1"></span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="cyber-button group relative overflow-hidden"
          >
            <span className="relative z-10">See My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <button
            onClick={scrollToContact}
            className="cyber-button border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black hover:shadow-neon-purple group relative overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-blue rounded-full animate-float opacity-60" />
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyber-purple rounded-full animate-float opacity-80"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyber-green rounded-full animate-float opacity-40"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};
