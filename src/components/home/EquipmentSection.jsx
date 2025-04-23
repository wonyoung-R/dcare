import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const equipments = [
  {
    id: 1,
    name: 'CT 128 ch',
    description: '단일 회전으로 광범위한 부위를 촬영할 수 있어 검사 시간을 크게 단축합니다. AI 기반 방사선량 조절 기술이 적용되었습니다.',
    features: [
      '128개 검출기 채널',
      '80% 감소된 방사선량',
      '0.23mm 미세 병변 식별',
      '초당 192mm 촬영 속도'
    ],
    optimumFor: '심장 및 폐 영상, 움직이는 장기 촬영',
    image: '/images/medicalequipment/webp/CT128ch.webp',
    category: 'CT'
  },
  {
    id: 2,
    name: '3.0T MRI',
    description: '강한 자기장을 사용해 뇌, 척추, 관절 등의 고해상도 3D 영상을 생성합니다.',
    features: [
      '3테슬라 자기장 강도',
      '1.5T 대비 2배 강한 자기장',
      '고해상도 3D 영상',
      '이온화 방사선 없음'
    ],
    optimumFor: '다발성 경화증, 동맥류, 관절 손상 진단',
    image: '/images/medicalequipment/webp/xray.webp',
    category: 'MRI'
  },
  {
    id: 3,
    name: '골밀도측정기',
    description: '초음파를 이용해 골밀도 지수를 계산하여 골다공증 위험도를 진단합니다.',
    features: [
      '초음파 탐촉자 이용',
      '속도(SOS)와 주파수 감쇠(BUA) 측정',
      'T-스코어/Z-스코어 산출',
      '방사선 없음'
    ],
    optimumFor: '골다공증 진단 및 모니터링',
    image: '/images/medicalequipment/webp/bone-density-scanner.webp',
    category: '골밀도'
  },
  {
    id: 4,
    name: '유방촬영술(MAMMO)',
    description: '전자센서로 영상을 생성하며, 저선량 X선으로 미세 석회화 병변을 탐지합니다.',
    features: [
      '디지털 유방촬영술(FFDM)',
      '저선량 X선',
      '컴퓨터 보조 검출(CAD)',
      '3D 유방단층촬영'
    ],
    optimumFor: '유방암 조기 발견',
    image: '/images/medicalequipment/webp/MAMMO.webp',
    category: '유방촬영'
  },
  {
    id: 5,
    name: '심장초음파',
    description: '초음파를 이용해 심장의 실시간 움직임, 판막 기능, 혈류 속도를 분석합니다.',
    features: [
      '실시간 심장 움직임 관찰',
      '판막 기능 평가',
      '혈류 속도 분석',
      '비침습적 검사'
    ],
    optimumFor: '심부전, 판막증, 선천성 심장질환 진단',
    image: '/images/medicalequipment/webp/heart-ultrasound.webp',
    category: '초음파'
  },
  {
    id: 6,
    name: '부인과초음파',
    description: '넓은 범위의 골반 장기를 고해상도로 관찰할 수 있어 진단 효율을 높입니다. AI 기반 영상 보조 기능이 적용되었습니다.',
    features: [
      '고주파 탐촉자 사용 (질식, 복부용 모두 가능)',
      '3D/4D 입체 영상 지원 (기종에 따라 상이)',
      '1cm 이하 병변까지 시각화 가능',
      '실시간 영상 기록 및 주석 기능'
    ],
    optimumFor: '자궁 및 난소 질환 평가, 임신 초기 태아 관찰, 골반 내 이상 소견 확인',
    image: '/images/medicalequipment/webp/obstetric-ultrasound.webp',
    category: '초음파'
  }
];

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
    
    // 이미지 경로 디버깅을 위한 로그
    console.log('Equipment images paths:', equipments.map(eq => eq.image));
    
    // 배포환경/개발환경 확인
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('BASE_URL:', import.meta.env.BASE_URL);
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

  // 이미지 로드 핸들러
  const handleImageLoad = (e) => {
    console.log('Image loaded successfully:', e.target.src);
  };

  // 이미지 오류 핸들러
  const handleImageError = (e, equipment) => {
    console.error('Image failed to load:', e.target.src);
    e.target.onerror = null;
    e.target.style.display = 'none';
    e.target.parentNode.classList.add('placeholder-image');
    const textElement = document.createElement('div');
    textElement.textContent = equipment.name;
    textElement.className = 'absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200';
    e.target.parentNode.appendChild(textElement);
  };

  return (
    <div className="py-16 md:py-24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipments.map((equipment) => (
              <motion.div
                key={equipment.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: equipment.id * 0.1 }
                  }
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onLoad={handleImageLoad}
                    onError={(e) => handleImageError(e, equipment)}
                  />
                  <div className="absolute top-0 left-0 m-3">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {equipment.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{equipment.name}</h3>
                  <p className="text-gray-600 mb-4">{equipment.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">주요 특징</h4>
                    <ul className="space-y-1">
                      {equipment.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">최적 활용 분야</h4>
                    <p className="text-gray-600 text-sm">{equipment.optimumFor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentSection; 