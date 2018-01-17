import SafariView from 'react-native-safari-view';

export function openBrowser(url, options = {}) {
  return SafariView.show({
    ...(options.ios || {}),
    url,
  });
}

export function closeBrowser() {
  SafariView.dismiss();
}
