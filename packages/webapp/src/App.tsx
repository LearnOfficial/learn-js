import { AuthProvider } from '@learn/ui';
import { AppRouter } from './AppRouter';
import { authProviderAdapter } from './adapter/auth_adapter';
import './App.css';

export function App() {
  return (
    <AuthProvider adapter={authProviderAdapter}>
      <AppRouter />
    </AuthProvider>
  );
}
