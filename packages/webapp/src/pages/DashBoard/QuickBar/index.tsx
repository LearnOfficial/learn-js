import { StaticImage } from '@learn/ui';
import { View } from 'react-native';

export function QuickBar() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          width: 50,
          maxHeight: 50,
          justifyContent: 'center',
          borderRadius: 20
        }}
      >
        <StaticImage size={50} image="HouseIcon" />
      </View>
      <StaticImage size={90} image="FemaleProfileImage" />
    </>
  );
}
