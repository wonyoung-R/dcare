import React from 'react';
import { motion } from 'framer-motion';

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
          <p className="section-subtitle text-center">
            디케어 병원은 최첨단 의료 장비와 전문 의료진을 통해
            환자 중심의 맞춤형 의료 서비스를 제공합니다.
          </p>
          
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">병원 개요</h2>
              <p className="text-gray-600">
                디케어 병원은 2010년 설립 이래 최첨단 영상의학 장비와 숙련된 의료진을 통해 정확한 진단과 치료를 제공하고 있습니다. 
                환자의 건강과 편안함을 최우선으로 생각하며, 지속적인 의료 품질 향상을 위해 노력하고 있습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">미션 & 비전</h2>
              <p className="text-gray-600 mb-4">
                <strong>미션:</strong> 환자 중심의 정확한 진단과 최상의 의료 서비스를 통해 건강한 사회를 만들어갑니다.
              </p>
              <p className="text-gray-600">
                <strong>비전:</strong> 첨단 의료기술과 전문성을 바탕으로 국내 최고의 영상의학과 병원으로 성장하고, 글로벌 의료 서비스를 선도합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">주요 연혁</h2>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-semibold w-24">2010년</span>
                  <span>디케어 병원 설립</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">2013년</span>
                  <span>3.0T MRI 도입</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">2015년</span>
                  <span>128채널 CT 도입</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">2017년</span>
                  <span>인터벤션 센터 개소</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">2020년</span>
                  <span>종합건강검진센터 확장</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">2023년</span>
                  <span>디지털 헬스케어 시스템 도입</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 