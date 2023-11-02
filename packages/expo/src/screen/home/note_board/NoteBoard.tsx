import { View } from 'react-native';
import { SubjectContainer } from './subject/SubjectContainer';
import { NoteContanier } from './note/NoteContainer';

export function NoteBoard({ route, navigation }) {
  console.log(route.params);
  return (
    <View style={{ flex: 1, padding: 20, gap: 20 }}>
      <SubjectContainer />
      <NoteContanier navigation={navigation} />
      <View style={{ height: 50 }}></View>
    </View>
  );
}
