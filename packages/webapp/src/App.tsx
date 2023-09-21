import { ApolloClient } from '@learn/ui';
import { AppRouter } from './AppRouter';
import './App.css';

export default function App() {
  return (
    <ApolloClient>
      <AppRouter />
    </ApolloClient>
  );
}
