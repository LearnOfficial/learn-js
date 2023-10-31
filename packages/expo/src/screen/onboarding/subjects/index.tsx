import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { OnboardingLayout } from '../layout';

export function OnboardingSubjects({ route, navigation }) {
  return (
    <OnboardingLayout navigation={navigation} route={route}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text t="onboarding.subjects.title" />
      </View>
    </OnboardingLayout>
  );
}
