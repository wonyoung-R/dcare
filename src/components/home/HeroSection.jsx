import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ResponsiveText from '../common/ResponsiveText';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const backgroundImages = [
    './images/main-background1.webp',
    './images/main-background2.webp',
    './images/main-background3.webp'
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
      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <ResponsiveText 
                as="h1" 
                variant="title" 
                className="text-white mb-2 sm:mb-4 mx-auto"
              >
                {t('hero.title')}
              </ResponsiveText>
            </motion.div>
            
            <motion.div
              className="space-y-2 mt-2"
              variants={itemVariants}
            >
              {/* <ResponsiveText 
                variant="body" 
                className="text-white opacity-90 mx-auto"
              >
                {t('hero.subtitle1')}
              </ResponsiveText> */}
              
              {/* 모바일용 텍스트 (기본적으로 보이고, md 크기 이상에서는 숨김) */}
              {/* <p className="text-white opacity-90 mb-4 sm:mb-6 md:mb-8 mx-auto text-sm sm:text-base md:hidden">
                치료 중심에서 예방 중심으로 패러다임이 바뀌고 있는 시대에<br />
                꼭 필요한 원스탑 의료 서비스를 제공하는 디케어센터
              </p> */}
              
              {/* 데스크톱용 텍스트 (기본적으로 숨기고, md 크기 이상에서만 표시) */}
              {/* <p className="text-white opacity-90 mx-auto text-xl hidden md:block">
                치료 중심에서 예방 중심으로 패러다임이 바뀌고 있는 시대에<br />
                꼭 필요한 원스탑 의료 서비스를 제공하는 디케어센터
              </p> */}



              {/* 모바일/태블릿용 텍스트 (xs부터 sm까지 점진적으로 조정, md 크기 이상에서는 숨김) */}
              <p className="text-white opacity-90 mx-auto 
                            text-xs xs:text-sm sm:text-base 
                            mb-3 xs:mb-4 sm:mb-5 
                            leading-snug xs:leading-snug sm:leading-snug
                            max-w-[100%] xs:max-w-[90%] sm:max-w-[80%]
                            md:hidden">
                치료 중심에서 예방 중심으로 패러다임이 바뀌고 있는 시대에<br />
                꼭 필요한 원스탑 의료 서비스를 제공하는 디케어센터
              </p>

              {/* 데스크톱용 텍스트 (md부터 xl까지 점진적으로 조정, md 크기 이상에서만 표시) */}
              <p className="text-white opacity-90 mx-auto 
                            text-lg md:text-xl lg:text-2xl xl:text-3xl
                            mb-6 md:mb-7 lg:mb-8 xl:mb-10
                            leading-snug md:leading-snug
                            max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%]
                            hidden md:block">
                치료 중심에서 예방 중심으로 패러다임이 바뀌고 있는 시대에<br />
                꼭 필요한 원스탑 의료 서비스를 제공하는 디케어센터
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white flex flex-col items-center"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs sm:text-sm mb-1 sm:mb-2">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown className="h-4 w-4 sm:h-6 sm:w-6" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default HeroSection; 