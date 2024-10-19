import React from 'react';

const NonNavigation = () => {
  return (<div>
    <div className="fixed left-0 top-[0px] w-[100%] h-[45px] flex flex-row items-end justify-between py-[10px] px-[24px]">
        <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#1d1b20] whitespace-nowrap">9:30</div>

        <img width="46" height="17" src={process.env.PUBLIC_URL + "/img/right_iconsI1_276.png"} alt="status icons" />
      </div>
    
</div>

  );
};

export default NonNavigation;
