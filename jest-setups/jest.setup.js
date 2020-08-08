import {windowsAppDriverCapabilities} from 'selenium-appium';

switch (platform) {
  case 'windows':
    const webViewWindowsAppId = 'ProgressViewExample_kvqejeg71e612!App';
    module.exports = {
      capabilites: windowsAppDriverCapabilities(webViewWindowsAppId),
    };
    break;
  default:
    throw 'Unknown platform: ' + platform;
}
