import { useAuth } from '@learn/ui';
import { Navigate, useOutlet } from 'react-router-dom';

export function AuthLayout() {
  const outlet = useOutlet();
  const { token } = useAuth();

  console.log(token);

  if (token == '') {
    return <Navigate to="/login" />;
  }
  return <>{outlet}</>;
}
