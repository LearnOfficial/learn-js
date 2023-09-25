import {Navigation} from 'react-native-navigation';

export function setHomeStackNavigation() {
  return Navigation.setRoot({
    root: {
      component: {
        name: 'Home',
      },
    },
  });
}
