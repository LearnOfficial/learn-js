import { Platform } from 'react-native';

const IMAGES = {
  LearnLogo:
    Platform.OS === 'web'
      ? new URL(`assets/learn-logo.png`, import.meta.url).href
      : require('./assets/learn-logo.png'),
  GitHubIcon:
    Platform.OS === 'web'
      ? new URL(`assets/github-icon.png`, import.meta.url).href
      : require('./assets/github-icon.png'),
  LearnDesktopApp:
    Platform.OS === 'web'
      ? new URL(`assets/learn-desktop-app.png`, import.meta.url).href
      : require('./assets/learn-desktop-app.png')
};

export { IMAGES };
