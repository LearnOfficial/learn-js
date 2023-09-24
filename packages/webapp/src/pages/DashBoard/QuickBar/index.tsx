import { HouseIconSVG, StaticImage } from '@learn/ui';
import { View } from 'react-native';

export function QuickBar() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          width: 40,
          maxHeight: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
        }}
      >
        <HouseIconSVG size={24} color={'#EEEEE3'} />
      </View>
      <StaticImage size={90} image="FemaleProfileImage" />
    </>
  );
}
