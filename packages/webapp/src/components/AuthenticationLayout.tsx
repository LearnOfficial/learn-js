import { useOutlet } from 'react-router-dom';

export function AuthenticationLayout() {
  const outlet = useOutlet();
  return <>{outlet}</>;
}
