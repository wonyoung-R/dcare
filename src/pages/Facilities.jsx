import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Facilities = () => {
  // 병원시설 이미지
  const hospitalFacilities = [
    { id: 1, src: './images/facilities/waitingroom-01.jpeg', alt: '대기실', description: '환자분들이 편안하게 대기할 수 있는 공간' },
    { id: 2, src: './images/facilities/waitingroom-02.jpeg', alt: '대기실', description: '쾌적한 환경의 환자 대기 공간' },
    { id: 3, src: './images/facilities/waitingroom-03.jpeg', alt: '대기실', description: '넓고 편안한 환자 휴식 공간' },
    { id: 4, src: './images/facilities/lobby-01.jpeg', alt: '로비', description: '넓고 쾌적한 로비 공간' }
  ];

  // 검사시설 이미지
  const checkupFacilities = [
    { id: 1, src: './images/facilities/webp/checkup-01.webp', alt: '검사실', description: '최신 장비를 갖춘 검사실' },
    { id: 2, src: './images/facilities/webp/checkup-02.webp', alt: '검사실', description: '정확한 검진을 위한 검사 공간' },
    { id: 3, src: './images/facilities/webp/checkup-03.webp', alt: '검사실', description: '편안하게 검사를 대기 할 수 있는 공간' },
    { id: 4, src: './images/facilities/webp/checkup-04.webp', alt: '검사실', description: '여성들의 편리하고 프라이빗한 검진을 위한 여성존 마련' }
  ];

  const [currentHospitalIndex, setCurrentHospitalIndex] = useState(0);
  const [currentCheckupIndex, setCurrentCheckupIndex] = useState(0);

  const nextHospitalSlide = () => {
    setCurrentHospitalIndex((prevIndex) => 
      prevIndex === hospitalFacilities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevHospitalSlide = () => {
    setCurrentHospitalIndex((prevIndex) => 
      prevIndex === 0 ? hospitalFacilities.length - 1 : prevIndex - 1
    );
  };

  const nextCheckupSlide = () => {
    setCurrentCheckupIndex((prevIndex) => 
      prevIndex === checkupFacilities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCheckupSlide = () => {
    setCurrentCheckupIndex((prevIndex) => 
      prevIndex === 0 ? checkupFacilities.length - 1 : prevIndex - 1
    );
  };

  // 자동 슬라이더를 위한 효과
  useEffect(() => {
    const hospitalTimer = setInterval(() => {
      nextHospitalSlide();
    }, 3500);

    const checkupTimer = setInterval(() => {
      nextCheckupSlide();
    }, 3500);

    return () => {
      clearInterval(hospitalTimer);
      clearInterval(checkupTimer);
    };
  }, []);

  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">시설소개</h1>
          <p className="section-subtitle text-center mx-auto mb-12">
            최신식 의료 장비와 편안한 환경을 갖춘 디케어 병원의 시설을 소개합니다.
          </p>
          
          {/* 병원시설 섹션 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">병원시설</h2>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden shadow-lg custom-slider" style={{ height: '500px' }}>
                {hospitalFacilities.map((facility, index) => (
                  <div
                    key={facility.id}
                    className={`absolute inset-0 ${
                      index === currentHospitalIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transition: 'opacity 0.5s ease-in-out',
                      zIndex: index === currentHospitalIndex ? 10 : 0,
                      pointerEvents: index === currentHospitalIndex ? 'auto' : 'none'
                    }}
                  >
                    <img
                      src={facility.src}
                      alt={facility.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('placeholder-image');
                        const textElement = document.createElement('div');
                        textElement.textContent = '이미지 준비중';
                        textElement.className = 'absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200';
                        e.target.parentNode.appendChild(textElement);
                      }}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                      <p className="text-center">{facility.description}</p>
                    </div>
                  </div>
                ))}
                
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary-light rounded-full p-3 flex items-center justify-center focus:outline-none transition-all duration-300"
                  onClick={prevHospitalSlide}
                  aria-label="이전 슬라이드"
                >
                  <FaChevronLeft className="text-white text-xl" />
                </button>
                
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary-light rounded-full p-3 flex items-center justify-center focus:outline-none transition-all duration-300"
                  onClick={nextHospitalSlide}
                  aria-label="다음 슬라이드"
                >
                  <FaChevronRight className="text-white text-xl" />
                </button>
                
                {/* 슬라이드 인디케이터 */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-4 z-20">
                  {hospitalFacilities.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHospitalIndex(index)}
                      className={`rounded-full transition-all duration-300 w-[7px] h-[7px] ${
                        currentHospitalIndex === index ? 'bg-white opacity-100' : 'bg-white opacity-70'
                      }`}
                      aria-label={`슬라이드 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* 검사시설 섹션 */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">검사시설</h2>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden shadow-lg custom-slider" style={{ height: '500px' }}>
                {checkupFacilities.map((facility, index) => (
                  <div
                    key={facility.id}
                    className={`absolute inset-0 ${
                      index === currentCheckupIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transition: 'opacity 0.5s ease-in-out',
                      zIndex: index === currentCheckupIndex ? 10 : 0,
                      pointerEvents: index === currentCheckupIndex ? 'auto' : 'none'
                    }}
                  >
                    <img
                      src={facility.src}
                      alt={facility.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('placeholder-image');
                        const textElement = document.createElement('div');
                        textElement.textContent = '이미지 준비중';
                        textElement.className = 'absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200';
                        e.target.parentNode.appendChild(textElement);
                      }}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                      <p className="text-center">{facility.description}</p>
                    </div>
                  </div>
                ))}
                
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary-light rounded-full p-3 flex items-center justify-center focus:outline-none transition-all duration-300"
                  onClick={prevCheckupSlide}
                  aria-label="이전 슬라이드"
                >
                  <FaChevronLeft className="text-white text-xl" />
                </button>
                
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary-light rounded-full p-3 flex items-center justify-center focus:outline-none transition-all duration-300"
                  onClick={nextCheckupSlide}
                  aria-label="다음 슬라이드"
                >
                  <FaChevronRight className="text-white text-xl" />
                </button>
                
                {/* 슬라이드 인디케이터 */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-4 z-20">
                  {checkupFacilities.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCheckupIndex(index)}
                      className={`rounded-full transition-all duration-300 w-[7px] h-[7px] ${
                        currentCheckupIndex === index ? 'bg-white opacity-100' : 'bg-white opacity-70'
                      }`}
                      aria-label={`슬라이드 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">최신식 의료장비</h3>
            <p className="text-gray-700 mb-6">
              디케어 병원은 정확한 진단과 효과적인 치료를 위해 최신 의료장비를 갖추고 있습니다. 
              MRI, CT, 초음파 등 다양한 검사 장비로 환자분들의 건강을 꼼꼼히 체크합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-800 mb-2">영상 진단 장비</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 3.0T MRI</li>
                  <li>• 128채널 CT</li>
                  <li>• 디지털 X-ray</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-800 mb-2">검진 장비</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 초음파 장비</li>
                  <li>• 내시경 장비</li>
                  <li>• 심전도 검사기</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities; 