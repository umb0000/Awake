const Help = () => (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-[360px] h-[800px] relative bg-white">
           
            <div className="w-[54px] h-[27px] left-[73px] top-[71px] absolute text-center text-black text-[15px] font-extrabold font-['Pretendard'] leading-tight tracking-wide">문의하기</div>
            <div className="w-[83px] h-[27px] left-[223px] top-[71px] absolute text-center text-black text-[15px] font-normal font-['Pretendard'] leading-tight tracking-wide">문의내역확인</div>
            <div className="w-[360px] h-16 px-1 py-2 left-0 top-0 absolute bg-white justify-start items-center gap-1 inline-flex">
            
                <div className="grow shrink basis-0 text-center text-[#1d1b20] text-lg font-bold font-['Pretendard'] leading-7">문의하기</div>
                
            </div>
            <div className="h-[495px] py-2.5 left-[12px] top-[105px] absolute flex-col justify-center items-center gap-[19px] inline-flex">
                <div className="w-[336px] h-10 relative">
                    <div className="w-[336px] h-10 left-0 top-0 absolute bg-white rounded-[5px] border border-[#f2f2f2]" />
                    <div className="left-[17px] top-[6px] absolute text-[#79747e] text-xs font-normal font-['Pretendard'] leading-7">문의 제목</div>
                </div>
                <div className="w-[336px] h-[345px] relative">
                    <div className="w-[336px] h-[345px] left-0 top-0 absolute bg-white rounded-[5px] border border-[#f2f2f2]" />
                    <div className="left-[17px] top-[6px] absolute text-[#79747e] text-xs font-normal font-['Pretendard'] leading-7">문의 내용</div>
                </div>
                <div className="w-[336px] h-[52px] relative">
                    <div className="w-[336px] h-[52px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[5px]" />
                    <div className="left-[151.50px] top-[12px] absolute text-center text-white text-lg font-bold font-['Pretendard'] leading-7">등록</div>
                </div>
            </div>
        </div>
    </div>
);

export default Help;
