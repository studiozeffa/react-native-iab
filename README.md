# react-native-iab

A React Native module which opens a URL in an embedded 'In-App' browser (if available), falling back to the regular browser.

## Prerequisities

### Platforms

This library supports the following platforms:

- iOS 8+
- Android 4.4+

Lower versions _should_ work, but may not.

### Framework

Ensure you are running React Native 0.50 or above.

### Dependencies

This module is really just a convenience wrapper around these excellent libraries:

- [react-native-safari-view](https://github.com/naoufal/react-native-safari-view)
- [react-native-custom-tabs](https://github.com/droibit/react-native-custom-tabs)

Before installing this module, please ensure the above libraries are installed and linked into the project. Follow the documentation in the links above to achieve this.

## Installation

With the prereuisites fulfilled, you can install this library with yarn or npm:

``` bash
yarn add react-native-iab
```

or

``` bash
npm install react-native-iab
```

## Usage

``` js
import { openBrowser, closeBrowser } from 'react-native-iab';

// Open a link to the Google homepage in the in-app browser,
// falling back to the external browser if no in-app browser
// is available.
openBrowser('http://google.co.uk');

// Opens a link and configures the in-app browser
// with the specified options.
openBrowser('http://google.co.uk', {
  ios: {
    // Any iOS specific options can be set here
    // See https://github.com/naoufal/react-native-safari-view#showsafarioptions
    readerMode: true,
    tintColor: '#FCFCFC',
    barTintColor: '#607D8B',
  },
  android: {
    // Any Android specific options can be set here
    // See https://github.com/droibit/react-native-custom-tabs#customized-for-android
    toolbarColor: '#607D8B',
    enableUrlBarHiding: true,
    showPageTitle: true,
    enableDefaultShare: true,
  }
});

// Open the browser without falling back to the external browser.
openBrowser('http://google.co.uk', {
  noExternal: true
});

// Close the browser (iOS only).
closeBrowser();

// Run the passed callback when the browser is shown (iOS only).
onShow(() => console.log('Browser shown'));

// Clear a previously set onShow callback (iOS only).
clearOnShow();

// Run the passed callback when the browser is hidden (iOS only).
onHide(() => console.log('Browser hidden'));

// Clear a previously set onHide callback (iOS only).
clearOnHide();
```

## Credits

This library stands on the shoulders of the dependencies listed above, and is merely a piece of glue to bring the two together with common syntax.

Huge credit must therefore go to [@naoufal](https://github.com/naoufal) and [@droibit](https://github.com/droibit) for doing the real work here.

## License

MIT
