import React from 'react';
import '../output.css';

const Forest = () => {
  return (

    <div className="w-[360px] h-[800px] relative bg-white">

    <div className="w-[360px] h-[680px] px-2.5 py-[9px] left-0 top-[30px] absolute flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="w-[328px] h-[51px] py-[7px] flex-col justify-start items-start flex">
            <div className="w-[308px] h-[41px] justify-start items-center gap-[11px] inline-flex">
                <div className="text-center text-[#237740] text-2xl font-black font-['Pretendard'] leading-normal tracking-wide">마음숲</div>
            </div>
        </div>
        <div className="h-[523px] bg-white flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch h-px bg-white" />
            <a className="w-[100%] h-[auto] shrink-0 flex " href='http://kwawake.duckdns.org/kit/anxiety'>
  
            <div className="self-stretch justify-center items-center gap-[11px] inline-flex">
                <div className="w-[338.50px] h-[166px] relative">
                    <div className="w-[338.50px] h-[166px] p-5 left-0 top-0 absolute bg-[#ffba7e] rounded-2xl flex-col justify-end items-start inline-flex">
                        <div className="w-[177px] h-[47px] text-white text-[32px] font-bold font-['Pretendard'] leading-normal tracking-wide">불안</div>
                        <div className="self-stretch text-white text-base font-semibold font-['Pretendard'] leading-[10px] tracking-wide">불안하고 초조한 마음을 치유해요</div>
                    </div>
                    <img className="w-[60px] h-[99px] left-[258.25px] top-[18px] absolute" src="/img/anxiety.png" />
                </div>
            </div>
            </a>
            <a className="w-[100%] h-[auto] shrink-0 flex " href='http://kwawake.duckdns.org/kit/angry'>
            <div className="self-stretch justify-center items-center gap-[11px] inline-flex">
                <div className="w-[338.50px] h-[166px] relative">
                    <div className="w-[338.50px] h-[166px] p-5 left-0 top-0 absolute bg-[#ff5d5d] rounded-2xl flex-col justify-end items-start inline-flex">
                        <div className="w-[177px] h-[49px] text-white text-[32px] font-bold font-['Pretendard'] leading-normal tracking-wide">분노</div>
                        <div className="self-stretch text-white text-base font-semibold font-['Pretendard'] leading-[10px] tracking-wide">분노한 마음을 서서히 가라앉혀요</div>
                    </div>
                    <img className="w-[74.93px] h-[95px] left-[248.32px] top-[17px] absolute" src="/img/angry.png" />
                </div>
            </div>
            </a>
            <a className="w-[100%] h-[auto] shrink-0 flex " href='http://kwawake.duckdns.org/kit/depression'>
            <div className="self-stretch justify-center items-center gap-[11px] inline-flex">
                <div className="w-[338.50px] h-[166px] relative">
                    <div className="w-[338.50px] h-[166px] p-5 left-0 top-0 absolute bg-[#6891e8] rounded-2xl flex-col justify-end items-start inline-flex">
                        <div className="w-[177px] h-[47px] text-white text-[32px] font-bold font-['Pretendard'] leading-normal tracking-wide">우울</div>
                        <div className="self-stretch text-white text-base font-semibold font-['Pretendard'] leading-[10px] tracking-wide">우울한 마음을 보듬어요</div>
                    </div>
                    <img className="w-[92.34px] h-[86px] left-[237.91px] top-[17px] absolute" src="/img/depression.png" />
                </div>
            </div>
            </a>

        </div>
        <div className="w-[340px] h-[72px] px-5 py-2.5 bg-[#ffcc63] rounded-2xl flex-col justify-center items-start flex">
            <div className="self-stretch h-[33px] text-white text-xl font-black font-['Pretendard'] leading-normal tracking-wide">AWAKE 상담 센터</div>
            <div className="self-stretch text-white text-[15px] font-semibold font-['Pretendard'] leading-[10px] tracking-wide">도움이 필요하신가요? AWAKE 상담센터</div>
        </div>
    </div>

    <div className="w-[123.84px] left-[223px] top-[669.36px] absolute origin-top-left rotate-[-17.07deg] opacity-30 text-white text-[50px] font-black font-['Pretendard'] leading-normal tracking-wide">AWA</div>
</div>

  );
};

export default Forest;
