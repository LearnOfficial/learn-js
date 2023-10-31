import { Pressable, View } from 'react-native';
import { SCREENS } from '../..';
import { ReactNode } from 'react';

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
    <View style={{ flex: 1 }}>
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
                    width: 20,
                    height: 20,
                    backgroundColor:
                      screen === route.name ? '#1F201E' : '#E2E4DB',
                    borderRadius: 8
                  }}
                />
              </Pressable>
            );
          })}
      </View>
      <View style={{ flex: 6 }}>{children}</View>
    </View>
  );
}
