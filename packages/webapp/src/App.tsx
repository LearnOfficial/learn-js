import { AuthProvider } from './hooks/auth';
import { AppRouter } from './AppRouter';

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
