import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '1.2em', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '8px', color: 'inherit' }}
  >
    <path 
      d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" 
    />
  </svg>
);
