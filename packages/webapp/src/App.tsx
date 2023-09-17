import { ApolloClient } from '@learn/ui';
import { AppRouter } from './AppRouter';
import './App.css';

export function App() {
  return (
    <ApolloClient>
      <AppRouter />
    </ApolloClient>
  );
}
