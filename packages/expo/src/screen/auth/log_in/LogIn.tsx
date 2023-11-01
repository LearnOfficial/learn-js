import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { Button } from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';
import { SecureTextInput } from '../../../components/SecureTextInput';
import { Link } from '../../../components/Link';
import { CheckBox } from '../../../components/CheckBox';
import { SCREENS } from '../..';
import LeftArrowIcon from '../../../static/icons/LeftArrowIcon';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../store/reducers/account';

export function LogIn({ route, navigation }) {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F9FBF4',
        paddingHorizontal: 20,
        paddingVertical: 60,
        gap: 30
      }}
    >
      <View>
        <Link
          onPress={() => {
            navigation.navigate(SCREENS.AUTH.ROOT);
          }}
        >
          <LeftArrowIcon width={22} height={20} color="#1E1E1E" />
        </Link>
      </View>

      <View>
        <Text
          t="auth.logIn.header.title"
          style={{ fontWeight: 'bold', fontSize: 24 }}
        />
        <Text t="auth.logIn.header.description" />
      </View>

      <View style={{ gap: 20 }}>
        <TextInput placeholderT="auth.username" />
        <SecureTextInput placeholderT="auth.password" />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CheckBox>
            <Text t="auth.logIn.rememberMe" />
          </CheckBox>
          <Link>
            <Text t="auth.logIn.forgotPassword" />
          </Link>
        </View>

        <Button
          style={{ backgroundColor: '#1E1E1E' }}
          styleText={{ color: '#F9FBF4' }}
          t="auth.logIn.title"
          onPress={() => {
            dispatch(setToken('token'));
          }}
        />

        <Link
          onPress={() => {
            navigation.navigate(SCREENS.AUTH.SIGN_UP);
          }}
          style={{ flexDirection: 'row', gap: 10 }}
        >
          <Text t="auth.logIn.haveAccount" />
          <Text t="auth.signUp.title" style={{ fontWeight: 'bold' }} />
        </Link>
      </View>
    </View>
  );
}
