import { order_side_navigation_list } from '../../static/order/nav';
import type { NavType } from '../../pages/order';

interface OrderSideNavBarType {
  currentNav: NavType;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

const OrderSideNavBar = ({
  currentNav,
  setCurrentNav,
}: OrderSideNavBarType) => {
  return (
    <nav className='order-side-navigation-bar min-w-[130px] border-r-[1px] border-borderColor'>
      <div className='navigation-list-container sticky top-[121px]'>
        {order_side_navigation_list.map((el) => (
          <div
            key={el.value}
            className={`${
              currentNav === el.value
                ? 'bg-mainColor text-white'
                : 'hover:bg-[#f1f3f5]'
            } px-5 cursor-pointer h-[40px] text-[13px] font-medium flex items-center`}
            onClick={() => setCurrentNav(el.value)}
          >
            {el.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default OrderSideNavBar;
