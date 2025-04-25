import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import DemoForm from './components/DemoForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Testimonials />
      <DemoForm />
      <Contact />
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}

export default App;