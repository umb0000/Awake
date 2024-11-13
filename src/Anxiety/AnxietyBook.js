import { Link } from 'react-router-dom';
import '../output.css';

const AnxietyBook = () => {
  return (
    <div className="w-full h-600 flex justify-center items-center min-h-screen bg-white"> {/* 좌우 여백과 상단 여백 조정 */}
      <div className="w-[90%] h-[600px] flex flex-col items-center justify-center gap-[15px]">
        
        <div className="w-full max-w-md h-[61px] flex items-center justify-center p-4 bg-[#fff] rounded-[15px]">
          <div className="leading-[20px] tracking-[.01em] text-[#000] text-center whitespace-nowrap">
            <span className="text-[16px] font-['Pretendard_Variable'] font-bold">
              지금 나의 마음과 <br />가장 비슷한 말은 무엇인가요?
            </span>
          </div>
        </div>

        <div className="w-full max-w-md h-[405px] flex flex-col items-center justify-start overflow-hidden">
          <div className="w-full h-full flex flex-col justify-start gap-[12px] overflow-y-scroll scroll-smooth no-scrollbar">
            
            <Link to="/AnxietyBook2/1" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                내가 완벽하지 않으면 사람들은 날 싫어할 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/2" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                다른 사람들보다 뒤쳐지고 있는 것 같아.
              </div>
            </Link>

            <Link to="/AnxietyBook2/3" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                과거의 실수 때문에 난 앞으로도 실패할 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/4" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                내가 한 일은 항상 부족하고 미완성이야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/5" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                이 정도 성취로는 아무 의미가 없어.
              </div>
            </Link>

            <Link to="/AnxietyBook2/6" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                실수하면 다른 사람들이 나를 무시할 거야.
              </div>
            </Link>

            <Link to="/AnxietyBook2/7" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                왜 나만 자꾸 뒤처지는 것 같지?
              </div>
            </Link>

            <Link to="/AnxietyBook2/8" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                난 항상 실수만 하는구나.
              </div>
            </Link>

            <Link to="/AnxietyBook2/9" className="relative w-full flex flex-row items-center justify-center p-[10px] bg-[#fff] border border-[#d9d9d9] rounded-[15px]">
              <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">
                난 왜 항상 이것밖에 못 할까?
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md flex flex-row items-center justify-center p-4 bg-[#eeefef] rounded-[15px]">
          <div className="text-[14px] font-['Pretendard_Variable'] font-medium text-[#000] whitespace-nowrap">다음</div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyBook;
