import { Color } from '@shopify/react-native-skia';
import { Suspense, lazy } from 'react';

export type LearnIconSVGProps = {
  size: number;
  pageColor: Color;
  lineColor: Color;
};

export function LearnIconSVG(props: LearnIconSVGProps) {
  const LearnIconSVG = lazy(async () => {
    return await import('./LearnIconSVGLazy');
  });

  return (
    <Suspense>
      <LearnIconSVG props={props} />
    </Suspense>
  );
}
