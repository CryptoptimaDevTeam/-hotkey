import React from 'react';
import ScreenContainer from '../components/blocks/screenContainer';
import ScreenList from '../components/blocks/screenList';
import {
  ChartDisplay,
  ExcutionWindowDisplay,
  OrderBookExtension,
  SellTabProfitAmount,
  OrderBookTotalAmount,
  OrderBookOrder,
  OneMuniteFeatured,
  FiveMuniteFeatured,
  FifteenMuniteFeatured,
  OneHourFeatured,
  RealTimeChat,
} from '../components/blocks/helpBox';

const Screen: React.FC = () => {
  return (
    <main>
      <ScreenContainer title='기본 화면 On/Off'>
        <ScreenList title='상단 기본 정보 및 차트 On/Off'>
          <ChartDisplay />
        </ScreenList>
        <ScreenList title='하단 체결창 On/Off'>
          <ExcutionWindowDisplay />
        </ScreenList>
      </ScreenContainer>

      <ScreenContainer title='기본 화면 수정'>
        <ScreenList title='호가창 확장'>
          <OrderBookExtension />
        </ScreenList>
        <ScreenList title='매도탭 내 보유 평단가 ・ 수익률  ・ 수익금 표시'>
          <SellTabProfitAmount />
        </ScreenList>
        <ScreenList
          title='호가 내 매수/매도 주문 합계금액 표시'
          switchDisabled={true}
        >
          <OrderBookTotalAmount />
        </ScreenList>
        <ScreenList title='호가 주문 활성화' switchDisabled={true}>
          <OrderBookOrder />
        </ScreenList>
      </ScreenContainer>

      <ScreenContainer title='실시간 특징주'>
        <ScreenList title='1분봉 특징주 조회' switchDisabled={true}>
          <OneMuniteFeatured />
        </ScreenList>
        <ScreenList title='5분봉 특징주 조회' switchDisabled={true}>
          <FiveMuniteFeatured />
        </ScreenList>
        <ScreenList title='15분봉 특징주 조회' switchDisabled={true}>
          <FifteenMuniteFeatured />
        </ScreenList>
        <ScreenList title='60분봉 특징주 조회' switchDisabled={true}>
          <OneHourFeatured />
        </ScreenList>
      </ScreenContainer>

      <ScreenContainer title='실시간 채팅'>
        <ScreenList title='유저 간 실시간 채팅 On/Off' switchDisabled={true}>
          <RealTimeChat />
        </ScreenList>
      </ScreenContainer>
    </main>
  );
};

export default Screen;
