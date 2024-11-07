import { useState, EventHandler, ReactNode } from 'react';
import '.././output.css';

const LoginLoading = () => {
	return (<div className="relative w-full h-[800px] bg-[#fff] overflow-hidden">
  <div className="absolute left-0 top-0 w-[360px] h-[800px] flex flex-col items-center justify-center py-[80px] px-[5px]">
    <img width="189" height="43"  src={process.env.PUBLIC_URL + "/img/logo.png"}></img>
  </div>
  <img className="absolute -translate-x-1/2 left-1/2 bottom-[0px]" width="360" height="168"  src={process.env.PUBLIC_URL + "/img/loading_cat.png"}></img>
</div>)
}

export default LoginLoading