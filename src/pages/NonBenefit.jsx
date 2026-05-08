import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formatPrice = (min, max) => {
  if (min === null && max !== null) return `최고 ${max.toLocaleString()}원`;
  if (min === max) return `${min.toLocaleString()}원`;
  return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
};

const TableSection = ({ title, headers, rows }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-primary">{title}</h2>
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="w-full text-sm border-collapse bg-white">
        <thead>
          <tr className="bg-primary text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-gray-700 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const NonBenefit = () => {
  const mriRows = [
    ['자기공명영상(MRI) 뇌', 'HI101', '뇌 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HI135', '뇌혈관 일반', formatPrice(250000, 300000), '급여인정외 비급여'],
    ['', 'HI101,HF201', '뇌 일반 + 특수검사(확산)', formatPrice(100000, 150000), '급여인정외 비급여'],
    ['', 'HI101,HI135', '뇌 + 뇌혈관 동시촬영', formatPrice(500000, 600000), '급여인정외 비급여'],
    ['', 'HI101,HI135,HI136', '뇌 + 뇌혈관 + 경부혈관 동시촬영', formatPrice(500000, 700000), '급여인정외 비급여'],
    ['', 'HI135', '혈관 - 뇌혈관', formatPrice(250000, 300000), '급여인정외 비급여'],
    ['', 'HF101', '특수검사 - 확산', formatPrice(50000, 100000), '급여인정외 비급여'],
    ['자기공명영상(MRI) 척추', 'HI109', '척추 - 경추 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HI110', '척추 - 흉추 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HI111', '척추 - 요천추 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE113', '척추 - 경추 흉추 요추 동시(Sagittal)', formatPrice(50000, 700000), '급여인정외 비급여'],
    ['자기공명영상(MRI) 근골격', 'HE115', '근골격계 - 견관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE116', '근골격계 - 주관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE117', '근골격계 - 수관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE118', '근골격계 - 고관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE119', '근골격계 - 천장골관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE120', '근골격계 - 슬관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE121', '근골격계 - 발목관절 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE122', '근골격계 - 관절외 상지 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['', 'HE123', '근골격계 - 관절외 하지 일반', formatPrice(300000, 350000), '급여인정외 비급여'],
    ['추가검사', 'MRI', '추가 검사시', formatPrice(50000, 500000), ''],
  ];

  const ultrasoundRows = [
    ['경부 초음파', 'EB414', '갑상선·부갑상선 초음파', formatPrice(80000, 100000), '급여인정외 비급여'],
    ['', 'US15', '경동맥 초음파', formatPrice(70000, 90000), '급여인정외 비급여'],
    ['흉부 초음파', 'EB421', '유방·액와부 초음파', formatPrice(100000, 120000), '급여인정외 비급여'],
    ['', 'EB422', '유방·액와부 제외한 흉부초음파', formatPrice(80000, 100000), '급여인정외 비급여'],
    ['복부 초음파', 'EB441', '간·담낭·담도·비장·췌장 초음파 일반', formatPrice(80000, 100000), '급여인정외 비급여'],
    ['비뇨기계 초음파', 'EB448', '신장·부신·방광 초음파', formatPrice(80000, 100000), '급여인정외 비급여'],
    ['남성생식기 초음파', 'EB451', '전립선·정낭 초음파', formatPrice(80000, 100000), '급여인정외 비급여'],
    ['여성생식기 초음파', 'EB455', '여성생식기 초음파 일반', formatPrice(80000, 100000), '급여인정외 비급여'],
  ];

  const endoscopyRows = [
    ['내시경', 'EA002', '진정내시경환자관리료-II', formatPrice(null, 50000), '치료재료대 포함'],
    ['', 'EA003', '진정내시경환자관리료-III', formatPrice(null, 80000), '치료재료대 포함'],
  ];

  const certRows = [
    ['제증명 수수료', 'MCR001', '일반진단서', '20,000원', '원본 1부'],
    ['', 'MCR002', '영문진단서', '20,000원', '원본 1부'],
    ['', 'MCR005', '진료확인서', '3,000원', '원본 1부'],
    ['', 'MCR009', '진료기록사본 (1~5매)', '1,000원/매', '5매까지'],
    ['', 'MCR010', '진료기록사본 (6매~)', '100원/매', '1매당'],
    ['', 'MCR008', 'CD 복사료', '10,000원', ''],
  ];

  const medicineRows = [
    ['650103300', '수프렙미니정', '40,000원', '대장내시경 전처치'],
    ['681100026', '라이넥주 (자하거가수분해물)', '30,000원', '태반주사'],
    ['654001471', '제이비피플라몬주 (자하거추출물)', '30,000원', '태반주사'],
    ['669906221', '바이타디주 (콜레칼시페롤)', '25,000원', '비타민D 주사'],
    ['669905781', '신델라주 (티옥트산)', '30,000원', '신데렐라 주사'],
    ['645905861', '디톡시온주 (글루타티온(환원형))', '20,000원', '백옥 주사'],
    ['653401391', '액티민주사 (푸르설티아민염산염)', '30,000원', '마늘 주사'],
    ['670600791', '메리트씨주사 (아스코르빈산)', '10,000원', '고용량비타민/마이어스 주사'],
    ['670601120', '비타모주 (덱스판테놀)', '10,000원', '마이어스 주사'],
    ['669904681', '헥사비타주 (피리독신염산염)', '10,000원', '마이어스 주사'],
    ['669906481', '비코라민주 (히드록소코발라민)', '10,000원', '마이어스 주사'],
    ['669904701', '미네엠주 (황산마그네슘수화물)', '10,000원', '마이어스 주사'],
    ['078200031', '세느비트주사', '70,000원', '세느비트 주사'],
    ['678900490', '닥터라민주', '27,000원', '아미노산 영양수액'],
    ['642100710', '삐콤헥사주', '3,000원', '아미노산 영양수액'],
    ['650900121', '디펩티벤주 (N(2)-L-알라닐-L-글루타민)', '50,000원', '고농도 아미노산 주사'],
  ];

  const vaccineRows = [
    ['056400021', '독감예방주사', '25,000원', ''],
    ['655501931', '자궁경부암예방주사', '230,000원', ''],
  ];

  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="section-title text-center">비급여 진료비용 안내</h1>
          <p className="section-subtitle text-center mx-auto mb-4">
            디케어건강검진센터 비급여 항목 및 증명서 발급 안내
          </p>

          {/* Legal Notice */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-10 text-sm text-gray-700 space-y-1">
            <p>※ 위 항목은 <strong>의료법 시행규칙 제42조의2</strong>(비급여 진료비용등의 고지)에 의거하여 고시합니다.</p>
            <p>※ 시행규칙에 따라 비급여 이외에 전액본인부담(100/100) 항목은 제외됩니다.</p>
            <p>※ 국민건강보험법 고시에 따른 금액이나 항목은 변경될 수 있습니다.</p>
            <p>※ 최종 변경일: 2025.09.22 기준</p>
          </div>

          {/* MRI */}
          <TableSection
            title="■ 행위료 — MRI (자기공명영상)"
            headers={['분류', '코드', '명칭', '비용 (원)', '특이사항']}
            rows={mriRows}
          />

          {/* 초음파 */}
          <TableSection
            title="■ 행위료 — 초음파"
            headers={['분류', '코드', '명칭', '비용 (원)', '특이사항']}
            rows={ultrasoundRows}
          />

          {/* 내시경 */}
          <TableSection
            title="■ 행위료 — 내시경"
            headers={['분류', '코드', '명칭', '비용 (원)', '특이사항']}
            rows={endoscopyRows}
          />

          {/* 제증명 */}
          <TableSection
            title="■ 제증명 수수료"
            headers={['분류', '코드', '명칭', '비용 (원)', '비고']}
            rows={certRows}
          />

          {/* 약제비 */}
          <TableSection
            title="■ 약제비"
            headers={['코드', '명칭', '비용 (원)', '특이사항']}
            rows={medicineRows}
          />

          {/* 예방접종 */}
          <TableSection
            title="■ 예방접종"
            headers={['코드', '명칭', '비용 (원)', '특이사항']}
            rows={vaccineRows}
          />

          {/* Contact */}
          <div className="mt-10 bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-3">비용 및 검사에 관한 문의는 아래 번호로 연락해 주세요.</p>
            <a
              href="tel:053-288-3000"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-colors"
            >
              <span>📞</span>
              <span>053-288-3000</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NonBenefit;
