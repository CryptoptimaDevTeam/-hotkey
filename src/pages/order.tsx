import React, { useState } from 'react';
import OrderSideNavBar from '../components/blocks/orderSideNavBar';
import OrderConditionWrapper from '../components/blocks/orderConditionWrapper';
import { Modal } from '../components/atoms/modal';
import { FiAlertTriangle } from 'react-icons/fi';

export type NavType = 'conditional' | 'trailing stop' | 'details' | 'alert';
export type TabType = 'buy' | 'sell';

const Order: React.FC = () => {
  // 사이드 네비게이션 바 관련 상태관리
  const [curNav, setCurNav] = useState<NavType>('conditional');
  const [curTab, setCurTab] = useState<TabType>('buy');
  // TODO: 나중에 초기값 재설정 필요 (한 번 동의했으면 O.K)
  const [cautionModal, setCautionModal] = useState<boolean>(true);
  const cautionModalButtonHandle = () => {
    // TODO: Chrome Storage에 저장하는 코드 필요
    setCautionModal(false);
  };
  return (
    <div className='h-full flex items-stretch'>
      <OrderSideNavBar currentNav={curNav} setCurrentNav={setCurNav} />
      <OrderConditionWrapper
        currentNav={curNav}
        currentTab={curTab}
        setCurrentTab={setCurTab}
      />
      <Modal
        isOpen={cautionModal}
        setIsOpen={setCautionModal}
        modalWidth='w-[360px]'
        protectClosing={true}
      >
        <div className='caution-icon flex justify-center items-center'>
          <FiAlertTriangle size={60} color='#D8494A' />
        </div>
        <div className='caution-message py-7 w-[310px] mx-auto text-[13px]'>
          시세 감시 주문은 사용자가 사용하는 컴퓨터의 네트워크 환경 등에 따라
          정상적으로 작동하지 않을 수 있으며,{' '}
          <span className='font-bold'>
            시세 감시 주문 미작동으로 인해 발생한 손익에 관한 모든 책임은
            사용자에게 있습니다.
          </span>
        </div>
        <div className='cognition-button flex justify-center items-center'>
          {' '}
          <button
            className='bg-mainColor text-white w-[180px] h-[40px] 
                    text-[14px] font-semibold rounded-lg hover:bg-mainUpColor'
            onClick={cautionModalButtonHandle}
          >
            인지하였음
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Order;
