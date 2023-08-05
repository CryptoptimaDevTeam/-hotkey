import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { Switch } from '@mui/material';
import Dropdown from '../atoms/dropdown';
import type { PropsWithChildren } from '../../popup/popup';

interface HotkeyListToggleType {
  title: string;
}

const HotkeyListToggle = ({
  title,
  children,
}: PropsWithChildren<HotkeyListToggleType>) => {
  //TODO: Chrome Storage와의 연결 필요(초기값 설정)
  const [isActive, setIsActive] = useState<boolean>(false);
  const [dropdownVisibility, setDropdownVisibility] = useState(true);

  //TODO: Chrome Storage와의 연결 필요(변경사항 반영)
  const switchButtonHandle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className='w-full flex justify-between items-center px-5'>
        <div className='flex items-center gap-2.5 py-5 basis-[50%]'>
          <div className='text-[16px] font-bold'>{title}</div>
          <div>
            <Switch value={isActive} onChange={switchButtonHandle} />
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
