import React from 'react';
import { Await, useOutlet } from 'react-router-dom';
import { localStorageAdapter } from '../adapter/local_storage_adapter';
import { AuthProvider } from '@learn/ui';
import { authProviderAdapter } from '../adapter/auth_adapter';
import { TextProgress } from './TextProgress';

async function checkToken() {
  return await localStorageAdapter.getItem('token');
}

export function InitializationLayout() {
  const outlet = useOutlet();
  return (
    <React.Suspense fallback={<TextProgress />}>
      <Await
        resolve={checkToken}
        children={(token) => (
          <AuthProvider adapter={authProviderAdapter} token={token}>
            {outlet}
          </AuthProvider>
        )}
      />
    </React.Suspense>
  );
}
