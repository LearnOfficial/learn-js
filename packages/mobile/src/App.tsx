import {Text, View} from 'react-native';
import {Button, LearnLogo} from '@learn/ui';

export function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LearnLogo size={200} />
      <Button title="Hello world" />
    </View>
  );
}
