import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ResponsiveLayout from './components/layout/ResponsiveLayout';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Equipment = lazy(() => import('./pages/Equipment'));
const Contact = lazy(() => import('./pages/Contact'));
const Checkup = lazy(() => import('./pages/Checkup'));
const Greenhouse = lazy(() => import('./pages/Greenhouse'));
const General = lazy(() => import('./pages/General'));
const Stemcell = lazy(() => import('./pages/Stemcell'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Facilities = lazy(() => import('./pages/Facilities'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
  </div>
);

// 페이지 컴포넌트에 반응형 레이아웃을 적용하는 래퍼 함수
const withResponsiveLayout = (Component) => {
  return (props) => (
    <Component {...props} />
  );
};

function App() {
  // 반응형 페이지 컴포넌트 생성
  const pages = {
    Home: withResponsiveLayout(Home),
    About: withResponsiveLayout(About),
    Services: withResponsiveLayout(Services),
    Doctors: withResponsiveLayout(Doctors),
    Equipment: withResponsiveLayout(Equipment),
    Contact: withResponsiveLayout(Contact),
    Checkup: withResponsiveLayout(Checkup),
    Greenhouse: withResponsiveLayout(Greenhouse),
    General: withResponsiveLayout(General),
    Stemcell: withResponsiveLayout(Stemcell),
    NotFound: withResponsiveLayout(NotFound),
    Facilities: withResponsiveLayout(Facilities),
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<pages.Home />} />
              <Route path="/about" element={<pages.About />} />
              <Route path="/services" element={<pages.Services />} />
              <Route path="/doctors" element={<pages.Doctors />} />
              <Route path="/equipment" element={<pages.Equipment />} />
              <Route path="/contact" element={<pages.Contact />} />
              <Route path="/checkup" element={<pages.Checkup />} />
              <Route path="/greenhouse" element={<pages.Greenhouse />} />
              <Route path="/general" element={<pages.General />} />
              <Route path="/stemcell" element={<pages.Stemcell />} />
              <Route path="/facilities" element={<pages.Facilities />} />
              <Route path="*" element={<pages.NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App; 