// FIX: Implement the GemIcon component to resolve module not found and parsing errors.
import React from 'react';

const GemIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.001 2.02c.79 0 1.54.31 2.09.87l6.59 6.59c.56.56.87 1.3.87 2.09s-.31 1.54-.87 2.09l-6.59 6.59c-.56.56-1.3.87-2.09.87s-1.54-.31-2.09-.87L3.32 13.66c-.56-.56-.87-1.3-.87-2.09s.31-1.54.87-2.09L9.91 2.89c.55-.56 1.3-.87 2.09-.87zm0 2c-.52 0-1.01.2-1.38.58L4 11.19c-.38.38-.58.86-.58 1.38s.2 1 .58 1.38l6.59 6.59c.38.38.86.58 1.38.58s1.01-.2 1.38-.58l6.59-6.59c.38-.38.58-.86.58-1.38s-.2-1-.58-1.38L13.38 4.6c-.37-.38-.86-.58-1.38-.58z" />
  </svg>
);

export default GemIcon;
