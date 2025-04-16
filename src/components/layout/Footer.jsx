import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaBlog 
} from 'react-icons/fa';

const footerLinks = [
  {
    title: '병원안내',
    links: [
      { name: '병원소개', path: '/about' },
      { name: '의료진 소개', path: '/doctors' },
      { name: '둘러보기', path: '/tour' },
      { name: '오시는 길', path: '/contact' },
    ],
  },
  {
    title: '진료안내',
    links: [
      { name: '진료과목', path: '/services' },
      { name: '진료시간', path: '/hours' },
    ],
  },
  {
    title: '의료서비스',
    links: [
      { name: '종합건강검진', path: '/checkup' },
      { name: '인터벤션', path: '/intervention' },
      { name: 'MRI', path: '/mri' },
      { name: 'CT', path: '/ct' },
      { name: '초음파', path: '/ultrasound' },
      { name: '일반촬영', path: '/xray' },
    ],
  },
  {
    title: '커뮤니티',
    links: [
      { name: '공지사항', path: '/community/news' },
      { name: '건강정보', path: '/community/health' },
      { name: '문의하기', path: '/community/inquiry' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo-white.svg" 
                alt="디케어 병원" 
                className="h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML += '<span class="text-xl font-bold text-white">디케어 병원</span>';
                }}
              />
            </Link>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <p>대구광역시 달서구 와룡로 307 디센터 1976 2층</p>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-primary" />
                <div>
                  <p>대표전화: 053.288.3000</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="mt-1 mr-3 text-primary" />
                <div>
                  <p>평일: 08:30 - 17:30</p>
                  <p>토요일: 08:30 - 13:00</p>
                  <p>일요일 및 공휴일 휴진</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaBlog className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Site Map */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4 text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex space-x-4 mb-2">
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary">개인정보처리방침</Link>
                <span className="text-gray-600">|</span>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-primary">이용약관</Link>
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} 디케어 병원. All rights reserved.
              </p>
            </div>
            <div className="text-sm text-gray-400">
              <p>사업자등록번호: 123-45-67890</p>
              <p>의료기관번호: 제1234호</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 