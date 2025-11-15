import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import GetInTouch from './components/GetInTouch/GetInTouch';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';
import './App.css';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

const Home = () => (
  <>
    <Hero />
    <WhyChooseUs />
    <Projects />
    <GetInTouch />
    <WhatsAppButton />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
