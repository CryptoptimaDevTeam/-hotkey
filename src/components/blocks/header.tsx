import React from 'react';
import { TbSettings } from 'react-icons/tb';

const Header: React.FC = () => {
  return (
    <header className='header-container pt-5 pb-2.5 px-5 flex justify-between items-center'>
      <div className='header-left'>
        <div className='logo-image w-[158px]'>
          <img src='logo.png' alt='logo' />
        </div>
      </div>
      <div className='header-right'>
        <div className='setting-btn'>
          <button>
            <TbSettings size={23.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
