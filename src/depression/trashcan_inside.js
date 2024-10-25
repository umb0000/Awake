import React from 'react';
import '../output.css';

const TrashCan_i = () => {
  const memoItems = [
    { text: "모든 것이 무의미해 보여. 아무리 해도 변하는 게 없는 것 같아.", date: "2024/10/17" },
    { text: "나는 왜 항상 혼자일까? 주변에 사람이 많아도 여전히 외로워.", date: "2024/10/16" },
    { text: "매일 아침 일어나는 게 너무 힘들어. 아무것도 할 의욕이 나질 않아. 일을 해야 한다는 생각은 머리에 있지만 몸이 따라주질 않는다. 그냥 가만히 있고 싶고, 모든 걸 포기하고 싶은 생각이 들어.", date: "2024/10/15" },
    { text: "내가 이 일을 해낼 수 있을까? 자꾸 실패하는 내 자신이 너무 한심해 보여.", date: "2024/10/14" },
    { text: "주변 사람들이 나를 기대하는 만큼 나는 그 기대를 절대 채우지 못할 것 같아. 그 생각만으로도 너무 지쳐.", date: "2024/10/13" },
    { text: "계속해서 같은 실수를 반복해. 이제는 내가 나를 믿지 못하겠어. 더 이상 나에게 뭘 기대하는 것도 우스운 일 같아.", date: "2024/10/12" },
    { text: "아무도 나를 이해하지 못해. 내 마음속에 있는 이 무거운 감정들을 설명할 방법도 없어. 차라리 말하지 않는 게 나을 것 같아.", date: "2024/10/11" },
    { text: "내가 이 세상에서 사라진다고 해도 누가 알아챌까? 어쩌면 아무도 모르겠지.", date: "2024/10/10" },
    { text: "그냥 하루하루를 버티는 느낌이야. 이 상태로 얼마나 더 버틸 수 있을지 모르겠어.", date: "2024/10/09" },
    { text: "모든 게 나만 잘못된 것 같아. 나는 왜 이렇게 모든 것을 엉망으로 만드는 걸까?", date: "2024/10/08" },
  ];

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-start items-center">
      {/* 제목 영역 - 좌측 정렬 */}
      <div className="w-[360px] text-left pt-20 mb-10">
        <h1 className="text-black text-xl font-extrabold font-['Pretendard_Variable'] leading-tight tracking-tight">내려 놓은 생각들</h1>
      </div>

      {/* Masonry 스타일 레이아웃 (CSS 컬럼 사용) */}
      <div className="w-full max-w-[1200px] h-full overflow-y-scroll px-5 gap-4 columns-2 md:columns-3 lg:columns-4 space-y-4">
        {memoItems.map((item, idx) => (
          <div key={idx} className="break-inside-avoid p-4 bg-gray-200 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
            <div className="text-gray-800 text-[14px] font-medium leading-[22px] font-['Pretendard_Variable'] tracking-tight text-left">
              {item.text}
            </div>
            <div className="text-gray-500 text-[10px] font-normal leading-tight tracking-tight mt-2 text-right">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashCan_i;
