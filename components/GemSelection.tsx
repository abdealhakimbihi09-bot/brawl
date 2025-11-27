// FIX: Replaced placeholder content with a functional GemSelection component
// to resolve module not found and parsing errors.
import React from 'react';
import GemIcon from './icons/GemIcon';

interface GemSelectionProps {
  onGenerate: (amount: number) => void;
}

const gemPacks = [
  { amount: 170, tag: 'Small Pack' },
  { amount: 360, tag: 'Medium Pack' },
  { amount: 950, tag: 'Large Pack', popular: true },
  { amount: 2000, tag: 'Mega Pack' },
];

const GemSelection: React.FC<GemSelectionProps> = ({ onGenerate }) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">Select Your Gem Pack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gemPacks.map((pack) => (
          <div
            key={pack.amount}
            onClick={() => onGenerate(pack.amount)}
            className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 text-center cursor-pointer hover:border-cyan-400 hover:scale-105 transition-all duration-300 group shadow-lg shadow-cyan-500/5"
          >
            {pack.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Popular
              </div>
            )}
            <GemIcon className="w-16 h-16 mx-auto mb-4 text-cyan-300 group-hover:text-yellow-300 transition-colors duration-300" />
            <p className="text-3xl font-bold text-white">{pack.amount.toLocaleString()}</p>
            <p className="text-sm text-gray-400 mb-6">{pack.tag}</p>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-2.5 px-4 rounded-lg group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 transform group-hover:scale-105">
              Generate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GemSelection;
