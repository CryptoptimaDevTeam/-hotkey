import React from 'react';

interface HeaderNavListType {
  id: string;
  className: string;
  navName: string;
}

interface NavigationBarType {
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationBar = ({ currentNav, setCurrentNav }: NavigationBarType) => {
  const headerNavList: Array<HeaderNavListType> = [
    {
      id: 'nav1',
      className: 'hotkey-setting',
      navName: '단축키 설정',
    },
    {
      id: 'nav2',
      className: 'screen-setting',
      navName: '화면 설정',
    },
    {
      id: 'nav3',
      className: 'stop-order',
      navName: '시세 감시 주문',
    },
    {
      id: 'nav4',
      className: 'notification',
      navName: '공지사항',
    },
  ];

  const navigationClassName: string = `block text-sm transition-all duration-500 ease-in-out hover:text-mainDownColor py-5 px-2.5`;
  const navigationAfterClassName: string = `after:transition-all after:duration-500 after:absolute 
  after:bottom-0 after:left-0 after:right-0 after:m-auto after:w-0 after:rounded-xl
  after:text-transparent after:bg-mainColor after:h-[2px] after:content-['.'] hover:after:w-full`;

  return (
    <nav className='navigation-container border-b-[1px] border-borderColor'>
      <ul className='navigation-list flex justify-between gap-5 px-5'>
        {headerNavList.map((el) => (
          <li className={`${el.className} cursor-pointer`} key={el.className}>
            <div
              className={`font-bold ${navigationClassName} ${
                currentNav === el.id && 'text-mainColor'
              } relative ${navigationAfterClassName}`}
              onClick={() => setCurrentNav(el.id)}
            >
              {el.navName}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
