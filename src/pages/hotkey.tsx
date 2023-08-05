import React from 'react';
import HotkeyListOrder from '../components/blocks/hotkeyListOrder';
import HotkeyListCoin from '../components/blocks/hotkeyListCoin';
import HotkeyListToggle from '../components/blocks/hotkeyListToggle';

const Hotkey: React.FC = () => {
  return (
    <main className='hotkey-main'>
      <HotkeyListToggle title='주문 관련 단축키 설정'>
        <li className='flex justify-center items-center px-5 pb-5'>
          <div className='basis-[7%] flex justify-center items-center'></div>
          <div className='basis-[38%] flex justify-center items-center text-sm font-semibold'>
            단축키
          </div>
          <div className='basis-[45%] flex justify-center items-center text-sm font-semibold'>
            명령
          </div>
          <div className='basis-[10%] flex justify-center items-center text-sm font-semibold'>
            On/Off
          </div>
        </li>
        <li className='border-b-[10px] border-borderColor'>
          <ul className='default-list'>
            <HotkeyListOrder />
            <HotkeyListOrder />
            <HotkeyListOrder />
            <HotkeyListOrder />
          </ul>
          <ul className='added-list'></ul>
          <div
            className='add-button border-t-[1px] border-borderColor 
          w-full h-[100px] flex justify-center items-center'
          >
            <button
              className='bg-mainColor text-white w-[200px] h-[50px] 
            text-[14px] font-semibold rounded-xl'
            >
              + 단축키 추가하기
            </button>
          </div>
        </li>
      </HotkeyListToggle>
      <HotkeyListToggle title='종목 바로가기 단축키 설정'>
        <li className='flex justify-center items-center px-5 pb-5'>
          <div className='basis-[7%] flex justify-center items-center'></div>
          <div className='basis-[38%] flex justify-center items-center text-sm font-semibold'>
            단축키
          </div>
          <div className='basis-[45%] flex justify-center items-center text-sm font-semibold'>
            명령
          </div>
          <div className='basis-[10%] flex justify-center items-center text-sm font-semibold'>
            On/Off
          </div>
        </li>
        <li>
          <ul className='default-list'>
            <HotkeyListCoin />
            <HotkeyListCoin />
            <HotkeyListCoin />
            <HotkeyListCoin />
          </ul>
          <ul className='added-list'></ul>
          <div
            className='add-button border-t-[1px] border-borderColor 
          w-full h-[100px] flex justify-center items-center'
          >
            <button
              className='bg-mainColor text-white w-[200px] h-[50px] 
            text-[14px] font-semibold rounded-xl'
            >
              + 단축키 추가하기
            </button>
          </div>
        </li>
      </HotkeyListToggle>
    </main>
  );
};

export default Hotkey;
