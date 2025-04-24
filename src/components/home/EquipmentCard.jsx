import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * 의료 장비 카드 컴포넌트
 * 개별 장비 정보를 표시하고 이미지 로딩 상태를 관리합니다.
 */
const EquipmentCard = ({ equipment }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${equipment.image}`);
    setImageError(true);
    setImageLoaded(true); // 에러 상태에서도 로딩 완료 처리
  };
  
  // 이미지 미리 로드 설정
  React.useEffect(() => {
    const img = new Image();
    img.src = equipment.image;
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [equipment.image]);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* 이미지 컨테이너 - 일정 높이 유지 */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        {/* 이미지가 로드되지 않은 경우 표시할 로딩 플레이스홀더 */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* 이미지 로드 에러 시 표시할 플레이스홀더 */}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center p-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938-9L12 3.75 19.938 9 19.938 15.75 12 21.75 4.062 15.75z" />
              </svg>
              <p className="mt-2 text-sm text-gray-500">이미지를 불러올 수 없습니다</p>
            </div>
          </div>
        )}
        
        {/* 이미지 - 로드되기 전에는 opacity-0으로 숨김 */}
        <img
          src={equipment.image}
          alt={equipment.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center',
            width: '100%',
            transform: 'scale(1.2)'
          }}
        />
      </div>
      
      {/* 텍스트 컨텐츠 */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary">{equipment.name}</h3>
        <p className="text-gray-600 mb-0 flex-grow">{equipment.description}</p>
      </div>
    </motion.div>
  );
};

export default EquipmentCard; 