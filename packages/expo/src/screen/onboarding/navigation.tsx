import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingNotes } from './notes';
import { SCREENS } from '..';
import { OnboardingSubjects } from './subjects';
import { OnboardingTasks } from './tasks';

const OnboardingStackNavigation = createNativeStackNavigator();

export function OnboardingNavigation() {
  return (
    <OnboardingStackNavigation.Navigator
      initialRouteName={SCREENS.ONBOARDING.ROOT}
      screenOptions={{ headerShown: false }}
    >
      <OnboardingStackNavigation.Screen
        name={SCREENS.ONBOARDING.NOTES}
        component={OnboardingNotes}
      />
      <OnboardingStackNavigation.Screen
        name={SCREENS.ONBOARDING.SUBJECTS}
        component={OnboardingSubjects}
      />
      <OnboardingStackNavigation.Screen
        name={SCREENS.ONBOARDING.TASKS}
        component={OnboardingTasks}
      />
    </OnboardingStackNavigation.Navigator>
  );
}
