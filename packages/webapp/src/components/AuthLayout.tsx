import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function AuthLayout() {
  const outlet = useOutlet();
  const { token } = useAuth();
  if (token == '') {
    return <Navigate to="/login" />;
  }
  return <>{outlet}</>;
}
