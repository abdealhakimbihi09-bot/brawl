
import React from 'react';
import { DownloadIcon, AndroidIcon } from './Icons';

const DownloadSection: React.FC = () => {
    return (
        <div id="download-section" className="mb-12 pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Available Downloads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* MOD Card */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                    <div className="relative flex flex-col p-6 bg-[#15171c] rounded-2xl h-full">
                        <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">
                            RECOMMENDED
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                             <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                                <AndroidIcon className="w-7 h-7" />
                             </div>
                             <div>
                                <h3 className="font-bold text-white text-lg">Download PvZ 2 MOD</h3>
                                <p className="text-xs text-gray-400">Unlimited Coins/Gems/Suns</p>
                             </div>
                        </div>

                        <div className="mt-auto space-y-3">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Version: 12.7.1</span>
                                <span>Size: 902 MB</span>
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                                <DownloadIcon className="w-5 h-5" />
                                DOWNLOAD APK (MOD)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Original Card */}
                <div className="flex flex-col p-6 bg-[#1a1d24] rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full">
                    <div className="flex items-center gap-4 mb-4">
                             <div className="h-12 w-12 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400">
                                <AndroidIcon className="w-7 h-7" />
                             </div>
                             <div>
                                <h3 className="font-bold text-white text-lg">Download Original</h3>
                                <p className="text-xs text-gray-400">Official Google Play Version</p>
                             </div>
                        </div>

                        <div className="mt-auto space-y-3">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Version: 12.7.1</span>
                                <span>Size: 902 MB</span>
                            </div>
                            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                                <DownloadIcon className="w-5 h-5" />
                                DOWNLOAD APK (ORIGINAL)
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
