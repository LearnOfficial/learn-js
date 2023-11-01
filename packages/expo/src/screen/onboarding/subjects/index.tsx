import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { OnboardingLayout } from '../layout';
import LearnBooks from '../../../static/LearnBooks';

export function OnboardingSubjects({ route, navigation }) {
  return (
    <OnboardingLayout navigation={navigation} route={route}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <LearnBooks />
        <Text t="onboarding.subjects.title" style={{}} />
      </View>
    </OnboardingLayout>
  );
}
