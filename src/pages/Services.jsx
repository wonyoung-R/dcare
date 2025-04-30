import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaStethoscope, FaXRay, FaLungs, FaBrain, FaUserMd } from 'react-icons/fa';

const serviceCategories = [
  {
    id: 1,
    title: '영상 진단',
    description: 'MRI, CT, X-ray, 초음파 등 첨단 장비를 통한 정확한 진단',
    icon: <FaXRay className="h-10 w-10 text-primary" />,
    services: [
      { name: 'MRI 검사', description: '3.0T MRI를 이용한 고해상도 영상 촬영' },
      { name: 'CT 검사', description: '128채널 CT를 이용한 빠르고 정확한 진단' },
      { name: '초음파 검사', description: '복부, 갑상선, 유방, 근골격계 등 다양한 초음파 검사' },
      { name: 'X-ray 검사', description: '디지털 X-ray를 이용한 기본 영상 검사' }
    ]
  },
  {
    id: 2,
    title: '인터벤션 시술',
    description: '최소 침습적 방법으로 통증을 줄이고 빠른 회복을 돕는 시술',
    icon: <FaStethoscope className="h-10 w-10 text-primary" />,
    services: [
      { name: '척추 인터벤션', description: '디스크, 척추관 협착증 등의 비수술적 치료' },
      { name: '관절 인터벤션', description: '어깨, 무릎 등 관절 질환의 주사 치료' },
      { name: '혈관 인터벤션', description: '혈관 협착, 동맥류 등의 중재적 시술' },
      { name: '종양 인터벤션', description: '종양의 고주파 절제술, 에탄올 주입술 등' }
    ]
  },
  {
    id: 3,
    title: '건강검진',
    description: '개인 맞춤형 건강검진 프로그램을 통한 질병 예방 및 조기 발견',
    icon: <FaHeartbeat className="h-10 w-10 text-primary" />,
    services: [
      { name: '기본 검진', description: '기본적인 건강 상태를 확인하는 검진 프로그램' },
      { name: '정밀 검진', description: 'MRI, CT 등을 포함한 심층 검진 프로그램' },
      { name: '특화 검진', description: '심장, 뇌, 간, 폐 등 특정 부위 집중 검진' },
      { name: '기업 검진', description: '기업 임직원을 위한 맞춤형 단체 검진' }
    ]
  },
  {
    id: 4,
    title: '전문 클리닉',
    description: '특화된 영역의 전문 의료 서비스 제공',
    icon: <FaUserMd className="h-10 w-10 text-primary" />,
    services: [
      { name: '척추 클리닉', description: '목, 허리 통증 등 척추 질환 전문 진료' },
      { name: '두통 클리닉', description: '다양한 두통 원인에 대한 정밀 진단 및 치료' },
      { name: '관절 클리닉', description: '어깨, 무릎 등 관절 질환 전문 진료' },
      { name: '메모리 클리닉', description: '치매, 기억력 저하 등 인지 기능 관련 전문 진료' }
    ]
  }
];

const ServiceCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 rounded-full p-3 mr-4">
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">제공 서비스</h4>
        <ul className="space-y-4">
          {category.services.map((service, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <div>
                <span className="font-medium text-gray-800">{service.name}</span>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">진료 안내</h1>

          {/* 모바일용 텍스트 (기본적으로 보이고, md 크기 이상에서는 숨김) */}
          <p className="section-subtitle text-center mx-auto mb-12 md:hidden">
            디케어 병원은 첨단 의료장비와 <br />전문 의료진을 통해 환자분들께 <br />
            최상의 맞춤형 의료 서비스를 제공합니다.
          </p>
          
          {/* 데스크톱용 텍스트 (기본적으로 숨기고, md 크기 이상에서만 표시) */}
          <p className="section-subtitle text-center mx-auto mb-12 hidden md:block">
            디케어 병원은 첨단 의료장비와 전문 의료진을 통해 환자분들께 최상의 맞춤형 의료 서비스를 제공합니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {serviceCategories.map((category, index) => (
              <ServiceCategory key={category.id} category={category} index={index} />
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">진료 시간</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">요일</th>
                    <th className="px-4 py-3 text-left">진료시간</th>
                    <th className="px-4 py-3 text-left">점심시간</th>
                    <th className="px-4 py-3 text-left">비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">월 ~ 금</td>
                    <td className="px-4 py-3">08:30 - 17:30</td>
                    <td className="px-4 py-3">12:30 - 13:30</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3">토요일</td>
                    <td className="px-4 py-3">08:30 - 13:00</td>
                    <td className="px-4 py-3">-</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">일요일/공휴일</td>
                    <td className="px-4 py-3">휴진</td>
                    <td className="px-4 py-3">-</td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">* 검진센터는 평일 오전 8시부터 운영합니다.</p>
            <p className="text-sm text-gray-600">* 진료 예약은 온라인 또는 전화(02-123-4567)로 가능합니다.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 