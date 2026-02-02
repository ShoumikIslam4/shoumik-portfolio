import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

/* ───────────────── PROJECT DATA ───────────────── */
const projects = [
  {
    title: 'EasyMart – Your One-Stop Grocery Destination',
    description: 'EasyMart is an online grocery shopping platform that makes your grocery shopping experience effortless, fast, and enjoyable. With lightning-fast delivery and convenient pickup options, we bring fresh, high-quality groceries right to your doorstep.',
    image: 'https://i.ibb.co.com/CK4218zF/Equi-Sports-Sports-Equipment-Online-Store.webp', // project's screenshot
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  
];

/* ───────────────── SINGLE PROJECT CARD ───────────────── */
const ProjectCard = ({ project, index }) => {
  // Alternating tilt angles for visual interest
  const tiltClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
  
  return (
    <div className="group relative">
      {/* Browser mockup container */}
      <div 
        className={`relative bg-[#1a1f2e] rounded-2xl overflow-hidden border border-[#2a3144] transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 ${tiltClass} hover:rotate-0`}
      >
        {/* Browser chrome (top bar) */}
        <div className="bg-[#0f1419] px-4 py-3 flex items-center gap-2 border-b border-[#2a3144]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 ml-3 bg-[#1a1f2e] rounded-md px-3 py-1 text-xs text-gray-500">
            {project.link || 'project-demo.com'}
          </div>
        </div>

        {/* Project screenshot/image */}
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback gradient if image not found
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* View project link (shows on hover) */}
          <a
            href={project.link}
            className="absolute top-4 right-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple-500 hover:scale-110"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Card info below the mockup */}
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#1a1f2e] border border-[#2a3144] text-gray-400 text-xs rounded-full hover:border-purple-500/40 hover:text-purple-400 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ───────────────── MAIN PROJECTS SECTION ───────────────── */
const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-24 bg-black overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/[0.05] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/[0.05] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Highlights
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            From concept to deployment, these projects highlight my journey as a developer.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Explore all button */}
        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-base flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
            Explore All Projects
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
