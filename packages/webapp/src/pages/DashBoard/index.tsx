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
          paddingTop: 20,
          alignItems: 'center',
          borderRightColor: 'black',
          borderRightWidth: 2
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
          paddingTop: 20,
          paddingHorizontal: 10,
          borderLeftWidth: 2,
          gap: 20
        }}
      >
        <TaskBar />
      </View>
    </View>
  );
}
