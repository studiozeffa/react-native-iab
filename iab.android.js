import { CustomTabs } from 'react-native-custom-tabs';

export function openBrowser(url, options = {}) {
  return CustomTabs.openURL(url, options.android);
}

export function closeBrowser() {
  // No-op on Android
}
