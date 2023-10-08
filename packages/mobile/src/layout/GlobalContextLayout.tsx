import {ApolloClient, AuthProvider} from '@learn/ui';
import {ReactNode} from 'react';
import {AdapterStorage} from '../adapter/AdapterStorage';
import {authProviderAdapter} from '../adapter/authProviderAdapter';

export type AuthLayoutProps = {
  children: ReactNode;
};

export function GlobalContextLayout({children}: AuthLayoutProps) {
  const token = AdapterStorage.getItem('token');

  return (
    <ApolloClient>
      <AuthProvider adapter={authProviderAdapter} token={token}>
        {children}
      </AuthProvider>
    </ApolloClient>
  );
}
