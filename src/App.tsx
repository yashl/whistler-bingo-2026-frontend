import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Details from './components/Details';
import Itinerary from './components/Itinerary';
import BirthdayBingo from './components/BirthdayBingo';
import BingoQuestions from './components/BingoQuestions';

function Home() {
  return (
    <>
      <Hero />
      <BirthdayBingo />
      <Itinerary />
      <Details />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<BingoQuestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
