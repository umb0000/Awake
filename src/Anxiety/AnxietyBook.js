import { Link } from 'react-router-dom';
import '../output.css';


const AnxietyBook = () => {
  return (
    <div className="relative w-full h-[800px] bg-[#fff]">
      <div className="absolute left-0 top-0 w-[100%] h-[800px] flex flex-col items-center justify-center gap-[15px] p-[10px]">
        <div className="self-stretch h-[61px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#fff] rounded-[15px]">
          <div className="leading-[20px] tracking-[.01em] text-[#000] text-center whitespace-nowrap">
            <span className="text-[16px] font-['Pretendard_Variable'] font-bold">
              지금 나의 마음과 <br />가장 비슷한 말은 무엇인가요?
            </span>
            <span className="text-[14px] font-['Roboto'] font-medium"> </span>
          </div>
        </div>

        <div className="h-[405px] flex flex-col items-center justify-start overflow-hidden">
          <div className="h-full flex flex-col justify-start gap-[12px] overflow-y-scroll scroll-smooth no-scrollbar">
            {/* 각 항목을 클릭하면 해당 항목에 맞는 텍스트를 보여주도록 링크 설정 */}
            <Link to="/AnxietyBook2/1" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px] shrink-0">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                내가 완벽하지 않으면 사람들은 날 싫어할 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/2" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                다른 사람들보다 뒤쳐지고 있는 것 같아.
              </div>
            </Link>

            <Link to="/AnxietyBook2/3" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                과거의 실수 때문에 난 앞으로도 실패할 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/4" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                내가 한 일은 항상 부족하고 미완성이야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/5" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                이 정도 성취로는 아무 의미가 없어.
              </div>
            </Link>

            <Link to="/AnxietyBook2/6" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                실수하면 다른 사람들이 나를 무시할 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/7" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                왜 나만 자꾸 뒤처지는 것 같지?
              </div>
            </Link>

            <Link to="/AnxietyBook2/8" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                난 항상 이런 실수를 반복해. 앞으로도 나아질 수 없을 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/9" className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                난 왜 항상 이것밖에 못 할까?
              </div>
            </Link>
          </div>

        </div>

        <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#eeefef] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#000] whitespace-nowrap">다음</div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyBook;
