import React from 'react';

/**
 * 모든 페이지에서 사용할 수 있는 반응형 레이아웃 컨테이너
 * 반응형 크기 제한과 올바른 패딩을 자동으로 적용합니다.
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 컨텐츠
 * @param {string} props.className - 추가 CSS 클래스
 * @param {boolean} props.fullWidth - 전체 너비를 사용할지 여부 (기본값: false)
 * @returns {JSX.Element} 반응형 레이아웃 컴포넌트
 */
const ResponsiveLayout = ({ children, className = '', fullWidth = false }) => {
  return (
    <div className={`responsive-container ${fullWidth ? 'max-w-full' : 'max-w-7xl'} ${className}`}>
      {children}
    </div>
  );
};

/**
 * 페이지 섹션을 위한 반응형 컨테이너
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 컨텐츠
 * @param {string} props.className - 추가 CSS 클래스
 * @param {string} props.id - 섹션 ID
 * @returns {JSX.Element} 반응형 섹션 컴포넌트
 */
export const ResponsiveSection = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <ResponsiveLayout>
        {children}
      </ResponsiveLayout>
    </section>
  );
};

/**
 * 텍스트 콘텐츠를 위한 반응형 컨테이너
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 컨텐츠
 * @param {string} props.className - 추가 CSS 클래스
 * @returns {JSX.Element} 반응형 텍스트 컨테이너 컴포넌트
 */
export const ResponsiveTextContainer = ({ children, className = '' }) => {
  return (
    <div className={`responsive-text max-w-prose mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveLayout; 