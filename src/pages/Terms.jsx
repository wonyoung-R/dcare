import React from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaCalendarAlt } from 'react-icons/fa';

const Terms = () => {
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
          <h1 className="section-title text-center">이용약관</h1>
          <p className="section-subtitle text-center mx-auto mb-12">
            디케어건강검진센터 웹사이트 및<br className="md:hidden" />
            의료 서비스 이용에 관한 약관입니다.
          </p>

          {/* 인트로 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center mb-4">
              <FaFileContract className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">전문</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              본 약관은 디케어건강검진센터(이하 &quot;센터&quot;)가 운영하는 웹사이트 및 관련 서비스(이하
              &quot;서비스&quot;)의 이용 조건과 절차, 이용자와 센터의 권리·의무 및 책임 사항을 규정함을
              목적으로 합니다. 본 서비스를 이용하시는 모든 분들은 본 약관의 내용을 충분히 숙지하신 후
              이용하여 주시기 바랍니다.
            </p>
          </div>

          {/* 제1조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제1조 (목적)</h2>
            <p className="text-gray-600 leading-relaxed">
              본 약관은 디케어건강검진센터가 제공하는 웹사이트 및 건강검진 예약, 의료정보 제공 등
              부수적인 온라인 서비스의 이용과 관련하여 센터와 이용자의 권리, 의무 및 책임 사항, 기타
              필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          {/* 제2조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제2조 (서비스의 내용)</h2>
            <p className="text-gray-600 mb-4">센터가 제공하는 서비스는 다음과 같습니다.</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>건강검진 예약 접수 및 일정 안내 서비스</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>병원 안내, 의료진 소개, 검진 프로그램 등 의료정보 제공</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>검진 결과 통지 및 사후 건강관리(CAM) 서비스 안내</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>고객 문의 응대 및 민원 처리</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">5.</span>
                <span>기타 센터가 정하는 부가 서비스</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              ※ 실제 의료 행위(진료, 검사, 처치 등)는 센터 내방 시 담당 의료진의 판단에 따라 수행되며,
              본 약관에서 정한 온라인 서비스와 별도로 「의료법」 등 관련 법령의 적용을 받습니다.
            </p>
          </div>

          {/* 제3조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제3조 (이용자의 의무)</h2>
            <p className="text-gray-600 mb-4">
              이용자는 본 서비스를 이용함에 있어 다음 각 호의 행위를 하여서는 아니 됩니다.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>예약 신청 시 허위 정보를 입력하거나 타인의 정보를 도용하는 행위</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>다른 이용자 또는 제3자의 개인정보를 부정하게 수집·이용하는 행위</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>센터의 운영을 방해하거나 서비스에 지장을 주는 행위</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>센터 또는 제3자의 지적재산권, 명예 및 기타 권리를 침해하는 행위</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">5.</span>
                <span>관계 법령 및 본 약관에서 금지하는 행위</span>
              </li>
            </ul>
          </div>

          {/* 제4조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제4조 (서비스 이용 제한)</h2>
            <p className="text-gray-600 mb-4">
              센터는 이용자가 다음 각 호에 해당하는 경우 사전 통지 없이 서비스 이용을 제한하거나
              중지할 수 있습니다.
            </p>
            <ul className="space-y-3 text-gray-600 mb-4">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>제3조의 이용자 의무를 위반한 경우</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>서비스의 안정적 운영을 저해하는 행위를 한 경우</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>관계 법령에 위반되는 행위를 한 경우</span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>천재지변, 전시, 사변, 정전, 시스템 장애 등 불가항력적 사유가 발생한 경우</span>
              </li>
            </ul>
            <p className="text-gray-600">
              센터는 서비스 이용 제한과 관련하여 이용자에게 부당한 손해가 발생하지 않도록 합리적인
              범위 내에서 조치를 취하며, 이용자는 제한 사유 해소 후 서비스 이용을 재개할 수 있습니다.
            </p>
          </div>

          {/* 제5조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제5조 (면책 조항)</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">1.</span>
                <span>
                  센터는 천재지변, 전쟁, 정전, 통신장애, 기타 이에 준하는 불가항력적 사유로 인하여
                  서비스를 제공할 수 없는 경우 그 책임이 면제됩니다.
                </span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">2.</span>
                <span>
                  센터는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.
                </span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">3.</span>
                <span>
                  센터는 웹사이트에 게시된 의료정보·콘텐츠의 정확성을 위해 최선을 다하나, 해당 정보는
                  일반적인 의학 상식 안내를 목적으로 하며 진료를 대체하지 않습니다. 정확한 진단과
                  치료는 반드시 의료진의 진료를 통해 받으시기 바랍니다.
                </span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">4.</span>
                <span>
                  센터는 이용자가 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한 것에 대하여
                  책임을 지지 않습니다.
                </span>
              </li>
              <li className="flex">
                <span className="text-primary font-semibold mr-2 flex-shrink-0">5.</span>
                <span>
                  외부 사이트로 연결된 링크에서 발생한 거래 또는 정보로 인한 손해에 대해서는 해당
                  사이트의 정책이 적용되며, 센터는 이에 대한 책임을 지지 않습니다.
                </span>
              </li>
            </ul>
          </div>

          {/* 제6조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제6조 (약관의 개정)</h2>
            <p className="text-gray-600 leading-relaxed">
              센터는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등
              관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 약관을 개정할 경우에는
              적용 일자 및 개정 사유를 명시하여 시행 7일 전부터 웹사이트에 공지합니다. 다만, 이용자에게
              불리하게 변경되는 약관은 적용 일자 30일 전부터 공지합니다.
            </p>
          </div>

          {/* 제7조 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">제7조 (재판권 및 준거법)</h2>
            <p className="text-gray-600 leading-relaxed">
              본 약관과 관련하여 발생한 분쟁에 대해서는 대한민국 법령을 준거법으로 하며, 센터의
              소재지를 관할하는 법원을 합의 관할 법원으로 합니다.
            </p>
          </div>

          {/* 시행일 */}
          <div className="bg-primary/10 rounded-lg p-6 mb-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <FaCalendarAlt className="text-primary text-xl mr-2" />
              <h3 className="text-xl font-bold text-gray-800">부칙</h3>
            </div>
            <p className="text-gray-700">본 약관은 <strong>2025년 1월 1일</strong>부터 시행됩니다.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
