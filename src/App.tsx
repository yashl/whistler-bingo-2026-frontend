import Hero from './components/Hero';
import Details from './components/Details';
import Itinerary from './components/Itinerary';
import BirthdayBingo from './components/BirthdayBingo';


function App() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Hero />
      <BirthdayBingo />
      <Itinerary />
      <Details />
    </div>
  );
}

export default App;
