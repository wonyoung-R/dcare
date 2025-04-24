/**
 * Utility to test image loading on mobile devices
 * This can be run in the browser console to diagnose image loading issues
 */

export const testMobileImageLoading = () => {
  console.log('Starting mobile image loading test...');
  
  // Test WebP support
  const webpSupport = () => {
    return new Promise(resolve => {
      const webP = new Image();
      webP.onload = webP.onerror = function() {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  };
  
  // Test image loading
  const testImage = (src, description) => {
    return new Promise((resolve) => {
      const img = new Image();
      const startTime = performance.now();
      
      img.onload = () => {
        const loadTime = performance.now() - startTime;
        console.log(`✅ ${description} loaded successfully in ${loadTime.toFixed(2)}ms`, src);
        // 이미지 실제 크기 확인
        console.log(`   Image dimensions: ${img.width}x${img.height}`);
        resolve({ success: true, loadTime, src, width: img.width, height: img.height });
      };
      
      img.onerror = (error) => {
        console.error(`❌ ${description} failed to load`, src);
        console.error(`   Error details:`, error);
        resolve({ success: false, src });
      };
      
      img.src = src;
    });
  };
  
  // 경로 정보 출력
  const logPathInfo = () => {
    const loc = window.location;
    console.log('⚙️ URL information:');
    console.log(`   Full URL: ${loc.href}`);
    console.log(`   Protocol: ${loc.protocol}`);
    console.log(`   Hostname: ${loc.hostname}`);
    console.log(`   Pathname: ${loc.pathname}`);
    console.log(`   Search: ${loc.search}`);
    console.log(`   Hash: ${loc.hash}`);
    
    // document.referrer이 있으면 표시
    if (document.referrer) {
      console.log(`   Referrer: ${document.referrer}`);
    }
    
    // window.navigator 정보
    console.log('📱 Device information:');
    console.log(`   User Agent: ${navigator.userAgent}`);
    console.log(`   Platform: ${navigator.platform}`);
    console.log(`   Vendor: ${navigator.vendor}`);
    console.log(`   Languages: ${navigator.languages?.join(', ')}`);
    console.log(`   Connection Type: ${navigator.connection?.effectiveType || 'unknown'}`);
    console.log(`   Screen: ${window.screen.width}x${window.screen.height} (${window.devicePixelRatio}x)`);
  };
  
  // Run the tests
  const runTests = async () => {
    // 경로 및 장치 정보 로깅
    logPathInfo();
    
    // Check WebP support
    const hasWebP = await webpSupport();
    console.log(`WebP support: ${hasWebP ? 'Yes ✅' : 'No ❌'}`);
    
    // Test base URL detection
    const isProduction = window.location.pathname.includes('/dcare/');
    const baseUrl = isProduction ? '/dcare' : '';
    console.log(`Environment: ${isProduction ? 'Production 🚀' : 'Development 🔧'}`);
    console.log(`Base URL: "${baseUrl}"`);
    
    // Use fixed version for cache busting
    const version = '202407';
    
    // Test multiple images for thoroughness
    const testPaths = [
      // WebP tests
      {
        src: `${baseUrl}/images/greenhouse/webp/entrance-01.webp?v=${version}`,
        description: 'Greenhouse WebP (entrance)'
      },
      {
        src: `${baseUrl}/images/greenhouse/webp/main-lobby-02.webp?v=${version}`,
        description: 'Greenhouse WebP (lobby)'
      },
      // JPEG fallback tests
      {
        src: `${baseUrl}/images/greenhouse/entrance-01.jpeg?v=${version}`,
        description: 'Greenhouse JPEG (entrance)'
      },
      {
        src: `${baseUrl}/images/greenhouse/main-lobby-02.jpeg?v=${version}`, 
        description: 'Greenhouse JPEG (lobby)'
      },
      // Logo test (should always work)
      {
        src: `${baseUrl}/images/logo-main.png?v=${version}`,
        description: 'Logo PNG'
      },
      // Test with absolute URLs
      {
        src: `${window.location.origin}${baseUrl}/images/logo-main.png?v=${version}`,
        description: 'Logo PNG (absolute URL)'
      }
    ];
    
    // Display test paths for debugging
    console.log('🔍 Testing the following image paths:');
    testPaths.forEach((test, i) => {
      console.log(`   [${i+1}] ${test.description}: ${test.src}`);
    });
    
    // Run all tests in parallel
    const results = await Promise.all(testPaths.map(test => testImage(test.src, test.description)));
    
    // Summarize results
    const successCount = results.filter(r => r.success).length;
    console.log(`\n📊 Test summary: ${successCount}/${results.length} images loaded successfully`);
    
    // More detailed results breakdown
    console.table(results.map(r => ({
      path: r.src,
      status: r.success ? '✅ Success' : '❌ Failed',
      ...(r.loadTime ? { loadTime: `${r.loadTime.toFixed(2)}ms` } : {}),
      ...(r.width ? { dimensions: `${r.width}x${r.height}` } : {})
    })));
    
    return {
      environment: isProduction ? 'production' : 'development',
      baseUrl,
      webpSupport: hasWebP,
      results,
      userAgent: navigator.userAgent,
      summary: `${successCount}/${results.length} successful`
    };
  };
  
  // Execute tests and return promise
  return runTests();
};

// Add to window object for easy console access
if (typeof window !== 'undefined') {
  // 글로벌 스코프에 노출
  window.testMobileImages = testMobileImageLoading;
  
  // 빠른 디버깅을 위한 헬퍼 함수
  window.debugImage = (path) => {
    const img = new Image();
    console.log(`Attempting to load image: ${path}`);
    
    img.onload = () => {
      console.log(`✅ Image loaded successfully: ${path}`);
      console.log(`Dimensions: ${img.width}x${img.height}`);
    };
    
    img.onerror = () => {
      console.error(`❌ Image failed to load: ${path}`);
    };
    
    img.src = path;
    return "Check console for results";
  };
} 