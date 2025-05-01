import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Academics from './components/Academics';
import CampusLife from './components/CampusLife';
import News from './components/News';
import Admissions from './components/Admissions';
import Footer from './components/Footer';

// Import global CSS for animations
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Academics />
      <CampusLife />
      <News />
      <Admissions />
      <Footer />
    </div>
  );
}

export default App;