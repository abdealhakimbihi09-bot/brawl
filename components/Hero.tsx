import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="animated-gradient-border rounded-xl mb-4">
        <div className="bg-[#0D1117] rounded-xl px-6 py-1">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Claim Your Free Brawl Stars Gems <span className="text-[#FFD93D]">💎</span>
          </h1>
        </div>
      </div>
      <p className="max-w-2xl text-base md:text-lg text-gray-300 mt-4">
        Unlock premium skins, gadgets, and brawlers — boost your gameplay with no limits.
      </p>
    </div>
  );
};

export default Hero;
