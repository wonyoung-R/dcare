import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCheckCircle, FaHospital, FaUserMd, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Checkup = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">디케어센터 D.CARE CENTER</h1>
          <p className="section-subtitle text-center mx-auto">
            프리미엄 건강증진, 그 이상
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">디케어센터 소개</h2>
            <p className="text-gray-600 mb-6">
              치료 중심에서 예방 중심으로 패러다임이 바뀌고 있는 시대에 꼭 필요한 단 하나의 의료 서비스를 제공하는 디케어센터.
              어디에서도 만나본 적 없는 최상의 시스템과 수준 높은 공간을 경험할 수 있습니다.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>최고의 신뢰와 서비스를 위한 단 하나의 건강증진센터, 디케어센터</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaHospital className="text-primary mr-2" />
                  Hightech
                </h3>
                <p className="text-gray-600">최첨단 의료환경 구축으로 신속하고 정확한 검진 시스템</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaChartLine className="text-primary mr-2" />
                  CAM
                </h3>
                <p className="text-gray-600">임상 빅데이터를 통한 지속적인 관리와 질병 예측 시스템</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <FaHeartbeat className="text-primary mr-2" />
                  Lifestyle
                </h3>
                <p className="text-gray-600">자연의 편안함, 공간의 긍정적 에너지와 마음의 안정까지 건강해지는 공간</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">최고의 종합건강검진 의료기관</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>정확한 진단을 위한 대학병원급 최첨단 의료장비</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>AI 인공지능 최첨단 판독 시스템 및 무영상의학 장비 보유</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>RFID 시스템으로 검진 진행, 검진 결과 실시간 확인</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>Two Track System으로 완벽한 프라이버시 보장</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">편안함에 품격을 더한 Healing Greenhouse</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>나를 더 깊게 케어하고 휴식을 누릴 수 있는 힐링 인테리어</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>모든 분야의 정밀검진을 하루에 받을 수 있는 One-stop 서비스</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>자연을 담은 공간에 스마트함을 더한 Eco+Smart 검진센터</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">디케어센터만의 차별화된 시그니처 서비스</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>VIP 라운지와 여성전용공간 등 프라이빗한 특별 공간</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>호텔급 숙박 서비스, 발렛 주차 등 퀄리티 높은 서비스</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>실내 클라이밍, 카페 등 센터의 만족도를 위한 시설</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">CAM 고객 맞춤형 사후 건강관리 서비스</h2>
            <p className="text-gray-600 mb-6">
              검진을 넘어 건강을 증진하고 질병을 예측하는 고객관리프로그램 Customer After Management
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">기술 파트너십</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>세계 1위 AWS(아마존웹서비스) 의료분야 업무 협력</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>국내 1위 메가존클라우드와 의료정보시스템 구축 협업</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>검진 고객 데이터 DB 활용</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">AI 기반 서비스</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>유전 질병 예측</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>AI 질병 예측</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>운동 처방</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>식이 처방</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">지속적인 건강관리</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>검진 후 지속적으로 관리해 주는 전문 의료진의 어드바이스</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>고객의 건강 데이터와 추적 검사 일정을 관리하는 CAM 시스템</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>평생의 생활습관 개선을 위한 클리닉 연계 상담 및 교육 시스템</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>검진 후 발견하고 지속적인 건강관리 및 질병 예측 프로그램</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>20여 대학병원에서 최우선 예약과 진료를 받을 수 있는 협진 시스템</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">검진 프로그램</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">디-케어 종합 건강검진</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-semibold text-gray-800">디-케어 BASIC</h4>
                  <p className="text-gray-600 mt-2">
                    신체계측, 혈압, 맥박, 청력, 심전도, 폐기능, 흉부X선, 소변검사, 13종 암표지자, 혈액검사 60종, 상복부초음파, 위내시경, 골밀도검사, 갑상선초음파, 자궁경부세포검사, 동맥경화도검사, 분변잠혈검사
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-semibold text-gray-800">디-케어 Platinum</h4>
                  <p className="text-gray-600 mt-2">
                    신체계측, 혈압, 맥박, 청력, 심전도, 폐기능, 체성분검사, 근골격체형분석, 흉부X선, 소변검사, 13종 암표지자, 혈액검사 64종, 상복부초음파, 위내시경, 대장내시경, 골밀도검사, 갑상선초음파, 유방촬영, 자궁경부암 검사, 동맥경화도검사, 분변잠혈검사, 특수초음파 (경동맥, 갑상선, 유방, 전립선, 여성하복부) 중 선택, 저선량 CT (뇌, 폐, 뼈, 허리, 심장) 중 선택
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-semibold text-gray-800">디-케어 VIP</h4>
                  <p className="text-gray-600 mt-2">
                    신체계측, 혈압, 맥박, 청력, 심전도, 안압/안저, 폐기능, 근골격체형분석, 체성분검사, 스트레스 검사, 뇌파 검사, 흉부X선, 소변검사, 13종 암표지자, 혈액검사 72종, 상복부초음파, 위내시경, 대장내시경, 골밀도검사, 갑상선초음파, 유방촬영, 자궁경부암 검사, 동맥경화도검사, 분변잠혈검사, 심장초음파, 특수초음파 (경동맥, 갑상선, 유방, 전립선, 여성하복부) 중 선택, 저선량 CT (뇌, 폐, 뼈, 허리, 심장) 중 선택, MRI (뇌, 목, 허리, 심장) 중 선택
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">디-케어 정밀 검진</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">췌장정밀</h4>
                  <p className="text-gray-600 text-sm">저선량 췌장 CT 또는 다른 CT와 방사선조영술을 대폭 줄인 128CH CT, 췌담관 정밀 검사, 위내시경, 상복부초음파</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">심혈관정밀</h4>
                  <p className="text-gray-600 text-sm">심장 질환 정밀 검사, 심장초음파 및 심장 관련 정밀 혈액검사, 심장 동맥 경화도 검사, 경동맥초음파, 위내시경, 상복부초음파</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">소화기정밀</h4>
                  <p className="text-gray-600 text-sm">소화기 정밀 내시경, 대장내시경, 정밀 혈액 및 혈액학적 소화기 질환 정밀 검사</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">뇌혈관정밀</h4>
                  <p className="text-gray-600 text-sm">최신장비 3.0T MRI 뇌/경동맥, 뇌혈류, 뇌기능 등 정밀 검사, 스트레스 뇌파검사, 위내시경, 상복부초음파, 경동맥초음파, 치매검사</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">척추관절정밀</h4>
                  <p className="text-gray-600 text-sm">뇌, 척수, CT, MRI 정밀 검사 필요 시 협의 후 알아 보는 척추/관절 암, 임우자 검사</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">알레르기면역정밀</h4>
                  <p className="text-gray-600 text-sm">알레르기 물질을 파악하기 위한 108종 관련 알레르기 정밀 검사</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">웨딩검진</h4>
                  <p className="text-gray-600 text-sm">신혼부부 남성 여성 호르몬 및 난소 기능 검사, 인유두종바이러스 검사 등 신혼부부 정밀 검진</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">키네시오로지검진</h4>
                  <p className="text-gray-600 text-sm">만 50세 이상 남여 건강검진 호르몬 및 알츠하이머 혈액 검사, 위내시경, MRA 검사</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">오시는 길</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">위치 안내</h3>
                <p className="text-gray-600 mb-6">
                  <strong>주소:</strong> 대구광역시 달서구 와룡로 307 디센터 1976 2층
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-2">대중교통 이용</h4>
                <p className="text-gray-600 mb-2">
                  <strong>BUS</strong> 대구의료원 라파엘웰빙센터 건너 정류장(서구1-1, 급행1, 급행8)
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Subway</strong> 2호선 죽전역 1번 출구 ▶ 죽전119안전센터앞 정류장(서구1, 급행8) ▶ 대구의료원 라파엘웰빙센터 정류장 하차
                </p>
                
                <div className="mt-6">
                  <p className="text-gray-600">
                    <strong>홈페이지:</strong> <a href="http://www.dcare.or.kr" target="_blank" rel="noopener noreferrer" className="text-primary">www.dcare.or.kr</a>
                  </p>
                  <p className="text-gray-600">
                    <strong>대표전화:</strong> 053.288.3000
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">지도 이미지</p>
                  <p className="text-sm text-gray-400">(실제 지도 API 연동 필요)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkup; 