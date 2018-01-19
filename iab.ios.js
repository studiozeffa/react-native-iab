import { Linking } from 'react-native';
import SafariView from 'react-native-safari-view';

let onShowSubscription = null;
let onHideSubscription = null;

export function openBrowser(url, options = {}) {
  SafariView.isAvailable()
    .then(() =>
      SafariView.show({
        ...(options.ios || {}),
        url,
      }),
    )
    .catch(e => {
      if (!options.noExternal) {
        return Linking.openURL(url);
      }
      throw e;
    });
}

export function closeBrowser() {
  SafariView.dismiss();
}

export function onShow(cb) {
  clearOnShow();
  SafariView.addEventListener('onShow', cb);
  onShowSubscription = cb;
}

export function clearOnShow() {
  if (onShowSubscription) {
    SafariView.removeEventListener('onShow', onShowSubscription);
    onShowSubscription = null;
  }
}

export function onHide(cb) {
  clearOnHide();
  SafariView.addEventListener('onDismiss', cb);
  onHideSubscription = cb;
}

export function clearOnHide() {
  if (onHideSubscription) {
    SafariView.removeEventListener('onDismiss', onHideSubscription);
    onHideSubscription = null;
  }
}
