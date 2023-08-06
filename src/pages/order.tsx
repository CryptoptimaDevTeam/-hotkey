import React, { useState } from 'react';
import OrderSideNavBar from '../components/blocks/orderSideNavBar';
import OrderConditionWrapper from '../components/blocks/orderConditionWrapper';

export type NavType = 'conditional' | 'trailing stop' | 'details' | 'alert';
export type TabType = 'buy' | 'sell';

const Order: React.FC = () => {
  // 사이드 네비게이션 바 관련 상태관리
  const [curNav, setCurNav] = useState<NavType>('conditional');
  const [curTab, setCurTab] = useState<TabType>('buy');
  // TODO: 나중에 초기값 재설정 필요 (한 번 동의했으면 O.K)
  const [cautionModal, setCautionModal] = useState<boolean>(false);

  return (
    <div className='flex'>
      <OrderSideNavBar currentNav={curNav} setCurrentNav={setCurNav} />
      <OrderConditionWrapper
        currentNav={curNav}
        currentTab={curTab}
        setCurrentTab={setCurTab}
      />
    </div>
  );
};

export default Order;
