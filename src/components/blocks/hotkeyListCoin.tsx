import React, { useState, useEffect } from 'react';
import { Switch } from '@mui/material';
import { Alert } from '../atoms/alert';
import { hotkey_coin_key } from '../../static/hotkey/coin';
import { useUpbitList } from '../../hooks/useUpbitList';

interface hotkeyCoinType {
  key: string;
  command: string;
  isActive: boolean;
}

const HotkeyListCoin: React.FC = () => {
  //TODO: 아마 hotkeyCoin 데이터를 상위에서 관리해야 할 듯
  const [hotkeyCoin, setHotkeyCoin] = useState<hotkeyCoinType>({
    key: 'none',
    command: 'none',
    isActive: false,
  });

  const hotkey_coin_command = useUpbitList() || [];

  const [alertStatus, setAlertStatus] = useState({
    top: 'top-0',
    isOpen: false,
    message: '단축키와 명령을 선택해주세요.',
    type: 'caution',
  });

  const switchButtonHandle = () => {
    if (hotkeyCoin.isActive === false) {
      if (hotkeyCoin.key !== 'none' && hotkeyCoin.command !== 'none') {
        setHotkeyCoin({ ...hotkeyCoin, isActive: true });
      } else {
        setAlertStatus({ ...alertStatus, isOpen: true });
      }
    } else {
      setHotkeyCoin({ ...hotkeyCoin, isActive: false });
    }
  };

  return (
    <li className='hotkey-list-order-container border-t-[1px] border-borderColor'>
      <form className='h-[80px] flex justify-between items-center px-5'>
        <div className='list-numb basis-[7%] flex items-center'>1</div>

        <div className='hotkey-selection basis-[43%] flex'>
          <div className='w-full flex justify-center items-center'>
            <select
              className='w-full h-[40px] border-[1px] border-borderColor rounded-md text-center'
              value={hotkeyCoin.key}
              onChange={(e) => {
                setHotkeyCoin({ ...hotkeyCoin, key: e.target.value });
              }}
            >
              <option value='none' disabled>
                미지정
              </option>
              {hotkey_coin_key.map((el) => (
                <option key={el.value} value={el.value}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='order-selection basis-[42%] flex pl-5'>
          <div className='flex w-full items-center'>
            <select
              className='w-[175px] h-[40px] border-[1px] border-borderColor rounded-md text-center cursor-pointer'
              value={hotkeyCoin.command}
              onChange={(e) => {
                setHotkeyCoin({ ...hotkeyCoin, command: e.target.value });
              }}
            >
              <option value={'none'} disabled>
                미지정
              </option>

              {hotkey_coin_command.map((el) => (
                <option key={el.market} value={el.market}>
                  {el.korean_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='availability-switch basis-[8%] flex justify-center items-center cursor-pointer'>
          <Switch
            size='medium'
            onChange={switchButtonHandle}
            checked={hotkeyCoin.isActive}
          />
        </div>
      </form>
      <Alert alertStatus={alertStatus} setAlertStatus={setAlertStatus} />
    </li>
  );
};

export default HotkeyListCoin;
