import {Navigation} from 'react-native-navigation';
import {setHomeStackNavigation} from './navigation';
import {registerScreens} from './screen';

export function App() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setHomeStackNavigation();
  });
}
