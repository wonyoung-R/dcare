import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: '류효충',
    position: '대표원장',
    specialty: '산부인과전문의, 여성검진, 산부인과진료, 줄기세포 클리닉',
    education: ['계명대학교 의과대학', '계명대학교 산부인과 전문의'],
    experience: ['현 디케어건강검진센터 대표원장', '현 동국의대 산부인과 외래교수', '현 계명의대 산부인과 외래교수', '전 신라산부인과 원장', '전 영재산부인과 원장', '세계 산부인과 초음파학회 회원', '미국 부인비뇨기과학회 회원', '미국 불임 내분비학회 회원'],
    image: '/images/doctors/doctor_ryu.jpeg'
  },
  {
    id: 2,
    name: '김민수',
    position: '직업환경의학과원장',
    specialty: '직업환경의학과전문의',
    education: ['동국대학교 의과대학', '아주대학교 의학석사'],
    experience: ['현 디케어건강검진센터 직업환경의학과 원장', '전 국군부산병원 의무과장', '전 안성성모병원 작업환경의학과 과장', '전 평택성모병원 작업환경의학과 과장'],
    image: '/images/doctors/doctor_kim.jpeg'
  }
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] flex items-center justify-center bg-white p-2">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-3/4 h-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200"></div>`;
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-3">
          <h3 className="text-lg font-bold text-white">{doctor.name}</h3>
          <p className="text-white/90 text-xs">{doctor.position}</p>
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <div className="mb-3">
          <h4 className="text-md font-semibold text-gray-800 mb-1">전문 분야</h4>
          <p className="text-gray-600 text-sm break-words">{doctor.specialty}</p>
        </div>
        <div className="mb-3">
          <h4 className="text-md font-semibold text-gray-800 mb-1">학력</h4>
          <ul className="text-gray-600 text-xs space-y-1">
            {doctor.education.map((edu, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-1">•</span> <span className="break-words">{edu}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3 mt-auto">
          <h4 className="text-md font-semibold text-gray-800 mb-1">경력</h4>
          <ul className="text-gray-600 text-xs space-y-1">
            {doctor.experience.map((exp, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-1">•</span> <span className="break-words">{exp}</span>
              </li>
            ))}
            {doctor.experience.length === 0 && (
              <li className="flex items-start">
                <span className="text-primary mr-1">•</span> <span className="text-gray-500 italic break-words">경력 정보 업데이트 수정예정(0508)</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DoctorsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  const isMobile = typeof window !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) {
      controls.start('visible');
    } else if (inView) {
      controls.start('visible');
    }
  }, [controls, inView, isMobile]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.2 : 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.2 : 0.6 },
    },
  };

  useEffect(() => {
    if (isMobile) {
      controls.start('visible');
    }
  }, []);

  return (
    <div className="relative w-full py-16 md:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-900 to-indigo-900"></div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
          >
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 variants={titleVariants} className="section-title text-white">
                전문 의료진
              </motion.h2>

              <motion.p variants={titleVariants} className="section-subtitle text-white/90 mx-auto text-center mb-12">
                디케어 병원의 의료진은 각 분야의 전문가로 구성되어 있으며,
                환자분들께 의료 서비스를 제공하기 위해 노력하고 있습니다.
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="px-2 h-full">
                    <DoctorCard doctor={doctor} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSection; 