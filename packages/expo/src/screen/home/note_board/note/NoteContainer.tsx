import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components/Text';
import AddIcon from '../../../../static/icons/AddIcon';
import { TextAdjust } from '../../../../components/TextAdjust';
import { FlatList } from 'react-native-gesture-handler';
import { SCREENS } from '../../..';
import { useSelector } from 'react-redux';

export function NoteContanier({ navigation }) {
  const notes = useSelector((state) => state.notesSliceReducer.notes);

  return (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 24, fontWeight: 'bold' }}
            t="home.dashboard.note.title"
          />
          <Text t="home.dashboard.note.description" />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#1E1E1E',
              padding: 8,
              borderRadius: 10,
              justifyContent: 'center'
            }}
          >
            <AddIcon width={24} height={24} color="#F9FBF4" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={notes}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        ListFooterComponent={() => <View style={{ height: 50 }}></View>}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.HOME.NOTE_EDITOR, { id: item.id });
              }}
              style={{ flex: 1 }}
            >
              <View
                style={{
                  flex: 1,
                  gap: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                  padding: 10
                }}
              >
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
                <TextAdjust
                  style={{
                    fontSize: 12,
                    backgroundColor: item.subject.color,
                    padding: 10,
                    borderRadius: 10
                  }}
                >
                  {item.subject.title}
                </TextAdjust>
                <Text style={{ fontSize: 12 }}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
