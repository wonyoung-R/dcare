import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const doctors = [
  {
    id: 1,
    name: '김영호',
    position: '영상의학과 원장',
    specialty: 'MRI, CT, 인터벤션',
    education: ['서울대학교 의과대학', '서울대학교병원 영상의학과 전문의'],
    experience: ['前 서울대학교병원 교수', '대한인터벤션영상의학회 이사'],
    image: '/doctor-1.jpg',
    socialLinks: {
      email: 'doctor1@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 2,
    name: '이미영',
    position: '영상의학과 전문의',
    specialty: '유방 영상, 인터벤션',
    education: ['연세대학교 의과대학', '세브란스병원 영상의학과 전문의'],
    experience: ['前 세브란스병원 조교수', '대한유방영상의학회 정회원'],
    image: '/doctor-2.jpg',
    socialLinks: {
      email: 'doctor2@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 3,
    name: '박준서',
    position: '영상의학과 전문의',
    specialty: '신경계 영상, 두경부 영상',
    education: ['고려대학교 의과대학', '고려대학교병원 영상의학과 전문의'],
    experience: ['前 고려대학교병원 조교수', '대한신경영상의학회 정회원'],
    image: '/doctor-3.jpg',
    socialLinks: {
      email: 'doctor3@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 4,
    name: '최지원',
    position: '영상의학과 전문의',
    specialty: '복부 영상, 초음파',
    education: ['가톨릭대학교 의과대학', '서울성모병원 영상의학과 전문의'],
    experience: ['前 서울성모병원 임상조교수', '대한복부영상의학회 정회원'],
    image: '/doctor-4.jpg',
    socialLinks: {
      email: 'doctor4@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 5,
    name: '정현우',
    position: '영상의학과 전문의',
    specialty: '근골격계 영상, 척추 인터벤션',
    education: ['울산대학교 의과대학', '서울아산병원 영상의학과 전문의'],
    experience: ['前 서울아산병원 교수', '대한근골격영상의학회 이사'],
    image: '/doctor-5.jpg',
    socialLinks: {
      email: 'doctor5@dcare.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML += `<div class="w-full h-full flex items-center justify-center bg-gray-200"><span class="text-xl font-bold text-primary">${doctor.name}</span></div>`;
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
          <p className="text-white/90 text-sm">{doctor.position}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">전문 분야</h4>
          <p className="text-gray-600">{doctor.specialty}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">학력</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {doctor.education.map((edu, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span> {edu}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">경력</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {doctor.experience.map((exp, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span> {exp}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-3 mt-6">
          <a 
            href={`mailto:${doctor.socialLinks.email}`}
            className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            aria-label="Send email"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a 
            href={doctor.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const DoctorsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 variants={titleVariants} className="section-title">
              전문 의료진
            </motion.h2>
            <motion.p variants={titleVariants} className="section-subtitle mx-auto">
              디케어 병원의 의료진은 각 분야의 전문가로 구성되어 있으며,
              환자분들께 최고의 의료 서비스를 제공하기 위해 노력하고 있습니다.
            </motion.p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="doctors-swiper"
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-10">
            <Link
              to="/doctors"
              className="btn btn-primary"
            >
              의료진 더 보기
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorsSection; 