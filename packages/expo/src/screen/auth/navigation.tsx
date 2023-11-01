import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '..';
import { LogIn } from './log_in/LogIn';
import { SignUp } from './sign_up/SignUp';
import { Welcome } from './welcome';

const AuthStackNavigation = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <AuthStackNavigation.Navigator
      initialRouteName={SCREENS.AUTH.ROOT}
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStackNavigation.Screen
        name={SCREENS.AUTH.WELCOME}
        component={Welcome}
      />

      <AuthStackNavigation.Screen
        name={SCREENS.AUTH.LOG_IN}
        component={LogIn}
      />
      <AuthStackNavigation.Screen
        name={SCREENS.AUTH.SIGN_UP}
        component={SignUp}
      />
    </AuthStackNavigation.Navigator>
  );
}
