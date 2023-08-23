import React, { useState, useEffect } from 'react';
import { Switch } from '@mui/material';
import { Alert } from '../atoms/alert';
import { hotkey_coin_key } from '../../static/hotkey/coin';
import { useUpbitList } from '../../hooks/useUpbitList';
import { setHotkeyListData } from '../../util/setHotkeyData';
import type { CHLType } from '../../static/localData';

interface HotkeyListCoinType {
  isFixed: boolean;
  idx: number;
  coinHotkeyData: CHLType;
  setCoinHotkeyList: React.Dispatch<React.SetStateAction<Array<CHLType>>>;
}

const HotkeyListCoin = ({
  isFixed,
  idx,
  coinHotkeyData,
  setCoinHotkeyList,
}: HotkeyListCoinType) => {
  const [hotkeyCoin, setHotkeyCoin] = useState<CHLType>(coinHotkeyData);

  const hotkey_coin_command = useUpbitList() || [];

  const [alertStatus, setAlertStatus] = useState({
    top: 'top-0',
    isOpen: false,
    message: '단축키와 명령을 선택해주세요.',
    type: 'caution',
  });

  const [isMouseOver, setIsMouseOver] = useState(false);

  const switchButtonHandle = () => {
    if (hotkeyCoin.isActive === false) {
      if (hotkeyCoin.hotkey !== 'none' && hotkeyCoin.command !== 'none') {
        const newHotkeyCoin = { ...hotkeyCoin, isActive: true };
        setHotkeyListData({
          type: 'coin',
          data: newHotkeyCoin,
          idx,
        }).then((res) => {
          setHotkeyCoin(newHotkeyCoin);
          setCoinHotkeyList((prev) => {
            const updated = prev;
            updated[idx] = newHotkeyCoin;
            return updated;
          });
        });
      } else {
        setAlertStatus({ ...alertStatus, isOpen: true });
      }
    } else {
      const newHotkeyCoin = { ...hotkeyCoin, isActive: false };
      setHotkeyListData({
        type: 'coin',
        data: newHotkeyCoin,
        idx,
      }).then((res) => {
        setHotkeyCoin(newHotkeyCoin);
        setCoinHotkeyList((prev) => {
          const updated = prev;
          updated[idx] = newHotkeyCoin;
          return updated;
        });
      });
    }
  };

  const deleteButtonHandle = () => {
    if (isFixed) {
      return;
    }
    setHotkeyListData({
      type: 'coin',
      data: 'delete',
      idx,
    }).then((res) => {
      setCoinHotkeyList((prev) => prev.filter((el, index) => index !== idx));
    });
  };

  return (
    <li className='hotkey-list-order-container border-t-[1px] border-borderColor'>
      <form className='h-[80px] flex justify-between items-center px-5'>
        <div
          className={`list-numb basis-[7%] flex items-center text-center pl-[4px] ${
            isMouseOver && 'cursor-pointer text-lg pl-[0px]'
          }`}
          onMouseOver={() => {
            !isFixed && setIsMouseOver(true);
          }}
          onMouseLeave={() => {
            !isFixed && setIsMouseOver(false);
          }}
          onClick={deleteButtonHandle}
        >
          {!isFixed && isMouseOver ? 'X' : idx + 1}
        </div>

        <div className='hotkey-selection basis-[43%] flex'>
          <div className='w-full flex justify-center items-center'>
            <select
              className='w-full h-[40px] border-[1px] border-borderColor rounded-md text-center'
              value={hotkeyCoin.hotkey}
              onChange={(e) => {
                setHotkeyCoin({ ...hotkeyCoin, hotkey: e.target.value });
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
