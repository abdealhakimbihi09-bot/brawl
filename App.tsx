import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GemSelection from './components/GemSelection';
import GeneratorModal from './components/GeneratorModal';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  const [selectedGems, setSelectedGems] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [pulseButton, setPulseButton] = useState(false);
  const generateButtonSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (pulseButton) {
      const timer = setTimeout(() => setPulseButton(false), 2000); // Pulse duration
      return () => clearTimeout(timer);
    }
  }, [pulseButton]);

  const handleGenerateClick = () => {
    if (selectedGems) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      <BackgroundParticles />
      
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4">
        <Header />
        <main className="flex-grow w-full max-w-5xl flex flex-col items-center justify-center pt-24 pb-12 text-center">
          <div style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: 1 - scrollY / 500, willChange: 'transform, opacity' }}>
            <Hero />
          </div>

          <div className="w-full max-w-lg mt-8 p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl shadow-lg">
            <GemSelection 
              selectedGems={selectedGems} 
              onSelectGems={setSelectedGems} 
              generateButtonRef={generateButtonSectionRef}
              onCardClick={() => setPulseButton(true)}
            />
            <div ref={generateButtonSectionRef} className="mt-8 max-w-md mx-auto">
              <button
                onClick={handleGenerateClick}
                disabled={!selectedGems}
                className={`w-full py-4 text-lg font-bold text-white rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  selectedGems ? 'btn-float bg-gradient-to-r from-[#00C8FF] to-[#0078D7]' : 'bg-gray-700'
                } ${pulseButton ? 'btn-pulse' : ''}`}
              >
                Generate Now 🚀
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      {isModalOpen && selectedGems && (
        <GeneratorModal
          gemAmount={selectedGems}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;