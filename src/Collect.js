import React from 'react';
import './output.css';

const Collect = () => {
    return (
        <div className="w-[360px] h-[800px] relative bg-white">
            <div className="w-[360px] h-[743px] px-0 left-0 top-0 absolute flex-col justify-center items-center inline-flex">
                <div className="flex-col justify-start items-center flex pt-0 mt-0"> {/* pt-0, mt-0으로 상단 여백 제거 */}
                    <div className="w-[340px] h-[70px] flex-col justify-center items-center flex gap-0"> {/* gap-0으로 여백 제거 */}
                        <div className="w-[340px] h-[30px] flex justify-center items-center">
                            <div className="w-30 h-[31px] text-black text-2xl font-bold font-['Pretendard'] leading-normal tracking-wide">고양이 도감</div>
                        </div>
                        <div className="w-[340px] h-4 flex justify-center items-center">
                            <div className="w-[254px] h-4 text-center text-black text-[11px] font-light font-['Pretendard'] leading-normal tracking-wide">모은 고양이들을 확인하세요</div>
                        </div>
                    </div>
                    <div className="w-[332px] h-[203px] relative">
                        <img className="w-40 h-[196px] left-0 top-[-0.50px] absolute rounded-lg" src="/img/배경1.png" />
                        <img className="w-40 h-[196px] left-[172px] top-[-0.50px] absolute rounded-lg" src="/img/배경2.png" />
                        <img className="w-[139px] h-[155px] left-[12px] top-[19.50px] absolute" src="/img/bomb.png" />
                        <img className="w-[149px] h-[169px] left-[178px] top-[12.50px] absolute" src="/img/babypink.png" />
                    </div>
                    <div className="w-[332px] h-[203px] relative">
                        <img className="w-40 h-[196px] left-0 top-[-0.50px] absolute rounded-lg" src="/img/배경3.png" />
                        <div className="w-40 h-[196px] p-3 left-[172px] top-0 absolute bg-[#b1b1b1] rounded-lg" />
                        <img className="w-[156px] h-[173.56px] left-[5px] top-[12px] absolute" src="/img/babyblue.png" />
                        <img className="w-[153px] h-[173.56px] left-[172px] top-[5.94px] absolute" src="/img/orange.png" />
                    </div>
                    <div className="w-[332px] h-[203px] relative">
                        <div className="w-40 h-[196px] p-3 left-0 top-0 absolute bg-[#b1b1b1] rounded-lg" />
                        <div className="w-40 h-[196px] p-3 left-[172px] top-0 absolute bg-[#b1b1b1] rounded-lg" />
                        <img className="w-[150px] h-[175px] left-[8px] top-[13px] absolute" src="/img/black.png" />
                        <img className="w-[143px] h-[150px] left-[181px] top-[22.50px] absolute" src="/img/hotpink.png" />
                    </div>
                    <div className="w-[278px] h-[11px] relative" />
                </div>
            </div>
        </div>
    );
};

export default Collect;
