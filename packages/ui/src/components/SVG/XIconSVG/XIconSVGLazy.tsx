import { Canvas, Group, Path, fitbox, rect } from '@shopify/react-native-skia';
import { XIconSVGProps } from './index';

export default function XIconSVG({ props }: { props: XIconSVGProps }) {
  const src = rect(0, 0, 20, 20);
  const dst = rect(0, 0, props.size, props.size);
  return (
    <Canvas style={{ width: props.size, height: props.size }}>
      <Group transform={fitbox('contain', src, dst)}>
        <Path
          color={props.color}
          fillType="evenOdd"
          path="M19.1217 4.243c.5858-.5858.5858-1.5355 0-2.1213L17.8489.8489c-.5858-.5858-1.5355-.5858-2.1213 0l-4.6669 4.6669c-.5858.5858-1.5356.5858-2.1214 0L4.2724.8488c-.5857-.5857-1.5355-.5857-2.1213 0L.8783 2.1218c-.5858.5858-.5858 1.5355 0 2.1213l4.667 4.6669c.5857.5858.5857 1.5355 0 2.1213l-4.667 4.6669c-.5858.5858-.5858 1.5356 0 2.1213l1.2728 1.2728c.5858.5858 1.5356.5858 2.1213 0l4.667-4.6669c.5857-.5858 1.5355-.5858 2.1213 0l4.6669 4.6669c.5858.5858 1.5355.5858 2.1213 0l1.2728-1.2728c.5858-.5857.5858-1.5355 0-2.1213l-4.6669-4.6669c-.5858-.5858-.5858-1.5355 0-2.1213l4.6669-4.6669Z"
        />
      </Group>
    </Canvas>
  );
}
