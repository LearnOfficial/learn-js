import { View, Image } from 'react-native';
import { IMAGES } from '../assets';

export type LearnLogoProps = {
  size: number;
  image: keyof typeof IMAGES;
};

const aspectRatio = 920 / 433;

export default function StaticImage({ size, image }: LearnLogoProps) {
  const height = size / aspectRatio;
  return (
    <View
      style={{
        maxWidth: size,
        maxHeight: height
      }}
    >
      <Image
        style={{
          width: size,
          height: height
        }}
        resizeMode="contain"
        source={IMAGES[image]}
      />
    </View>
  );
}
