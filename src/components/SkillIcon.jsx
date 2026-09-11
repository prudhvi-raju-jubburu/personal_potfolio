import React from 'react';

// Crisp SVG logos for skills
export const skillLogos = {
  html: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563z" fill="#E34F26"/>
      <path d="M12 2.188v19.46l7.359-2.046L20.89 2.188z" fill="#EF652A"/>
      <path d="M6.3 6.5h11.4l-.3 3.4H9.7l.3 3.4h6.8l-.7 7.7-4.1 1.1-4.1-1.1-.3-3.4H11l.1 1.5 1.8.5 1.8-.5.2-2.3H6.6z" fill="#FFFFFF"/>
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563z" fill="#1572B6"/>
      <path d="M12 2.188v19.46l7.359-2.046L20.89 2.188z" fill="#33A9DC"/>
      <path d="M6.3 6.5h11.4l-.3 3.4H9.7l.3 3.4h6.8l-.7 7.7-4.1 1.1-4.1-1.1-.3-3.4H11l.1 1.5 1.8.5 1.8-.5.2-2.3H6.6z" fill="#FFFFFF"/>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6.7 18.5c.6.9 1.5 1.5 2.8 1.5 1.3 0 2.2-.6 2.2-2.1v-7.4h2.7v7.5c0 3.2-1.9 4.5-4.9 4.5-2.4 0-4-1.2-4.7-2.6l1.9-1.4zm10.1 0c.7 1 1.7 1.6 3.1 1.6 1.4 0 2.3-.7 2.3-1.7 0-1.1-.8-1.6-2.4-2.2l-.9-.4c-2.4-.9-3.9-2.1-3.9-4.7 0-2.8 2.2-4.7 5.7-4.7 2.5 0 4.1.9 5.1 2.5l-1.9 1.3c-.6-.9-1.4-1.4-2.8-1.4-1.4 0-2.2.7-2.2 1.6 0 1 .7 1.5 2.3 2.1l.9.4c2.8 1.1 4.1 2.3 4.1 4.8 0 3.1-2.4 4.8-6.1 4.8-3.1 0-5-1.4-5.9-3.1l2.1-1.3z" fill="#000000" transform="scale(0.65) translate(6, 6)" />
    </svg>
  ),
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
      <path d="M12 2L2 7.7v11.5L12 25l10-5.8V7.7L12 2zm0 2.4l7.6 4.4v8.8L12 22l-7.6-4.4V8.8L12 4.4z" fill="#68A063"/>
      <path d="M12 7L6 10.5v7L12 21l6-3.5v-7L12 7z" fill="#83CD29" opacity="0.8"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
      <path fill="#E8E8E8" d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 11h-3v3h-2v-3H9v-2h3V9h2v3h3v2z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M12 1.5c-4.2 4.2-6 8.4-6 12.5 0 3.8 2.7 6.5 6 6.5s6-2.7 6-6.5c0-4.1-1.8-8.3-6-12.5zm0 17.5c-2.4 0-4.2-1.9-4.2-4.5 0-3.1 1.5-6.5 4.2-9.9 2.7 3.4 4.2 6.8 4.2 9.9 0 2.6-1.8 4.5-4.2 4.5z" fill="#47A248"/>
      <path d="M12 2.5v17c.1 0 .2.1.3.1 2.3 0 4-1.8 4-4.3 0-3-1.5-6.3-4.3-9.8z" fill="#499D4A"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M11.87 2c-5.2 0-4.88 2.26-4.88 2.26l.01 2.34h4.96v.7H5.06S2 7.02 2 12.27c0 5.26 2.67 5.07 2.67 5.07h1.6v-2.34s-.09-2.8 2.76-2.8h4.74s2.61.04 2.61-2.52V4.74S17.07 2 11.87 2zm-2.7 1.52a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB"/>
      <path d="M12.13 22c5.2 0 4.88-2.26 4.88-2.26l-.01-2.34h-4.96v-.7h6.9s3.06.28 3.06-4.97c0-5.26-2.67-5.07-2.67-5.07h-1.6v2.34s.09 2.8-2.76 2.8h-4.74s-2.61-.04-2.61 2.52v4.94S6.93 22 12.13 22zm2.7-1.52a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B"/>
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#EEEEEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v5.5L4.5 17a3 3 0 0 0 2.5 4.5h10a3 3 0 0 0 2.5-4.5L14 7.5V2" />
      <path d="M8.5 2h7" />
      <path d="M7 14h10" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M8.8 19.5c1.8.2 4.2.3 6.4-.4 0 0-1.2 1.5-4.2 1.5-2.7 0-3.9-.9-3.9-.9zm-1-2.2c2.4.3 5.4.4 8-.6 0 0-1.6 2-5.7 2-3.6 0-4.8-1.4-4.8-1.4zm10.7-3.7c0 0 .8 1.4-1 2.5-2.1 1.3-5.2.9-7.3.3-1.6-.4-3.3-1.1-4.7-.5-1.2.6.2 1.5.2 1.5s-1.8-.8-.9-2c.9-1.2 2.8-1.2 4.4-.9 2.5.5 5.5.9 7.7-.2.7-.4 1.6-.7 1.6-.7z" fill="#E76F00" />
      <path d="M14.5 9.6s.7-1.8.3-3.2c-.4-1.2-1.4-2.1-1.7-3.3 0 0-.2 1.3.4 2.4.7 1.3.9 2.1.2 3.5 0 0 1.4-.4.8.6z" fill="#5382A1" />
    </svg>
  ),
  cpp: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#00599C"/>
      <text x="12" y="15" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">C++</text>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#4479A1" strokeWidth="1.8">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M21.7 10.9L13.1 2.3c-.4-.4-1-.4-1.4 0L9.1 4.9c-.3.3-.4.8-.2 1.2l2.4 2.4v4.4c-.6.3-1 .9-1 1.6 0 1 1 1.9 2 1.9s2-.8 2-1.9c0-.7-.4-1.3-1-1.6V9.4l2.1-2.1 4.7 4.7c.4.4 1 .4 1.4 0l1.2-1.2c.4-.3.4-1 0-1.4z" fill="#F05032"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#F5F5F5">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#2496ED">
      <path d="M13.983 11.078h2.119v-2.02h-2.119v2.02zm-2.457 0h2.12v-2.02h-2.12v2.02zm-2.46 0h2.12v-2.02h-2.12v2.02zm-2.458 0h2.119v-2.02H6.608v2.02zm-2.459 0h2.12v-2.02h-2.12v2.02zm7.376-2.383h2.12V6.677h-2.12v2.018zm-2.46 0h2.12V6.677h-2.12v2.018zm-2.458 0h2.119V6.677H6.608v2.018zm4.917-2.384h2.12V4.295h-2.12v2.016zM.605 13.16c.414 2.8 2.628 6.44 8.795 6.44 6.485 0 9.774-4.108 10.741-7.794 1.134.1 3.257-.506 3.86-2.585-.926-.525-2.096-.454-2.888-.037-.47-1.782-1.748-2.656-1.748-2.656h-1.637v3.255H.605v3.377z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#FF9900">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8v7.6L12 19.4 5.2 15.6V8L12 4.2z" />
      <text x="12" y="14" fontSize="7" fontWeight="bold" fill="#FF9900" textAnchor="middle" fontFamily="sans-serif">AWS</text>
    </svg>
  ),
  ml: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
      <path d="M12 15v7" />
      <path d="M8 22h8" />
      <path d="M4 11a8 8 0 0 0 16 0" />
    </svg>
  ),
  genai: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#5EEAD4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
      <path d="M18 16l1.2 2.8L22 20l-2.8 1.2L18 24l-1.2-2.8L14 20l2.8-1.2L18 16z" />
    </svg>
  ),
};

const SkillIcon = ({ skillId, size = 20, className = '' }) => {
  const logo = skillLogos[skillId] || skillLogos.javascript;
  return (
    <div
      className={`skill-icon-wrap ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
    >
      {logo}
    </div>
  );
};

export default SkillIcon;
