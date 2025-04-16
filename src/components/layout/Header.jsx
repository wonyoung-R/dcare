import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';

const navItems = [
  { 
    name: '병원안내', 
    path: '/about',
    submenu: [
      { name: '병원소개', path: '/about' },
      { name: '의료진 소개', path: '/doctors' },
      { name: '둘러보기', path: '/tour' },
      { name: '오시는 길', path: '/contact' },
    ]
  },
  { 
    name: '진료안내', 
    path: '/services',
    submenu: [
      { name: '진료과목', path: '/services' },
      { name: '진료시간', path: '/hours' },
      { name: '예약안내', path: '/reservation' },
    ]
  },
  { 
    name: '종합건강검진', 
    path: '/checkup',
    submenu: [
      { name: '건강검진 안내', path: '/checkup' },
      { name: '검진 프로그램', path: '/checkup/programs' },
    ]
  },
  { 
    name: '인터벤션', 
    path: '/intervention',
    submenu: [
      { name: '인터벤션 소개', path: '/intervention' },
      { name: '시술 안내', path: '/intervention/procedures' },
      { name: '전문의 소개', path: '/intervention/specialists' },
    ]
  },
  { 
    name: 'MRI', 
    path: '/mri',
    submenu: [
      { name: 'MRI 소개', path: '/mri' },
      { name: '검사 안내', path: '/mri/exams' },
      { name: '장비 소개', path: '/mri/equipment' },
    ]
  },
  { 
    name: 'CT', 
    path: '/ct',
    submenu: [
      { name: 'CT 소개', path: '/ct' },
      { name: '검사 안내', path: '/ct/exams' },
      { name: '장비 소개', path: '/ct/equipment' },
    ]
  },
  { 
    name: '초음파', 
    path: '/ultrasound',
    submenu: [
      { name: '초음파 소개', path: '/ultrasound' },
      { name: '검사 안내', path: '/ultrasound/exams' },
      { name: '장비 소개', path: '/ultrasound/equipment' },
    ]
  },
  { 
    name: '일반촬영 및 기타', 
    path: '/xray',
    submenu: [
      { name: '일반촬영 소개', path: '/xray' },
      { name: '검사 안내', path: '/xray/exams' },
      { name: '기타 검사', path: '/xray/others' },
    ]
  },
  { 
    name: '커뮤니티', 
    path: '/community',
    submenu: [
      { name: '공지사항', path: '/community/news' },
      { name: '건강정보', path: '/community/health' },
      { name: '문의하기', path: '/community/inquiry' },
    ]
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle submenu
  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="./logo.svg" 
              alt="디케어 병원" 
              className="h-10 md:h-12"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML += '<span class="text-xl font-bold text-primary">디케어 병원</span>';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 py-2 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                  onMouseEnter={() => setActiveSubmenu(index)}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.submenu && (
                      <FaChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </span>
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Menu */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center text-sm font-medium">
              <FaGlobe className="mr-1" />
              <span>KR</span>
              <FaChevronDown className="ml-1 h-3 w-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <FaBars className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center justify-between py-2 border-b border-gray-100"
                      onClick={() => toggleSubmenu(index)}
                    >
                      <Link
                        to={item.path}
                        className={`text-sm font-medium ${
                          location.pathname === item.path ? 'text-primary' : 'text-gray-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <FaChevronDown
                          className={`h-3 w-3 transition-transform duration-200 ${
                            activeSubmenu === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 py-2 bg-gray-50"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-700 hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile Right Side Menu */}
              <div className="flex items-center justify-end mt-6 pt-4 border-t border-gray-100">
                <button className="flex items-center text-sm font-medium px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors duration-200">
                  <FaGlobe className="mr-1" />
                  <span>KR</span>
                  <FaChevronDown className="ml-1 h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 