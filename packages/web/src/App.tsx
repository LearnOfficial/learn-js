import {
  Linking,
  ScrollView,
  Text,
  Pressable,
  View,
  useWindowDimensions,
  Image
} from 'react-native';
import { StaticImage } from '@learn/ui';
import './App.css';
import { Nav } from './components/Nav';
import { NavItem } from './components/Nav/NavItem';

export function App() {
  const inspiredBooks = [
    {
      title: 'Ultralearning',
      author: 'Scoot H. Young',
      cover:
        'https://m.media-amazon.com/images/I/81G9RTo7a3L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Learn like a pro',
      author: 'Barbara Oakley and Olav Schewe',
      cover:
        'https://m.media-amazon.com/images/I/81viMG6VEHL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      cover:
        'https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Tiny Habits',
      author: 'BJ FOGG, PhD',
      cover:
        'https://m.media-amazon.com/images/I/714QdOmbHDL._AC_UF1000,1000_QL80_.jpg'
    }
  ];
  const { width } = useWindowDimensions();
  return (
    <ScrollView>
      <View style={{ gap: 100 }}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: width >= 320 ? 40 : 100,
            paddingHorizontal: width >= 320 ? 30 : 100,
            gap: 100
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxHeight: 50,
              width: '100%'
            }}
          >
            <Pressable onPress={() => {}}>
              <StaticImage size={100} image="LearnLogo" />
            </Pressable>
            <Nav>
              <NavItem title="Home" active />
            </Nav>
            <Pressable
              onPress={() => {
                Linking.openURL('https://github.com/LearnOfficial/learn');
              }}
            >
              <StaticImage size={50} image="GitHubIcon" />
            </Pressable>
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
                fontSize: width > 720 ? 50 : 28,
                textAlign: 'center',
                fontFamily: 'lexend',
                fontWeight: '300'
              }}
            >
              Learn is a <Text style={{ fontWeight: 'bold' }}>free</Text> and{' '}
              <Text style={{ fontWeight: 'bold' }}>open source</Text> virtual
              learning environment focused on{' '}
              <Text style={{ fontWeight: 'bold' }}>self-study.</Text>
            </Text>
          </View>

          <StaticImage size={width} image="LearnDesktopApp"></StaticImage>
        </View>

        <View style={{ gap: 50 }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'lexend',
                fontSize: width > 720 ? 48 : 28,
                color: '#929292',
                fontWeight: '600'
              }}
            >
              Inspired by
            </Text>

            <Text
              style={{
                fontFamily: 'lexend',
                color: '#929292',
                fontWeight: '200',
                fontSize: width > 720 ? 20 : 16,
                textAlign: 'center'
              }}
            >
              Some productivity and management books
            </Text>
          </View>

          <View
            style={{
              gap: 20,
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 20
            }}
          >
            {inspiredBooks.map((book) => {
              return (
                <View style={{ width: 200, gap: 10, alignItems: 'center' }}>
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'lexend',
                        fontSize: 20,
                        fontWeight: '600'
                      }}
                    >
                      {book.title}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'lexend',
                        fontSize: 12,
                        fontWeight: '200'
                      }}
                    >
                      {book.author}
                    </Text>
                  </View>

                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 6
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 8.3,
                      borderRadius: 10
                    }}
                  >
                    <Image
                      style={{
                        width: 120,
                        height: 200,
                        borderRadius: 10,
                        borderWidth: 2
                      }}
                      resizeMode="cover"
                      source={{ uri: book.cover }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'black',
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: 'white',
              fontFamily: 'lexend',
              fontWeight: '400',
              textAlign: 'center'
            }}
          >
            © 2023 LearnOfficial
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
