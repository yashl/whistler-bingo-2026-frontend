import { useState } from 'react';
import Login from './components/Login';
import Hero from './components/Hero';
import Details from './components/Details';
import Itinerary from './components/Itinerary';
import BirthdayBingo from './components/BirthdayBingo';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'bingo'>('home');

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Whistler 2026
            </span>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentPage === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
                  }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setCurrentPage('bingo')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentPage === 'bingo'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
                  }`}
              >
                Birthday Bingo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Details />
            <Itinerary />
          </>
        ) : (
          <BirthdayBingo />
        )}
      </main>
    </div>
  );
}

export default App;
