
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Screenshots from './components/Screenshots';
import Description from './components/Description';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-200 font-sans selection:bg-green-500/30">
      <Header />
      
      <main className="container mx-auto max-w-5xl px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-xs text-gray-500">
            <a href="#" className="hover:text-green-400 transition-colors">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-green-400 transition-colors">Games</a>
            <span>/</span>
            <a href="#" className="hover:text-green-400 transition-colors">Strategy</a>
            <span>/</span>
            <span className="text-gray-300">PvZ 2 MOD</span>
        </div>

        <Hero />
        <Screenshots />
        <Description />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
