import React from 'react';

export const Logo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M7 7l5 5-5 5" />
    <path d="M12 7l5 5-5 5" />
  </svg>
);