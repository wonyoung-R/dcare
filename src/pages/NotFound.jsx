import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mt-32 mb-20">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6 mb-8">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="text-lg text-gray-600 max-w-md mx-auto mb-10">
        요청하신 페이지가 존재하지 않거나, 이동되었거나, 일시적으로 사용할 수 없습니다.
      </p>
      <Link
        to="/"
        className="inline-flex items-center btn btn-primary"
      >
        <FaArrowLeft className="mr-2" />
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound; 