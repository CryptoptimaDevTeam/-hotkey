import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { Switch } from '@mui/material';
import Dropdown from '../atoms/dropdown';
import { setHotkeyState } from '../../util/setHotkeyData';
import type { PropsWithChildren } from '../../popup/popup';

interface HotkeyListToggleType {
  title: string;
  type: 'order' | 'coin';
}

const HotkeyListToggle = ({
  title,
  type,
  children,
}: PropsWithChildren<HotkeyListToggleType>) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [dropdownVisibility, setDropdownVisibility] = useState(true);

  useEffect(() => {
    chrome.storage.sync.get('hotkey', (data) => {
      if (type === 'order') {
        setIsActive(data.hotkey.isOrderHotkeyActive);
      } else if (type === 'coin') {
        setIsActive(data.hotkey.isCoinHotkeyActive);
      }
    });
  }, []);

  const switchButtonHandle = () => {
    setHotkeyState({ type, isActive: !isActive }).then((res) => {
      setIsActive(!isActive);
    });
  };

  return (
    <div>
      <div className='w-full flex justify-between items-center px-5'>
        <div className='flex items-center gap-2.5 py-5 basis-[50%]'>
          <div className='text-[16px] font-bold'>{title}</div>
          <div>
            <Switch checked={isActive} onChange={switchButtonHandle} />
          </div>
        </div>
        <div className='dropdown-button basis-[50%] flex justify-end'>
          <button
            className={`transition-transform transform ${
              dropdownVisibility ? 'rotate-180' : ''
            }`}
            onClick={() => setDropdownVisibility(!dropdownVisibility)}
          >
            <IoIosArrowUp size={20} />
          </button>
        </div>
      </div>
      <div>
        <Dropdown visibility={dropdownVisibility}>
          <ul>{children}</ul>
        </Dropdown>
      </div>
    </div>
  );
};

export default HotkeyListToggle;
