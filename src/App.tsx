import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Compatibility from './components/Compatibility';
import CloudAdapter from './components/CloudAdapter';
import BandwidthCalculator from './components/BandwidthCalculator';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Compatibility />
      <CloudAdapter />
      <BandwidthCalculator />
      <Pricing />
    </div>
  );
}

export default App;