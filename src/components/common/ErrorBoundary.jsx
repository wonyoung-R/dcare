import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // 에러 발생 시 상태 업데이트
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 정보를 상세히 기록
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // 필요시 에러 로깅
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러 발생 시 대체 UI
      return (
        <div className="p-8 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-xl font-bold text-red-700 mb-2">컴포넌트 로드 중 오류가 발생했습니다</h2>
          <details className="bg-white p-4 rounded-md mt-2 text-sm">
            <summary className="font-medium cursor-pointer">오류 세부 정보 보기</summary>
            <p className="mt-2 text-red-600">
              {this.state.error && this.state.error.toString()}
            </p>
            <pre className="mt-2 p-2 bg-gray-100 overflow-auto text-xs">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
          <p className="mt-4 text-gray-700">이 오류는 일시적일 수 있습니다. 페이지를 새로고침하거나 나중에 다시 시도해주세요.</p>
        </div>
      );
    }

    // 정상적인 경우에는 children 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary; 