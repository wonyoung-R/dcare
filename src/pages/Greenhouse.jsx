import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHotel, FaSpa, FaShieldAlt, FaFemale, FaCar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Greenhouse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 로컬 이미지 파일 경로 배열
  const images = [
    '/images/greenhouse/entrance-01.jpeg',
    '/images/greenhouse/entrance-03.jpeg',
    '/images/greenhouse/main-lobby-02.jpeg',
    '/images/greenhouse/main-lobby-03.jpeg',
    '/images/greenhouse/main-lobby-04.jpeg',
    '/images/greenhouse/VIPRoom-01.jpeg',
    '/images/greenhouse/waitingroom-01.jpeg',
    '/images/greenhouse/waitingroom-02.jpeg',
  ];

  // 이미지 설명 배열
  const imageDescriptions = [
    '디케어 병원 출입구',
    '모던한 인테리어의 출입구',
    '넓고 쾌적한 메인 로비',
    '편안한 분위기의 메인 로비',
    '자연 친화적인 메인 로비',
    '프라이빗한 VIP 전용 공간',
    '쾌적한 로비 전경',
    '여유로운 휴식 공간'
  ];

  // 슬라이더 설정
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center mb-8">Healing Greenhouse</h1>
          
          {/* 병원 시설 슬라이드 */}
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl mb-12">
            <Slider {...sliderSettings} className="h-full">
              {images.map((image, index) => (
                <div key={index} className="h-[600px] outline-none">
                  <div className="relative w-full h-full">
                    <img 
                      src={image}
                      alt={imageDescriptions[index]}
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
                      <p className="text-center">{imageDescriptions[index]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            {/* 슬라이드 인디케이터 (선택 사항) */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* 특징 설명 섹션 */}
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">최고의 힐링 공간에서 건강을 되찾으세요</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaHotel className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">럭셔리 시설</h3>
                    </div>
                    <p className="text-gray-700">
                      800평의 높은층고, 웰니스 센터급의 럭셔리 시설
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaSpa className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">힐링 인테리어</h3>
                    </div>
                    <p className="text-gray-700">
                      나를 더 깊게 케어하고 휴식을 누릴 수 있는 힐링 인테리어
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaShieldAlt className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">원스톱 서비스</h3>
                    </div>
                    <p className="text-gray-700">
                      모든 분야의 정밀검진을 하루에 받을 수 있는 One-stop 서비스
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaLeaf className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">Eco+Smart</h3>
                    </div>
                    <p className="text-gray-700">
                      자연을 담은 공간에 스마트함을 더한 Eco+Smart 검진센터
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaFemale className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">프라이빗 공간</h3>
                    </div>
                    <p className="text-gray-700">
                      VIP 라운지와 여성전용공간 등 프라이빗한 특별 공간
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <FaCar className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">고품격 서비스</h3>
                    </div>
                    <p className="text-gray-700">
                      호텔급 숙박 서비스, 넓은주차공간 등 퀄리티 높은 서비스
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 이전 버튼 컴포넌트
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 rounded-full p-2 focus:outline-none transition-all duration-300"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-xl" />
    </button>
  );
};

// 다음 버튼 컴포넌트
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 rounded-full p-2 focus:outline-none transition-all duration-300"
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-xl" />
    </button>
  );
};

export default Greenhouse; 