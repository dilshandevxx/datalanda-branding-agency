import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '1.2em', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '8px', color: 'inherit' }}
  >
    {/* Cloud outline */}
    <path 
      d="M25 65C16.7157 65 10 58.2843 10 50C10 41.7157 16.7157 35 25 35C26.5413 35 28.0284 35.2323 29.4294 35.6588C32.1805 24.5126 42.1384 16 54 16C68.3594 16 80 27.6406 80 42C80 43.1979 79.919 44.3768 79.7628 45.5312C85.7366 48.069 90 53.9782 90 61C90 69.8366 82.8366 77 74 77H35" 
      stroke="currentColor" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Lab Flask inside */}
    <path 
      d="M50 35L38 65H62L50 35Z" 
      stroke="#00f0ff" 
      strokeWidth="5" 
      strokeLinejoin="round"
    />
    {/* Flask Neck */}
    <path 
      d="M48 20V35M52 20V35" 
      stroke="#00f0ff" 
      strokeWidth="5" 
      strokeLinecap="round"
    />
    {/* Digital dot */}
    <circle cx="50" cy="55" r="4" fill="#00f0ff" />
  </svg>
);
