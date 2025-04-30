import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: '류효충',
    position: '대표원장',
    specialty: '산부인과전문의, 여성검진, 산부인과진료',
    education: ['계명대학교 의과대학', '계명대학교 산부인과 전문의'],
    experience: ['현 디케어건강검진센터 대표원장', '전 신라산부인과 원장', '전 영재산부인과 원장'],
    image: './images/logo-main.png'
  },
  {
    id: 2,
    name: '한정우',
    position: '원장',
    specialty: '영남의대 대장항문외과 전문의, 위ㆍ대장내시경',
    education: ['영남대학교 의과대학', '영남대학교 대장항문외과 전문의'],
    experience: [],
    image: './images/logo-main.png'
  }
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML += `<div class="w-full h-full flex items-center justify-center bg-gray-200"><span class="text-xl font-bold text-primary">${doctor.name}</span></div>`;
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
          <p className="text-white/90 text-sm">{doctor.position}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">전문 분야</h4>
          <p className="text-gray-600 break-words">{doctor.specialty}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">학력</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {doctor.education.map((edu, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span> <span className="break-words">{edu}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 mt-auto">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">경력</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {doctor.experience.map((exp, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span> <span className="break-words">{exp}</span>
              </li>
            ))}
            {doctor.experience.length === 0 && (
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span> <span className="text-gray-500 italic break-words">경력 정보 업데이트 예정</span>
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
              <motion.p 
                variants={titleVariants} 
                className="section-subtitle text-white/90 mx-auto text-center px-4 sm:px-6 w-full max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl break-words whitespace-normal overflow-hidden responsive-text-container"
                style={{ 
                  textAlign: 'center', 
                  margin: '0 auto', 
                  display: 'block',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  maxWidth: '100%',
                  fontSize: '0.95rem'
                }}
              >
                디케어 병원의 의1료진은 각 분야의<br className="block sm:hidden" /> 전문가로 구성되어 있으며,<br /> 
                환자분들께 의료 서비스를<br className="block sm:hidden" /> 제공하기 위해 노력하고 있습니다.
              </motion.p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="px-4 h-full">
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