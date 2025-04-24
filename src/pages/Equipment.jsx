import React from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { FaAngleRight } from 'react-icons/fa';

// 장비 데이터
const equipments = [
  {
    id: 1,
    category: 'MRI',
    items: [
      {
        id: 'mri-1',
        name: '3.0T MRI',
        manufacturer: 'Siemens Healthineers',
        model: 'MAGNETOM Vida',
        image: '/equipment-1.jpg',
        description: '3.0T 초고자장 MRI 장비로, 고해상도 영상과 빠른 촬영 시간을 제공합니다. 인공지능 기술을 활용한 자동화 기능으로 보다 정확하고 효율적인 검사가 가능합니다.',
        features: [
          '고해상도 영상',
          '짧은 촬영 시간',
          '진단 정확도 향상',
          '환자 편의성 증가',
          'AI 기반 자동화 기술'
        ],
        applications: [
          '신경계 질환 (뇌졸중, 뇌종양, 퇴행성 뇌질환 등)',
          '척추 질환 (추간판 탈출증, 척추관 협착증 등)',
          '근골격계 질환 (관절염, 인대 손상 등)',
          '복부 및 골반 질환',
          '혈관 질환'
        ]
      },
      {
        id: 'mri-2',
        name: '1.5T MRI',
        manufacturer: 'GE Healthcare',
        model: 'SIGNA Artist',
        image: '/equipment-2.jpg',
        description: '1.5T MRI 장비로, 안정적인 영상과 다양한 검사 프로토콜을 제공합니다. 특히 금속 물질에 대한 영향이 적어 인공관절 등 금속 삽입물이 있는 환자에게 적합합니다.',
        features: [
          '안정적인 영상 품질',
          '금속 아티팩트 감소 기술',
          '조용한 검사 환경',
          '넓은 검사 공간'
        ],
        applications: [
          '금속 임플란트가 있는 환자',
          '일반적인 MRI 검사',
          '관절 및 근골격계 검사',
          '뇌, 척추 검사'
        ]
      }
    ]
  },
  {
    id: 2,
    category: 'CT',
    items: [
      {
        id: 'ct-1',
        name: '128채널 CT',
        manufacturer: 'Siemens Healthineers',
        model: 'SOMATOM Definition Edge',
        image: '/equipment-3.jpg',
        description: '첨단 128채널 CT 장비로, 0.33초의 빠른 회전 속도와 높은 해상도를 제공합니다. 저선량 기술을 적용하여 방사선 피폭을 최소화하면서 우수한 영상을 획득할 수 있습니다.',
        features: [
          '고해상도 영상',
          '낮은 방사선량',
          '빠른 스캔 시간',
          '심장 영상에 최적화'
        ],
        applications: [
          '폐 및 흉부 질환',
          '관상동맥 및 심장 질환',
          '뇌혈관 질환',
          '복부 및 골반 질환',
          '외상 환자의 응급 검사'
        ]
      }
    ]
  },
  {
    id: 3,
    category: '초음파',
    items: [
      {
        id: 'us-1',
        name: '고급형 초음파 시스템',
        manufacturer: 'Samsung Medison',
        model: 'RS85 Prestige',
        image: '/equipment-4.jpg',
        description: '최신 초음파 시스템으로, 뛰어난 영상 품질과 다양한 응용 기능을 제공합니다. AI 기술을 활용한 자동 측정 및 진단 보조 기능을 갖추고 있어 정확한 검사를 지원합니다.',
        features: [
          '고해상도 이미지',
          '실시간 영상',
          '무방사선',
          '다양한 프로브 지원',
          'AI 기반 진단 보조'
        ],
        applications: [
          '복부 초음파 (간, 담낭, 췌장, 비장, 신장 등)',
          '갑상선 및 경부 초음파',
          '유방 초음파',
          '근골격계 초음파',
          '심장 초음파'
        ]
      }
    ]
  },
  {
    id: 4,
    category: 'X-ray',
    items: [
      {
        id: 'xray-1',
        name: '디지털 X-ray',
        manufacturer: 'Philips',
        model: 'DigitalDiagnost C90',
        image: '/equipment-5.jpg',
        description: '디지털 X-ray 시스템으로, 선명한 영상과 빠른 검사를 제공합니다. 낮은 방사선량으로 환자의 피폭을 최소화하며, 디지털 영상 처리 기술로 진단 정확도를 높입니다.',
        features: [
          '디지털 영상 기술',
          '낮은 방사선량',
          '즉각적인 결과 확인',
          '영상 후처리 가능'
        ],
        applications: [
          '흉부 X-ray',
          '복부 X-ray',
          '근골격계 X-ray',
          '치과 X-ray'
        ]
      }
    ]
  },
  {
    id: 5,
    category: '인터벤션',
    items: [
      {
        id: 'iv-1',
        name: '인터벤션 시스템',
        manufacturer: 'Siemens Healthineers',
        model: 'Artis zee',
        image: '/equipment-6.jpg',
        description: '첨단 인터벤션 장비로, 정확하고 안전한 시술이 가능합니다. 고해상도 실시간 영상을 제공하여 최소 침습적 시술의 정확도와 안전성을 높입니다.',
        features: [
          '고해상도 실시간 영상',
          '정밀한 시술 가이드',
          '낮은 방사선량',
          '다양한 시술 지원'
        ],
        applications: [
          '척추 인터벤션 (신경차단술, 경막외 주사 등)',
          '관절 인터벤션 (관절 주사, 주변 신경 차단 등)',
          '혈관 인터벤션 (혈관 성형술, 스텐트 삽입 등)',
          '종양 인터벤션 (생검, 고주파 절제술 등)'
        ]
      }
    ]
  }
];

// 장비 상세 컴포넌트
const EquipmentDetail = ({ item }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('placeholder-image');
            const textElement = document.createElement('div');
            textElement.textContent = item.name;
            textElement.className = 'absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center p-4 bg-gray-200';
            e.target.parentNode.appendChild(textElement);
          }}
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500">제조사: {item.manufacturer}</p>
          <p className="text-sm text-gray-500">모델명: {item.model}</p>
        </div>
        <p className="text-gray-600 mb-6">{item.description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">주요 특징</h4>
          <ul className="space-y-2">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaAngleRight className="text-primary mt-1 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">적용 분야</h4>
          <ul className="space-y-2">
            {item.applications.map((app, index) => (
              <li key={index} className="flex items-start">
                <FaAngleRight className="text-primary mt-1 mr-2" />
                <span className="text-gray-600">{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// 장비 카테고리 별 탭 컴포넌트
const CategoryTab = ({ category }) => {
  return (
    <div className="p-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {category.items.map((item) => (
            <Tab
              key={item.id}
              className={({ selected }) =>
                `w-full py-2 rounded-md text-sm font-medium transition-colors duration-200
                 ${
                   selected
                     ? 'bg-primary text-white shadow'
                     : 'text-gray-700 hover:bg-gray-200'
                 }`
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {category.items.map((item) => (
            <Tab.Panel key={item.id}>
              <EquipmentDetail item={item} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

// 메인 페이지 컴포넌트
const Equipment = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">의료1 장비</h1>
          <p className="section-subtitle text-center mx-auto">
            디케어 병원은 최첨단 의료 장비를 갖추고 있어
            정확하고 빠른 진단과 치료를 제공합니다.
          </p>
          
          <div className="mt-12">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-8">
                {equipments.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      `w-full py-2.5 text-sm leading-5 font-medium rounded-lg transition-colors duration-200
                       ${
                         selected
                           ? 'bg-white text-primary shadow'
                           : 'text-gray-700 hover:bg-white/[0.3]'
                       }`
                    }
                  >
                    {category.category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {equipments.map((category) => (
                  <Tab.Panel key={category.id}>
                    <CategoryTab category={category} />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Equipment; 