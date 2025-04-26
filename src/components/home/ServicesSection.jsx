import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStethoscope, FaHeartbeat, FaUserMd, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ResponsiveText from '../common/ResponsiveText';
import { ResponsiveSection, ResponsiveTextContainer } from '../layout/ResponsiveLayout';

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  // Define services with translation keys
  const services = [
    {
      id: 1,
      titleKey: 'services.checkup.title',
      descriptionKey: 'services.checkup.description',
      icon: <FaHeartbeat className="h-10 w-10 text-white" />,
      link: '/checkup',
      color: 'from-primary to-cyan-500',
    },
    {
      id: 2,
      titleKey: 'services.greenhouse.title',
      descriptionKey: 'services.greenhouse.description',
      icon: <FaLeaf className="h-10 w-10 text-white" />,
      link: '/greenhouse',
      color: 'from-green-600 to-green-400',
    },
    {
      id: 3,
      titleKey: 'services.general.title',
      descriptionKey: 'services.general.description',
      icon: <FaStethoscope className="h-10 w-10 text-white" />,
      link: '/general',
      color: 'from-indigo-600 to-indigo-400',
    },
    {
      id: 4,
      titleKey: 'services.doctors.title',
      descriptionKey: 'services.doctors.description',
      icon: <FaUserMd className="h-10 w-10 text-white" />,
      link: '/doctors',
      color: 'from-violet-600 to-violet-400',
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="services" className="min-h-screen flex items-center py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={titleVariants}>
            <ResponsiveText as="h2" variant="title" className="mx-auto text-center mb-4">
              의료서비스
            </ResponsiveText>
          </motion.div>
          <motion.div variants={titleVariants} className="w-full flex justify-center">
            <ResponsiveTextContainer>
              <ResponsiveText variant="body" className="text-secondary-400 text-center mb-8 w-full px-4 sm:px-0">
                디케어건강검진센터는 최신식 의료장비와 전문 의료진을 통해
                환자분들께 최상의 의료 서비스를 제공하고자 노력하고 있습니다.
              </ResponsiveText>
            </ResponsiveTextContainer>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index, t }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="flex flex-col h-full"
    >
      <div
        className={`bg-gradient-to-br ${service.color} rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full`}
      >
        <div className="p-6">
          <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
            {service.icon}
          </div>
          <ResponsiveText as="h3" variant="subtitle" className="text-white mb-3">
            {t(service.titleKey)}
          </ResponsiveText>
          <ResponsiveText variant="body" className="text-white/90 mb-6">
            {t(service.descriptionKey)}
          </ResponsiveText>
        </div>
        <div className="mt-auto p-6 pt-0">
          <Link
            to={service.link}
            className="inline-flex items-center text-white font-medium group"
            onClick={() => window.scrollTo(0, 0)}
          >
            {t('services.view_more')}
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection; 