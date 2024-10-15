import React from 'react';

const Navigation = () => {
  return (<div>
    <div className="fixed left-0 top-[0px] w-[100%] h-[45px] flex flex-row items-end justify-between py-[10px] px-[24px]">
        <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#1d1b20] whitespace-nowrap">9:30</div>

        <img width="46" height="17" src={process.env.PUBLIC_URL + "/img/right_iconsI1_276.png"} alt="status icons" />
      </div>
    <div className="fixed left-0 w-[100%] bottom-[0px] h-[80px] flex flex-row items-start justify-center gap-[3%] py-0 px-[8px] bg-[#fff] border-[0px] border-solid border-[#d9d9d9] shadow-[0_1px_3px_1px_#00000026]">
  <a href='/main'>
    <img width="80" height="80" src={process.env.PUBLIC_URL + "/img/Nav_item_59_122.png"} alt="nav item 1" />
  </a>
  <a href='/schedule'>
    <img width="80" height="80" src={process.env.PUBLIC_URL + "/img/Nav_item_69_127.png"} alt="nav item 2" />
  </a>
  <a href='/anxiety'>
    <img width="80" height="80" src={process.env.PUBLIC_URL + "/img/Nav_item_41_288.png"} alt="nav item 3" />
  </a>
  <a href='/profile'>
    <img width="80" height="80" src={process.env.PUBLIC_URL + "/img/Nav_item_79_132.png"} alt="nav item 4" />
  </a>
</div>
</div>

  );
};

export default Navigation;
