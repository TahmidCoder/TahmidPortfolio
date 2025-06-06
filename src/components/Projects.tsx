
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and secure payment integration.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Fullstack'
    },
    {
      title: 'Authentication System',
      description: 'Robust authentication system with JWT tokens, password hashing, and secure session management.',
      tech: ['Express.js', 'bcrypt', 'JWT', 'MongoDB', 'Cookies'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Backend'
    },
    {
      title: 'Developer Portfolio',
      description: 'Modern portfolio website with cyberpunk design, animations, and responsive layout.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      title: 'Blog API',
      description: 'RESTful API for blog management with CRUD operations, user roles, and content moderation.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Middleware'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'API'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      tech: ['React.js', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Fullstack'
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat interface with AI integration and prompt engineering capabilities.',
      tech: ['React.js', 'OpenAI API', 'Node.js', 'WebSocket', 'AI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI Integration'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {'{ PROJECTS_SHOWCASE }'}
          </h2>
          <p className="text-gray-400 font-mono text-lg">
            Exploring my digital creations and technical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card glow-border rounded-lg overflow-hidden bg-cyber-dark/50 backdrop-blur-sm hover:shadow-neon-blue transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className="bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded text-xs font-mono border border-cyber-blue/50">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyber-blue mb-3 font-mono group-hover:neon-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded text-xs font-mono border border-cyber-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-cyber-blue hover:text-cyber-purple transition-colors font-mono text-sm group/link"
                  >
                    Live Demo
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-cyber-green hover:text-cyber-blue transition-colors font-mono text-sm group/link"
                  >
                    GitHub
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
