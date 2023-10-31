import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '..';
import { LogIn } from './log_in/LogIn';
import { SignUp } from './sign_up/SignUp';

const AuthStackNavigation = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <AuthStackNavigation.Navigator initialRouteName={SCREENS.AUTH.ROOT}>
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
