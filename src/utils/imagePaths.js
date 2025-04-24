/**
 * Utility functions for handling image paths
 */

/**
 * Get the base URL for assets based on the current environment
 * @returns {string} The base URL for assets
 */
export const getBaseUrl = () => {
  // 현재 경로에서 base를 판단 (GitHub Pages는 '/dcare/'를 사용)
  const isProduction = window.location.pathname.includes('/dcare/');
  return isProduction ? '/dcare' : '';
};

/**
 * Get the full URL for an image, with cache busting
 * @param {string} path - The image path
 * @param {boolean} bustCache - Whether to add a cache-busting parameter
 * @returns {string} The full image URL
 */
export const getImageUrl = (path, bustCache = true) => {
  const baseUrl = getBaseUrl();
  // 캐시 버스팅에 고정된 값 사용 (타임스탬프는 SSR 불일치 문제 발생)
  const version = '202407';
  const cacheBuster = bustCache ? `?v=${version}` : '';
  return `${baseUrl}${path}${cacheBuster}`;
};

/**
 * Get WebP and fallback image URLs for a responsive picture element
 * @param {string} imagePathWithoutExtension - The image path without extension
 * @param {string} webpFolder - The WebP folder path (default: '/webp')
 * @returns {Object} Object containing webp and fallback URLs
 */
export const getResponsiveImageUrls = (imagePathWithoutExtension, webpFolder = '/webp') => {
  // Split the path to get the directory and filename
  const lastSlashIndex = imagePathWithoutExtension.lastIndexOf('/');
  const directory = imagePathWithoutExtension.substring(0, lastSlashIndex);
  const filename = imagePathWithoutExtension.substring(lastSlashIndex + 1);
  
  // Construct the WebP path by adding webpFolder to the directory
  const webpDirectory = `${directory}${webpFolder}`;
  
  // Construct the full paths
  const webpPath = `${webpDirectory}/${filename}.webp`;
  const fallbackPath = `${imagePathWithoutExtension}.jpeg`;
  
  // Return both URLs with cache busting
  return {
    webp: getImageUrl(webpPath),
    fallback: getImageUrl(fallbackPath)
  };
}; 