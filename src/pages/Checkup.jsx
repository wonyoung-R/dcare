import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaImage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Checkup = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">종합건강검진</h1>
          
          {/* 모바일용 텍스트 (기본적으로 보이고, md 크기 이상에서는 숨김) */}
          <p className="section-subtitle text-center mx-auto mb-12 md:hidden">
          최신 의료장비를 통한 체계적인 검진으로 <br />질병을 발견하고 예방할 수 있도록 도와드립니다. 
          <br />MRI, CT 등 장비뿐만 아니라 초음파검사, <br />스트레스검사, 뇌파검사, 근골격계검사 등의 검진이 가능합니다
          </p>
          
          {/* 데스크톱용 텍스트 (기본적으로 숨기고, md 크기 이상에서만 표시) */}
          <p className="section-subtitle text-center mx-auto mb-12 hidden md:block">
            최신 의료장비를 통한 체계적인 검진으로 질병을 발견하고 예방할 수 있도록 도와드립니다. MRI, CT 등 장비뿐만 아니라 초음파검사, 스트레스검사, 뇌파검사, 근골격계검사 등의 검진이 가능합니다
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-primary mb-6">1. 검진내용</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>종합검진:</strong> 일반적으로 업체에서 단체 종합 검진 오시는 환자분들을 위한 검진</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>개인검진:</strong> 개인적으로 본인 비용 지불하여 종합검진 하시는 환자분들을 위한 검진</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>공단검진:</strong> 공단검진만 하러 오시는 환자분들을 위한 검진</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>외래검진:</strong> 외래진료 후 원장님 처방으로 필요 검사 하는 환자분들을 위한 검진(이지스로 외래 접수 후 처방)</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 bg-gray-100 rounded-lg overflow-hidden h-full min-h-[200px]">
                <img 
                  src="./images/healthcheck/healthcheck-01.jpg" 
                  alt="검진내용" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div className="flex items-center justify-center h-full">
                        <FaImage className="text-gray-400 text-6xl mb-2" />
                        <p className="text-gray-500 text-sm">검진내용 이미지</p>
                      </div>`;
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-primary mb-6">2. 정밀검진</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>췌장정밀:</strong> 저선량 췌장 CT 또는 다른 CT와 방사선조술을 대폭 줄인 128CH CT, 췌담관 정밀 검사, 위내시경, 상복부초음파</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>심혈관정밀:</strong> 심장 질환 정밀 검사, 심장초음파 및 심장 관련 정밀 혈액검사, 심장 동맥 경화도 검사, 경동맥초음파, 위내시경, 상복부초음파</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>소화기정밀:</strong> 소화기 정밀 내시경, 대장내시경, 정밀 혈액 및 혈액학적 소화기 질환 정밀 검사</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>뇌혈관정밀:</strong> 최신장비 3.0T MRI 뇌/경동맥, 뇌혈류, 뇌기능 등 정밀 검사, 스트레스 뇌파검사, 위내시경, 상복부초음파, 경동맥초음파, 치매검사</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>척추관절정밀:</strong> 뇌, 척수, CT, MRI 정밀 검사 필요 시 협의 후 알아 보는 척추/관절 암, 임우자 검사</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>알레르기면역정밀:</strong> 알레르기 물질을 파악하기 위한 108종 관련 알레르기 정밀 검사</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>웨딩검진:</strong> 신혼부부 남성 여성 호르몬 및 난소 기능 검사, 인유두종바이러스 검사 등 신혼부부 정밀 검진</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 bg-gray-100 rounded-lg overflow-hidden h-full min-h-[200px]">
                <img 
                  src="./images/healthcheck/healthcheck-02.jpg" 
                  alt="정밀검진" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div className="flex items-center justify-center h-full">
                        <FaImage className="text-gray-400 text-6xl mb-2" />
                        <p className="text-gray-500 text-sm">정밀검진 이미지</p>
                      </div>`;
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-primary mb-6">3. 고객관리프로그램</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Hightech</strong> 최첨단 의료환경 구축으로 신속하고 정확한 검진 시스템 [CAM] 임상 빅데이터를 통한 지속적인 관리</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>RFID 시스템</strong>으로 검진 진행, 검진 결과 실시간 확인</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>고객관리프로그램의 <strong>Two Track System</strong></span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 bg-gray-100 rounded-lg overflow-hidden h-full min-h-[200px]">
                <img 
                  src="./images/healthcheck/healthcheck-03.jpg" 
                  alt="고객관리프로그램" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div className="flex items-center justify-center h-full">
                        <FaImage className="text-gray-400 text-6xl mb-2" />
                        <p className="text-gray-500 text-sm">고객관리프로그램 이미지</p>
                      </div>`;
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-primary mb-6">4. 진단프로그램(자세한 프로그램 내용은 유선으로 문의 부탁드립니다)</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Dcare-Basic</strong></span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Dcare-Platinum</strong></span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Dcare-VIP</strong></span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 bg-gray-100 rounded-lg overflow-hidden h-full min-h-[200px]">
                <img 
                  src="./images/healthcheck/healthcheck-04.jpg" 
                  alt="진단프로그램" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div className="flex items-center justify-center h-full">
                        <FaImage className="text-gray-400 text-6xl mb-2" />
                        <p className="text-gray-500 text-sm">진단프로그램 이미지</p>
                      </div>`;
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkup; 