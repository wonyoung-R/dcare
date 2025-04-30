import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCheckCircle } from 'react-icons/fa';

const Stemcell = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const benefits = [
    '면역 기능 활성화',
    '조직 재생 촉진',
    '개인 면역력 강화',
    '부상 및 질병 회복 지원',
    '염증 감소',
    '세포 노화 지연'
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="stemcell-page container mx-auto px-4 py-16"
    >
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        줄기세포 치료
      </h1>

      {/* Single Image */}
      <div className="mb-16 flex justify-center">
        <img 
          src="./images/stemcells/stemcells.png" 
          alt="줄기세포 치료" 
          className="rounded-lg shadow-lg w-full max-w-4xl object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          디케어와 줄기세포 연구소의 협력
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          디케어 건강검진센터는 EHL BIO와 협력하여 줄기세포 치료 서비스를 제공합니다. 
          우리의 목표는 환자 개개인의 면역력을 강화하고 건강한 삶을 지원하는 것입니다.
        </p>
        <p className="text-lg text-gray-700">
          줄기세포 치료는 자가 면역 체계를 강화하고 손상된 조직의 자연 치유를 도우며, 염증을 감소시키는 등 다양한 건강상의 이점을 제공합니다.
        </p>
      </div>

      {/* Key Benefits - Centered Box with 80% width */}
      <div className="w-4/5 mx-auto bg-blue-50 rounded-xl p-8 mb-16 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          줄기세포 치료의 핵심 이점
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <FaRegCheckCircle className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="font-medium text-xl mb-2">면역 기능 활성화</h3>
            <p className="text-gray-600">면역 체계 강화를 통한 질병 예방 및 대응력 향상</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <FaRegCheckCircle className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="font-medium text-xl mb-2">조직 재생 촉진</h3>
            <p className="text-gray-600">손상된 조직과 세포의 재생 및 회복 능력 강화</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <FaRegCheckCircle className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="font-medium text-xl mb-2">개인 면역력 강화</h3>
            <p className="text-gray-600">맞춤형 치료를 통한 개인별 최적화된 <br />면역력 증진</p>
          </div>
        </div>
      </div>

      {/* Benefits List */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          줄기세포 치료의 적용 영역
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
              <FaRegCheckCircle className="text-primary mr-3" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">맞춤형 치료</h3>
          <p className="text-gray-700">
            모든 환자는 고유한 건강 상태와 요구 사항을 가지고 있습니다. 저희는 개인별로 최적화된 줄기세포 치료 계획을 수립합니다.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">연구 기반 방법</h3>
          <p className="text-gray-700">
            최신 연구와 임상 데이터를 기반으로 안전하고 효과적인 줄기세포 치료 프로토콜을 지속적으로 개발하고 있습니다.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">전문가 협력</h3>
          <p className="text-gray-700">
            디케어는 국내외 줄기세포 연구 전문가들과 지속적으로 협력하여 최첨단 치료법을 제공합니다.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Stemcell; 