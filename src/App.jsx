import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tomorrow from './components/Tomorrow';
import Progress from './components/Progress';
import Offerings from './components/Offerings';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Tomorrow />
      <Progress />
      <Offerings />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
