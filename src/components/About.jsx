import React from 'react';
import { Download, ArrowRight, Twitter, Instagram, Linkedin } from 'lucide-react';

/* ─── 3D Floating Triangle (top-right) ─── */
const FloatingTriangle = () => (
  <svg
    className="absolute pointer-events-none"
    style={{
      top: '8%',
      right: '18%',
      width: '90px',
      height: '90px',
      animation: 'floatTriangle 4s ease-in-out infinite',
      filter: 'drop-shadow(0 0 18px rgba(56,189,248,0.5))',
    }}
    viewBox="0 0 100 100"
    fill="none"
  >
    <defs>
      <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <polygon points="50,8 92,88 8,88" fill="url(#triGrad)" opacity="0.85" />
    <polygon points="50,24 78,76 22,76" fill="#0f1e3a" opacity="0.6" />
  </svg>
);

/* ─── 3D Floating Swirl (bottom-right) ─── */
const FloatingSwirl = () => (
  <svg
    className="absolute pointer-events-none"
    style={{
      bottom: '10%',
      right: '8%',
      width: '70px',
      height: '70px',
      animation: 'floatSwirl 5s ease-in-out infinite',
      animationDelay: '0.8s',
      filter: 'drop-shadow(0 0 14px rgba(59,130,246,0.5))',
    }}
    viewBox="0 0 100 100"
    fill="none"
  >
    <defs>
      <linearGradient id="swirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
    <path
      d="M50 10 C75 10, 90 30, 75 50 C60 70, 80 85, 60 90 C40 95, 25 75, 40 55 C55 35, 30 20, 50 10Z"
      fill="url(#swirlGrad)"
      opacity="0.85"
    />
    <path
      d="M50 25 C65 25, 75 38, 65 50 C55 62, 68 72, 58 75 C48 78, 38 65, 48 55 C58 45, 42 32, 50 25Z"
      fill="#0f1e3a"
      opacity="0.55"
    />
  </svg>
);

/* ─── Floating accent dots ─── */
const FloatingDot = ({ style }) => (
  <div
    className="absolute pointer-events-none rounded-full bg-cyan-400"
    style={{
      boxShadow: '0 0 10px rgba(34,211,238,0.6)',
      animation: 'floatDot 3s ease-in-out infinite',
      ...style,
    }}
  />
);

/* ─── Vertical Social Sidebar (right edge) ─── */
const SocialSidebar = () => {
  const links = [
    { icon: <Twitter size={14} />, href: 'https://x.com/soumik0111' },
    { icon: <Instagram size={14} />, href: 'https://www.instagram.com/soumik_islam_0/' },
    { icon: <Linkedin size={14} />, href: 'https://www.linkedin.com/in/shoumik-islam-171147374/' },
  ];

  return (
    <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
      <span
        className="text-gray-500 text-xs tracking-widest uppercase mb-1"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
      >
        Follow me on
      </span>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          className="w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

/* ─── Scroll Indicator (bottom-left) ─── */
const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-8 flex items-center gap-3 z-10">
    <div className="w-5 h-9 border-2 border-gray-600 rounded-full flex justify-center">
      <div className="w-1 h-2.5 bg-cyan-400 rounded-full mt-1" style={{ animation: 'scrollBob 2s ease-in-out infinite' }} />
    </div>
    <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll down</span>
  </div>
);

/* ──────────────────── MAIN ABOUT ──────────────────── */
const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1e3a 40%, #0d1b3e 70%, #091325 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, #1e3a5f 0%, transparent 70%)', top: '20%', left: '-10%' }}
      />
      <div className="absolute rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, #1a3060 0%, transparent 70%)', bottom: '10%', right: '-5%' }}
      />

      {/* Floating 3D shapes */}
      <FloatingTriangle />
      <FloatingSwirl />
      <FloatingDot style={{ top: '28%', right: '30%', width: '10px', height: '10px', animationDelay: '0.3s' }} />
      <FloatingDot style={{ top: '65%', right: '40%', width: '7px', height: '7px', animationDelay: '1.2s' }} />
      <FloatingDot style={{ top: '16%', left: '56%', width: '6px', height: '6px', animationDelay: '0.7s' }} />

      {/* Social sidebar */}
      <SocialSidebar />

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ════ LEFT — Text ════ */}
          <div className="space-y-5 relative z-10">
            <p className="text-cyan-400 text-sm font-semibold tracking-wider">
              Welcome to my portfolio!
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
              Hey There,This is{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              Shoumik.
              </span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              I'm a passionate front-end developer{' '}
              <span className="text-cyan-400 font-semibold"></span> skilled in creating dynamic, responsive, and visually appealing web applications. My expertise lies in technologies like React, Tailwind CSS, and JavaScript. I thrive on solving challenging problems and delivering seamless user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0891b2, #2563eb)' }}
              >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </button>

              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-md hover:shadow-cyan-400/20"
              >
                See my work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ════ RIGHT — Oval Profile Frame ════ */}
          <div className="relative flex items-center justify-center py-20">

            {/* Outer ambient glow behind oval */}
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: '320px', height: '400px',
                background: 'radial-gradient(ellipse, rgba(34,211,238,0.15) 0%, transparent 70%)',
                filter: 'blur(20px)',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Cyan gradient oval border */}
            <div className="relative"
              style={{
                width: '280px', height: '360px',
                borderRadius: '50%',
                padding: '3px',
                background: 'linear-gradient(135deg, #1e1b4b 100%)',
              }}
            >
              <div className=" rounded-full overflow-hidden" style={{ background: '#0f1e3a' }}>
                <img
                  src="/Images/1769886479042.png"
                  alt="Profile"
                  className="w-50 h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>

            {/* Small orbiting ring accents */}
            <div className="absolute rounded-full border-2 border-cyan-400/25 pointer-events-none"
              style={{ width: '38px', height: '38px', top: '12%', left: '18%', animation: 'floatOrbit 7s ease-in-out infinite' }}
            />
            <div className="absolute rounded-full border-2 border-blue-400/20 pointer-events-none"
              style={{ width: '22px', height: '22px', bottom: '14%', left: '14%', animation: 'floatOrbit 5s ease-in-out infinite', animationDelay: '1.5s' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* ── Animation keyframes ── */}
      <style>{`
        @keyframes floatTriangle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(6deg); }
        }
        @keyframes floatSwirl {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(-5deg); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50%       { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(8px); opacity: 0.3; }
        }
        @keyframes floatOrbit {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(10px, -14px) scale(1.1); }
          66%      { transform: translate(-8px, 6px) scale(0.9); }
        }
      `}</style>
    </section>
  );
};

export default About;
