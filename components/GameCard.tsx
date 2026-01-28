
import React, { useState } from 'react';
import { Game } from '../types';
import { Icons } from '../constants';

interface GameCardProps {
  game: Game;
  onInstall: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onInstall }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      onClick={() => onInstall(game)}
      className="bg-gray-900/60 rounded-[20px] p-4 flex flex-col h-full border border-gray-800/50 hover:border-gray-700 transition-all hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer"
    >
      <div className="flex flex-col items-center flex-1">
        <div className="relative w-24 h-24 mb-3 sm:w-28 sm:h-28">
          <img
            src={imgError ? `https://ui-avatars.com/api/?name=${encodeURIComponent(game.title)}&background=1e293b&color=fff&size=128` : game.imageUrl}
            alt={game.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-[22px] shadow-lg border border-gray-800"
          />
        </div>
        
        <h3 className="text-white text-[15px] font-semibold text-center leading-tight line-clamp-2 mb-2 h-10 overflow-hidden">
          {game.title}
        </h3>

        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex gap-1">
            {game.devices.includes('android') && <div className="text-gray-400"><Icons.Android /></div>}
            {game.devices.includes('ios') && <div className="text-gray-400"><Icons.Apple /></div>}
          </div>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-tight">{game.size}</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full" />
          <div className="flex items-center gap-0.5">
            <Icons.Star />
            <span className="text-[11px] font-bold text-gray-200">{game.rating}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          onInstall(game);
        }}
        className="w-full bg-[#1d4ed8] hover:bg-blue-600 text-white py-2 rounded-full flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-500/10"
      >
        <Icons.Download />
        INSTALL
      </button>
    </div>
  );
};

export default GameCard;
