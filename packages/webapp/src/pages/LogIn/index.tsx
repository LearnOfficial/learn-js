import { useLazyQuery } from '@apollo/client';
import {
  Button,
  LOGIN_QUERY,
  SecureTextInput,
  StaticImage,
  TextInput,
  parseLogInOptions,
  useAuth
} from '@learn/ui';
import { useEffect, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'react-router-dom';

export function LogIn() {
  const { logIn } = useAuth();
  const username = useRef<string>('');
  const password = useRef<string>('');

  const [loadLogIn, { data }] = useLazyQuery(LOGIN_QUERY);

  useEffect(() => {
    if (data) {
      logIn(data?.logIn?.token);
    }
  }, [data]);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 50
        }}
      >
        <View>
          <StaticImage size={100} image="LearnLogo" />
        </View>

        <View style={{ gap: 20 }}>
          <View style={{ gap: 0 }}>
            <Text
              style={{ fontSize: 47, fontFamily: 'lexend', fontWeight: 'bold' }}
            >
              Welcome back!
            </Text>
            <Text
              style={{ color: '#70687E', fontSize: 16, fontFamily: 'lexend' }}
            >
              We missed you...
            </Text>
          </View>
          <View style={{ gap: 10 }}>
            <TextInput
              style={{ fontFamily: 'lexend' }}
              placeholder="Username"
              inputRef={username}
            />
            <SecureTextInput
              style={{ fontFamily: 'lexend' }}
              placeholder="Password"
              inputRef={password}
            />
            <Button
              title="Log In"
              onPress={() => {
                loadLogIn(
                  parseLogInOptions({
                    username: username.current,
                    password: password.current
                  })
                );
              }}
            />
            <Text style={{ color: '#70687E', fontFamily: 'lexend' }}>
              Don't have an account?{' '}
              <Link
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: 'lexend',
                  textDecoration: 'none'
                }}
                to="/signup"
              >
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
