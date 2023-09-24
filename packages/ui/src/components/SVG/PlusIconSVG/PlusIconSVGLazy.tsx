import { Canvas, Group, Path, fitbox, rect } from '@shopify/react-native-skia';
import { PlusIconSVGProps } from './index';

export default function PlusIconSVG({ props }: { props: PlusIconSVGProps }) {
  const src = rect(0, 0, 24, 24);
  const dst = rect(0, 0, props.size, props.size);
  return (
    <Canvas style={{ width: props.size, height: props.size }}>
      <Group transform={fitbox('contain', src, dst)}>
        <Path
          color={props.color}
          fillType="evenOdd"
          path="M14.4 1.5c0-.8284-.6716-1.5-1.5-1.5h-1.8c-.8284 0-1.5.6716-1.5 1.5v6.6c0 .8284-.6716 1.5-1.5 1.5H1.5c-.8284 0-1.5.6716-1.5 1.5v1.8c0 .8284.6716 1.5 1.5 1.5h6.6c.8284 0 1.5.6716 1.5 1.5v6.6c0 .8284.6716 1.5 1.5 1.5h1.8c.8284 0 1.5-.6716 1.5-1.5v-6.6c0-.8284.6716-1.5 1.5-1.5h6.6c.8284 0 1.5-.6716 1.5-1.5v-1.8c0-.8284-.6716-1.5-1.5-1.5h-6.6c-.8284 0-1.5-.6716-1.5-1.5V1.5Z"
        />
      </Group>
    </Canvas>
  );
}
