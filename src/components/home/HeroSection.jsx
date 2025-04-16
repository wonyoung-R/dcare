import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state to true after timeout to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background as fallback */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            첨단 의료 장비와 함께하는<br />
            <span className="text-primary">디케어 병원</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white mb-10 max-w-2xl"
            variants={itemVariants}
          >
            최첨단 의료장비와 전문 의료진의 협력으로
            환자 중심의 맞춤형 의료 서비스를 제공합니다.
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
              병원 둘러보기
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white flex flex-col items-center"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-sm mb-2">스크롤</span>
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