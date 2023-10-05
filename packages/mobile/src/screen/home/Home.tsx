import {View} from 'react-native';
import {LearnIconSVG, HouseIconSVG, SubjectItem} from '@learn/ui';
import {PlusIconSVG} from '@learn/ui';
import {XIconSVG} from '@learn/ui';

export function Home() {
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
    </View>
  );
}
