import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const partners = [
  { id: 1, name: '서울대학교병원', logo: '/partner-1.png' },
  { id: 2, name: '세브란스병원', logo: '/partner-2.png' },
  { id: 3, name: '서울아산병원', logo: '/partner-3.png' },
  { id: 4, name: '국립암센터', logo: '/partner-4.png' },
  { id: 5, name: '가톨릭대학교 서울성모병원', logo: '/partner-5.png' },
  { id: 6, name: '고려대학교병원', logo: '/partner-6.png' },
  { id: 7, name: '중앙대학교병원', logo: '/partner-7.png' },
  { id: 8, name: '건국대학교병원', logo: '/partner-8.png' },
];

const PartnersSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">협력 기관</h2>
          <p className="section-subtitle mx-auto">
            디케어 병원은 국내 유수의 의료 기관들과 협력하여
            환자분들께 더 나은 의료 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partners-swiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="flex items-center justify-center p-4 h-32">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += `<div class="flex items-center justify-center h-full"><span class="text-lg font-medium text-gray-600">${partner.name}</span></div>`;
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * 디케어 병원은 위 의료기관들과 협력 관계를 맺고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection; 