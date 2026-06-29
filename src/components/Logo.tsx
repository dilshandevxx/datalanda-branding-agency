import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 32 32" 
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '2.5rem', width: 'auto', display: 'inline-block', verticalAlign: 'middle', color: 'inherit' }}
  >
    <mask id="skylabs-s-mask">
      <path d="M 0 0 H 24 L 32 8 V 32 H 8 L 0 24 Z" fill="white" />
      <path d="M 26 3.5 H 6 V 18.5 H 21 V 23.5 H 6 V 28.5 H 26 V 13.5 H 11 V 8.5 H 26 Z" fill="black" />
    </mask>
    <rect width="32" height="32" fill="currentColor" mask="url(#skylabs-s-mask)" />
  </svg>
);
