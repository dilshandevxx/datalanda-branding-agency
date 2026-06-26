import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="none" 
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '1.2em', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '8px', color: 'inherit' }}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#666" />
      </linearGradient>
    </defs>
    <path 
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" 
      stroke="url(#logo-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <polyline 
      points="3.27 6.96 12 12.01 20.73 6.96" 
      stroke="url(#logo-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <line 
      x1="12" y1="22.08" x2="12" y2="12" 
      stroke="url(#logo-gradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);
