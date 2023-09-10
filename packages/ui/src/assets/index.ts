import { Platform } from 'react-native';

const IMAGES = {
  logo:
    Platform.OS === 'web'
      ? new URL(`assets/learn-logo.png`, import.meta.url).href
      : require('./assets/learn-logo.png')
};

export { IMAGES };
