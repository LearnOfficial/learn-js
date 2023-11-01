import { Button, View } from 'react-native';
import { setLocale } from '../../store/reducers/settings';
import { useDispatch } from 'react-redux';
import { countryFlagEmoji } from '../../utils/countryFlagEmoji';
import { Text } from '../../components/Text';
import { setToken } from '../../store/reducers/account';

export function Home() {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}
    >
      <Text t="home.greetingMessage" />
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Button
          title={`en ${countryFlagEmoji('us')}`}
          onPress={() => {
            dispatch(setLocale('en'));
          }}
        />
        <Button
          title={`es ${countryFlagEmoji('es')}`}
          onPress={() => {
            dispatch(setLocale('es'));
          }}
        />
      </View>
      <View>
        <Button
          title="Log out"
          onPress={() => {
            dispatch(setToken(''));
          }}
        />
      </View>
    </View>
  );
}
