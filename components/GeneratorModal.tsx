import React, { useState, useEffect } from 'react';
import GemIcon from './icons/GemIcon';

interface GeneratorModalProps {
  gemAmount: number;
  onClose: () => void;
}

const steps = [
  "Connecting to Brawl Stars servers... 🔗",
  "Verifying player ID... ⚙️",
  "Generating gems... 💎",
];

const GeneratorModal: React.FC<GeneratorModalProps> = ({ gemAmount, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalDuration = 8000;
    const stepDuration = totalDuration / (steps.length + 1);
    
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, stepDuration);

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          setIsComplete(true);
          navigator.vibrate?.(200);
          return 100;
        }
        return p + 1;
      });
    }, (totalDuration / 100));

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900/70 border border-white/20 rounded-2xl w-full max-w-md p-8 shadow-2xl shadow-cyan-500/10 text-center relative overflow-hidden backdrop-blur-xl">
        
        {!isComplete ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Generating Your Gems</h2>
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-[#00C8FF]">
              <GemIcon className="w-6 h-6" /> {gemAmount.toLocaleString()}
            </div>

            <div className="mt-8 space-y-4 text-left">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  {index < currentStep && <span className="text-green-400">✅</span>}
                  {index === currentStep && <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>}
                  {index > currentStep && <span className="text-gray-500">⏳</span>}
                  <span className={`${index <= currentStep ? 'text-white' : 'text-gray-500'} transition-colors duration-300`}>{step}</span>
                </div>
              ))}
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-8 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-300 ease-linear" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{Math.round(progress)}% Complete</p>
          </>
        ) : (
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl">⚠️</span>
             </div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Almost Done!</h2>
            <p className="text-gray-300 text-base mb-6">Complete the final step to claim your gems.</p>
            <button
              onClick={onClose}
              className="bg-green-500 w-full text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
            >
              Complete Verification
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default GeneratorModal;