import React from 'react';
import { ArrowRight, Code } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring cutting-edge technologies reshaping how we build for the web',
      date: 'Jan 28, 2026',
      readTime: '5 min',
      category: 'Technology',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mastering React Performance',
      excerpt: 'Advanced optimization techniques for lightning-fast React applications',
      date: 'Jan 25, 2026',
      readTime: '8 min',
      category: 'Development',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design Systems at Scale',
      excerpt: 'Building maintainable and scalable design systems for modern teams',
      date: 'Jan 20, 2026',
      readTime: '6 min',
      category: 'Design',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="blog" className="relative min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
            Insights
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
            Latest
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Header gradient */}
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 group-hover:scale-110 transition-transform duration-500">
                    <Code size={80} strokeWidth={0.5} />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-bold uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4 font-mono">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-cyan-400 font-mono text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
