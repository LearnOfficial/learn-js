import { Color } from '@shopify/react-native-skia';
import { Suspense, lazy } from 'react';

export type XIconSVGProps = {
  size: number;
  color: Color;
};

export function XIconSVG(props: XIconSVGProps) {
  const XIconSVG = lazy(async () => {
    return await import('./XIconSVGLazy');
  });

  return (
    <Suspense>
      <XIconSVG props={props} />
    </Suspense>
  );
}
