import { Canvas, Group, Path, fitbox, rect } from '@shopify/react-native-skia';
import { LearnIconSVGProps } from './index';

export default function LearnIconSVG({ props }: { props: LearnIconSVGProps }) {
  const src = rect(0, 0, 200, 272);
  const dst = rect(0, 0, props.size, props.size);
  return (
    <Canvas style={{ width: props.size, height: props.size }}>
      <Group transform={fitbox('contain', src, dst)}>
        <Path
          color={props.pageColor}
          path="M9.531 18.653C24.693 8.032 88.763 0 104.629 0c47.343 0 55.413 8.735 69.438 22.63 14.026 13.894 25.66 64.663 25.66 110.603 0 27.979 4.906 77.461-26.897 106.587-21.024 19.254-68.201 26.646-68.201 26.646s-79.938 10.621-95.1 0c-21.44-15.02 0-81.202 0-133.233 0-44.746-21.44-99.56.002-114.58Z"
        />

        <Path
          strokeWidth={18}
          color={props.lineColor}
          strokeCap="round"
          style="stroke"
          stroke-linecap="round"
          path="M58.596 158.519c.112-11.982 3.577-35.228 16.545-32.357 16.21 3.588 30.771 25.802 41.184 17.629 8.33-6.539 17.534-32.794 21.094-45.103"
        />
      </Group>
    </Canvas>
  );
}
