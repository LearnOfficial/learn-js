import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Link } from '../../../components/Link';
import { SecureTextInput } from '../../../components/SecureTextInput';
import { TextInput } from '../../../components/TextInput';
import { CheckBox } from '../../../components/CheckBox';
import { Button } from '../../../components/Button';
import { setToken } from '../../../store/reducers/account';
import { SCREENS } from '../..';
import { Text } from '../../../components/Text';
import LeftArrowIcon from '../../../static/icons/LeftArrowIcon';

export function SignUp({ route, navigation }) {
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
          t="auth.signUp.header.title"
          style={{ fontWeight: 'bold', fontSize: 24 }}
        />
        <Text t="auth.signUp.header.description" />
      </View>

      <View style={{ gap: 20 }}>
        <TextInput placeholderT="auth.username" />
        <TextInput placeholderT="auth.email" />
        <SecureTextInput placeholderT="auth.password" />
        <SecureTextInput placeholderT="auth.retryPassword" />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CheckBox style={{ flex: 1 }}>
            <Text style={{ flexWrap: 'wrap' }}>
              <Text t="auth.signUp.termsOfServiceStatement" />{' '}
              <Text
                style={{ fontWeight: 'bold' }}
                t="auth.signUp.termOfService"
              />
            </Text>
          </CheckBox>
        </View>

        <Button
          style={{ backgroundColor: '#1E1E1E' }}
          styleText={{ color: '#F9FBF4' }}
          t="auth.signUp.title"
          onPress={() => {
            dispatch(setToken('token'));
          }}
        />

        <Link
          onPress={() => {
            navigation.navigate(SCREENS.AUTH.LOG_IN);
          }}
          style={{ flexDirection: 'row', gap: 10 }}
        >
          <Text t="auth.signUp.areYouMember" />
          <Text t="auth.logIn.title" style={{ fontWeight: 'bold' }} />
        </Link>
      </View>
    </View>
  );
}
