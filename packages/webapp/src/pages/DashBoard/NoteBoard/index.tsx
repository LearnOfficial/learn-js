import { View } from 'react-native';
import { SubjectContainer } from './SubjectContainer';
import { NoteContainer } from './NoteContainer';
export function NoteBoard() {
  return (
    <View style={{ flex: 3, padding: 20, gap: 30 }}>
      <SubjectContainer />
      <NoteContainer />
    </View>
  );
}
