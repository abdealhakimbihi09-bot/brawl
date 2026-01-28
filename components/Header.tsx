
import React from 'react';
import { Icons } from '../constants';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f14]/80 backdrop-blur-md px-4 py-3 flex items-center gap-3 border-b border-gray-800/50">
      <button className="p-1 hover:bg-gray-800 rounded-full transition-colors">
        <Icons.Back />
      </button>
      
      <div className="flex items-center gap-2 mr-1">
        <Icons.Logo />
      </div>

      <div className="flex-1 relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Icons.Search />
        </div>
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-500"
        />
      </div>
    </header>
  );
};

export default Header;
