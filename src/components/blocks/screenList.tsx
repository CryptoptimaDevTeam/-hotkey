import React, { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { Modal } from '../atoms/modal';
import type { PropsWithChildren } from '../../popup/popup';
import { Switch } from '@mui/material';

interface ScreenListType {
  title: string;
  switchDisabled?: boolean;
}

const ScreenList = ({
  title,
  switchDisabled,
  children,
}: PropsWithChildren<ScreenListType>) => {
  //TODO: 아마 Switch에 대한 것을 인자로 받아야 할 듯

  const [isHelpBoxOpen, setIsHelpBoxOpen] = useState<boolean>(false);

  return (
    <>
      <li className='screen-list-wrapper flex justify-between items-center'>
        <div className='flex items-center gap-2.5'>
          <div className='text-sm'>{title}</div>
          <div className='cursor-pointer'>
            <BiHelpCircle size={16} onClick={() => setIsHelpBoxOpen(true)} />
          </div>
        </div>
        <div>
          <Switch disabled={switchDisabled} />
        </div>
      </li>
      <Modal isOpen={isHelpBoxOpen} setIsOpen={setIsHelpBoxOpen}>
        {children}
      </Modal>
    </>
  );
};

export default ScreenList;
