import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';
import { StaticImage } from '@learn/ui';
import { ReactNode } from 'react';
import './App.css';

type NavProps = {
  children: ReactNode;
};

function Nav({ children }: NavProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        borderRadius: 25,
        borderWidth: 2,
        gap: 20
      }}
    >
      {children}
    </View>
  );
}

type NavItemProps = {
  active?: boolean;
  onPress?: () => void;
  title: string;
};

function NavItem({ title, onPress, active }: NavItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          backgroundColor: active ? 'black' : 'white',
          color: active ? 'white' : '#70687E',
          fontWeight: 'bold',
          padding: 8,
          borderRadius: 100,
          fontSize: 12,
          fontFamily: 'lexend'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function App() {
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: width >= 320 ? 40 : 100,
          gap: 100
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxHeight: 50,
            width: '100%'
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <StaticImage size={100} image="LearnLogo" />
          </TouchableOpacity>
          <Nav>
            <NavItem title="Home" active />
          </Nav>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://github.com/LearnOfficial/learn');
            }}
          >
            <StaticImage size={50} image="GitHubIcon" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: width > 720 ? 50 : 18,
              textAlign: 'center',
              fontFamily: 'lexend',
              fontWeight: '300'
            }}
          >
            Learn is a <Text style={{ fontWeight: 'bold' }}>free</Text> and{' '}
            <Text style={{ fontWeight: 'bold' }}>open source</Text> virtual
            learning environment focused on{' '}
            <Text style={{ fontWeight: 'bold' }}>self-taught.</Text>
          </Text>
        </View>

        <StaticImage size={width} image="LearnDesktopApp"></StaticImage>
        <Text
          style={{
            fontFamily: 'lexend',
            fontWeight: '300',
            textAlign: 'center'
          }}
        >
          © 2023 LearnOfficial
        </Text>
      </View>
    </ScrollView>
  );
}
