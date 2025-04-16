import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
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
  // Fullpage.js options
  const fullpageOptions = {
    licenseKey: 'YOUR_KEY_HERE', // Replace with your license key or use OPEN-SOURCE-GPLV3
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [
      '홈', '의료서비스', '인터벤션', '의료진', '의료장비', '병원특징', '협력기관', '오시는 길'
    ],
    showActiveTooltip: false,
    anchors: ['home', 'services', 'intervention', 'doctors', 'equipment', 'features', 'partners', 'location'],
    sectionsColor: ['#ffffff', '#f8fafc', '#ffffff', '#f8fafc', '#ffffff', '#f1f5f9', '#ffffff', '#f8fafc'],
    responsiveWidth: 768, // Disable fullpage.js on mobile
    afterLoad: (origin, destination, direction) => {
      // You can add custom logic here after a section loads
    },
    render: ({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {/* Hero Section */}
          <div className="section fp-auto-height-responsive">
            <HeroSection fullpageApi={fullpageApi} />
          </div>

          {/* Services Section */}
          <div className="section">
            <ServicesSection />
          </div>

          {/* Intervention Section */}
          <div className="section">
            <InterventionSection />
          </div>

          {/* Doctors Section */}
          <div className="section">
            <DoctorsSection />
          </div>

          {/* Equipment Section */}
          <div className="section">
            <EquipmentSection />
          </div>

          {/* Features Section */}
          <div className="section">
            <FeaturesSection />
          </div>

          {/* Partners Section */}
          <div className="section">
            <PartnersSection />
          </div>

          {/* Location Section */}
          <div className="section fp-auto-height">
            <LocationSection />
          </div>
        </ReactFullpage.Wrapper>
      );
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="home-page"
    >
      <ReactFullpage
        {...fullpageOptions}
      />
    </motion.div>
  );
};

export default Home; 