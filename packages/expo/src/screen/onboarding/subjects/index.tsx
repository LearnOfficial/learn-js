import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { OnboardingLayout } from '../layout';
import LearnBooks from '../../../static/arts/LearnBooksArt';
import SubjectItemsArt from '../../../static/arts/SubjectItemsArt';

export function OnboardingSubjects({ route, navigation }) {
  return (
    <OnboardingLayout navigation={navigation} route={route}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 40,
          gap: 100
        }}
      >
        <SubjectItemsArt width={240} height={150} />
        <View style={{ width: '100%', gap: 20 }}>
          <Text
            t="onboarding.subjects.title"
            style={{ fontSize: 28, fontWeight: '500' }}
          />
          <Text
            t="onboarding.subjects.description"
            style={{ fontSize: 14, fontWeight: '100' }}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
}
