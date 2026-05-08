import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaLeaf, FaStethoscope, FaVials } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: '종합건강검진',
    description:
      '디케어 베이직부터 VIP까지, 최첨단 영상 장비와 전문 의료진이 함께하는 맞춤형 건강검진 프로그램.',
    icon: <FaHeartbeat className="h-10 w-10 text-white" />,
    link: '/checkup',
    color: 'from-primary to-cyan-500',
    highlights: ['디케어 베이직', '디케어 플래티넘', '디케어 VIP'],
  },
  {
    id: 2,
    title: 'Healing Greenhouse',
    description:
      '자연과 휴식을 담은 힐링 공간에서 마음과 몸을 함께 케어하는 디케어만의 프리미엄 웰니스 서비스.',
    icon: <FaLeaf className="h-10 w-10 text-white" />,
    link: '/greenhouse',
    color: 'from-green-600 to-green-400',
    highlights: ['힐링 라운지', '여성 전용 공간', '에코+스마트 인테리어'],
  },
  {
    id: 3,
    title: '검진 외 일반진료',
    description:
      '검진 결과에 따른 추가 진료부터 일상적인 건강 관리까지, 전문 의료진이 일관된 케어를 제공합니다.',
    icon: <FaStethoscope className="h-10 w-10 text-white" />,
    link: '/general',
    color: 'from-indigo-600 to-indigo-400',
    highlights: ['만성질환 관리', '추적 검사', '협진 시스템'],
  },
  {
    id: 4,
    title: '줄기세포 치료',
    description:
      '면역 강화와 항노화를 위한 첨단 줄기세포 치료. 안전한 시설과 검증된 프로토콜로 진행합니다.',
    icon: <FaVials className="h-10 w-10 text-white" />,
    link: '/stemcell',
    color: 'from-violet-600 to-violet-400',
    highlights: ['면역 강화', '안티에이징', '맞춤형 프로토콜'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
        >
          <h1 className="section-title text-center">의료서비스</h1>
          <p className="section-subtitle text-center mx-auto mb-12">
            디케어건강검진센터는 검진을 넘어<br className="md:hidden" />
            예방과 회복까지 아우르는<br className="hidden md:block" />
            One-stop 의료 서비스를 제공합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* 하단 CTA */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              어떤 서비스가 필요하신가요?
            </h2>
            <p className="text-gray-600 mb-6">
              담당 의료진이 상담을 통해 가장 적합한 검진·진료 프로그램을 안내해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:053-288-3000"
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                전화 상담 053-288-3000
              </a>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                온라인 문의하기
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="flex flex-col h-full"
    >
      <Link
        to={service.link}
        onClick={() => window.scrollTo(0, 0)}
        className={`bg-gradient-to-br ${service.color} rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>

          <ul className="space-y-2 mb-6">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-center text-white/90 text-sm">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto inline-flex items-center text-white font-medium group">
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Services;
