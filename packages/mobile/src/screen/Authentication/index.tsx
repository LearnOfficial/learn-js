import {useAuth} from '@learn/ui';
import {setAuthStackNavigation, setHomeNavigation} from '../../navigation';

export function Authentication() {
  const {token} = useAuth();

  if (token === '') {
    setAuthStackNavigation();
  } else {
    setHomeNavigation();
  }

  return <></>;
}
