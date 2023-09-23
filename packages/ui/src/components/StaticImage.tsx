import { View, Image, StyleProp, ViewStyle } from 'react-native';
import { IMAGES } from '../assets';

export type LearnLogoProps = {
  size: number;
  image: keyof typeof IMAGES;
  style?: StyleProp<ViewStyle>;
};

const aspectRatio = 920 / 433;

export function StaticImage({ size, image, style }: LearnLogoProps) {
  const height = size / aspectRatio;
  return (
    <View
      style={[
        {
          maxWidth: size,
          maxHeight: height
        },
        style
      ]}
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
