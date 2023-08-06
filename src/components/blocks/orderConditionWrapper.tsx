import OrderConditionInputs from './orderConditionInputs';
import { InputSelectH, InputTextH } from '../atoms/input';
import type { NavType, TabType } from '../../pages/order';

interface OrderConditionWrapperType {
  currentNav: NavType;
  currentTab: TabType;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const OrderConditionWrapper = ({
  currentNav,
  currentTab,
  setCurrentTab,
}: OrderConditionWrapperType) => {
  console.log(window.outerWidth, window.innerWidth);

  return (
    <div className='w-[calc(100vw - 130px)]'>
      <OrderConditionTab
        currentNav={currentNav}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <main className='condition-area'>
        <OrderConditionInputs>
          <li>
            <InputTextH title='테스트' placeholder='테스트' />
          </li>
          <li>
            <InputTextH title='테스트' placeholder='테스트' />
          </li>
          <li>
            <InputTextH title='테스트' placeholder='테스트' />
          </li>
        </OrderConditionInputs>
      </main>
    </div>
  );
};

export default OrderConditionWrapper;

const OrderConditionTab = ({
  currentNav,
  currentTab,
  setCurrentTab,
}: OrderConditionWrapperType) => {
  const tabWrapperStyle = 'flex justify-center items-center cursor-pointer';
  const tabStyle = `h-[50px] basis-[50%] flex justify-center items-center text-[13px] font-medium`;
  const activeTabStyle =
    'border-b-[2px] pt-[1px] border-mainColor text-mainColor';
  const nonActiveTabStyle = 'border-b-[1px] pt-[1px] border-borderColor';

  return (
    <>
      <div className={`buy-sell-tab-area ${tabWrapperStyle}`}>
        <div
          className={`${tabStyle} ${
            currentTab === 'buy' ? activeTabStyle : nonActiveTabStyle
          }`}
          onClick={() => setCurrentTab('buy')}
        >
          {currentNav === 'conditional'
            ? '조건부 매수주문'
            : currentNav === 'trailing stop'
            ? '트레일링 스탑 매수주문'
            : ''}
        </div>
        <div
          className={`${tabStyle} ${
            currentTab === 'sell' ? activeTabStyle : nonActiveTabStyle
          }`}
          onClick={() => setCurrentTab('sell')}
        >
          {currentNav === 'conditional'
            ? '조건부 매도주문'
            : currentNav === 'trailing stop'
            ? '트레일링 스탑 매도주문'
            : ''}
        </div>
      </div>
    </>
  );
};
