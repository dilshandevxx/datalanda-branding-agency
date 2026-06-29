import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '1.4em', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '10px', color: 'inherit' }}
  >
    <path d="M 8 2 H 24 L 20 10 H 12 L 10 14 H 2 Z" fill="currentColor" />
    <path d="M 14 10 H 22 L 16 22 H 0 L 4 14 H 12 Z" fill="currentColor" opacity="0.5" />
  </svg>
);
