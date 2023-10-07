import {Navigation} from 'react-native-navigation';

export function setAuthStackNavigation() {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'group.auth',
        options: {
          statusBar: {
            visible: false,
          },
        },
        children: [
          {
            component: {
              name: 'Auth',
            },
          },
        ],
      },
    },
  });
}

export function setHomeNavigation() {
  return Navigation.setRoot({
    root: {
      component: {
        name: 'Home',
      },
    },
  });
}

export function setAuthenticationNavigation() {
  return Navigation.setRoot({
    root: {
      component: {
        name: 'Authentication',
      },
    },
  });
}
