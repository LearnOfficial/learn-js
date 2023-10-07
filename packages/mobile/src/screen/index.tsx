import {Navigation} from 'react-native-navigation';
import {Home} from './Home';
import {SignIn} from './Auth/SignIn';
import {Auth} from './Auth';
import {GlobalContextLayout} from '../layout/GlobalContextLayout';
import {Authentication} from './Authentication';

export const AuthNavigation = () => {
  return (
    <GlobalContextLayout>
      <Auth />
    </GlobalContextLayout>
  );
};

export const HomeNavigation = () => {
  return (
    <GlobalContextLayout>
      <Home />
    </GlobalContextLayout>
  );
};

export const AuthenticationNavigation = () => {
  return (
    <GlobalContextLayout>
      <Authentication />
    </GlobalContextLayout>
  );
};

export function registerScreens() {
  Navigation.registerComponent(
    'Authentication',
    () => AuthenticationNavigation,
  );

  Navigation.registerComponent('Auth', () => AuthNavigation);
  Navigation.registerComponent('SignIn', () => SignIn);

  Navigation.registerComponent('Home', () => HomeNavigation);
}
