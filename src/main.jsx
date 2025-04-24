import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './i18n/i18n';

// Import image testing utility in development mode
if (import.meta.env.DEV) {
  import('./utils/testMobileImages').then(module => {
    // Expose to window for console testing
    window.testMobileImages = module.testMobileImageLoading;
    console.log('Mobile image testing utility loaded. Run window.testMobileImages() in console to test.');
  }).catch(err => {
    console.error('Failed to load mobile image testing utility:', err);
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
); 