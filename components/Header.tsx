import React from 'react';

const Header: React.FC = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any)._kt) {
      (window as any)._kt();
    }
    window.location.href = 'YOUR_FINAL_DOWNLOAD_URL_HERE';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 font-bold text-black">
                L
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
                likomy<span className="text-green-500">.site</span>
            </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="text-white hover:text-green-400 transition-colors">Home</a>
            <a href="#" className="hover:text-green-400 transition-colors">Games</a>
            <a href="#" className="hover:text-green-400 transition-colors">Apps</a>
            <a href="#" className="hover:text-green-400 transition-colors">Tutorials</a>
        </nav>

        {/* Action Button */}
        <a 
            href="#" 
            onClick={handleDownload}
            className="hidden sm:flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-bold text-green-400 transition-all hover:bg-green-500 hover:text-black"
        >
            DOWNLOAD ORIGINAL
        </a>
      </div>
    </header>
  );
};

export default Header;