import {View} from 'react-native';
import {Button, StaticImage} from '@learn/ui';

export function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StaticImage size={200} image="LearnLogo" />
      <Button title="Hello world" />
    </View>
  );
}
