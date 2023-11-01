import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/Text';
import MenuIcon from '../../static/icons/MenuIcon';

export function HomeHeader({ navigation }) {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: 'row'
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Image
          width={50}
          height={50}
          style={{
            borderRadius: 50
          }}
          source={{
            uri: 'https://github.com/LearnOfficial/learn/blob/main/packages/ui/public/assets/imgs/female-profile-image.png?raw=true'
          }}
        />
        <View>
          <Text>Antonia Casas</Text>
          <Text style={{ fontSize: 12 }}>Student</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <MenuIcon width={30} height={30} color="#1E1E1E" />
      </TouchableOpacity>
    </View>
  );
}
