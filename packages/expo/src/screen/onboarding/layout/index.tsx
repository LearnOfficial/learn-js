import { Pressable, View, TouchableOpacity } from 'react-native';
import { SCREENS } from '../..';
import { ReactNode } from 'react';
import RightArrowIcon from '../../../static/icons/RightArrowIcon';
import LeftArrowIcon from '../../../static/icons/LeftArrowIcon';
import { Button } from '../../../components/Button';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from '../../../store/reducers/status';

export type OnboardingLayoutProps = {
  // TODO: Add typescript react native navigation.
  navigation: any;
  route: any;
  children: ReactNode;
};

export function OnboardingLayout({
  route,
  navigation,
  children
}: OnboardingLayoutProps) {
  const screensRoutes = Object.values(SCREENS.ONBOARDING).slice(1);
  const curIndex = screensRoutes.findIndex((r) => r == route.name);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: '#F9FBF4' }}>
      <View style={{ flex: 6, justifyContent: 'center' }}>{children}</View>
      <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 40 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {route.name != SCREENS.ONBOARDING.ROOT ? (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => {
                navigation.navigate(screensRoutes[curIndex - 1]);
              }}
            >
              <LeftArrowIcon width={22} height={20} color="#D9D9D9" />
            </TouchableOpacity>
          ) : null}
        </View>

        <View
          style={{
            flex: 1,
            gap: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {screensRoutes.map((screen, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  navigation.navigate(screen);
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor:
                      screen === route.name ? '#1F201E' : '#E2E4DB',
                    borderRadius: 8
                  }}
                />
              </Pressable>
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            alignItems: 'center'
          }}
        >
          {screensRoutes[screensRoutes.length - 1] == route.name ? (
            <Button
              t="onboarding.completedButton"
              onPress={() => {
                dispatch(setOnboardingCompleted({ onboardingCompleted: true }));
              }}
            />
          ) : (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => {
                navigation.navigate(screensRoutes[curIndex + 1]);
              }}
            >
              <RightArrowIcon width={22} height={20} color="#1E1E1E" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
