
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-white/5 bg-[#0f1115]">
      <p className="text-sm text-gray-600">
        © 2025 likomy.site — All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4 text-xs text-gray-600">
        <a href="#" className="hover:text-gray-400">DMCA</a>
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
