import { Text, View } from 'react-native';
import { FlatMonthCalendar } from './components/FlatMonthCalendar';
import { DoneTaskContainer } from './DoneTaskContainer';
import { UnDoneTaskContainer } from './UnDoneTaskContainer';

export function TaskBar() {
  return (
    <>
      <Text style={{ fontFamily: 'lexend', fontWeight: '100', fontSize: 20 }}>
        Tasks
      </Text>

      <FlatMonthCalendar />

      <UnDoneTaskContainer />

      <DoneTaskContainer />
    </>
  );
}
