import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/ScrollToTop';

// Home page sections
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import DoctorsSection from '../components/home/DoctorsSection';
import EquipmentSection from '../components/home/EquipmentSection';
import LocationSection from '../components/home/LocationSection';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="home-page"
        >
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <HeroSection />
          </section>

          {/* Services Section */}
          <section id="services" className="py-0">
            <ServicesSection />
          </section>

          {/* Doctors Section */}
          <section id="doctors" className="py-0">
            <DoctorsSection />
          </section>

          {/* Equipment Section */}
          <section id="equipment" className="py-0">
            <EquipmentSection />
          </section>

          {/* Location Section */}
          <section id="location" className="py-0 bg-gray-50">
            <LocationSection />
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 