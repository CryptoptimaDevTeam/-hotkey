import React from 'react';

const Notification: React.FC = () => {
  const submenuStyle =
    'flex flex-col justify-center items-center gap-2.5 py-2.5 cursor-pointer w-[120px] rounded-xl hover:bg-slate-100 hover:text-mainColor';
  const iconStyle = 'w-[60px] h-[60px]';
  const titleStyle = 'text-center text-[14px] font-bold';
  return (
    <main>
      <div className='submenu-list-area'>
        <ul className='flex justify-evenly py-5 border-b-[10px] border-borderColor'>
          <li className={`notification ${submenuStyle}`}>
            <div className={`notification-icon ${iconStyle}`}>
              <img src='./notification/notification_icon.png' />
            </div>
            <div className={`notification-title ${titleStyle}`}>공지사항</div>
          </li>
          <li className={`suggestion ${submenuStyle}`}>
            <div className={`suggestion-icon ${iconStyle}`}>
              <img src='./notification/suggestion_icon.png' />
            </div>
            <div className={`suggestion-title ${titleStyle}`}>
              의견 제안하기
            </div>
          </li>
          <li className={`error-report ${submenuStyle}`}>
            <div className={`error-report-icon ${iconStyle}`}>
              <img src='./notification/error_report_icon.png' />
            </div>
            <div className={`error-report-title ${titleStyle}`}>
              에러 제보하기
            </div>
          </li>
          <li className={`fee-payback ${submenuStyle}`}>
            <div className={`fee-payback-icon ${iconStyle}`}>
              <img src='./notification/payback_icon.png' />
            </div>
            <div className={`fee-payback-title ${titleStyle}`}>
              수수료 환급받기
            </div>
          </li>
        </ul>
      </div>
      <div className='FAQ-area'></div>
    </main>
  );
};

export default Notification;
