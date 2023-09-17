import {
  Button,
  SIGN_UP_MUTATION,
  SecureTextInput,
  StaticImage,
  TextInput,
  parseSignUpOptions,
  useAuth
} from '@learn/ui';
import { useEffect, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

export function SignUp() {
  const { signUp } = useAuth();
  const username = useRef<string>('');
  const retryPassword = useRef<string>('');
  const email = useRef<string>('');
  const password = useRef<string>('');

  const [loadSignUp, { loading, data, error }] = useMutation(SIGN_UP_MUTATION);

  useEffect(() => {
    if (data) {
      signUp(data?.signUp?.token);
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
              Become a member
            </Text>
            <Text
              style={{ color: '#70687E', fontSize: 16, fontFamily: 'lexend' }}
            >
              We create a dedicated environment for you...
            </Text>
          </View>
          <View style={{ gap: 10 }}>
            <TextInput
              style={{ fontFamily: 'lexend' }}
              placeholder="Username"
              inputRef={username}
            />
            <TextInput
              style={{ fontFamily: 'lexend' }}
              placeholder="Email"
              inputRef={email}
            />

            <SecureTextInput
              style={{ fontFamily: 'lexend' }}
              placeholder="Password"
              inputRef={password}
            />

            <SecureTextInput
              style={{ fontFamily: 'lexend' }}
              placeholder="Retry password"
              inputRef={retryPassword}
            />

            <Button
              title="Sign Up"
              onPress={() => {
                loadSignUp(
                  parseSignUpOptions({
                    username: username.current,
                    email: email.current,
                    password: password.current
                  })
                );
              }}
            />
            <Text style={{ color: '#70687E', fontFamily: 'lexend' }}>
              I’m already a member?{' '}
              <Link
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: 'lexend',
                  textDecoration: 'none'
                }}
                to="/login"
              >
                Log In
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
