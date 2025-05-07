import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'MediBook - Easy Medical Appointments';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;