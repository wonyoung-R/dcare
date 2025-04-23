import React from 'react';

/**
 * 모든 페이지에서 사용할 수 있는 반응형 텍스트 컴포넌트
 * 모바일과 태블릿 화면에서 자동으로 텍스트를 최적화합니다.
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 텍스트 내용
 * @param {string} props.as - 사용할 HTML 태그 (기본값: 'p')
 * @param {string} props.className - 추가 CSS 클래스
 * @param {Object} props.style - 추가 인라인 스타일
 * @param {'title' | 'subtitle' | 'body' | 'caption'} props.variant - 텍스트 변형 (크기 및 스타일 사전 설정)
 * @returns {JSX.Element} 반응형 텍스트 컴포넌트
 */
const ResponsiveText = ({ 
  children, 
  as: Component = 'p', 
  className = '', 
  style = {}, 
  variant = 'body',
  ...rest 
}) => {
  // 텍스트 변형에 따른 기본 스타일 정의
  const variantStyles = {
    title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    subtitle: 'text-xl sm:text-2xl md:text-3xl font-semibold leading-snug',
    body: 'text-sm sm:text-base md:text-lg leading-relaxed',
    caption: 'text-xs sm:text-sm leading-normal',
  };

  // 기본 반응형 스타일
  const baseStyles = `
    max-w-full 
    break-words 
    whitespace-pre-line
  `;

  return (
    <Component 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{
        ...style,
        // 모바일에서의 최대 너비 제한
        '@media (max-width: 640px)': {
          maxWidth: '100%',
          fontSize: variant === 'title' ? '1.5rem' : 
                   variant === 'subtitle' ? '1.25rem' : 
                   variant === 'body' ? '0.875rem' : '0.75rem',
          lineHeight: variant === 'title' ? '1.25' : '1.5',
          padding: '0 0.5rem'
        },
        // 태블릿에서의 최대 너비 제한
        '@media (min-width: 768px)': {
          maxWidth: '90%',
        }
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ResponsiveText; 