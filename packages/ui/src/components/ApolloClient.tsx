import {
  ApolloClient as ApolloClientNative,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import { ReactNode } from 'react';

const client = new ApolloClientNative({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

type ApolloClientProps = {
  children: ReactNode;
};

export default function ApolloClient({ children }: ApolloClientProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
