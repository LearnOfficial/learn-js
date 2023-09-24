import { Color } from '@shopify/react-native-skia';
import { Suspense, lazy } from 'react';

export type HouseIconSVGProps = {
  size: number;
  color: Color;
};

export function HouseIconSVG(props: HouseIconSVGProps) {
  const HouseIconSVG = lazy(async () => {
    return await import('./HouseIconSVGLazy');
  });

  return (
    <Suspense>
      <HouseIconSVG props={props} />
    </Suspense>
  );
}
