
import React, { useEffect, useState, useRef } from 'react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'FRONTEND',
      color: 'cyber-blue',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 }
      ]
    },
    {
      title: 'BACKEND',
      color: 'cyber-purple',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'MVC Pattern', level: 85 }
      ]
    },
    {
      title: 'DATABASE',
      color: 'cyber-green',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'Database Design', level: 75 },
        { name: 'Data Modeling', level: 70 },
        { name: 'Aggregation', level: 65 }
      ]
    },
    {
      title: 'AUTHENTICATION',
      color: 'cyber-pink',
      skills: [
        { name: 'JWT Tokens', level: 85 },
        { name: 'bcrypt', level: 90 },
        { name: 'Cookies/Sessions', level: 80 },
        { name: 'Security Best Practices', level: 75 }
      ]
    },
    {
      title: 'DEV_TOOLS',
      color: 'cyber-blue',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Netlify/Render', level: 80 }
      ]
    },
    {
      title: 'AI_&_FUTURE',
      color: 'cyber-purple',
      skills: [
        { name: 'Prompt Engineering', level: 75 },
        { name: 'AI Tools Integration', level: 70 },
        { name: 'Clean Code', level: 85 },
        { name: 'Component Design', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClass = (color: string) => {
    switch (color) {
      case 'cyber-blue': return 'from-cyber-blue to-blue-400';
      case 'cyber-purple': return 'from-cyber-purple to-purple-400';
      case 'cyber-green': return 'from-cyber-green to-green-400';
      case 'cyber-pink': return 'from-cyber-pink to-pink-400';
      default: return 'from-cyber-blue to-blue-400';
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 relative bg-cyber-dark/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {'{ SKILLS_MATRIX }'}
          </h2>
          <p className="text-gray-400 font-mono text-lg">
            Analyzing technical proficiency levels...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glow-border rounded-lg p-6 bg-cyber-dark/50 backdrop-blur-sm hover:shadow-neon-blue transition-all duration-500 group"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className={`text-xl font-bold text-${category.color} mb-6 font-mono neon-text`}>
                {'{'}{category.title}{'}'}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className="text-cyber-blue font-mono text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getColorClass(category.color)} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
