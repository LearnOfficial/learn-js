// @ts-ignore
import CanvasKitInit from 'canvaskit-wasm/bin/canvaskit.js';
// @ts-ignore
import CanvasKitWasm from 'canvaskit-wasm/bin/canvaskit.wasm?url';
// @ts-ignore
import { Canvas, CanvasKit } from 'canvaskit-wasm';
import { Suspense, lazy } from 'react';
import { StarterLoader } from './starter/StarterLoader';

export function AppStarter() {
  const Inner = lazy(async () => {
    const CanvasKit = await CanvasKitInit({ locateFile: () => CanvasKitWasm });
    //@ts-ignore
    global.CanvasKit = CanvasKit;
    //@ts-ignore
    return import('./App');
  });

  return (
    <Suspense fallback={<StarterLoader />}>
      <Inner />
    </Suspense>
  );
}
