import { StaticImage } from '@learn/ui';
import { View } from 'react-native';

export function StarterLoader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <StaticImage size={150} image="LearnLogo" />
    </View>
  );
}
