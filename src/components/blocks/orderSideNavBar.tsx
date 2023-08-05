import { order_side_navigation_list } from '../../static/order/nav';
import type { NavType } from '../../pages/order';

interface OrderSideNavBarType {
  currentNav: NavType;
  setNav: React.Dispatch<React.SetStateAction<string>>;
}

const OrderSideNavBar = ({ currentNav, setNav }: OrderSideNavBarType) => {
  return (
    <nav className='order-side-navigation-bar w-[130px] h-full border-r-[1px] border-borderColor'>
      <div className='navigation-list-container sticky'>
        {order_side_navigation_list.map((el) => (
          <div
            key={el.value}
            className={`${
              currentNav === el.value ? 'bg-mainColor text-white' : ''
            } px-5 cursor-pointer h-[40px] text-[14px] flex items-center`}
            onClick={() => setNav(el.value)}
          >
            {el.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default OrderSideNavBar;
