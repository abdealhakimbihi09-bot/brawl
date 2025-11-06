// FIX: Implement the GemSelection component to resolve module not found and parsing errors.
import React from 'react';
import GemIcon from './icons/GemIcon';

interface GemSelectionProps {
  selectedGems: number | null;
  onSelectGems: (gems: number) => void;
  generateButtonRef: React.RefObject<HTMLDivElement>;
  onCardClick: () => void;
}

const gemOptions = [
  { amount: 170, tag: 'Popular' },
  { amount: 360 },
  { amount: 950, tag: 'Best Value' },
  { amount: 2000 },
];

const GemSelection: React.FC<GemSelectionProps> = ({ selectedGems, onSelectGems, generateButtonRef, onCardClick }) => {
  const handleSelect = (amount: number) => {
    onSelectGems(amount);
    onCardClick();
    setTimeout(() => {
      generateButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6 text-center">Select Your Free Gem Pack</h2>
      <div className="grid grid-cols-2 gap-4">
        {gemOptions.map(({ amount, tag }) => (
          <div
            key={amount}
            onClick={() => handleSelect(amount)}
            className={`gem-card relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedGems === amount
                ? 'border-cyan-400 bg-cyan-500/20 scale-105 shadow-lg shadow-cyan-500/20'
                : 'border-white/20 bg-white/5'
            }`}
          >
            {tag && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {tag}
              </div>
            )}
            <div className="flex flex-col items-center justify-center h-full pt-4">
              <GemIcon className="w-10 h-10 text-cyan-300 mb-2" />
              <span className="text-xl font-bold text-white">{amount.toLocaleString()}</span>
              <span className="text-sm text-gray-400">Gems</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GemSelection;
