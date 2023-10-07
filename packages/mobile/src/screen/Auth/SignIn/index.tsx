import {Button, useAuth} from '@learn/ui';
import {Text, View} from 'react-native';
import {setAuthenticationNavigation} from '../../../navigation';
export function SignIn() {
  const {logIn} = useAuth();
  return (
    <View>
      <Text>LogIn</Text>
      <Button
        title="Sign In"
        onPress={() => {
          logIn('token');
          setAuthenticationNavigation();
        }}
      />
    </View>
  );
}
