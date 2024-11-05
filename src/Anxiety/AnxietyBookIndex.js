import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import '../output.css';

const AnxietyBookIndex = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const bookmarks = [
    { text: "나는 항상 배우고 성장하는 중이야. 모든 사람이 완벽할 필요는 없어.", note: "내가 완벽하지 않으면 사람들은 날 싫어할 거야." },
    { text: "내 속도대로 가는 거야. 내 방식으로 충분히 잘하고 있어.", note: "다른 사람들보다 뒤쳐지고 있는 것 같아." },
    { text: "과거는 이미 지나갔고, 나는 매일 더 나아지고 있어.", note: "과거의 실수 때문에 난 앞으로도 실패할 거야." },
    { text: "나는 최선을 다했고, 그걸로도 충분해.", note: "내가 한 일은 항상 부족하고 미완성이야." },
    { text: "나는 작은 성취도 인정하고 즐거워해.", note: "이 정도 성취로는 아무 의미가 없어." },
    { text: "실수해도 괜찮아, 배우는 과정이니까.", note: "실수하면 다른 사람들이 나를 무시할 거야." },
    { text: "내 속도대로 가는 거야. 내 방식으로 충분히 잘하고 있어.", note: "왜 나만 자꾸 뒤처지는 것 같지?" },
    { text: "과거는 이미 지나갔고, 나는 매일 더 나아지고 있어.", note: "난 항상 이런 실수를 반복해. 앞으로도 나아질 수 없을 거야." },
    { text: "나는 최선을 다했고, 그걸로도 충분해.", note: "난 왜 항상 이것밖에 못 할까?" }
  ];

  const filteredBookmarks = bookmarks.filter(bookmark =>
    bookmark.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bookmark.note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-[360px] h-[800px] bg-[#FDFDFD] flex flex-col items-center overflow-hidden font-['Pretendard_Variable']">
      {/* Fixed Header */}
      <div className="w-full h-20 flex justify-center items-center sticky top-0 z-10 shadow-md border-b border-[#FFD8B1] bg-gradient-to-r from-[#FFA76B] to-[#FFD8B1]">
        <h1 className="text-lg font-bold text-[#6D3F1F]">불안의 책갈피</h1>
      </div>

      {/* Updated Search Bar */}
      <div className="w-[90%] h-14 mt-4 flex items-center bg-white border border-[#FFD8B1] rounded-full shadow-sm px-4 mx-auto">
        <FiSearch className="text-[#FFA76B] mr-3 text-lg" />
        <input
          type="text"
          placeholder="검색어를 입력해보세요 (예: '성장', '도전')"
          className="w-full bg-transparent text-sm text-[#4B4B4B] placeholder-[#A0A0A0] outline-none font-['Pretendard_Variable']"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Bookmarks List with Scrollable Area */}
      <div className="w-full flex flex-col gap-4 p-4 mt-4 overflow-y-auto h-[620px] font-['Pretendard_Variable']">
        {filteredBookmarks.length > 0 ? (
          filteredBookmarks.map((bookmark, index) => (
            <div
              key={index}
              className="w-full p-5 bg-white border border-[#FFD8B1] rounded-lg shadow-sm font-['Pretendard_Variable']"
            >
              <p className="text-base font-semibold text-[#4B4B4B] mb-2 whitespace-pre-wrap leading-relaxed" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {bookmark.text}
              </p>
              <p className="text-xs text-[#4B4B4B] bg-[#FFF7EB] p-2 rounded leading-relaxed whitespace-pre-wrap mt-1" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {bookmark.note}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-[#A0A0A0] text-center bg-[#FFF4E5] p-4 rounded-lg shadow-sm">검색어에 맞는 책갈피가 없습니다. 다른 검색어를 입력해보세요!</p>
        )}
      </div>
    </div>
  );
};

export default AnxietyBookIndex;
