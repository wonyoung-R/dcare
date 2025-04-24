import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHotel, FaSpa, FaShieldAlt, FaFemale, FaCar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getResponsiveImageUrls, getBaseUrl } from '../utils/imagePaths';

const Greenhouse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState([]);
  const sliderRef = useRef(null);
  
  // 이미지 기본 경로 정의 (앞에 /dcare 없이 상대 경로로 설정)
  const imagePaths = [
    '/images/greenhouse/entrance-01',
    '/images/greenhouse/entrance-03',
    '/images/greenhouse/main-lobby-02',
    '/images/greenhouse/main-lobby-03',
    '/images/greenhouse/main-lobby-04',
    '/images/greenhouse/VIPRoom-01',
    '/images/greenhouse/waitingroom-01',
    '/images/greenhouse/waitingroom-02',
  ];
  
  // 이미지 URL 생성
  const imageUrls = imagePaths.map(path => getResponsiveImageUrls(path));
  
  // 현재 base URL 확인 (디버깅용)
  console.log("Base URL: ", getBaseUrl());
  console.log("Image URLs: ", imageUrls);
  
  // 이미지 모두 로딩 후 표시하기 위한 효과
  useEffect(() => {
    const preloadImages = () => {
      // 이미지 로드 상태 초기화
      setImageLoadStatus(new Array(imagePaths.length).fill(false));
      
      const preloadImage = (url, index, isWebP) => {
        return new Promise((resolve) => {
          const img = new Image();
          
          img.onload = () => {
            console.log(`Image loaded: ${url}`);
            if (!isWebP) {
              // JPEG 이미지가 로드되면 해당 슬라이드의 로드 상태를 업데이트
              setImageLoadStatus(prev => {
                const newStatus = [...prev];
                newStatus[index] = true;
                return newStatus;
              });
            }
            resolve(true);
          };
          
          img.onerror = () => {
            console.error(`Failed to load image: ${url}`);
            resolve(false);
          };
          
          img.src = url;
        });
      };
      
      // 모든 이미지에 대해 병렬로 프리로드 시도
      const preloadPromises = [];
      
      imageUrls.forEach((urls, index) => {
        // WebP와 JPEG 모두 프리로드
        preloadPromises.push(preloadImage(urls.webp, index, true));
        preloadPromises.push(preloadImage(urls.fallback, index, false));
      });
      
      // 4초 후에는 무조건 로딩 표시 제거
      const timeoutPromise = new Promise(resolve => {
        setTimeout(() => {
          console.log("Loading timeout reached");
          resolve();
        }, 4000);
      });
      
      // 모든 이미지가 로드되거나 타임아웃에 도달하면 로딩 표시 제거
      Promise.race([
        Promise.all(preloadPromises),
        timeoutPromise
      ]).then(() => {
        setImagesLoaded(true);
      });
    };
    
    preloadImages();
  }, []);

  // 슬라이더가 마운트된 후 초기화를 확인하는 효과
  useEffect(() => {
    if (imagesLoaded && sliderRef.current) {
      // 슬라이더가 로드된 후 재초기화
      try {
        sliderRef.current.slickGoTo(0);
        console.log("Slider reinitialized");
      } catch (err) {
        console.error("Error reinitializing slider:", err);
      }
    }
  }, [imagesLoaded]);

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
    // 모바일 터치 스와이프 활성화
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    touchThreshold: 10,
    // 모바일 최적화 설정
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false // 모바일에서는 화살표 숨김
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false, // 모바일에서는 화살표 숨김
          centerMode: false // 모바일에서 센터 모드 끄기
        }
      }
    ]
  };

  // 이미지 안전 처리를 위한 에러 핸들러
  const handleImageError = (e, index) => {
    console.error(`Image load error (index ${index}): ${e.target.src}`);
    e.target.onerror = null;
    
    try {
      // 이미지 에러 시 대체 텍스트 표시
      e.target.style.display = 'none';
      
      // 이미 placeholder가 있는지 확인
      const parentElement = e.target.parentNode;
      if (!parentElement.querySelector('.placeholder-text')) {
        const textElement = document.createElement('div');
        textElement.textContent = '이미지를 불러올 수 없습니다';
        textElement.className = 'absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200 placeholder-text';
        parentElement.appendChild(textElement);
      }
    } catch (err) {
      console.error('Error handling image failure:', err);
    }
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
          <div className="relative w-full rounded-lg overflow-hidden shadow-xl mb-12" style={{ maxHeight: '80vh', height: '600px' }}>
            {!imagesLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600 font-medium">이미지 로딩 중...</p>
              </div>
            )}
            
            <div className={`${imagesLoaded ? 'block' : 'hidden'} h-full`}>
              <Slider 
                ref={sliderRef}
                {...sliderSettings} 
                className="h-full slick-mobile-fix"
              >
                {imageDescriptions.map((description, index) => (
                  <div key={index} className="h-full outline-none">
                    <div className="relative w-full h-full">
                      <picture className="w-full h-full block">
                        <source 
                          srcSet={imageUrls[index].webp} 
                          type="image/webp" 
                        />
                        <img 
                          src={imageUrls[index].fallback}
                          alt={description}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => handleImageError(e, index)}
                        />
                      </picture>
                      
                      {/* 이미지 로드 실패 시 대체 콘텐츠 */}
                      {imageLoadStatus[index] === false && imagesLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <p className="text-gray-600 font-medium text-center">이미지를 불러올 수 없습니다</p>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-center">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            
            {/* 슬라이드 인디케이터 (선택 사항) */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-10">
              {imageDescriptions.map((_, index) => (
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