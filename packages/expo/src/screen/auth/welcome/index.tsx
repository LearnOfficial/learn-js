import { View } from 'react-native';
import { Text } from '../../../components/Text';
import StudyOnCloudsArt from '../../../static/arts/StudyOnCloudsArt';
import { Button } from '../../../components/Button';
import { SCREENS } from '../..';

export function Welcome({ route, navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F9FBF4', padding: 40 }}>
      <View
        style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <StudyOnCloudsArt width={240} height={240} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text
          t="auth.welcome.title"
          style={{ fontSize: 24, fontWeight: 'bold' }}
        />
        <Text t="auth.welcome.description" />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', gap: 20 }}>
        <Button
          style={{ backgroundColor: '#1E1E1E', padding: 15 }}
          styleText={{ color: '#F9FBF4', fontWeight: 'bold' }}
          onPress={() => {
            navigation.navigate(SCREENS.AUTH.LOG_IN);
          }}
          t="auth.logIn.title"
        />
        <Button
          style={{ padding: 15 }}
          styleText={{ fontWeight: 'bold' }}
          onPress={() => {
            navigation.navigate(SCREENS.AUTH.SIGN_UP);
          }}
          t="auth.signUp.title"
        />
      </View>
    </View>
  );
}
