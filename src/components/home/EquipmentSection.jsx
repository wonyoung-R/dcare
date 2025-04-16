import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const equipments = [
  {
    id: 1,
    name: '3.0T MRI',
    description: '최신 3.0T MRI 장비로 고해상도 영상과 빠른 촬영 시간을 제공합니다.',
    features: [
      '고해상도 영상',
      '짧은 촬영 시간',
      '진단 정확도 향상',
      '환자 편의성 증가'
    ],
    image: '/equipment-1.jpg',
    category: 'MRI'
  },
  {
    id: 2,
    name: '128채널 CT',
    description: '첨단 128채널 CT로 정확한 진단과 낮은 방사선 조사를 가능하게 합니다.',
    features: [
      '고해상도 영상',
      '낮은 방사선량',
      '빠른 스캔 시간',
      '심장 영상에 최적화'
    ],
    image: '/equipment-2.jpg',
    category: 'CT'
  },
  {
    id: 3,
    name: '디지털 X-ray',
    description: '디지털 X-ray 시스템으로 선명한 영상과 빠른 검사를 제공합니다.',
    features: [
      '디지털 영상 기술',
      '낮은 방사선량',
      '즉각적인 결과 확인',
      '영상 후처리 가능'
    ],
    image: '/equipment-3.jpg',
    category: 'X-ray'
  },
  {
    id: 4,
    name: '초음파 시스템',
    description: '최신 초음파 장비로 다양한 부위의 정밀한 검사가 가능합니다.',
    features: [
      '고해상도 이미지',
      '실시간 영상',
      '무방사선',
      '다양한 프로브 지원'
    ],
    image: '/equipment-4.jpg',
    category: '초음파'
  },
  {
    id: 5,
    name: '인터벤션 시스템',
    description: '첨단 인터벤션 장비로 정확하고 안전한 시술이 가능합니다.',
    features: [
      '고해상도 실시간 영상',
      '정밀한 시술 가이드',
      '낮은 방사선량',
      '다양한 시술 지원'
    ],
    image: '/equipment-5.jpg',
    category: '인터벤션'
  }
];

const EquipmentCard = ({ equipment }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML += `<div class="w-full h-full flex items-center justify-center bg-gray-200"><span class="text-xl font-bold text-primary">${equipment.name}</span></div>`;
          }}
        />
      </div>
      <div className="p-6 flex flex-col">
        <div className="mb-2">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {equipment.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{equipment.name}</h3>
        <p className="text-gray-600 mb-6">{equipment.description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">주요 특징</h4>
          <ul className="space-y-2">
            {equipment.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Link
            to={`/equipment/${equipment.id}`}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            상세 정보
            <svg
              className="ml-2 h-4 w-4"
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
    </div>
  );
};

const EquipmentSection = () => {
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
        duration: 0.6,
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
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={titleVariants} className="section-title">
              의료 장비
            </motion.h2>
            <motion.p variants={titleVariants} className="section-subtitle mx-auto">
              디케어 병원은 최첨단 의료 장비를 갖추고 있어
              정확하고 빠른 진단과 치료를 제공합니다.
            </motion.p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="equipment-swiper h-[600px]"
          >
            {equipments.map((equipment) => (
              <SwiperSlide key={equipment.id}>
                <EquipmentCard equipment={equipment} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-10">
            <Link
              to="/equipment"
              className="btn btn-primary"
            >
              의료장비 더 보기
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentSection; 