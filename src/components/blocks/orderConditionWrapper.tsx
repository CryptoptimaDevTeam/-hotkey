import OrderConditionInputs from './orderConditionInputs';
import { InputSelectH, InputTextH } from '../atoms/input';
import OrderListWrapper from './orderListWrapper';
import { useUpbitList } from '../../hooks/useUpbitList';
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
  const upbitCoinList = useUpbitList().map((obj) => {
    return { name: obj.korean_name, value: obj.market };
  });

  return (
    <div className='w-[430px]'>
      {['conditional', 'trailing stop'].includes(currentNav) ? (
        <OrderConditionTab
          currentNav={currentNav}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      ) : null}

      <main className='condition-area'>
        {['conditional', 'trailing stop'].includes(currentNav) && (
          <form>
            <section className='condition-layer-1'>
              <OrderConditionInputs>
                <li>
                  <InputSelectH
                    title='종목'
                    optionList={upbitCoinList}
                    width={'120px'}
                  />
                </li>
                <li>
                  <InputTextH
                    title='기준가격'
                    placeholder='ex) 20000'
                    width={'120px'}
                  />
                </li>
                <li>
                  <InputSelectH
                    title='조건'
                    optionList={upbitCoinList}
                    width={'120px'}
                  />
                </li>
              </OrderConditionInputs>
            </section>

            {currentNav === 'trailing stop' && (
              <section className='condition-layer-2'>
                <OrderConditionInputs>
                  <li>
                    <InputSelectH
                      title='스탑기준'
                      optionList={upbitCoinList}
                      width={'120px'}
                    />
                  </li>
                  <li>
                    <InputTextH
                      title='스탑설정비율'
                      placeholder='ex) 5%'
                      width={'120px'}
                    />
                  </li>
                  <li>
                    <InputSelectH
                      title='스탑조건'
                      optionList={upbitCoinList}
                      width={'120px'}
                    />
                  </li>
                </OrderConditionInputs>
              </section>
            )}

            <section className='condition-layer-3'>
              <OrderConditionInputs>
                <li>
                  <InputSelectH
                    title='주문종류'
                    optionList={upbitCoinList}
                    width={'120px'}
                  />
                </li>
                <li>
                  <InputTextH
                    title='주문가격'
                    placeholder='ex) 23000'
                    width={'120px'}
                  />
                </li>
                <li>
                  <InputSelectH
                    title='비중'
                    optionList={upbitCoinList}
                    width={'120px'}
                  />
                </li>
              </OrderConditionInputs>
            </section>

            <section className='condition-summary p-5 flex flex-col gap-2.5 justify-center items-center'>
              <div>{'${종목}의 현재가가 ${기준가격}보다 ${조건}한 후'}</div>
              <div>
                {'${스탑기준} 대비 ${스탑설정비율}만큼 ${스탑조건}했을 때,'}
              </div>
              <div>
                {'${주문종류}로 ${주문가격}에 가용 예수금 중 ${비중}만큼 '}
                <span>{'매수'}</span>
              </div>
            </section>
            <div className='submit-button w-full flex justify-center items-center pb-5'>
              <button
                className='bg-mainColor text-white w-[180px] h-[40px] 
                    text-[14px] font-semibold rounded-lg hover:bg-mainUpColor'
              >
                주문 접수
              </button>
            </div>
          </form>
        )}

        {currentNav === 'details' && (
          <div className='order-list-container min-h-[400px]'>
            <OrderListWrapper />
          </div>
        )}
        {currentNav === 'alert' && (
          <div className='w-full h-[400px] flex justify-center items-center font-bold'>
            Coming Soon!
          </div>
        )}
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
  const tabWrapperStyle =
    'flex justify-center items-center cursor-pointer sticky top-[121px] z-10 bg-white';
  const tabStyle = `h-[50px] basis-[50%] flex justify-center items-center text-[13px] font-medium hover:bg-[#f1f3f5]`;
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
