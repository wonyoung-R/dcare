import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHotel, FaSpa, FaShieldAlt, FaFemale, FaCar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getResponsiveImageUrls, getBaseUrl } from '../utils/imagePaths';

// Slick 슬라이더 라이브러리 대신 직접 구현하여 모바일 호환성 문제 해결
const Greenhouse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slideshowRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  
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

  // 자동 슬라이드쇼 시작
  useEffect(() => {
    if (imagesLoaded) {
      startAutoSlide();
    }
    
    return () => {
      // 컴포넌트 언마운트 시 타이머 정리
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [imagesLoaded, currentSlide]);
  
  // 자동 슬라이드 시작
  const startAutoSlide = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };
  
  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? imagePaths.length - 1 : prev - 1));
    
    // 자동 재생 타이머 재설정
    startAutoSlide();
  };
  
  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === imagePaths.length - 1 ? 0 : prev + 1));
  };
  
  // 특정 슬라이드로 이동
  const goToSlide = (index) => {
    setCurrentSlide(index);
    
    // 자동 재생 타이머 재설정
    startAutoSlide();
  };
  
  // 터치 이벤트 핸들러 - 시작
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  // 터치 이벤트 핸들러 - 종료
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };
  
  // 스와이프 처리
  const handleSwipe = () => {
    // 오른쪽에서 왼쪽으로 스와이프 (다음 슬라이드)
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    
    // 왼쪽에서 오른쪽으로 스와이프 (이전 슬라이드)
    if (touchEnd - touchStart > 50) {
      prevSlide();
    }
  };

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
          
          {/* 병원 시설 슬라이드 - 직접 구현 */}
          <div 
            className="relative w-full rounded-lg overflow-hidden shadow-xl mb-12 custom-slider" 
            style={{ maxHeight: '80vh', height: '600px' }}
            ref={slideshowRef}
          >
            {!imagesLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600 font-medium">이미지 로딩 중...</p>
              </div>
            )}
            
            {imagesLoaded && (
              <div 
                className="slider-container h-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* 슬라이더 이미지 */}
                <div className="relative h-full w-full overflow-hidden">
                  {imagePaths.map((_, index) => (
                    <div 
                      key={index} 
                      className={`absolute top-0 left-0 w-full h-full ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        transition: 'opacity 0.5s ease-in-out',
                        zIndex: index === currentSlide ? 10 : 0,
                        pointerEvents: index === currentSlide ? 'auto' : 'none'
                      }}
                    >
                      <picture className="w-full h-full block">
                        <source 
                          srcSet={imageUrls[index].webp} 
                          type="image/webp" 
                        />
                        <img 
                          src={imageUrls[index].fallback}
                          alt={imageDescriptions[index]}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          onError={(e) => handleImageError(e, index)}
                        />
                      </picture>
                      
                      {/* 이미지 로드 실패 시 대체 콘텐츠 */}
                      {imageLoadStatus[index] === false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <p className="text-gray-600 font-medium text-center">이미지를 불러올 수 없습니다</p>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-center">{imageDescriptions[index]}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 이전/다음 버튼 */}
                <button 
                  onClick={prevSlide} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/70 rounded-full p-3 focus:outline-none transition-all duration-300"
                  aria-label="이전 슬라이드"
                >
                  <FaChevronLeft className="text-gray-800 text-xl" />
                </button>
                
                <button 
                  onClick={nextSlide} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/70 rounded-full p-3 focus:outline-none transition-all duration-300"
                  aria-label="다음 슬라이드"
                >
                  <FaChevronRight className="text-gray-800 text-xl" />
                </button>
                
                {/* 슬라이드 인디케이터 */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
                  {imagePaths.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-white w-4 h-1.5' : 'bg-white/50 w-2 h-1.5'
                      }`}
                      aria-label={`슬라이드 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              </div>
            )}
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

export default Greenhouse; 