import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUserMd, 
  FaHeartbeat, 
  FaHospitalAlt, 
  FaCalendarCheck 
} from 'react-icons/fa';

const features = [
  {
    id: 1,
    title: '의료진 전문성',
    description: '각 분야 전문의들이 정확한 진단과 치료를 제공합니다.',
    icon: <FaUserMd className="h-12 w-12 text-primary" />,
    color: 'bg-primary/5 border-primary/20'
  },
  {
    id: 2,
    title: '첨단 의료장비',
    description: '최신 MRI, CT 등 첨단 의료장비를 통해 정확하고 빠른 진단을 제공합니다.',
    icon: <FaHeartbeat className="h-12 w-12 text-blue-600" />,
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 3,
    title: '편안한 환경',
    description: '환자 중심의 편안한 병원 환경으로 진료 불안감을 덜어드립니다.',
    icon: <FaHospitalAlt className="h-12 w-12 text-indigo-600" />,
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    id: 4,
    title: '편리한 진료 시스템',
    description: '체계적이고 신속한 진료 프로세스로 환자의 시간을 소중히 여깁니다.',
    icon: <FaCalendarCheck className="h-12 w-12 text-violet-600" />,
    color: 'bg-violet-50 border-violet-200'
  }
];

const FeatureCard = ({ feature, index }) => {
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
        className={`rounded-lg border p-8 h-full transition-all duration-300 hover:shadow-lg ${feature.color}`}
      >
        <div className="rounded-full p-4 inline-flex mb-6">
          {feature.icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
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
            디케어 병원의 특징
          </motion.h2>
          <motion.p variants={titleVariants} className="section-subtitle mx-auto">
            환자 중심의 의료 서비스를 제공하기 위한 
            디케어 병원의 특별한 가치와 장점을 소개합니다.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 