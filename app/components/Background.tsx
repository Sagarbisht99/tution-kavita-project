import React from "react";

const Background = () => (
  <div
    className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-white"
    aria-hidden="true"
  >
    {/* SVG Grid Pattern */}
    <svg
      className="absolute inset-0 w-full h-full"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '100vw', minHeight: '100vh' }}
    >
      <defs>
        <pattern id="smallGrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        </pattern>
        <pattern id="grid" width="128" height="128" patternUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="url(#smallGrid)" />
          <path d="M 128 0 L 0 0 0 128" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default Background; 