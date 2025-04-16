import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const statsData = [
  { id: 1, value: '98%', label: '시술 성공률' },
  { id: 2, value: '15,000+', label: '연간 시술 건수' },
  { id: 3, value: '24시간', label: '응급 대응' },
  { id: 4, value: '10년+', label: '전문 경력' },
];

const CounterAnimation = ({ value, duration = 2 }) => {
  return <span className="counter">{value}</span>;
};

const StatItem = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      variants={itemVariants}
      className="text-center"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 h-full">
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          <CounterAnimation value={item.value} />
        </div>
        <div className="text-sm md:text-base text-white/90">{item.label}</div>
      </div>
    </motion.div>
  );
};

const InterventionSection = () => {
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
        staggerChildren: 0.2,
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative h-full w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-gradient-to-r from-blue-900 to-primary"
          /* style={{
            backgroundImage: "url('./intervention-bg.jpg')",
          }} */
        ></div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={contentVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                최소 침습적 인터벤션 시술
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                인터벤션 시술은 최소한의 절개와 빠른 회복 시간으로 환자의 부담을 
                줄이는 현대 의학의 혁신적인 방법입니다. 디케어 병원은 첨단 장비와 
                전문 의료진을 통해 다양한 인터벤션 시술을 제공합니다.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/intervention"
                  className="btn btn-primary"
                >
                  자세히 알아보기
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={contentVariants}>
              <div className="grid grid-cols-2 gap-4">
                {statsData.map((stat, index) => (
                  <StatItem key={stat.id} item={stat} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InterventionSection; 