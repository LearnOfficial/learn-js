import { Pressable, View } from 'react-native';
import { SCREENS } from '../..';
import { ReactNode } from 'react';
import RightArrowIcon from '../../../static/icons/RightArrowIcon';
import LeftArrowIcon from '../../../static/icons/LeftArrowIcon';

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
  return (
    <View style={{ flex: 1, backgroundColor: '#F9FBF4' }}>
      <View style={{ flex: 6, justifyContent: 'center' }}>{children}</View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {route.name != SCREENS.ONBOARDING.ROOT ? (
          <View
            style={{
              flex: 1,
              paddingLeft: 40,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <LeftArrowIcon width={22} height={20} color="#D9D9D9" />
          </View>
        ) : null}

        <View
          style={{
            flex: 1,
            gap: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {Object.values(SCREENS.ONBOARDING)
            .slice(1)
            .map((screen) => {
              return (
                <Pressable
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
            paddingLeft: 40,
            flexDirection: 'row-reverse',
            alignItems: 'center'
          }}
        >
          <RightArrowIcon width={22} height={20} color="#1E1E1E" />
        </View>
      </View>
    </View>
  );
}
