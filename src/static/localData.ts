export interface HotkeyType {
  isOrderHotkeyActive: boolean;
  isCoinHotkeyActive: boolean;
  orderHotkeyList: Array<OHLType> | [];
  coinHotkeyList: Array<CHLType> | [];
}

interface OHLType {
  front: string;
  back: string;
  command: string;
  isActive: boolean;
}

interface CHLType {
  hotkey: string;
  command: string;
  isActive: boolean;
}

export const HotkeyInitial: HotkeyType = {
  isOrderHotkeyActive: false,
  isCoinHotkeyActive: false,
  orderHotkeyList: [],
  coinHotkeyList: [],
};

export interface ScreenType {
  isChartDisplay: boolean;
  isExcutionWindowDisplay: boolean;
  isOrderBookExtension: boolean;
  isSellTabProfitAmount: boolean;
  isOrderBookTotalAmount: boolean;
  isOrderBookOrder: boolean;
  isOneMinuteFeatured: boolean;
  isFiveMinuteFeatured: boolean;
  isFifteenMinuteFeatured: boolean;
  isOneHourFeatured: boolean;
  isRealTimeChat: boolean;
}

export const ScreenInitial: ScreenType = {
  isChartDisplay: false,
  isExcutionWindowDisplay: false,
  isOrderBookExtension: false,
  isSellTabProfitAmount: false,
  isOrderBookTotalAmount: false,
  isOrderBookOrder: false,
  isOneMinuteFeatured: false,
  isFiveMinuteFeatured: false,
  isFifteenMinuteFeatured: false,
  isOneHourFeatured: false,
  isRealTimeChat: false,
};

export interface OrderType {
  isCautionAgree: boolean;
  conditionalOrderList: Array<COLType> | [];
  trailingStopOrderList: Array<TSOLType> | [];
  targetAlertList: Array<TALType> | [];
}

interface COLType {
  position: 'buy' | 'sell';
  coin: string;
  targetPrice: number;
  condition: string;
  orderType: string;
  orderPrice: number | null;
  proportion: number;
}

interface TSOLType extends COLType {
  stopCondition: string;
  stopRate: number;
  stopBase: string;
}

interface TALType {
  coin: string;
  targetPrice: number;
  condition: string;
}

export const OrderInitial: OrderType = {
  isCautionAgree: false,
  conditionalOrderList: [],
  trailingStopOrderList: [],
  targetAlertList: [],
};
