import React, { useState } from 'react';
import './output.css';

const Collect = () => {
    const [selectedItem, setSelectedItem] = useState(null); // 선택된 항목 상태

    const items = [
        { id: 1, bgImage: "/img/bg1.png", bg2Image: "/img/bg1-1.png", mainImage: "/img/orange.png", title: "핑냥이" },
        { id: 2, bgImage: "/img/bg3.png", bg2Image: "/img/bg3-1.png", mainImage: "/img/babypink.png", title: "꼬냥이" },
        { id: 3, bgImage: "/img/bg2.png", bg2Image: "/img/bg2-1.png", mainImage: "/img/bomb.png", title: "뽀냥이" },
        { id: 4, bgImage: "/img/bg1.png", bg2Image: "/img/bg1-1.png", mainImage: "/img/babyblue.png", title: "파랑냥이" }
    ];

    const handleClick = (item) => {
        setSelectedItem(item); // 아이템 선택 시 상세 화면으로 이동
    };

    const handleClose = () => {
        setSelectedItem(null); // X 버튼 클릭 시 도감 화면으로 돌아감
    };

    if (selectedItem) {
        // 두 번째 렌더 화면: 선택된 아이템의 상세 화면
        return (
            <div 
                className="w-screen h-screen flex flex-col items-center justify-center relative bg-cover bg-center" 
                style={{ backgroundImage: `url(${selectedItem.bg2Image})`, zIndex: -1 }}
            >
                
                {/* 메인 캐릭터 이미지 */}
                <div className="relative z-10">
                    <img className="w-64 h-auto" src={selectedItem.mainImage} alt="Main Character" />
                </div>

                {/* 홈 탭 고양이로 바꾸기 버튼 */}
                <div className="absolute bottom-10 w-[90%] flex justify-center z-10">
                    <button 
                        className="w-full max-w-xs py-3 bg-[#ff9800] text-white text-lg font-bold rounded-lg hover:bg-[#e67e22] transition-all"
                    >
                        홈 탭 고양이로 바꾸기
                    </button>
                </div>
            </div>
        );
    }

    return (
        // 첫 번째 렌더 화면: 고양이 도감 화면 (그리드 뷰)
        <div className="w-full h-screen bg-[#fff6ea] flex-col justify-center items-start inline-flex pt-20">
            <div className="self-stretch grow shrink basis-0 px-2.5 py-5 flex-col justify-start items-center gap-[15px] inline-flex">
                <div className="w-[340px] h-[70px] px-5 flex-col justify-center items-center gap-[3px] flex">
                    <div className="w-[340px] h-[30px] px-4 justify-center items-center inline-flex">
                        <div className="text-[#8b7e6a] text-2xl font-bold font-['Pretendard']">고양이 도감</div>
                    </div>
                    <div className="w-[340px] h-4 px-4 justify-center items-center gap-px inline-flex">
                        <div className="text-[#8b7f6b] text-[11px] font-light">모은 고양이들을 확인하세요</div>
                    </div>
                </div>

                <div className="w-[360px] h-[661px] px-5 py-2.5 grid grid-cols-3 gap-3">
                    {/* Row 1 */}
                    <div className="w-24 h-[118px] relative cursor-pointer" onClick={() => handleClick(items[0])}>
                        <img className="w-24 h-[118px] absolute rounded-lg" src={items[0].bgImage} alt="Background" />
                        <img className="w-[84px] h-[94px] left-[7px] top-[12px] absolute" src={items[0].mainImage} alt={items[0].title} />
                    </div>
                    <div className="w-[97px] h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>

                    {/* Row 2 */}
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-[97px] h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>

                    {/* Row 3 */}
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-[97px] h-[118px] relative cursor-pointer" onClick={() => handleClick(items[1])}>
                        <img className="w-24 h-[118px] absolute rounded-lg" src={items[1].bgImage} alt="Background" />
                        <img className="w-[84px] h-[94px] left-[7px] top-[12px] absolute" src={items[1].mainImage} alt={items[1].title} />
                    </div>
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>

                    {/* Row 4 */}
                    <div className="w-24 h-[118px] relative cursor-pointer" onClick={() => handleClick(items[2])}>
                        <img className="w-24 h-[118px] absolute rounded-lg" src={items[2].bgImage} alt="Background" />
                        <img className="w-[84px] h-[94px] left-[7px] top-[12px] absolute" src={items[2].mainImage} alt={items[2].title} />
                    </div>
                    <div className="w-[97px] h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>

                    {/* Row 5 */}
                    <div className="w-24 h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-[97px] h-[118px] relative bg-[#f8f1e7] rounded-lg flex items-center justify-center">
                        <div className="text-[#e8e1d7] text-[70px] font-bold">?</div>
                    </div>
                    <div className="w-24 h-[118px] relative cursor-pointer" onClick={() => handleClick(items[3])}>
                        <img className="w-24 h-[118px] absolute rounded-lg" src={items[3].bgImage} alt="Background" />
                        <img className="w-[88px] h-[92px] left-[7px] top-[12px] absolute" src={items[3].mainImage} alt={items[3].title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collect;
