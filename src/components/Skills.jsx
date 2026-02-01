import React from 'react';

/* ───────────────── SVG LOGO ICONS ───────────────── */
const TailwindIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 6C12.8 6 6.8 10.8 5 18c1.8 5.4 6.6 9 12.2 9 2.8 0 5.2-1.4 6.8-3.2C25.6 26.6 29.2 30 35 30c-1.8-7.2-7.8-12-15-12C16.2 18 13.4 14.6 20 6z" fill="#06B6D4"/>
    <path d="M20 6c-2.6 3.2-5.8 5-8.8 6.2C8.4 13.4 6 15.4 5 18c1.8 5.4 6.6 9 12.2 9 .8 0 1.5-.1 2.2-.2-3.2-.8-5.6-3.6-5.6-7 0-1.8.7-3.4 1.8-4.6 1.6-1.8 4-2.8 6.4-2.8" fill="#22D3EE"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="7" fill="#3178C6"/>
    <path d="M6 23v2.8h9.8v1.9H6v3.8h17.2v-1.9H15.5v-1.9h7.8v-1.9H15.5V23H6z" fill="white"/>
    <path d="M25.6 17.8c0-.7-.2-1.3-.6-1.7-.4-.5-1.1-.8-1.9-1.1-.8-.3-1.6-.4-2.5-.4-1 0-1.8.2-2.5.5-.6.4-1 .8-1.1 1.4l2.1.4c.1-.2.4-.4.8-.4s.7.2.7.5c0 .4-.5.5-1.4.7-1.1.3-1.9.6-2.5 1.2-.7.5-.9 1.3-.8 2.2l2.2-.1c0-.5.1-.7.3-.9.2-.2.6-.3 1.2-.5 1.1-.2 2-.6 2.7-1.1.7-.5 1.1-1.1 1.1-1.9z" fill="white"/>
    <path d="M24.2 14.4c-.6.3-1 0-1-.4v-.9c0-3.2-1.9-5-4.5-5-1.6 0-2.9.7-3.6 1.5.3-.1.6-.1.9 0 .6.2 1.1.7 1.1 1.4 0 .5-.2.8-.5 1.1-.4.3-1 .5-1.5.3-.3-.1-.5-.2-.7-.2-1.1 0-1.8.8-1.8 2v.9c0 .5-.6.7-1 .5l-.9-.5c-.3-.2-.6 0-.6.3v4c0 .5.6.6.9.4l5.2-3c .3-.2.5-.2.8 0l5.2 3c.4.2.9-.1.9-.4v-2.5c0-.2-.1-.3-.3-.5z" fill="white"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="4.5" fill="#61DAFB"/>
    <ellipse cx="20" cy="20" rx="18.5" ry="7" stroke="#61DAFB" strokeWidth="2.2" fill="none"/>
    <ellipse cx="20" cy="20" rx="18.5" ry="7" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(60 20 20)"/>
    <ellipse cx="20" cy="20" rx="18.5" ry="7" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(-60 20 20)"/>
  </svg>
);

const HTMLIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M4 5h32l-2.8 27-13.2 3.8L7.8 32 5 5z" fill="#E34C26"/>
    <path d="M20 34.2l-10-3-2.2-17.8h24.4L30 31.2 20 34.2z" fill="#F15A24"/>
    <path d="M20 30.5l-6.7-1.9-.6-7.4h2.3l.4 4.4 4.6 1.4 4.6-1.4.6-3.2h2.3l-1.1 7.3-6.4 1.8z" fill="white"/>
    <path d="M12.6 15.8h15l-.5 2.2h-9.5l.3 2.8h9l-.5 2.2h-10.8l-2.7-7.2z" fill="white" opacity="0.65"/>
  </svg>
);

const CSSIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M4 5h32l-2.8 27-13.2 3.8L7.8 32 5 5z" fill="#264653"/>
    <path d="M20 34.2l10-3 2.2-17.8H7.6L10.2 31l9.8 3.2z" fill="#2A9D8F"/>
    <path d="M24.2 15.8H12.6l.5 2.2h9.5l-.3 2.2h-7.4l.3 2.2h7.1l-.5 2.2-4.7 1.1-4.3-1.1-.2-2.2h-2.3l.6 3.6 6.2 1.7 6.2-1.7 1.2-5.5H17l.3-2.2h9.8l.5-2.2h-3.4z" fill="white"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M21.8 5.5c-2 5.7-6.2 10.8-11.3 13.9-1.1.7-2.3 1.2-3.5 1.6 0 3.6.2 7.3 1.1 10.7 1.5 5.5 5.9 8.8 10.9 9.8.5.1 1 .2 1.5.2s1-.1 1.5-.2c5-1 9.4-4.3 10.9-9.8.9-3.4 1.1-7.1 1.1-10.7-1.2-.4-2.4-1-3.5-1.6C21.4 15 17.8 11.2 21.8 5.5z" fill="#4DB33D"/>
    <path d="M21.3 34.8V17.2c0-.4.2-.8.6-.9.4-.2.8-.1 1.1.2 2.9 3 5.3 6.8 6.9 10.5.3.7-.2 1.6-.9 1.6h-7.7z" fill="#3E8F35" opacity="0.55"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M28.5 11.5c-.3-.7-.8-1.4-1.4-1.7.8 2.2.8 4.4.5 5.8-.1 0-.1 0-.1-.1-.5-1.3-1.3-2.3-2.2-3.1-.6-.4-1-.8-1.4-1-.3-.2-.4-.3-.6-.4-.1-.1-.2-.2-.2-.4-.1-.2 0-.4.1-.5.2-.3.5-.7.7-.8 0 0 0 0 0 0-.3.1-.6.3-.9.4-.9.6-1.8 1.2-2.6 2-1.1 1.2-1.9 2.7-2.3 4.3-.1.3-.2.6-.2.8 0 .1 0 .2 0 .3-.3-.1-.5-.3-.6-.5-.4-.7-.4-1.5-.3-2.1 0-.2.1-.4.1-.5 0 0 0 0 0 0-.2.2-.3.4-.5.6-.6.9-.9 2-1.1 3-.1.6-.1 1.2.1 1.8 0 .1.1.2.1.3.2.5.5 1.1.9 1.5.4.6.8.9 1.4 1.2.5.3 1.1.5 1.7.7.7.1 1.5.1 2.2 0 2.1-.5 3.6-2.1 4-4.1.2-1.5-.2-3-.7-4.1-.9-2.2-2.3-3.5-2.7-4.1.4.5 1.1 1.5 1.3 2.4z" fill="#FFA726"/>
    <path d="M25 20.5c-.1.2-.3.3-.5.4-.5.2-.8.2-1.3-.1-.4-.3-.7-.7-1.1-1.1-.4-.5-.7-1.1-1.1-1.6-.1-.1-.2-.3-.3-.4.3.5.6.9 1 1.3.4.3.8.6 1.3.8.3.1.5.2.8.2.1 0 .2 0 .3 0 .3-.1.5-.2.6-.5.2-.2.3-.4.4-.6z" fill="#FF7043"/>
  </svg>
);

const NodeJSIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 3.5L3.5 12.5v15L20 36.5l16.5-9v-15L20 3.5z" fill="#68A51C" opacity="0.3"/>
    <path d="M20 6.5l-13.2 7.6v11L20 33l13.2-7.9V13.5L20 6.5z" fill="#68A51C"/>
    <path d="M14.8 17.8c-.3 0-.5.2-.5.5v8.6c0 .5.5.7 1 .5l5.5-3.2c.3-.2.3-.6 0-.7l-5.5-4.8c-.2-.2-.3-.2-.5 0z" fill="white"/>
    <path d="M25.2 13.8c-.5.2-1 0-1-.5v-.9c0-3.2-2-5.1-4.7-5.1-1.6 0-2.9.7-3.5 1.4.2-.1.6-.1.9 0 .6.2 1 .7 1 1.3 0 .5-.2.8-.4 1.1-.4.3-.9.4-1.4.3-.2-.1-.5-.1-.7-.1-1 0-1.7.7-1.7 1.9v.9c0 .5-.5.7-.9.5l-.8-.5c-.2-.1-.6 0-.6.3v3.6c0 .4.5.6.8.4l5-2.8c.2-.1.5-.1.7 0l5 2.8c.4.2.8-.1.8-.4V14c0-.2-.1-.3-.2-.4z" fill="white"/>
  </svg>
);

const SQLIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="7" fill="#336791"/>
    <text x="5" y="27" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900" fill="white">SQL</text>
  </svg>
);

const ExpressIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="7" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
    <text x="4" y="27" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" fontStyle="italic">ex</text>
  </svg>
);

/* ───────────────── SKILLS DATA ───────────────── */
const row1 = [
  { Icon: TailwindIcon, name: 'TAILWIND CSS', desc: 'Simplifies styling with utility classes.' },
  { Icon: ReactIcon, name: 'REACT JS', desc: 'Builds dynamic user interfaces.' },
  { Icon: HTMLIcon, name: 'HTML', desc: 'Structures web content.' },
  { Icon: CSSIcon, name: 'CSS', desc: 'Styles and formats websites.' },
  { Icon: TailwindIcon, name: 'TAILWIND CSS', desc: 'Simplifies styling with utility classes.' },
  { Icon: ReactIcon, name: 'REACT JS', desc: 'Builds dynamic user interfaces.' },
  { Icon: HTMLIcon, name: 'HTML', desc: 'Structures web content.' },
  { Icon: CSSIcon, name: 'CSS', desc: 'Styles and formats websites.' },
];

const row2 = [
  { Icon: TailwindIcon, name: 'TAILWIND', desc: 'Simplifies styling with utility classes.' },
  { Icon: ReactIcon, name: 'REACT JS', desc: 'Builds dynamic user interfaces.' },
  { Icon: HTMLIcon, name: 'HTML', desc: 'Structures web content.' },
  { Icon: CSSIcon, name: 'CSS', desc: 'Styles and formats websites.' },
  { Icon: TailwindIcon, name: 'TAILWIND CSS', desc: 'Simplifies styling with utility classes.' },
  { Icon: ReactIcon, name: 'REACT JS', desc: 'Builds dynamic user interfaces.' },
  { Icon: HTMLIcon, name: 'HTML', desc: 'Structures web content.' },
  { Icon: CSSIcon, name: 'CSS', desc: 'Styles and formats websites.' },
];
/* ───────────────── SINGLE CARD ───────────────── */
const SkillCard = ({ Icon, name, desc }) => (
  <div className="flex-shrink-0 w-64 bg-[#1a1f2e] border border-[#2a3144] rounded-2xl p-5 flex flex-col gap-3 hover:border-cyan-500/40 hover:bg-[#1e2638] transition-all duration-300">
    <div className="flex items-center gap-3">
      <Icon />
      <span className="text-white font-bold text-sm tracking-wider">{name}</span>
    </div>
    <p className="text-[#5a6478] text-xs leading-relaxed">{desc}</p>
  </div>
);

/* ───────────────── MARQUEE ROW ───────────────── */
const MarqueeRow = ({ items, direction = 'left', duration = 30 }) => {
  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden relative"
      style={{ '--marquee-paused': 'running' }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Card strip */}
      <div
        className="flex gap-4 marquee-strip"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {doubled.map((item, i) => (
          <SkillCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

/* ───────────────── MAIN SECTION ───────────────── */
const Skills = () => (
  <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center py-24 bg-black overflow-hidden">
    {/* Subtle ambient glows */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-64 bg-cyan-500/[0.04] blur-3xl pointer-events-none rounded-full" />
    <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-2/3 h-64 bg-blue-500/[0.04] blur-3xl pointer-events-none rounded-full" />

    {/* Heading */}
    <div className="text-center mb-14 relative z-10 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
        Technologies I Use
      </h2>
      <p className="text-[#5a6478] text-base max-w-xl mx-auto">
        Technologies and tools I use to build modern, scalable, and interactive websites.
      </p>
    </div>

    {/* Two marquee rows */}
    <div className="w-full space-y-4 relative z-10">
      <MarqueeRow items={row1} direction="left" duration={35} />
      <MarqueeRow items={row2} direction="right" duration={40} />
    </div>

    {/* Keyframes */}
    <style>{`
      @keyframes marquee-left {
        0%   { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0%   { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `}</style>
  </section>
);

export default Skills;
