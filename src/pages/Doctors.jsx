import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const doctors = [
  {
    id: 1,
    name: '김영호',
    position: '영상의학과 원장',
    specialty: 'MRI, CT, 인터벤션',
    education: ['서울대학교 의과대학', '서울대학교병원 영상의학과 전문의'],
    experience: ['前 서울대학교병원 교수', '대한인터벤션영상의학회 이사'],
    description: '김영호 원장은 20년 이상의 영상의학 경력을 가지고 있으며, 특히 신경계 MRI와 인터벤션 시술 분야에서 탁월한 전문성을 보유하고 있습니다. 다양한 학술 논문과 연구 활동을 통해 영상의학 발전에 기여하고 있습니다.',
    image: '/doctor-1.jpg',
    socialLinks: {
      email: 'doctor1@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 2,
    name: '이미영',
    position: '영상의학과 전문의',
    specialty: '유방 영상, 인터벤션',
    education: ['연세대학교 의과대학', '세브란스병원 영상의학과 전문의'],
    experience: ['前 세브란스병원 조교수', '대한유방영상의학회 정회원'],
    description: '이미영 전문의는 유방 영상 및 인터벤션 분야의 전문가로, 유방암 조기 진단과 중재적 시술에 있어 풍부한 경험을 보유하고 있습니다. 환자 중심의 세심한 진료로 정평이 나 있습니다.',
    image: '/doctor-2.jpg',
    socialLinks: {
      email: 'doctor2@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 3,
    name: '박준서',
    position: '영상의학과 전문의',
    specialty: '신경계 영상, 두경부 영상',
    education: ['고려대학교 의과대학', '고려대학교병원 영상의학과 전문의'],
    experience: ['前 고려대학교병원 조교수', '대한신경영상의학회 정회원'],
    description: '박준서 전문의는 신경계 및 두경부 영상 분야의 전문가로, 뇌, 척추, 두경부 질환의 진단에 있어 탁월한 역량을 가지고 있습니다. 최신 영상 기술을 활용한 정확한 진단으로 환자들에게 신뢰받고 있습니다.',
    image: '/doctor-3.jpg',
    socialLinks: {
      email: 'doctor3@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 4,
    name: '최지원',
    position: '영상의학과 전문의',
    specialty: '복부 영상, 초음파',
    education: ['가톨릭대학교 의과대학', '서울성모병원 영상의학과 전문의'],
    experience: ['前 서울성모병원 임상조교수', '대한복부영상의학회 정회원'],
    description: '최지원 전문의는 복부 영상 및 초음파 검사 분야의 전문가로, 간, 췌장, 담도계 질환 등의 진단에 풍부한 경험을 가지고 있습니다. 정확한 진단과 친절한 설명으로 환자들의 만족도가 높습니다.',
    image: '/doctor-4.jpg',
    socialLinks: {
      email: 'doctor4@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 5,
    name: '정현우',
    position: '영상의학과 전문의',
    specialty: '근골격계 영상, 척추 인터벤션',
    education: ['울산대학교 의과대학', '서울아산병원 영상의학과 전문의'],
    experience: ['前 서울아산병원 교수', '대한근골격영상의학회 이사'],
    description: '정현우 전문의는 근골격계 영상 및 척추 인터벤션 분야의 권위자로, 관절 및 척추 질환의 진단과 시술에 풍부한 경험을 가지고 있습니다. 다양한 학술 활동과 연구를 통해 끊임없이 발전하고 있습니다.',
    image: '/doctor-5.jpg',
    socialLinks: {
      email: 'doctor5@dcare.com',
      linkedin: 'https://linkedin.com'
    }
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
            e.target.src = `https://via.placeholder.com/300x400?text=${doctor.name}`;
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
        
        <p className="text-gray-600 mb-6">{doctor.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">전문 분야</h4>
            <p className="text-gray-600">{doctor.specialty}</p>
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
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">연락처</h4>
            <div className="flex space-x-3">
              <a 
                href={`mailto:${doctor.socialLinks.email}`}
                className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="Send email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a 
                href={doctor.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Doctors = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">의료진 소개</h1>
          <p className="section-subtitle text-center mx-auto">
            디케어 병원의 의료진은 각 분야의 전문가로 구성되어 있으며,
            환자분들께 최고의 의료 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
          
          <div className="space-y-10 mt-12">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Doctors; 