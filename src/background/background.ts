import {
  HotkeyInitial,
  ScreenInitial,
  OrderInitial,
} from '../static/localData';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    hotkey: HotkeyInitial,
    screen: ScreenInitial,
    order: OrderInitial,
  });
});
