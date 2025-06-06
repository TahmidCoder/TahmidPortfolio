import React from "react";

export const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{"{ ABOUT_ME }"}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image */}
          <div className="relative group">
            <div className="glow-border rounded-lg p-8 bg-cyber-dark/50 backdrop-blur-sm hover:shadow-neon-blue transition-all duration-500">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                {/* <div className="w-full h-full bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center text-6xl font-bold animate-glow-pulse">
                  T
                </div> */}
                <img
                  src="/public/me.png"
                  alt="Tahmid's Avatar"
                  className="w-full h-full rounded-full object-cover shadow-lg"
                />
                <div
                  className="absolute inset-0 rounded-full border-2 border-cyber-blue/50 animate-spin"
                  style={{ animationDuration: "20s" }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyber-blue mb-2 font-mono">
                  TAHMID
                </h3>
                <p className="text-cyber-purple font-mono">
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="glow-border rounded-lg p-6 bg-cyber-dark/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyber-green mb-4 font-mono">
                {"> MISSION_STATEMENT"}
              </h3>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                I'm a passionate fullstack web developer specializing in
                creating powerful, scalable applications that merge cutting-edge
                backend architecture with intuitive frontend experiences. My
                journey in code is driven by the endless possibilities of
                technology and the thrill of solving complex problems.
              </p>
            </div>

            <div className="glow-border rounded-lg p-6 bg-cyber-dark/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyber-purple mb-4 font-mono">
                {"> CURRENT_FOCUS"}
              </h3>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                Currently mastering the art of fullstack development with modern
                technologies like React.js, Node.js, and MongoDB. I'm also
                exploring the fascinating world of AI integration and prompt
                engineering to build next-generation applications.
              </p>
            </div>

            <div className="glow-border rounded-lg p-6 bg-cyber-dark/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyber-blue mb-4 font-mono">
                {"> FUTURE_GOALS"}
              </h3>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                My vision extends beyond traditional web development. I aspire
                to become an AI Engineer, creating intelligent systems that
                revolutionize user experiences and push the boundaries of what's
                possible in web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
