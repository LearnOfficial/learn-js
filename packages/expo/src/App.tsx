import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './screen/auth/navigation';
import { HomeNavigation } from './screen/home/navigation';
import { useState } from 'react';
import { i18n } from './i18n';
import { getLocales } from 'expo-localization';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  i18n.locale = getLocales()[0].languageCode;

  let Navigation: any = HomeNavigation;

  if (!isAuthenticated) {
    Navigation = AuthNavigation;
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
