import { OHLType, CHLType } from './../static/localData';

interface SetHotkeyListDataType {
  type: 'order' | 'coin';
  data: OHLType | CHLType | 'delete';
  idx: number;
}

export function setHotkeyListData({
  type,
  data,
  idx,
}: SetHotkeyListDataType): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(null, (res) => {
      const curHotkeyData = res.hotkey;
      let newListdata;
      let newHotkeyData;

      if (type === 'order') {
        newListdata = curHotkeyData.orderHotkeyList;
      } else if (type === 'coin') {
        newListdata = curHotkeyData.coinHotkeyList;
      }

      if (data === 'delete') {
        newListdata.splice(idx, 1);
      } else {
        newListdata[idx] = data;
      }

      if (type === 'order') {
        newHotkeyData = {
          ...curHotkeyData,
          orderHotkeyList: newListdata,
        };
      } else if (type === 'coin') {
        newHotkeyData = {
          ...curHotkeyData,
          coinHotkeyList: newListdata,
        };
      }

      chrome.storage.sync.set(
        {
          hotkey: newHotkeyData,
        },
        () => {
          resolve();
        }
      );
    });
  });
}

interface setHotkeyStateType {
  type: 'order' | 'coin';
  isActive: boolean;
}

export function setHotkeyState({
  type,
  isActive,
}: setHotkeyStateType): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.sync.get(null, (res) => {
      const curHotkeyData = res.hotkey;

      let newHotkeyData;
      if (type === 'order') {
        newHotkeyData = {
          ...curHotkeyData,
          isOrderHotkeyActive: isActive,
        };
      } else if (type === 'coin') {
        newHotkeyData = {
          ...curHotkeyData,
          isCoinHotkeyActive: isActive,
        };
      }

      chrome.storage.sync.set(
        {
          hotkey: newHotkeyData,
        },
        () => {
          resolve();
        }
      );
    });
  });
}
