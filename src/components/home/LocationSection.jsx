import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaClock, 
  FaSubway, 
  FaBus, 
  FaCar 
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

  // Initialize Kakao Map
  useEffect(() => {
    const initMap = () => {
      if (window.kakao && window.kakao.maps && mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(37.4988, 127.0311), // 강남역 좌표
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.4988, 127.0311),
          map: map,
        });

        // Custom overlay for hospital name
        const content = `
          <div style="padding:5px;background:#fff;border-radius:4px;border:1px solid #ddd;font-size:12px;font-weight:bold;">
            디케어 병원
          </div>
        `;

        new window.kakao.maps.CustomOverlay({
          position: new window.kakao.maps.LatLng(37.4988, 127.0311),
          content: content,
          map: map,
          yAnchor: 1.5,
        });
      }
    };

    // Check if Kakao Maps API is already loaded
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      const script = document.querySelector('script[src*="//dapi.kakao.com/v2/maps/sdk.js"]');
      if (script) {
        script.addEventListener('load', initMap);
      }
    }

    return () => {
      const script = document.querySelector('script[src*="//dapi.kakao.com/v2/maps/sdk.js"]');
      if (script) {
        script.removeEventListener('load', initMap);
      }
    };
  }, [mapRef]);

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
      icon: <FaSubway className="text-primary mr-2" />,
      title: '지하철',
      details: [
        '2호선 강남역 11번 출구 도보 3분',
        '신분당선 강남역 8번 출구 도보 5분'
      ]
    },
    {
      icon: <FaBus className="text-primary mr-2" />,
      title: '버스',
      details: [
        '간선버스: 140, 144, 145, 340, 420',
        '지선버스: 3412, 4412',
        '광역버스: 9404, 9408'
      ]
    },
    {
      icon: <FaCar className="text-primary mr-2" />,
      title: '자가용',
      details: [
        '지하 주차장 이용 가능 (최초 30분 무료)',
        '주차 공간이 협소하여 대중교통 이용을 권장합니다.'
      ]
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
              디케어 병원은 서울 강남 중심부에 위치하여
              환자분들이 쉽게 찾아오실 수 있습니다.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <motion.div variants={itemVariants} className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <div ref={mapRef} className="w-full h-full" />
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
                          <div>
                            <h5 className="font-medium text-gray-800">{item.title}</h5>
                            <ul className="text-sm text-gray-600 mt-1">
                              {item.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="mb-1">{detail}</li>
                              ))}
                            </ul>
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