import { View, Image, Platform } from 'react-native';
import { IMAGES } from '../assets';

export type LearnLogoProps = {
  size: number;
};

const aspectRatio = 920 / 433;

export function LearnLogo({ size }: LearnLogoProps) {
  const height = size / aspectRatio;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: size,
        maxHeight: height
      }}
    >
      <Image
        style={{
          flex: 1,
          width: size,
          height: height
        }}
        resizeMode="contain"
        source={IMAGES.logo}
      />
    </View>
  );
}
