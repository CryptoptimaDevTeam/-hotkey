const OrderListWrapper = () => {
  return (
    <div className='order-list-wrapper flex'>
      <div className='order-meta-info'>
        <div className='order-number'>주문번호</div>
        <div className='order-coin-name'>코인종류</div>
        <div className='order-type'>시세 감시 주문 종류</div>
        <div className='order-cancel-button'></div>
      </div>
      <div className='order-summary p-5 flex flex-col gap-2.5 justify-center items-center'>
        <div>{'${종목}의 현재가가 ${기준가격}보다 ${조건}한 후'}</div>
        <div>{'${스탑기준} 대비 ${스탑설정비율}만큼 ${스탑조건}했을 때,'}</div>
        <div>
          {'${주문종류}로 ${주문가격}에 가용 예수금 중 ${비중}만큼 '}
          <span>{'매수'}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderListWrapper;
