import React, { useState, useEffect } from 'react';
import BrawlStarsLogo from './icons/BrawlStarsLogo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/[.08] backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <BrawlStarsLogo className="h-8 w-8 text-yellow-300" />
          <span className="text-white font-bold text-xl hidden sm:block">Brawl Gems</span>
        </div>
        <nav className="flex items-center space-x-4 sm:space-x-8 text-sm sm:text-base">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Join Group</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Rewards</a>
          <a href="#" className="font-semibold text-white bg-white/10 px-3 py-1.5 rounded-md hover:bg-white/20 transition-colors duration-200">Support</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
