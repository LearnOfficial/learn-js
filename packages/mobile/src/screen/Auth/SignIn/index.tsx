import {
  Button,
  LOGIN_QUERY,
  parseLogInOptions,
  SecureTextInput,
  TextInput,
  useAuth,
} from '@learn/ui';
import {useEffect, useRef} from 'react';
import {Text, View, Pressable} from 'react-native';
import {setAuthenticationNavigation} from '../../../navigation';
import {useLazyQuery} from '@apollo/client';

export function SignIn() {
  const {logIn} = useAuth();
  const [loadLogIn, {data}] = useLazyQuery(LOGIN_QUERY);

  useEffect(() => {
    if (data) {
      logIn(data?.logIn?.token);
      setAuthenticationNavigation();
    }
  }, [data]);

  const usernameRef = useRef<string>('');
  const passwordRef = useRef<string>('');

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 50,
      }}>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 30, fontWeight: '800'}}>Welcome Back</Text>
        <Text>We missed you...</Text>
      </View>

      <View style={{width: '100%', gap: 20}}>
        <TextInput inputRef={usernameRef} placeholder="username" />
        <SecureTextInput inputRef={passwordRef} placeholder="password" />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Remember me</Text>
          <Text>Forgot password?</Text>
        </View>
        <Button
          style={{
            padding: 15,
          }}
          title="Sign In"
          onPress={() => {
            if (usernameRef.current === '' && passwordRef.current === '') {
              return;
            }

            loadLogIn({
              variables: parseLogInOptions({
                username: usernameRef.current,
                password: passwordRef.current,
              }).variables,
            });
          }}
        />
      </View>

      <View style={{width: '100%'}}>
        <Text>
          Don’t have an account?{' '}
          <Pressable>
            <Text style={{fontWeight: '900'}}>Sign Up</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
}
