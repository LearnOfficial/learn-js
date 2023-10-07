import {Navigation} from 'react-native-navigation';
import {setAuthenticationNavigation} from './navigation';
import {registerScreens} from './screen';

export function App() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setAuthenticationNavigation();
  });
}
