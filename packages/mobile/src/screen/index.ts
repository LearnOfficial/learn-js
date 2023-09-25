import {Navigation} from 'react-native-navigation';
import {Home} from './home/Home';

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
}
