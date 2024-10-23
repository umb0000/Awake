import React from 'react';
import '../output.css';

const TrashCan_i = () => {
  return (
    <div className="w-[360px] h-[800px] bg-white flex-col justify-center items-start gap-3 inline-flex">
      <div className="self-stretch h-[45px] px-6 py-2.5 justify-between items-end inline-flex">
        <div className="text-[#1d1b20] text-sm font-medium font-['Roboto'] leading-tight tracking-tight">9:30</div>
        <div className="w-[46px] h-[17px] relative">
          <div className="w-[17px] h-[17px] left-0 top-0 absolute">
            <div className="w-[17px] h-[17px] left-0 top-0 absolute" />
          </div>
          <div className="w-[17px] h-[17px] left-[16px] top-0 absolute" />
          <div className="w-2 h-[15px] left-[38px] top-[1px] absolute" />
        </div>
      </div>

      <div className="self-stretch grow shrink basis-0 px-2.5 flex-col justify-start items-center gap-12 inline-flex">
        <div className="w-[360px] px-5 py-2.5 justify-start items-center gap-2.5 inline-flex">
          <div className="text-black text-xl font-extrabold font-['Roboto'] leading-tight tracking-tight">내려 놓은 생각들</div>
        </div>

        <div className="w-[298px] flex flex-wrap gap-3.5 justify-start items-start">
          {/* 반복되는 항목을 배열로 관리하여 간결하게 */}
          {Array(9)
            .fill("")
            .map((_, idx) => (
              <div className="w-auto flex items-start" key={idx}>
                <div className="relative flex-shrink-0">
                    <div className="relative w-[auto] h-[auto] flex justify-center items-center bg-gray-200 rounded-lg shadow-md mb-8"> </div>
                </div>
                <div className="ml-2 flex flex-col justify-between">
                  <div className="text-black text-[10px] font-medium font-['Roboto'] leading-[18px] tracking-tight w-[100px]">
                    나는 매일 내 자신이 부족하다고 느껴. 아무리 노력해도 실수하고, 그럴 때마다 사람들이 나를 무시하는 것 같아. 점점 더..
                  </div>
                  <div className="text-black text-[9px] font-normal font-['Roboto'] leading-tight tracking-tight mt-1">2024 / 10 / 17</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrashCan_i;
