import { Link } from 'react-router-dom';

const AnxietyBookIndex = () => {
  return (

    <div className="w-[360px] h-[800px] bg-white flex-col justify-center items-center inline-flex">
    <div className="self-stretch h-16 px-1 py-2 bg-white justify-start items-center gap-1 inline-flex">
        <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="p-2 justify-center items-center gap-2.5 flex">
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 text-center text-[#1d1b20] text-lg font-bold font-['Pretendard'] leading-7">책갈피</div>
        <div className="justify-end items-center flex">
            <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                    <div className="p-2 justify-center items-center gap-2.5 flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch h-[62px] py-2.5 flex-col justify-center items-center gap-[19px] inline-flex">
        <div className="w-[318.25px] relative">
            <div className="w-[278px] h-[42px] px-[13px] py-[3px] left-0 top-0 absolute bg-[#f4f7f8] justify-start items-center gap-2.5 inline-flex">
                <div className="text-right text-[#d9d9d9] text-[13px] font-bold font-['Pretendard'] leading-7">책갈피 검색</div>
            </div>
            <div className="w-[33px] h-9 p-[5px] left-[285.25px] top-[2px] absolute bg-[#bfbfbf] rounded-lg flex-col justify-between items-center inline-flex">
                <div className="w-[21.56px] h-[16.79px] relative">
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch grow shrink basis-0 px-[5px] py-0.5 bg-[#fbc3bc]/0 rounded-[15px] border border-[#d9d9d9]/0 flex-col justify-center items-center gap-[15px] inline-flex">
        <div className="self-stretch h-[118px] p-2.5 bg-[#ffe298] rounded-[15px] border border-[#ffe298] flex-col justify-center items-center gap-[5px] flex">
            <div className="self-stretch h-[100px] px-2.5 py-[5px] flex-col justify-center items-start gap-2 flex">
                <div className="w-64 h-10 p-[5px] flex-col justify-between items-start flex">
                    <div className="w-64 text-black text-sm font-bold font-['Pretendard'] leading-tight tracking-tight">나는 항상 배우고 성장하는 중이야. 모든 사람이 완벽할 필요는 없어.</div>
                </div>
                <div className="w-48 h-[21px] px-2.5 py-[5px] justify-start items-center gap-[5px] inline-flex">
                    <div className="w-1.5 h-3.5 bg-[#ff9800]" />
                    <div className="w-[184px] text-black text-[9px] font-extralight font-['Pretendard'] leading-tight tracking-tight">넌 정말 아무것도 제대로 못 해</div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[119px] p-2.5 bg-[#ffe298] rounded-[15px] border border-[#ffe298] flex-col justify-center items-center gap-[5px] flex">
            <div className="self-stretch h-[100px] p-2.5 flex-col justify-center items-start gap-2 flex">
                <div className="w-64 h-10 p-[5px] flex-col justify-between items-start flex">
                    <div className="text-black text-sm font-bold font-['Pretendard'] leading-tight tracking-tight">내 속도대로 가는 거야. <br/>내 방식으로 충분히 잘하고 있어.</div>
                </div>
                <div className="w-48 h-[21px] px-2.5 py-[5px] justify-start items-center gap-[5px] inline-flex">
                    <div className="w-1.5 h-3.5 bg-[#ff9800]" />
                    <div className="w-[184px] text-black text-[9px] font-extralight font-['Pretendard'] leading-tight tracking-tight">그 정도밖에 못 하나 보네?</div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[119px] p-2.5 bg-[#ffe298] rounded-[15px] border border-[#ffe298] flex-col justify-center items-center gap-[5px] flex">
            <div className="self-stretch h-[100px] px-2.5 py-[5px] flex-col justify-center items-start gap-2 flex">
                <div className="w-[266px] h-10 p-[5px] flex-col justify-between items-start flex">
                    <div className="self-stretch text-black text-sm font-bold font-['Pretendard'] leading-tight tracking-tight">과거는 이미 지나갔고, <br/>나는 매일 더 나아지고 있어."</div>
                </div>
                <div className="w-48 h-[21px] px-2.5 py-[5px] justify-start items-center gap-[5px] inline-flex">
                    <div className="w-1.5 h-3.5 bg-[#ff9800]" />
                    <div className="w-[184px] text-black text-[9px] font-extralight font-['Pretendard'] leading-tight tracking-tight">넌 왜 항상 그 모양이야?</div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[119px] p-2.5 bg-[#ffe298] rounded-[15px] border border-[#ffe298] flex-col justify-center items-center gap-[5px] flex">
            <div className="self-stretch h-[100px] px-2.5 py-[5px] flex-col justify-center items-start gap-2 flex">
                <div className="w-[266px] h-10 p-[5px] flex-col justify-between items-start flex">
                    <div className="w-64 text-black text-sm font-bold font-['Pretendard'] leading-tight tracking-tight">나는 최선을 다했고, 그걸로도 충분해.</div>
                </div>
                <div className="w-48 h-[21px] px-2.5 py-[5px] justify-start items-center gap-[5px] inline-flex">
                    <div className="w-1.5 h-3.5 bg-[#ff9800]" />
                    <div className="w-[184px] text-black text-[9px] font-extralight font-['Pretendard'] leading-tight tracking-tight">네가 한 건 언제나 미완성이야.</div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[120px] p-2.5 bg-[#ffe298] rounded-[15px] border border-[#ffe298] flex-col justify-center items-center gap-[5px] flex">
            <div className="self-stretch h-[100px] px-2.5 py-[5px] flex-col justify-center items-start gap-2 flex">
                <div className="w-[266px] h-10 p-[5px] flex-col justify-between items-start flex">
                    <div className="w-64 text-black text-sm font-bold font-['Pretendard'] leading-tight tracking-tight">나는 최선을 다했고, 그걸로도 충분해.</div>
                </div>
                <div className="w-48 h-[21px] px-2.5 py-[5px] justify-start items-center gap-[5px] inline-flex">
                    <div className="w-1.5 h-3.5 bg-[#ff9800]" />
                    <div className="w-[184px] text-black text-[9px] font-extralight font-['Pretendard'] leading-tight tracking-tight">네가 한 건 언제나 미완성이야.</div>
                </div>
            </div>
        </div>
    </div>
</div>

    
  );
};

export default AnxietyBookIndex;
