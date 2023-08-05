import React from 'react';
import type { PropsWithChildren } from '../../popup/popup';

interface ScreenContainerType {
  title: string;
}

const ScreenContainer = ({
  title,
  children,
}: PropsWithChildren<ScreenContainerType>) => {
  return (
    <div className='screen-container flex flex-col gap-2.5 p-5 border-b-[1px] border-borderColor'>
      <div className='text-[20px] font-bold'>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default ScreenContainer;
