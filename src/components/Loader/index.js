import React from 'react';
const Loader = () => (
  <div>
    <svg className="contentLoader" viewBox="0 0 50 50">
      <circle
        className="contentLoaderCircle"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="3.6"
      />
    </svg>
  </div>
);

export default Loader;
