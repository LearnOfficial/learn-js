import { Text, View } from 'react-native';
import { i18n } from '../../i18n';

export function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{i18n.t('home.greetingMessage')}</Text>
    </View>
  );
}
