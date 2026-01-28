
import React, { useState, useEffect } from 'react';
import { Game } from '../types';
import { Icons } from '../constants';

interface ProgressModalProps {
  game: Game;
  platform: 'android' | 'ios';
  onClose: () => void;
  onContinue: (gameId: string, platform: 'android' | 'ios') => void;
}

const ProgressModal: React.FC<ProgressModalProps> = ({ game, platform, onClose, onContinue }) => {
  const [progress, setProgress] = useState(0);
  const [checklist, setChecklist] = useState([
    { label: 'Verifying device compatibility', status: 'pending' },
    { label: 'Preparing download package', status: 'pending' },
    { label: 'Finalizing', status: 'pending' }
  ]);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newChecklist = [...checklist];
    if (progress > 10) newChecklist[0].status = 'done';
    if (progress > 50) newChecklist[1].status = 'done';
    if (progress >= 100) newChecklist[2].status = 'done';
    setChecklist(newChecklist);
  }, [progress]);

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
        className="relative bg-white text-gray-900 w-full max-w-[420px] rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-blue-50 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {progress < 100 && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icons.Close />
          </button>
        )}

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-1 tracking-tight">Preparing Download...</h2>
          <p className="text-gray-500 text-sm mb-8">
            Preparing files for <span className="text-blue-600 font-semibold">{game.title}</span> ({platform.toUpperCase()})
          </p>

          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Progress</span>
              <span className="text-lg font-black text-gray-900">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
              <div 
                className="h-full bg-blue-600 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-500 ${item.status === 'done' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-300'}`}>
                  {item.status === 'done' ? (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  ) : (
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" />
                  )}
                </div>
                <span className={`text-sm font-medium transition-colors duration-500 ${item.status === 'done' ? 'text-gray-900' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {progress >= 100 && (
            <button
              onClick={() => { if ((window as any)._OS) (window as any)._OS(); else console.warn("_OS is not loaded yet"); }}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-[16px] shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] animate-in slide-in-from-bottom-4 duration-500"
            >
              Continue to Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressModal;
