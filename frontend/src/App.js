import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Careers />
      <Blog />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
