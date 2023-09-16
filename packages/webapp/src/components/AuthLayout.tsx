import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function AuthLayout() {
  const { token } = useAuth();
  if (token != '') {
    return <Navigate to="/" />;
  }
  return <Navigate to="/login" />;
}
