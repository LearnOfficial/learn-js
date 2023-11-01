import { View } from 'react-native';
import { SubjectContainer } from './subject/SubjectContainer';

export function NoteBoard() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SubjectContainer />
    </View>
  );
}
