import { HouseIconSVG, StaticImage } from '@learn/ui';
import { View, Image } from 'react-native';

export function QuickBar() {
  const uriUserImageProfile =
    'https://github.com/LearnOfficial/learn/blob/main/packages/ui/public/assets/imgs/female-profile-image.png?raw=true';
  const userImageProfileSize = 40;
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
          width: userImageProfileSize,
          height: userImageProfileSize
        }}
      >
        <Image
          source={{
            uri: uriUserImageProfile
          }}
          style={{
            flex: 1,
            borderRadius: userImageProfileSize,
            borderColor: 'black',
            borderWidth: 1
          }}
          resizeMode="cover"
        />
      </View>
    </>
  );
}
