import { HouseIconSVG, StaticImage } from '@learn/ui';
import { View, Image } from 'react-native';

export function QuickBar() {
  const uriUserImageProfile =
    'https://raw.githubusercontent.com/LearnOfficial/learn/main/packages/ui/public/assets/imgs/female-profile-image.png';
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
      <View
        style={{
          borderRadius: 40,
          backgroundColor: 'blue',
          width: 40,
          height: 40,
          borderColor: 'black',
          borderWidth: 1
        }}
      >
        <Image
          source={{
            uri: uriUserImageProfile
          }}
          style={{
            flex: 1
          }}
          resizeMode="contain"
        />
      </View>
    </>
  );
}
