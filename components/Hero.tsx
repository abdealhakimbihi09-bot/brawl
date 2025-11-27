
import React from 'react';
import { StarIcon, CheckBadgeIcon, AndroidIcon, SafetyIcon, InfoIcon } from './Icons';

const Hero: React.FC = () => {
    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && (window as any)._kt) {
            (window as any)._kt();
        }
        window.location.href = 'YOUR_FINAL_DOWNLOAD_URL_HERE';
    };

    return (
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-[#1a1d24] p-6 shadow-2xl neon-glow border border-white/5">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Game Icon */}
                <div className="relative flex-shrink-0">
                    <img 
                        src="https://i.postimg.cc/Gm4s9mrM/images.jpg" 
                        alt="PvZ 2 Icon" 
                        className="h-32 w-32 rounded-2xl shadow-lg object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-black/60 backdrop-blur-md rounded-full p-1.5 border border-white/10">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-5 h-5" alt="Play Store" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-grow text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                        <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Verified Safe</span>
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Updated</span>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                        Plants vs Zombies 2 <span className="text-green-500">(MOD)</span>
                    </h1>
                    
                    <p className="text-gray-400 text-sm">
                        Unlimited Coins • Unlimited Gems • Unlimited Suns • All Plants Unlocked
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium text-gray-400 mt-4">
                        <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 text-yellow-400" />
                            <span className="text-white">4.3</span>
                            <span>(1.6M+ Reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <AndroidIcon className="w-4 h-4 text-green-500" />
                            <span>Android 5.0+</span> 
                        </div>
                        <div className="flex items-center gap-1">
                            <InfoIcon className="w-4 h-4 text-blue-400" />
                            <span>12.7.1</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 border-t border-white/5 pt-6">
                <button 
                    onClick={handleDownload}
                    className="w-full sm:w-auto flex-grow bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-3.5 px-8 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                    GO TO DOWNLOAD
                </button>
                
                <div 
                    onClick={handleDownload}
                    className="cursor-pointer flex items-center gap-2 text-green-400 text-xs font-semibold bg-green-500/5 px-4 py-2 rounded-lg border border-green-500/10 hover:bg-green-500/10 transition-colors"
                >
                    <SafetyIcon className="w-4 h-4" />
                    Safe to Download
                </div>
            </div>
        </div>
    );
};

export default Hero;
