import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextEditable } from '../../../../components/TextEditable';
import { TextAdjust } from '../../../../components/TextAdjust';
import { Button } from '../../../../components/Button';
import { TextArea } from '../../../../components/TextArea';
import { editNote } from '../../../../store/reducers/notes';

export function NoteEditor({ route, navigation }) {
  const note = useSelector(
    (state) => state.notesSliceReducer.notes[route.params.id]
  );
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      enabled
      behavior="height"
      style={{ paddingTop: 100, paddingHorizontal: 10 }}
    >
      <View style={{ position: 'absolute', top: 50, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}></View>
        <Button
          t="cancel"
          onPress={() => {
            navigation.pop();
          }}
        />
        <Button
          style={{ backgroundColor: '#1E1E1E' }}
          styleText={{ color: '#F9FBF4' }}
          t="save"
          onPress={() => {
            dispatch(editNote(note));
          }}
        />
      </View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{ gap: 20 }}>
          <View>
            <TextEditable style={{ fontSize: 24 }}>{note.title}</TextEditable>
            <TextEditable style={{ fontSize: 12 }}>
              {note.description}
            </TextEditable>
          </View>

          <View
            style={{
              backgroundColor: note.subject.color,
              padding: 10,
              borderRadius: 10
            }}
          >
            <TextAdjust>{note.subject.title}</TextAdjust>
          </View>

          <View style={{ height: 3, backgroundColor: '#B8B8B8' }}></View>

          <View>
            <TextArea>{note.body}</TextArea>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
