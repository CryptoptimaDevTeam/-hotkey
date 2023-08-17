import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { Alert } from '../atoms/alert';
import { setHotkeyListData } from '../../util/setHotkeyData';
import {
  hotkey_order_front,
  hotkey_order_back,
  hotkey_order_market,
  hotkey_order_limit,
  hotkey_order_related,
  hotkey_order_tab,
} from '../../static/hotkey/order';
import type { OHLType } from '../../static/localData';

interface HotkeyListOrderType {
  isFixed: boolean;
  idx: number;
  orderHotkeyData: OHLType;
  setOrderHotkeyList: React.Dispatch<React.SetStateAction<Array<OHLType>>>;
}

const HotkeyListOrder = ({
  isFixed,
  idx,
  orderHotkeyData,
  setOrderHotkeyList,
}: HotkeyListOrderType) => {
  //TODO: 아마 hotkeyOrder 데이터를 상위에서 관리해야 할 듯

  const [hotkeyOrder, setHotkeyOrder] = useState<OHLType>(orderHotkeyData);

  const [alertStatus, setAlertStatus] = useState({
    top: 'top-0',
    isOpen: false,
    message: '단축키와 명령을 선택해주세요.',
    type: 'caution',
  });

  const switchButtonHandle = () => {
    if (hotkeyOrder.isActive === false) {
      if (
        hotkeyOrder.front !== 'none' &&
        hotkeyOrder.back !== 'none' &&
        hotkeyOrder.command !== 'none'
      ) {
        const newHotkeyOrder = { ...hotkeyOrder, isActive: true };
        setHotkeyListData({
          type: 'order',
          data: newHotkeyOrder,
          idx,
        }).then((res) => {
          setHotkeyOrder(newHotkeyOrder);
        });
      } else {
        setAlertStatus({ ...alertStatus, isOpen: true });
      }
    } else {
      const newHotkeyOrder = { ...hotkeyOrder, isActive: false };
      setHotkeyListData({
        type: 'order',
        data: newHotkeyOrder,
        idx,
      }).then((res) => {
        setHotkeyOrder(newHotkeyOrder);
      });
    }
  };

  return (
    <li className='hotkey-list-order-container border-t-[1px] border-borderColor'>
      <form className='h-[80px] flex justify-between items-center px-5'>
        <div className='list-numb basis-[7%] flex items-center'>{idx + 1}</div>

        <div className='hotkey-selection basis-[43%] flex'>
          <div className='w-full flex justify-center items-center'>
            <select
              className='h-[40px] border-[1px] border-borderColor rounded-md basis-[50%] text-center cursor-pointer'
              value={hotkeyOrder.front}
              onChange={(e) => {
                setHotkeyOrder({ ...hotkeyOrder, front: e.target.value });
              }}
            >
              <option value='none' disabled>
                미지정
              </option>
              {hotkey_order_front.map((el) => (
                <option key={el.value} value={el.value}>
                  {el.name}
                </option>
              ))}
            </select>
            <div className='basis-[10%] text-center text-[16px] font-bold'>
              +
            </div>
            <select
              className='h-[40px] border-[1px] border-borderColor rounded-md basis-[40%] text-center cursor-pointer'
              value={hotkeyOrder.back}
              onChange={(e) => {
                setHotkeyOrder({ ...hotkeyOrder, back: e.target.value });
              }}
            >
              <option value='none' disabled>
                미지정
              </option>
              {hotkey_order_back.map((el) => (
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
              value={hotkeyOrder.command}
              onChange={(e) => {
                setHotkeyOrder({ ...hotkeyOrder, command: e.target.value });
              }}
            >
              <option value={'none'} disabled>
                미지정
              </option>
              <optgroup label='시장가 주문'>
                {hotkey_order_market.map((el) => (
                  <option key={el.value} value={el.value}>
                    {el.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label='지정가 주문'>
                {hotkey_order_limit.map((el) => (
                  <option key={el.value} value={el.value}>
                    {el.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label='주문 관련'>
                {hotkey_order_related.map((el) => (
                  <option key={el.value} value={el.value}>
                    {el.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label='탭 이동'>
                {hotkey_order_tab.map((el) => (
                  <option key={el.value} value={el.value}>
                    {el.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className='availability-switch basis-[8%] flex justify-center items-center'>
          <Switch
            size='medium'
            onChange={switchButtonHandle}
            checked={hotkeyOrder.isActive}
          />
        </div>
      </form>
      <Alert alertStatus={alertStatus} setAlertStatus={setAlertStatus} />
    </li>
  );
};

export default HotkeyListOrder;
