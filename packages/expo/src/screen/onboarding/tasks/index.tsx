import { View } from 'react-native';
import { OnboardingLayout } from '../layout';
import { Text } from '../../../components/Text';

export function OnboardingTasks({ route, navigation }) {
  return (
    <OnboardingLayout navigation={navigation} route={route}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text t="onboarding.tasks.title" />
      </View>
    </OnboardingLayout>
  );
}
