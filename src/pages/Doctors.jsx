import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveText from '../components/common/ResponsiveText';
import { ResponsiveSection, ResponsiveTextContainer } from '../components/layout/ResponsiveLayout';

const doctors = [
  {
    id: 1,
    name: '류효충',
    position: '대표원장',
    specialty: ['산부인과전문의', '여성검진', '산부인과진료', '줄기세포 클리닉'],
    education: ['계명대학교 의과대학', '계명대학교 산부인과 전문의'],
    experience: ['현 디케어건강검진센터 대표원장', '현 동국의대 산부인과 외래교수', '현 계명의대 산부인과 외래교수', '전 신라산부인과 원장', '전 영재산부인과 원장', '세계 산부인과 초음파학회 회원', '미국 부인비뇨기과학회 회원', '미국 불임 내분비학회 회원'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: '한정우',
    position: '원장',
    specialty: ['영남의대 대장항문외과 전문의', '위ㆍ대장내시경'],
    education: ['영남대학교 의과대학', '영남대학교 대장항문외과 전문의'],
    experience: ['현 디케어건강증진센터 원장', '전 구미 삼성연합의원 원장', '전 새동산병원 건강증진센터장', '대한외과학회 평생회원', '대한대장항문외과학회 평생회원', '대한내시경복강경외과학회 정회원', '대한위대장내시경학회 정회원'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
  }
];

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
    >
      <div className="md:w-1/3 relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('placeholder-image');
            const textElement = document.createElement('div');
            textElement.textContent = doctor.name;
            textElement.className = 'absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200';
            e.target.parentNode.appendChild(textElement);
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-4 md:hidden">
          <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
          <p className="text-white/90 text-sm">{doctor.position}</p>
        </div>
      </div>
      <div className="md:w-2/3 p-6">
        <div className="hidden md:block mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{doctor.name}</h3>
          <p className="text-primary font-medium">{doctor.position}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">전문 분야</h4>
            <ul className="text-gray-600 space-y-1">
              {doctor.specialty.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span> {spec}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">학력</h4>
            <ul className="text-gray-600 space-y-1">
              {doctor.education.map((edu, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span> {edu}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">경력</h4>
            <ul className="text-gray-600 space-y-1">
              {doctor.experience.map((exp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span> {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Doctors = () => {
  return (
    <ResponsiveSection className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveText as="h1" variant="title" className="text-center mx-auto">
            의료진 소개
          </ResponsiveText>

          {/* 모바일용 텍스트 (기본적으로 보이고, md 크기 이상에서는 숨김) */}
          <p className="section-subtitle text-center mx-auto mb-12 md:hidden">
            디케어 병원의 의료진은 <br />각 분야의 전문가로 구성되어 있으며, <br />환자분들께 의료 서비스를 <br />제공하기 위해 노력하고 있습니다.
          </p>
          
          {/* 데스크톱용 텍스트 (기본적으로 숨기고, md 크기 이상에서만 표시) */}
          <p className="section-subtitle text-center mx-auto mb-12 hidden md:block">
            디케어 병원의 의료진은 각 분야의 전문가로 구성되어 있으며, <br />환자분들께 의료 서비스를 제공하기 위해 노력하고 있습니다.
          </p>

          <div className="space-y-10 mt-12">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </motion.div>
      </div>
    </ResponsiveSection>
  );
};

export default Doctors; 