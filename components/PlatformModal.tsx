
import React, { useEffect } from 'react';
import { Game } from '../types';
import { Icons } from '../constants';

interface PlatformModalProps {
  game: Game;
  onClose: () => void;
  onSelect: (platform: 'android' | 'ios') => void;
}

const PlatformModal: React.FC<PlatformModalProps> = ({ game, onClose, onSelect }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white text-gray-900 w-full max-w-[420px] rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_40px_rgba(59,130,246,0.15)] border border-blue-50/50 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Icons.Close />
        </button>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 mb-6">
            <img 
              src={game.imageUrl} 
              alt={game.title} 
              className="w-full h-full object-cover rounded-[24px] shadow-xl border-4 border-white"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2 tracking-tight">
            {game.title}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-8 px-4 leading-relaxed">
            Choose your device platform to continue with the download
          </p>

          <div className="w-full space-y-4">
            <button
              onClick={() => onSelect('android')}
              className="w-full flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 p-5 rounded-2xl transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 group-hover:bg-blue-100 p-2.5 rounded-xl transition-colors text-gray-600 group-hover:text-blue-600">
                  <Icons.Android />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[15px]">Android</div>
                  <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">APK + OBB File</div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-blue-500 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>

            <button
              onClick={() => onSelect('ios')}
              className="w-full flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 p-5 rounded-2xl transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 group-hover:bg-blue-100 p-2.5 rounded-xl transition-colors text-gray-600 group-hover:text-blue-600">
                  <Icons.Apple />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[15px]">iOS Device</div>
                  <div className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">IPA Install Package</div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-blue-500 group-hover:bg-blue-500/10 flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformModal;
