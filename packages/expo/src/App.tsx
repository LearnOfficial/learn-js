import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './screen/auth/navigation';
import { HomeNavigation } from './screen/home/navigation';
import { useState } from 'react';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
