import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStethoscope, FaHeartbeat, FaUserMd, FaHospital } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: '종합건강검진',
    description: '최신 의료장비를 통한 체계적인 건강검진으로 질병을 조기에 발견하고 예방합니다.',
    icon: <FaHeartbeat className="h-10 w-10 text-white" />,
    link: '/checkup',
    color: 'from-primary to-cyan-500',
  },
  {
    id: 2,
    title: '인터벤션',
    description: '최소 침습적 시술로 환자의 고통과 회복 시간을 줄이는 첨단 치료법을 제공합니다.',
    icon: <FaStethoscope className="h-10 w-10 text-white" />,
    link: '/intervention',
    color: 'from-blue-600 to-blue-400',
  },
  {
    id: 3,
    title: '영상의학',
    description: 'MRI, CT, 초음파 등 최신 영상 장비를 통해 정확한 진단을 제공합니다.',
    icon: <FaHospital className="h-10 w-10 text-white" />,
    link: '/imaging',
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    id: 4,
    title: '전문 의료진',
    description: '각 분야 전문 의료진이 환자 중심의 맞춤형 진료를 제공합니다.',
    icon: <FaUserMd className="h-10 w-10 text-white" />,
    link: '/doctors',
    color: 'from-violet-600 to-violet-400',
  },
];

const ServiceCard = ({ service, index }) => {
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
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-white/90 mb-6">{service.description}</p>
        </div>
        <div className="mt-auto p-6 pt-0">
          <Link
            to={service.link}
            className="inline-flex items-center text-white font-medium group"
          >
            자세히 보기
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

const ServicesSection = () => {
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
    <div className="min-h-screen flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={titleVariants} className="section-title">
            의료 서비스
          </motion.h2>
          <motion.p variants={titleVariants} className="section-subtitle mx-auto">
            디케어 병원은 최첨단 의료장비와 전문 의료진을 통해
            환자분들께 최상의 의료 서비스를 제공합니다.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection; 