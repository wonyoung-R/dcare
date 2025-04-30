import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaXRay } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const General = () => {
  // 진료과목 리스트
  const departments = [
    {
      id: 1,
      name: '산부인과',
      icon: <FaUserMd className="text-4xl text-primary-light" />,
      description: '여성 건강 전문 진료와 질환 예방을 위한 체계적인 진료를 제공합니다. <br /> 전문 의료진이 여성 질환, 임신과 출산, 갱년기 관리까지 세심하게 진료합니다.',
      images: ['images/general/general-01.webp']
    },
    {
      id: 2,
      name: '내과',
      icon: <FaHeartbeat className="text-4xl text-primary-light" />,
      description: '소화기, 호흡기, 심장 등 내부 장기 전반에 대한 질환을 진단하고 치료합니다.<br /> 건강 검진 결과에 따른 후속 진료와 만성질환 관리를 전문적으로 수행합니다.',
      images: ['images/general/general-02.webp']
    },
    {
      id: 3,
      name: '영상의학과',
      icon: <FaXRay className="text-4xl text-primary-light" />,
      description: '최신식 영상 장비(MRI, CT, X-ray 등)를 통해 정확한 진단을 돕습니다. <br />질환의 조기 발견과 적절한 치료 방향 설정을 위한 정밀한 영상 검사를 제공합니다.',
      images: ['images/general/general-03.webp']
    }
  ];

  // 슬라이더 설정
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">검진 외 일반진료</h1>

          {/* 모바일용 텍스트 (기본적으로 보이고, md 크기 이상에서는 숨김) */}
          <p className="section-subtitle text-center mx-auto mb-12 md:hidden">
            건강검진 이외에도 다양한 전문 진료를 통해 <br />고객님의 건강을 책임지고 있습니다.
          </p>
          
          {/* 데스크톱용 텍스트 (기본적으로 숨기고, md 크기 이상에서만 표시) */}
          <p className="section-subtitle text-center mx-auto mb-12 hidden md:block">
            건강검진 이외에도 다양한 전문 진료를 통해 고객님의 건강을 책임지고 있습니다.  
          </p>
          
          <div className="mt-16 space-y-16">
            {departments.map((dept) => (
              <motion.div 
                key={dept.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-6">
                        {dept.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-primary">{dept.name}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: dept.description }}></p>
                  </div>
                  
                  <div className="h-64 md:h-auto overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={dept.images[0]} 
                      alt={dept.name} 
                      className="w-[80%] h-[85%] object-cover object-center shadow-lg rounded-lg border border-gray-200"
                    />
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

export default General; 