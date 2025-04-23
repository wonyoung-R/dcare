import React from 'react';
import { motion } from 'framer-motion';
import { FaDna, FaShieldAlt, FaHeart, FaUserMd } from 'react-icons/fa';

const Stemcell = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center mb-8">줄기세포 치료</h1>
          
          {/* 단일 이미지 */}
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl mb-12 group">
            <img 
              src="/images/stemcells/stemcells.png" 
              alt="줄기세포 치료" 
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/1200x600?text=줄기세포+치료+이미지";
              }}
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="bg-primary bg-opacity-10 p-6 rounded-lg mt-12 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">디케어 건강검진센터 × EHLBIO 면역세포치료 협력</h2>
            <p className="text-lg text-gray-700">
              디케어는 줄기세포·면역세포 치료 전문 기업 EHLBIO와 협력하여, 고도화된 맞춤형 치료 상담을 제공합니다.
            </p>
          </div>
          
          {/* 통합된 80% 너비 박스 */}
          <div className="mt-12 w-4/5 mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* 면역기능 활성화 */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex flex-col items-center text-center mb-6">
                  <FaShieldAlt className="text-5xl text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">면역기능 활성화</h3>
                </div>
                <p className="text-gray-600 text-center">
                  암 또는 난치성 질환 진단 시, 면역기능을 활성화하여 항암 효과 및 재발 방지 가능성을 제시합니다.
                </p>
              </div>
              
              {/* 조직 재생 촉진 */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex flex-col items-center text-center mb-6">
                  <FaDna className="text-5xl text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">조직 재생 촉진</h3>
                </div>
                <p className="text-gray-600 text-center">
                  줄기세포 치료는 손상된 조직의 재생을 촉진해 회복력을 높이며, 항노화에도 긍정적인 역할을 합니다.
                </p>
              </div>
              
              {/* 개인 면역력 강화 */}
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <FaHeart className="text-5xl text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">개인 면역력 강화</h3>
                </div>
                <p className="text-gray-600 text-center">
                  개인의 면역력을 강화해 질병 저항력을 높이는 치료로, 다양한 국내외 연구를 통해 안전성과 효과가 입증되었습니다.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <div className="flex items-center mb-6">
              <FaUserMd className="text-4xl text-primary mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">전문가 상담</h3>
            </div>
            <p className="text-gray-600 mb-4">
              진단 후 치료방법에 대해 관심 있는 분께는 전문 의료진이 정밀하게 상담해드립니다.
            </p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-xl mb-2">줄기세포 치료의 주요 적용 분야</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 면역기능 강화 및 자가면역질환</li>
                <li>• 퇴행성 관절염 및 척추질환</li>
                <li>• 항노화 및 미용 분야</li>
                <li>• 만성 난치성 질환</li>
                <li>• 암 치료 보조요법</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-gradient p-1 rounded-lg">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">EHLBIO 줄기세포 치료의 특징</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">개인 맞춤형 치료</h4>
                    <p className="text-gray-600 text-sm">개인의 질환 상태와 면역력에 맞는 맞춤형 치료 프로토콜</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">최신 연구 기반</h4>
                    <p className="text-gray-600 text-sm">국내외 임상 연구 결과를 기반으로 한 과학적인 접근</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">전문가 협진 시스템</h4>
                    <p className="text-gray-600 text-sm">치료 전 과정에 걸친 전문 의료진의 협진 및 모니터링</p>
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

export default Stemcell; 