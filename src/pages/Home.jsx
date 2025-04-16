import React from 'react';
import { motion } from 'framer-motion';

// Home page sections
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import InterventionSection from '../components/home/InterventionSection';
import DoctorsSection from '../components/home/DoctorsSection';
import EquipmentSection from '../components/home/EquipmentSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PartnersSection from '../components/home/PartnersSection';
import LocationSection from '../components/home/LocationSection';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
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
      <section id="services" className="py-20">
        <ServicesSection />
      </section>

      {/* Intervention Section */}
      <section id="intervention" className="min-h-screen">
        <InterventionSection />
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20">
        <DoctorsSection />
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20">
        <EquipmentSection />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <FeaturesSection />
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <PartnersSection />
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <LocationSection />
      </section>
    </motion.div>
  );
};

export default Home; 