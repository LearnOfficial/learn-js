import {View} from 'react-native';
import {
  LearnIconSVG,
  HouseIconSVG,
  SubjectItem,
  useAuth,
  Button,
} from '@learn/ui';
import {PlusIconSVG} from '@learn/ui';
import {XIconSVG} from '@learn/ui';
import {setAuthenticationNavigation} from '../../navigation';

export function Home() {
  const {logOut} = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LearnIconSVG size={60} pageColor="black" lineColor={'white'} />
      <HouseIconSVG size={48} color={'black'} />
      <PlusIconSVG size={48} color="black" />
      <XIconSVG size={30} color="black" />
      <SubjectItem
        index={0}
        title={'Hello'}
        onPress={() => {}}
        backgroundColor="white"
      />
      <Button
        title="Log out"
        onPress={() => {
          logOut();
          setAuthenticationNavigation();
        }}
      />
    </View>
  );
}
