import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: <Mail />, label: 'Email', value: 'info.soumikk@gmail.com', href: 'info.soumikk@gmail.com' },
    { icon: <Github />, label: 'GitHub', value: 'ShoumikIslam4', href: 'https://github.com/ShoumikIslam4' },
    { icon: <Linkedin />, label: 'LinkedIn', value: 'Shoumik Islam', href: 'https://www.linkedin.com/in/shoumik-islam-171147374/' },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 bg-gradient-to-b from-black via-purple-950 to-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
            Let's Create
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Have an exciting project in mind? Let's collaborate and build something extraordinary. 
              I'm always open to discussing new opportunities and innovative ideas.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider font-mono">{link.label}</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm uppercase tracking-wider font-mono mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                className={`w-full px-6 py-4 bg-white/5 backdrop-blur-sm border ${focused === 'name' ? 'border-cyan-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm uppercase tracking-wider font-mono mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                className={`w-full px-6 py-4 bg-white/5 backdrop-blur-sm border ${focused === 'email' ? 'border-cyan-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm uppercase tracking-wider font-mono mb-2">Message</label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                className={`w-full px-6 py-4 bg-white/5 backdrop-blur-sm border ${focused === 'message' ? 'border-cyan-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none`}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
