
import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Advanced Fullstack Development',
      description: 'Mastering modern fullstack technologies with React.js, Node.js, and MongoDB. Building complex authentication systems and scalable web applications.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Express.js'],
      type: 'Current Learning'
    },
    {
      year: '2023',
      title: 'Backend Specialization',
      description: 'Deep dive into backend development, API design, and database management. Learned secure authentication patterns and RESTful architecture.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      type: 'Intensive Study'
    },
    {
      year: '2023',
      title: 'Frontend Mastery',
      description: 'Focused on modern frontend development with React.js, responsive design with Tailwind CSS, and component-based architecture.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
      type: 'Foundation Building'
    },
    {
      year: '2022',
      title: 'Programming Fundamentals',
      description: 'Started my coding journey with core programming concepts, web development basics, and problem-solving methodologies.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Git', 'Problem Solving'],
      type: 'Beginning'
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-cyber-dark/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {'{ EXPERIENCE_LOG }'}
          </h2>
          <p className="text-gray-400 font-mono text-lg">
            Tracking my development journey through time
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-green" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.year}
                className="relative flex items-start group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyber-blue rounded-full border-2 border-cyber-dark animate-glow-pulse" />
                
                {/* Content */}
                <div className="ml-16 glow-border rounded-lg p-6 bg-cyber-dark/30 backdrop-blur-sm hover:shadow-neon-blue transition-all duration-500 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyber-blue mb-2 font-mono neon-text">
                        {exp.title}
                      </h3>
                      <p className="text-cyber-purple font-mono text-sm">
                        {exp.type} • {exp.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyber-green/20 text-cyber-green px-3 py-1 rounded-full text-xs font-mono border border-cyber-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
