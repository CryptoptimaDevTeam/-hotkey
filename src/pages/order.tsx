import React, { useState } from 'react';
import OrderSideNavBar from '../components/blocks/orderSideNavBar';

export type NavType = 'conditional' | 'trailing stop' | 'details' | 'alert';
type conditionalTab = 'buy' | 'sell';
type trailingStopTab = 'buy' | 'sell';

const Order: React.FC = () => {
  // 사이드 네비게이션 바 관련 상태관리
  const [nav, setNav] = useState<NavType>('conditional');

  const [conditionalTab, setConditionalTab] = useState('buy');
  const [trailingStopTab, setTrailingStopTab] = useState('buy');
  // TODO: 나중에 초기값 재설정 필요 (한 번 동의했으면 O.K)
  const [cautionModal, setCautionModal] = useState<boolean>(false);

  return (
    <div className='flex'>
      <OrderSideNavBar currentNav={nav} setNav={setNav} />
    </div>
  );
};

export default Order;
