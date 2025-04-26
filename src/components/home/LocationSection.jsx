import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaClock, 
  FaSubway, 
  FaBus, 
  FaCar,
  FaExternalLinkAlt
} from 'react-icons/fa';

const LocationSection = () => {
  const mapRef = useRef(null);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const transportationInfo = [
    {
      icon: <FaBus className="text-primary mr-2" />,
      title: '버스',
      details: [
        'BUS 대구의료원 라파엘웰빙센터 건너 정류장(서구1-1, 급행1, 급행8)'
      ]
    },
    {
      icon: <FaSubway className="text-primary mr-2" />,
      title: '지하철',
      details: [
        '2호선 죽전역 1번 출구 ▶ 죽전119안전센터앞 정류장(서구1, 급행8) ▶ 대구의료원 라파엘웰빙센터 정류장 하차'
      ]
    },
    {
      icon: <FaCar className="text-primary mr-2" />,
      title: '자가용',
      details: [
        '지하 주차장 이용 가능 (최초 30분 무료)'
      ],
      button: {
        text: '카카오 맵 길안내',
        link: 'https://kko.kakao.com/NbwXEgiBWa', // 카카오맵 공유 링크
        icon: <FaExternalLinkAlt className="ml-1 h-3 w-3" />
      }
    }
  ];

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
            <motion.h2 variants={itemVariants} className="section-title">
              오시는 길
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle mx-auto">
              디케어 병원은 대구 달서구 와룡로에 위치하여
              환자분들이 쉽게 찾아오실 수 있습니다.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map - Google Maps */}
            <motion.div variants={itemVariants} className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.238151383703!2d128.53370141526748!3d35.85889668015502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c3365d94dd%3A0xf933929fb5979098!2z64yA6rWs6rSR7IKs7J207Iud7JuQ!5e0!3m2!1sko!2skr!4v1620112040456!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0,
                  display: 'block',
                  margin: 'auto'
                }} 
                allowFullScreen="" 
                loading="lazy"
                title="디케어건강검진센터 위치"
                className="w-full h-full object-cover"
              ></iframe>
            </motion.div>

            {/* Info */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">병원 정보</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3 h-5 w-5" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">주소</h4>
                      <p className="text-gray-600">대구광역시 달서구 와룡로 307 디센터 1976 2층</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-primary mt-1 mr-3 h-5 w-5" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">연락처</h4>
                      <p className="text-gray-600">대표전화: 053.288.3000</p>
                      <p className="text-gray-600">홈페이지: www.dcare.or.kr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaClock className="text-primary mt-1 mr-3 h-5 w-5" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">진료시간</h4>
                      <p className="text-gray-600">평일: 08:30 - 17:30</p>
                      <p className="text-gray-600">토요일: 08:30 - 13:00</p>
                      <p className="text-gray-600">일요일 및 공휴일 휴진</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">찾아오시는 방법</h4>
                    <div className="space-y-4">
                      {transportationInfo.map((item, index) => (
                        <div key={index} className="flex items-start">
                          {item.icon}
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-800">{item.title}</h5>
                            <ul className="text-sm text-gray-600 mt-1">
                              {item.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="mb-1">{detail}</li>
                              ))}
                            </ul>
                            {item.button && (
                              <a 
                                href={item.button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-2 px-3 py-1 bg-primary text-white text-xs rounded-md hover:bg-primary-light transition-colors"
                              >
                                {item.button.text}
                                {item.button.icon}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationSection; 