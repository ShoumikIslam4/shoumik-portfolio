import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI SaaS Platform',
      description: 'Next-gen AI-powered analytics dashboard with real-time insights and predictive modeling',
      tech: ['React', 'Tailwind', 'Html'],
      gradient: 'from-cyan-500 via-blue-500 to-purple-500',
      featured: true
    },
    {
      title: 'Crypto Exchange',
      description: 'High-frequency trading platform with advanced charting and portfolio management',
      tech: ['React', 'Tailwind', 'Redis', 'PostgreSQL'],
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      featured: true
    },
    {
      title: 'E-Commerce Empire',
      description: 'Scalable marketplace with AR product visualization and AI recommendations',
      tech: ['Vue.js', 'Three.js', 'GraphQL', 'Stripe'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      featured: false
    },
    {
      title: 'Social Network',
      description: 'Real-time social platform with video streaming and content discovery',
      tech: ['React Native', 'WebRTC', 'Firebase', 'ML Kit'],
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      featured: false
    },
    {
      title: 'Healthcare Portal',
      description: 'HIPAA-compliant telemedicine platform with appointment scheduling',
      tech: ['Angular', 'Django', 'PostgreSQL', 'Twilio'],
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      featured: false
    },
    {
      title: 'Web Code Agency',
      description: 'Real-time social platform with video streaming and content discovery',
      tech: ['Angular', 'Django', 'PostgreSQL', 'Twilio'],
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      featured: false
    },
    {
      title: 'Fintech Dashboard',
      description: 'Real-time financial analytics with automated reporting and forecasting',
      tech: ['React', 'D3.js', 'Python', 'MongoDB'],
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      featured: false
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
            Featured
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, idx) => (
            <div
              key={idx}
              className="group relative h-[500px] bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <ExternalLink className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full font-mono group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
