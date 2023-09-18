import React from 'react';
import { Await, useLoaderData, useOutlet } from 'react-router-dom';
import { AuthProvider, useAuth } from '@learn/ui';
import { authProviderAdapter } from '../adapter/auth_adapter';
import { TextProgress } from './TextProgress';

export function InitializationLayout() {
  const outlet = useOutlet();
  const { initializationLoader } = useLoaderData();

  return (
    <React.Suspense fallback={<TextProgress />}>
      <Await
        resolve={initializationLoader}
        children={(token) => (
          <AuthProvider adapter={authProviderAdapter} token={token}>
            {outlet}
          </AuthProvider>
        )}
      />
    </React.Suspense>
  );
}
