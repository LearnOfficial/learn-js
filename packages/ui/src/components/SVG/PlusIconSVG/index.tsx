import { Color } from '@shopify/react-native-skia';
import { Suspense, lazy } from 'react';

export type PlusIconSVGProps = {
  size: number;
  color: Color;
};

export function PlusIconSVG(props: PlusIconSVGProps) {
  const PlusIconSVG = lazy(async () => {
    return await import('./PlusIconSVGLazy');
  });

  return (
    <Suspense>
      <PlusIconSVG props={props} />
    </Suspense>
  );
}
