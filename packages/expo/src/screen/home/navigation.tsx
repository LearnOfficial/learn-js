import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './Home';
import { SCREENS } from '..';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Settings } from './settings/Settings';
import HouseIcon from '../../static/icons/HouseIcon';
import { Tasks } from './tasks/Tasks';
import BulletListIcon from '../../static/icons/BulletListIcon';
import { View } from 'react-native';
import { i18n } from '../../i18n';
import { HomeHeader } from './header';

const HomeDrawerNavigation = createDrawerNavigator();
const HomeBottomTabNavigator = createBottomTabNavigator();

export function HomeBottomTabNavigation() {
  return (
    <HomeBottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case SCREENS.HOME.HOME:
              return (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 4,
                    backgroundColor: focused ? '#1E1E1E' : ''
                  }}
                >
                  <HouseIcon
                    width={24}
                    height={24}
                    color={focused ? '#EEEEE3' : '#B8B8B8'}
                  />
                </View>
              );
            case SCREENS.HOME.TASKS:
              return (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 4,
                    backgroundColor: focused ? '#1E1E1E' : ''
                  }}
                >
                  <BulletListIcon
                    width={24}
                    height={24}
                    color={focused ? '#EEEEE3' : '#B8B8B8'}
                  />
                </View>
              );
          }
        },
        header: HomeHeader,
        tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          backgroundColor: '#EEEEE3'
        }
      })}
    >
      <HomeBottomTabNavigator.Screen
        name={SCREENS.HOME.HOME}
        component={Home}
        options={{ title: i18n.t('navigation.home') }}
      />
      <HomeBottomTabNavigator.Screen
        name={SCREENS.HOME.TASKS}
        component={Tasks}
        options={{ title: i18n.t('navigation.tasks') }}
      />
    </HomeBottomTabNavigator.Navigator>
  );
}

export function HomeNavigation() {
  return (
    <HomeDrawerNavigation.Navigator
      initialRouteName={SCREENS.HOME.ROOT}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right'
      }}
    >
      <HomeDrawerNavigation.Screen
        name={SCREENS.HOME.ROOT}
        component={HomeBottomTabNavigation}
        options={{ title: i18n.t('navigation.home') }}
      />
      <HomeBottomTabNavigator.Screen
        name={SCREENS.HOME.SETTINGS}
        component={Settings}
        options={{ title: i18n.t('navigation.settings') }}
      />
    </HomeDrawerNavigation.Navigator>
  );
}
