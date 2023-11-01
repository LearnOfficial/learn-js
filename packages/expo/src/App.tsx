import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './screen/auth/navigation';
import { HomeNavigation } from './screen/home/navigation';
import { useCallback, useState } from 'react';
import { i18n } from './i18n';
import { Provider, useSelector } from 'react-redux';
import appStore from './store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { OnboardingNavigation } from './screen/onboarding/navigation';

SplashScreen.preventAutoHideAsync();

export function App() {
  const [fontsLoaded] = useFonts({
    Lexend: require('../assets/Lexend.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={appStore}>
        <AppLoader />
      </Provider>
    </View>
  );
}

export function AppLoader() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const store = useSelector((state) => state);
  i18n.locale = store.settingsSliceReducer.locale;

  let Navigation: any = HomeNavigation;

  if (!isAuthenticated) {
    if (!store.statusSliceReducer.onboardingCompleted) {
      Navigation = OnboardingNavigation;
    } else {
      Navigation = AuthNavigation;
    }
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
