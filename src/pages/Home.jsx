import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
  // 페이지 로드 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // 추가 대비책으로 setTimeout으로 스크롤 다시 실행
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="home-page responsive-text-container"
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
  );
};

export default Home; 