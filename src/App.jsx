import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';

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

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkup" element={<Checkup />} />
              <Route path="/greenhouse" element={<Greenhouse />} />
              <Route path="/general" element={<General />} />
              <Route path="/stemcell" element={<Stemcell />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App; 