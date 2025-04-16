import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaClock, 
  FaSubway, 
  FaBus, 
  FaCar, 
  FaEnvelope 
} from 'react-icons/fa';

const Contact = () => {
  const mapRef = useRef(null);
  
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
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">오시는 길</h1>
          <p className="section-subtitle text-center mx-auto">
            디케어 병원은 서울 강남 중심부에 위치하여
            환자분들이 쉽게 찾아오실 수 있습니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
            {/* 지도 */}
            <div className="lg:col-span-3 h-[500px] rounded-lg overflow-hidden shadow-lg">
              <div ref={mapRef} className="w-full h-full" />
            </div>

            {/* 병원 정보 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">병원 정보</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">주소</h4>
                      <p className="text-gray-600">서울특별시 강남구 강남대로 123 디케어빌딩 2-5층</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">연락처</h4>
                      <p className="text-gray-600">대표전화: 02-123-4567</p>
                      <p className="text-gray-600">건강검진: 02-123-4568</p>
                      <p className="text-gray-600">팩스: 02-123-4569</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaEnvelope className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">이메일</h4>
                      <p className="text-gray-600">info@dcare.com</p>
                      <p className="text-gray-600">appointment@dcare.com (예약)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaClock className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">진료시간</h4>
                      <p className="text-gray-600">평일: 08:30 - 17:30</p>
                      <p className="text-gray-600">토요일: 08:30 - 13:00</p>
                      <p className="text-gray-600">일요일 및 공휴일 휴진</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 찾아오시는 방법 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">찾아오시는 방법</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {transportationInfo.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-600">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* 문의 양식 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">문의하기</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  제목
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="제목을 입력하세요"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  문의내용
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="문의 내용을 입력하세요"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 