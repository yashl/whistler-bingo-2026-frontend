import { useState } from 'react';
import Login from './components/Login';
import Hero from './components/Hero';
import Details from './components/Details';
import Itinerary from './components/Itinerary';
import RSVP from './components/RSVP';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Hero />
      <Details />
      <Itinerary />
      <RSVP />
    </div>
  );
}

export default App;
