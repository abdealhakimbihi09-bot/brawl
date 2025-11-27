
import React from 'react';
import { StarIcon, CheckBadgeIcon, AndroidIcon, SafetyIcon, InfoIcon } from './Icons';

const Hero: React.FC = () => {
    const scrollToDownload = () => {
        const element = document.getElementById('download-section');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-[#1a1d24] p-6 md:p-10 neon-glow">
            {/* Background Accent */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/5 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                     <div className="h-32 w-32 md:h-40 md:w-40 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl flex items-center justify-center overflow-hidden border border-white/5">
                        <img 
                            src="https://play-lh.googleusercontent.com/yv-Z4jLp38tB8bYlC9WzR1wD8qhJ8f0yX6kG9l2pQ4oV5sU3tM7bN0xK1zD2eR4fHw=w240-h480-rw" 
                            alt="PvZ 2 Icon" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/200x200/1e293b/4ade80?text=PvZ+2";
                            }}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="rounded-md bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-400 border border-green-500/20">
                            MOD
                        </span>
                        <span className="flex items-center gap-1 rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-bold text-blue-400 border border-blue-500/20">
                            <CheckBadgeIcon className="h-3 w-3" /> VERIFIED
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                        Plants vs Zombies 2 <span className="text-gray-400 font-normal text-xl">(MOD, Unlimited Coins/Gems/Suns)</span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-1">
                            <span className="text-green-400 font-semibold">ELECTRONIC ARTS</span>
                        </div>
                        <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                        <div className="flex items-center gap-1">
                            <span>v12.7.1</span>
                        </div>
                         <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                        <div className="flex items-center gap-1">
                             <SafetyIcon className="w-4 h-4 text-green-400"/>
                            <span>Safe to Download</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 border-t border-b border-white/5 py-4">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Rating</span>
                            <div className="flex items-center gap-1 text-white font-bold">
                                4.3 <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            </div>
                        </div>
                         <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Reviews</span>
                            <div className="flex items-center gap-1 text-white font-bold">
                                1.6M+
                            </div>
                        </div>
                         <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Downloads</span>
                            <div className="flex items-center gap-1 text-white font-bold">
                                900M+
                            </div>
                        </div>
                         <div className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Size</span>
                            <div className="flex items-center gap-1 text-white font-bold">
                                902 MB
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={scrollToDownload}
                            className="flex-1 bg-green-500 hover:bg-green-400 text-black font-bold py-3.5 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            <AndroidIcon className="w-5 h-5" />
                            GO TO DOWNLOAD
                        </button>
                        <button className="sm:w-auto w-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                            <InfoIcon className="w-5 h-5" />
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
