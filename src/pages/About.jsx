import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCheckCircle, FaHospital, FaUserMd, FaChartLine, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">병원 소개</h1>
          {/* 모바일용 텍스트 (기본적으로 보이고, md 크기 이상에서는 숨김) */}
          <p className="section-subtitle text-center mx-auto mb-12 md:hidden">
            디케어건강검진센터는<br />최첨단 의료 장비와 전문 의료진을 통해<br />
            환자 중심의 맞춤형 의료 서비스를 제공합니다.
          </p>
          
          {/* 데스크톱용 텍스트 (기본적으로 숨기고, md 크기 이상에서만 표시) */}
          <p className="section-subtitle text-center mx-auto mb-12 hidden md:block">
            디케어건강검진센터는 최첨단 의료 장비와 전문 의료진을 통해<br />
            환자 중심의 맞춤형 의료 서비스를 제공합니다.
          </p>
          
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">병원 개요</h2>
              <p className="text-gray-600">
                디케어건강검진센터는 최첨단 영상의학 장비와 숙련된 의료진을 통해 정확한 진단과 치료를 제공하고 있습니다. 
                환자의 건강과 편안함을 최우선으로 생각하며, 지속적인 의료 품질 향상을 위해 노력하고 있습니다.
              </p>
            </div>
          </div>
          
          {/* 디케어센터 소개 */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">디케어건강검진센터 소개</h2>
            <p className="text-gray-600 mb-8">
              높은 수준의 의료 서비스와 특별한 공간 경험을 통해 건강검진을 넘어 건강한 라이프스타일을 제안하는 프리미엄 의료서비스를 제공합니다.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">핵심 가치</h3>
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
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">차별화된 VIP서비스</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>VIP 라운지와 여성전용공간 등 프라이빗한 특별 공간</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span>호텔급 숙박 서비스, 카페 등 센터의 만족도를 위한 시설과 퀄리티 높은 서비스</span>
              </li>
            </ul>
          </div>
          
          {/* CAM 고객 맞춤형 사후 건강관리 서비스 */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">CAM 고객 맞춤형 사후 건강관리 서비스</h2>
            <p className="text-gray-600 mb-6">
              검진을 넘어 건강을 증진하고 질병을 예측하는 고객관리프로그램 Customer After Management
            </p>
            
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">사후관리 서비스</h3>
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
                    <span>환자분의 건강 상태에 따른 협력 기관들과의 협진 시스템</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 검진 프로그램 */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">검진 프로그램</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">디케어 종합건강검진</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>디케어 베이직</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>디케어 플래티넘</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>디케어 VIP</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 오시는 길 */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">오시는 길</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.238151383703!2d128.53370141526748!3d35.85889668015502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c3365d94dd%3A0xf933929fb5979098!2z64yA6rWs6rSR7IKs7J207Iud7JuQ!5e0!3m2!1sko!2skr!4v1620112040456!5m2!1sko!2skr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="디케어건강검진센터 위치"
              ></iframe>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">주소</h3>
              <p className="text-gray-600 mb-4">대구광역시 달서구 와룡로 307</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">연락처</h3>
              <p className="text-gray-600 mb-4">대표전화: 053.288.3000</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">진료시간</h3>
              <ul className="text-gray-600">
                <li className="mb-2">평일: 08:30 - 17:30</li>
                <li className="mb-2">토요일: 08:30 - 13:00</li>
                <li>일요일 및 공휴일 휴진</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 