import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './screen/auth/navigation';
import { HomeNavigation } from './screen/home/navigation';
import { useState } from 'react';
import { i18n } from './i18n';
import { Provider, useSelector } from 'react-redux';
import appStore from './store';

export function App() {
  return (
    <Provider store={appStore}>
      <AppLoader />
    </Provider>
  );
}

export function AppLoader() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const locale = useSelector((state) => state.settingSliceReducer.locale);
  i18n.locale = locale;

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
