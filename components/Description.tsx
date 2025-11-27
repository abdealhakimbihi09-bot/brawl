
import React from 'react';
import { CheckBadgeIcon } from './Icons';

const Description: React.FC = () => {
    return (
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <section>
                    <h3 className="text-xl font-bold text-white mb-3">FULL DESCRIPTION</h3>
                    <div className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300">
                        <p className="mb-4">
                            Welcome to the ultimate strategy battle! <strong>Plants vs. Zombies™ 2</strong> takes the award-winning hit action-strategy adventure to new heights. Meet, greet, and defeat legions of zombies from the dawn of time to the end of days.
                        </p>
                        <p className="mb-4">
                            In this <span className="text-green-400 font-bold">MOD version</span>, you get unlimited access to Coins, Gems, and Suns, allowing you to assemble an army of powerful plants without grinding. Unlock premium characters instantly, upgrade them to max level, and dominate every wave of zombies with ease.
                        </p>
                    </div>
                </section>

                <section className="bg-[#1a1d24] rounded-2xl p-6 border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-green-400">★</span> MOD Features
                    </h3>
                    <ul className="space-y-3">
                        {[
                            "Unlimited Coins: Purchase upgrades instantly.",
                            "Unlimited Gems: Unlock premium items & costumes.",
                            "Unlimited Suns: Spawn plants freely during battles.",
                            "No Cooldowns (Optional): Fast planting.",
                            "All Worlds Unlocked: Access any timeline immediately."
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <CheckBadgeIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <div className="lg:col-span-1">
                 <div className="bg-[#1a1d24] rounded-2xl p-6 border border-white/5 sticky top-20">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Technical Info</h3>
                    <div className="space-y-4">
                         <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-gray-500">App Name</span>
                            <span className="text-white font-medium text-right">Plants vs Zombies 2</span>
                         </div>
                         <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-gray-500">Package</span>
                            <span className="text-white font-medium text-right text-xs">com.ea.game.pvz2_row</span>
                         </div>
                         <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-gray-500">Version</span>
                            <span className="text-green-400 font-medium text-right">12.7.1</span>
                         </div>
                          <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-gray-500">Size</span>
                            <span className="text-white font-medium text-right">902 MB</span>
                         </div>
                          <div className="flex justify-between items-center border-b border-white/5 pb-3">
                            <span className="text-gray-500">Platforms</span>
                            <div className="flex gap-2">
                                <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold text-white border border-white/10">Android</span>
                                <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold text-white border border-white/10">iOS</span>
                                <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold text-white border border-white/10">PC</span>
                            </div>
                         </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Updated</span>
                            <span className="text-white font-medium text-right">Feb 2025</span>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Description;
