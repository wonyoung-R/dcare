import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaChevronRight
} from 'react-icons/fa';

// 각 메뉴와 섹션 ID 연결
const footerLinks = [
  {
    title: '바로가기',
    links: [
      { name: '병원소개', path: '/about' },
      { name: '의료진 소개', path: '/doctors' },
      { name: '의료서비스', path: '/services' }
      //{ name: '문의하기', path: '/contact' },
    ],
  },
  {
    title: '서비스',
    links: [
      { name: '종합건강검진', path: '/checkup' },
      { name: 'Healing Greenhouse', path: '/greenhouse' },
      { name: '검진 외 일반진료', path: '/general' },
      { name: '줄기세포 치료', path: '/stemcell' },
    ],
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Simple Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="./images/logo_main_wht.png" 
                alt="디케어 병원" 
                className="h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML += '<span class="text-xl font-bold text-white">디케어 병원</span>';
                }}
              />
            </Link>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-primary flex-shrink-0" />
                <p>대구광역시 달서구 와룡로 307 디센터 1976 2층</p>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-2 text-primary flex-shrink-0" />
                <p>대표전화: 053.288.3000</p>
              </div>
              <div className="flex items-start">
                <FaClock className="mt-1 mr-2 text-primary flex-shrink-0" />
                <p>평일: 08:00 - 17:00 | 토요일: 08:00 - 13:00 <br />- 일요일 및 공휴일 휴진</p>
              </div>
            </div>
          </div>
          
          {/* Site Map - Simplified */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-md font-bold mb-4 text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-center">
                    <FaChevronRight className="text-primary mr-2 h-3 w-3" />
                    <Link 
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright - Simplified */}
        <div className="border-t border-gray-800 mt-8 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-2 md:mb-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary">개인정보처리방침</Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="text-gray-400 hover:text-primary">이용약관</Link>
            </div>
            <p className="text-gray-400">
              © {currentYear} 디케어 병원. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 