import { Canvas, Group, Path, fitbox, rect } from '@shopify/react-native-skia';
import { HouseIconSVGProps } from './index';

export default function LearnIconSVG({ props }: { props: HouseIconSVGProps }) {
  const src = rect(0, 0, 24, 24);
  const dst = rect(0, 0, props.size, props.size);
  return (
    <Canvas style={{ width: props.size, height: props.size }}>
      <Group transform={fitbox('contain', src, dst)}>
        <Path
          color={props.color}
          fill-rule="evenodd"
          path="M10.2.636A2.556 2.556 0 0 1 12 .003a2.556 2.556 0 0 1 1.8.633l9.263 8.047a2.764 2.764 0 0 1 .332 3.8 2.544 2.544 0 0 1-3.672.321l-.007-.007V19a5 5 0 0 1-5 5h-.195v-5.172a2 2 0 0 0-2-2h-1.195a2 2 0 0 0-2 2V24H9.13a5 5 0 0 1-5-5v-6.078c-1.1.828-2.643.65-3.525-.439a2.764 2.764 0 0 1 .332-3.8L10.2.636Z"
          clip-rule="evenodd"
        />
      </Group>
    </Canvas>
  );
}
