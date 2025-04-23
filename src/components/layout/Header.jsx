import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // 현재 언어 가져오기
  const currentLanguage = i18n.language;

  // 언어 변경 함수
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  // 번역된 네비게이션 항목
  const navItems = [
    { 
      name: t('header.about'),
      path: '/about',
      submenu: [
        { name: t('header.about_submenu.introduction'), path: '/about' },
        { name: t('header.about_submenu.doctors'), path: '/doctors' },
        { name: t('header.about_submenu.facilities'), path: '/facilities' },
        { name: t('header.about_submenu.inquiry'), path: '/contact' },
      ]
    },
    { 
      name: t('header.checkup'),
      path: '/checkup',
    },
    { 
      name: t('header.greenhouse'),
      path: '/greenhouse',
    },
    { 
      name: t('header.general'),
      path: '/general',
    },
    { 
      name: t('header.stemcell'),
      path: '/stemcell',
    },
  ];

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

  // 현재 경로가 홈페이지인지 확인
  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        (scrolled || !isHomePage) ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo-main.png" 
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
                      : (scrolled || !isHomePage) ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary-light'
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

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Mobile Language Selector */}
            <button
              className={`flex items-center text-sm font-medium ${
                (scrolled || !isHomePage) ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <FaGlobe className="h-5 w-5" />
            </button>
            
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className={`h-6 w-6 ${(scrolled || !isHomePage) ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <FaBars className={`h-6 w-6 ${(scrolled || !isHomePage) ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Menu */}
      <AnimatePresence>
        {langMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => changeLanguage('kr')}
                  className={`px-4 py-2 rounded ${currentLanguage === 'kr' ? 'bg-primary text-white' : 'text-gray-700'}`}
                >
                  KR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-4 py-2 rounded ${currentLanguage === 'en' ? 'bg-primary text-white' : 'text-gray-700'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                        className="ml-4 mt-2 space-y-2"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 