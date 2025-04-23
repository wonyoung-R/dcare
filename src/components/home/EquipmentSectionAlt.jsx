import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 장비 데이터
const equipmentItems = [
  {
    id: 1,
    name: 'CT 128 ch',
    description: '단일 회전으로 광범위한 부위를 촬영할 수 있어 검사 시간을 크게 단축합니다. AI 기반 방사선량 조절 기술이 적용되었습니다.',
    features: [
      '128개 검출기 채널',
      '80% 감소된 방사선량',
      '0.23mm 미세 병변 식별',
      '초당 192mm 촬영 속도'
    ],
    optimumFor: '심장 및 폐 영상, 움직이는 장기 촬영',
    image: '/images/medicalequipment/CT128ch.jpeg',
    category: 'CT'
  },
  {
    id: 2,
    name: '3.0T MRI',
    description: '강한 자기장을 사용해 뇌, 척추, 관절 등의 고해상도 3D 영상을 생성합니다.',
    features: [
      '3테슬라 자기장 강도',
      '1.5T 대비 2배 강한 자기장',
      '고해상도 3D 영상',
      '이온화 방사선 없음'
    ],
    optimumFor: '다발성 경화증, 동맥류, 관절 손상 진단',
    image: '/images/medicalequipment/xray.jpeg',
    category: 'MRI'
  },
  {
    id: 3,
    name: '골밀도측정기',
    description: '초음파를 이용해 골밀도 지수를 계산하여 골다공증 위험도를 진단합니다.',
    features: [
      '초음파 탐촉자 이용',
      '속도(SOS)와 주파수 감쇠(BUA) 측정',
      'T-스코어/Z-스코어 산출',
      '방사선 없음'
    ],
    optimumFor: '골다공증 진단 및 모니터링',
    image: '/images/medicalequipment/bone-density-scanner.jpeg',
    category: '골밀도'
  },
  {
    id: 4,
    name: '유방촬영술(MAMMO)',
    description: '전자센서로 영상을 생성하며, 저선량 X선으로 미세 석회화 병변을 탐지합니다.',
    features: [
      '디지털 유방촬영술(FFDM)',
      '저선량 X선',
      '컴퓨터 보조 검출(CAD)',
      '3D 유방단층촬영'
    ],
    optimumFor: '유방암 조기 발견',
    image: '/images/medicalequipment/MAMMO.jpeg',
    category: '유방촬영'
  },
  {
    id: 5,
    name: '심장초음파',
    description: '초음파를 이용해 심장의 실시간 움직임, 판막 기능, 혈류 속도를 분석합니다.',
    features: [
      '실시간 심장 움직임 관찰',
      '판막 기능 평가',
      '혈류 속도 분석',
      '비침습적 검사'
    ],
    optimumFor: '심부전, 판막증, 선천성 심장질환 진단',
    image: '/images/medicalequipment/heart-ultrasound.jpeg',
    category: '초음파'
  },
  {
    id: 6,
    name: '부인과초음파',
    description: '넓은 범위의 골반 장기를 고해상도로 관찰할 수 있어 진단 효율을 높입니다. AI 기반 영상 보조 기능이 적용되었습니다.',
    features: [
      '고주파 탐촉자 사용 (질식, 복부용 모두 가능)',
      '3D/4D 입체 영상 지원 (기종에 따라 상이)',
      '1cm 이하 병변까지 시각화 가능',
      '실시간 영상 기록 및 주석 기능'
    ],
    optimumFor: '자궁 및 난소 질환 평가, 임신 초기 태아 관찰, 골반 내 이상 소견 확인',
    image: '/images/medicalequipment/obstetric-ultrasound.jpeg',
    category: '초음파'
  }
];

// 장비 카드 컴포넌트 (별도 분리하여 복잡성 감소)
const EquipmentCard = ({ equipment }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageLoad = () => {
    console.log(`[EquipmentCard] 이미지 로드 성공: ${equipment.name}`);
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error(`[EquipmentCard] 이미지 로드 실패: ${equipment.name}`);
    setImageFailed(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        {!imageFailed ? (
          <img
            src={equipment.image}
            alt={equipment.name}
            className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200">
            {equipment.name}
          </div>
        )}
        
        {!imageLoaded && !imageFailed && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <div className="absolute top-0 left-0 m-3">
          <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            {equipment.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{equipment.name}</h3>
        <p className="text-gray-600 mb-4">{equipment.description}</p>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">주요 특징</h4>
          <ul className="space-y-1">
            {equipment.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">최적 활용 분야</h4>
          <p className="text-gray-600 text-sm">{equipment.optimumFor}</p>
        </div>
      </div>
    </div>
  );
};

// 메인 Equipment 섹션 컴포넌트
const EquipmentSectionAlt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 로깅
    console.log('[EquipmentSectionAlt] 컴포넌트 마운트됨');
    
    // 브라우저 환경 로깅
    console.log('[EquipmentSectionAlt] 브라우저 환경:', {
      userAgent: navigator.userAgent,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      pixelRatio: window.devicePixelRatio
    });
    
    // 이미지 프리페칭
    const prefetchImages = () => {
      equipmentItems.forEach(item => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = item.image;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };
    
    // IntersectionObserver를 사용하여 보이는 영역으로 스크롤되면 표시
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('[EquipmentSectionAlt] 화면에 보임');
          setIsVisible(true);
          prefetchImages();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    // 현재 컴포넌트 관찰 시작
    const sectionElement = document.getElementById('equipment-section-alt');
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    return () => {
      console.log('[EquipmentSectionAlt] 컴포넌트 언마운트됨');
      observer.disconnect();
    };
  }, []);

  return (
    <div id="equipment-section-alt" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">의료 장비</h2>
            <p className="section-subtitle mx-auto">
              디케어 병원은 최첨단 의료 장비를 갖추고 있어
              정확하고 빠른 진단과 치료를 제공합니다.
            </p>
          </div>

          {/* 반응형 그리드 - 모바일에서 1열, 태블릿에서 2열, 데스크탑에서 3열 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentItems.map((equipment) => (
              <div 
                key={equipment.id} 
                className={`transition-all duration-500 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${equipment.id * 150}ms` 
                }}
              >
                <EquipmentCard equipment={equipment} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/equipment" 
              className="btn btn-primary"
            >
              더 많은 의료 장비 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentSectionAlt; 