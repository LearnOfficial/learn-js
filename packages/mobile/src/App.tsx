import {View} from 'react-native';
import {Button, LearnIconSVG, StaticImage} from '@learn/ui';

export function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LearnIconSVG size={200} pageColor="black" lineColor={'white'} />
    </View>
  );
}
