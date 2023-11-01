import { View } from 'react-native';
import { OnboardingLayout } from '../layout';
import { Text } from '../../../components/Text';
import TaskItemsArt from '../../../static/arts/TaskItemsArt';

export function OnboardingTasks({ route, navigation }) {
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
        <TaskItemsArt width={240} height={150} />
        <View style={{ width: '100%', gap: 20 }}>
          <Text
            t="onboarding.tasks.title"
            style={{ fontSize: 28, fontWeight: '500' }}
          />
          <Text
            t="onboarding.tasks.description"
            style={{ fontSize: 14, fontWeight: '100' }}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
}
