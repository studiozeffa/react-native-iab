import { Linking } from 'react-native';
import SafariView from 'react-native-safari-view';

export function openBrowser(url, options = {}) {
  // TODO onShow/onHide callbacks
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
