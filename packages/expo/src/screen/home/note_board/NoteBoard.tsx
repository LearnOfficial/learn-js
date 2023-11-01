import { View } from 'react-native';
import { SubjectContainer } from './subject/SubjectContainer';
import { NoteContanier } from './note/NoteContainer';

export function NoteBoard() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 20 }}>
      <SubjectContainer />
      <NoteContanier />
      <View style={{ height: 50 }}></View>
    </View>
  );
}
