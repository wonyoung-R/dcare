import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserShield, FaClipboardList, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className="min-h-screen py-20 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
          style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
        >
          <h1 className="section-title text-center">개인정보처리방침</h1>
          <p className="section-subtitle text-center mx-auto mb-12">
            디케어건강검진센터는 이용자의 개인정보를<br className="md:hidden" />
            소중히 보호하며,<br className="hidden md:block" />
            「개인정보 보호법」을 준수합니다.
          </p>

          {/* 총칙 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">총칙</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              디케어건강검진센터(이하 &quot;센터&quot;)는 「개인정보 보호법」, 「의료법」 등 관련 법령에서
              정한 바를 준수하여 정보주체의 개인정보 및 권익을 보호하고, 개인정보와 관련한 정보주체의
              고충을 원활하게 처리할 수 있도록 본 개인정보처리방침을 수립·공개합니다.
            </p>
          </div>

          {/* 1. 수집하는 개인정보 항목 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <FaClipboardList className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">제1조 수집하는 개인정보 항목</h2>
            </div>
            <p className="text-gray-600 mb-4">
              센터는 건강검진 예약 및 의료 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-5 mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">필수 수집 항목</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 성명, 성별, 생년월일</li>
                <li>• 연락처(휴대전화번호, 자택 전화번호)</li>
                <li>• 이메일 주소</li>
                <li>• 검진 예약 정보(희망 일자, 검진 종류, 추가 요청 사항)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">진료 과정에서 자동 생성되는 항목</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 진료 기록, 검사 결과, 영상 자료</li>
                <li>• 처방 내역, 진단명</li>
                <li>• 방문 일자 및 진료 이력</li>
              </ul>
            </div>
          </div>

          {/* 2. 수집 및 이용 목적 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제2조 개인정보의 수집 및 이용 목적</h2>
            <p className="text-gray-600 mb-4">
              센터는 수집한 개인정보를 다음의 목적을 위해 이용합니다. 이용 목적이 변경되는 경우에는
              「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>건강검진 예약 접수 및 일정 관리</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>검진 결과 안내 및 사후 관리(CAM 서비스) 제공</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>의료 서비스 제공 및 진료비 정산</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>본인 확인, 민원 처리 및 고지사항 전달</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">5.</span>
                <span>서비스 개선 및 통계 분석(개인을 식별할 수 없는 형태로 처리)</span>
              </li>
            </ul>
          </div>

          {/* 3. 보유 및 이용기간 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제3조 개인정보의 보유 및 이용기간</h2>
            <p className="text-gray-600 mb-4">
              센터는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
              동의받은 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-primary/10 text-gray-800">
                    <th className="border border-gray-200 px-4 py-3 text-left">항목</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">보유 기간</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">근거</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">진료기록부</td>
                    <td className="border border-gray-200 px-4 py-3">10년</td>
                    <td className="border border-gray-200 px-4 py-3">의료법 시행규칙 제15조</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">검사소견 기록 및 영상</td>
                    <td className="border border-gray-200 px-4 py-3">5년</td>
                    <td className="border border-gray-200 px-4 py-3">의료법 시행규칙 제15조</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">예약 정보(검진 미수진 시)</td>
                    <td className="border border-gray-200 px-4 py-3">1년</td>
                    <td className="border border-gray-200 px-4 py-3">내부 운영 정책</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">동의 철회 시</td>
                    <td className="border border-gray-200 px-4 py-3">즉시 파기</td>
                    <td className="border border-gray-200 px-4 py-3">법정 보존 의무 항목 제외</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. 제3자 제공 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제4조 개인정보의 제3자 제공</h2>
            <p className="text-gray-600 mb-4">
              센터는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는
              예외로 합니다.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>정보주체로부터 사전에 별도의 동의를 받은 경우</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>법령에 특별한 규정이 있거나 법령상 의무를 준수하기 위해 불가피한 경우</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>
                  정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로
                  사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의
                  이익을 위해 필요하다고 인정되는 경우
                </span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>
                  수사기관이 「형사소송법」 등 관계 법령에 따라 적법한 절차를 거쳐 요청한 경우
                </span>
              </li>
            </ul>
          </div>

          {/* 5. 이용자 권리 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <FaUserShield className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">제5조 정보주체의 권리·의무 및 행사 방법</h2>
            </div>
            <p className="text-gray-600 mb-4">
              정보주체는 센터에 대해 언제든지 다음 각 호의 권리를 행사할 수 있습니다.
            </p>
            <ul className="space-y-3 text-gray-600 mb-4">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>개인정보 열람 요구</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>오류가 있는 경우 정정 요구</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>삭제 요구(법정 보존 의무가 있는 진료 기록 등은 제외)</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>처리 정지 요구</span>
              </li>
            </ul>
            <p className="text-gray-600">
              위 권리는 서면, 전자우편, 모사전송(FAX), 전화 등을 통하여 행사하실 수 있으며, 센터는 이에
              대해 지체 없이 조치하겠습니다. 단, 다른 법령에서 그 개인정보가 수집 대상으로 명시되어
              있는 경우에는 그 삭제를 요구할 수 없습니다.
            </p>
          </div>

          {/* 6. 안전성 확보 조치 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제6조 개인정보의 안전성 확보 조치</h2>
            <p className="text-gray-600 mb-4">
              센터는 개인정보의 안전성 확보를 위해 다음과 같은 기술적·관리적·물리적 조치를 하고 있습니다.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• 개인정보 취급 직원의 최소화 및 정기 교육</li>
              <li>• 내부관리계획의 수립 및 시행</li>
              <li>• 개인정보의 암호화 저장 및 전송</li>
              <li>• 접속기록의 보관 및 위·변조 방지</li>
              <li>• 개인정보 처리시스템의 접근 권한 관리</li>
              <li>• 개인정보 보관 시설의 출입 통제</li>
            </ul>
          </div>

          {/* 7. 개인정보 보호책임자 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">제7조 개인정보 보호책임자</h2>
            </div>
            <p className="text-gray-600 mb-4">
              센터는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
              불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-primary/5 rounded-lg p-5 border-l-4 border-primary">
              <ul className="space-y-2 text-gray-700">
                <li><strong>담당 부서:</strong> 디케어건강검진센터 고객지원팀</li>
                <li><strong>대표 전화:</strong> <a href="tel:053-288-3000" className="text-primary hover:underline">053-288-3000</a></li>
                <li><strong>주소:</strong> 대구광역시 달서구 와룡로 307 디센터 1976 2층</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              기타 개인정보 침해에 대한 신고나 상담이 필요한 경우 개인정보침해신고센터(privacy.kisa.or.kr,
              국번 없이 118), 개인정보분쟁조정위원회(kopico.go.kr, 1833-6972), 대검찰청 사이버범죄수사단
              (spo.go.kr, 02-3480-3573), 경찰청 사이버수사국(ecrm.cyber.go.kr, 국번 없이 182)에 문의하실
              수 있습니다.
            </p>
          </div>

          {/* 시행일 */}
          <div className="bg-primary/10 rounded-lg p-6 mb-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <FaCalendarAlt className="text-primary text-xl mr-2" />
              <h3 className="text-xl font-bold text-gray-800">부칙</h3>
            </div>
            <p className="text-gray-700">본 개인정보처리방침은 <strong>2025년 1월 1일</strong>부터 시행됩니다.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
