import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import Header from '../components/blocks/header';
import NavigationBar from '../components/blocks/navigationBar';
import Hotkey from '../pages/hotkey';
import Order from '../pages/order';
import Screen from '../pages/screen';
import Notification from '../pages/notification';

export type PropsWithChildren<P> = P & {
  children?: React.ReactNode | undefined;
};
export type currentNavType = 'nav1' | 'nav2' | 'nav3' | 'nav4';

const App: React.FC<{}> = () => {
  chrome.storage.sync.get(null, (data) => {
    console.log(data);
  });

  const [currentNav, setCurrentNav] = useState<currentNavType>('nav1');

  return (
    <div className='w-[560px]'>
      <div className='sticky top-0 bg-white z-20'>
        <Header />
        <NavigationBar currentNav={currentNav} setCurrentNav={setCurrentNav} />
      </div>
      {currentNav === 'nav1' && <Hotkey />}
      {currentNav === 'nav2' && <Screen />}
      {currentNav === 'nav3' && <Order />}
      {currentNav === 'nav4' && <Notification />}
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
