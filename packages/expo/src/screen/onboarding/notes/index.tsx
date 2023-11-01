import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { OnboardingLayout } from '../layout';
import LearnBooksArt from '../../../static/arts/LearnBooksArt';

export function OnboardingNotes({ route, navigation }) {
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
        <LearnBooksArt width={240} height={150} />
        <View style={{ width: '100%', gap: 20 }}>
          <Text
            t="onboarding.notes.title"
            style={{ fontSize: 28, fontWeight: '500' }}
          />
          <Text
            t="onboarding.notes.description"
            style={{ fontSize: 14, fontWeight: '100' }}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
}
