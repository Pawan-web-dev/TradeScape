import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Homepage from './pages/Homepage';
import LiveMarkets from './pages/LiveMarkets';
import TradingIdeas from './pages/TradingIdeas';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Loader isLoading={isLoading} />
        
        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/markets" element={<LiveMarkets />} />
                <Route path="/ideas" element={<TradingIdeas />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;