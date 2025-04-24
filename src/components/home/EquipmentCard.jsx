import React, { useState } from 'react';

/**
 * 의료 장비 카드 컴포넌트
 * 개별 장비 정보를 표시하고 이미지 로딩 상태를 관리합니다.
 */
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

export default EquipmentCard; 