import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const backgroundImages = [
    './images/main-background1.jpeg',
    './images/main-background2.jpeg',
    './images/main-background3.jpeg'
  ];

  useEffect(() => {
    // Set loaded state to true after timeout to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle scroll down button click - scroll to services section
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image Slider with Cross-fade */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div 
              key={index}
              className="absolute inset-0 transition-opacity duration-1500"
              style={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out'
              }}
            >
              <img 
                src={image} 
                alt="병원 배경" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-relaxed"
              variants={itemVariants}
            >
              건강검진을 넘어, 건강증진과<br />위험 예방, 치유까지 한번에.
            </motion.h1>
            
            <motion.div
              className="space-y-1"
              variants={itemVariants}
            >
              <p className="text-xl md:text-xl text-white">
                치료 중심에서 예방 중심으로 패러다임이 바뀌고 있는 시대에 
              </p>
              
              <p className="text-xl md:text-xl text-white mb-10">
                꼭 필요한 원스탑 의료 서비스를 제공하는 디케어센터
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white flex flex-col items-center"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-sm mb-2">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default HeroSection; 