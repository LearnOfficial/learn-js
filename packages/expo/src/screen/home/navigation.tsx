import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREENS } from '..';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Settings } from './settings/Settings';
import HouseIcon from '../../static/icons/HouseIcon';
import BulletListIcon from '../../static/icons/BulletListIcon';
import { View } from 'react-native';
import { i18n } from '../../i18n';
import { HomeHeader } from './header';
import { NoteBoard } from './note_board/NoteBoard';
import { TaskBoard } from './task_board/TaskBoard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NoteEditor } from './note_board/note_editor/NoteEditor';

const HomeDrawerNavigation = createDrawerNavigator();
const HomeBottomTabNavigator = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

export function HomeStackNavigation() {
  return (
    <HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Group>
        <HomeStackNavigator.Screen
          name={SCREENS.HOME.ROOT_TAB}
          component={HomeBottomTabNavigation}
        />
      </HomeStackNavigator.Group>
      <HomeStackNavigator.Group screenOptions={{ presentation: 'card' }}>
        <HomeStackNavigator.Screen
          name={SCREENS.HOME.NOTE_EDITOR}
          component={NoteEditor}
        />
      </HomeStackNavigator.Group>
    </HomeStackNavigator.Navigator>
  );
}

export function HomeBottomTabNavigation() {
  return (
    <HomeBottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case SCREENS.HOME.NOTE_BOARD:
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
          backgroundColor: '#EEEEE3'
        }
      })}
    >
      <HomeBottomTabNavigator.Screen
        name={SCREENS.HOME.NOTE_BOARD}
        component={NoteBoard}
        options={{ title: i18n.t('navigation.home') }}
      />
      <HomeBottomTabNavigator.Screen
        name={SCREENS.HOME.TASKS}
        component={TaskBoard}
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
        component={HomeStackNavigation}
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
