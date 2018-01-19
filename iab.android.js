import { Linking } from 'react-native';
import { CustomTabs } from 'react-native-custom-tabs';

export function openBrowser(url, options = {}) {
  return CustomTabs.openURL(url, options.android).catch(e => {
    if (!options.noExternal) {
      return Linking.openURL(url);
    }
    throw e;
  });
}

export function closeBrowser() {
  // No-op on Android
}

export function onShow(/* cb */) {
  // No-op on Android
}

export function clearOnShow() {
  // No-op on Android
}

export function onHide(/* cb */) {
  // No-op on Android
}

export function clearOnHide() {
  // No-op on Android
}
