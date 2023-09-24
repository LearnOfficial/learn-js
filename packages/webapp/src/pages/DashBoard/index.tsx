import { View } from 'react-native';
import { TaskBar } from './TaskBar';
import { QuickBar } from './QuickBar';
import { NoteBoard } from './NoteBoard';

export function DashBoard() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          maxWidth: 70,
          backgroundColor: '#EEEEE3',
          justifyContent: 'space-between',
          paddingVertical: 20,
          alignItems: 'center'
        }}
      >
        <QuickBar />
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: '#F9FBF4',
          paddingVertical: 20,
          paddingHorizontal: 10
        }}
      >
        <NoteBoard />
      </View>

      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 10
        }}
      >
        <TaskBar />
      </View>
    </View>
  );
}
