import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components/Text';
import { FlashList } from '@shopify/flash-list';
import { TextEditable } from '../../../../components/TextEditable';
import { useState } from 'react';
import AddIcon from '../../../../static/icons/AddIcon';
import { FlatList } from 'react-native-gesture-handler';

export function SubjectContainer() {
  const [subjects, setSubjects] = useState([
    {
      title: 'Physics',
      color: '#DACEED'
    },
    {
      title: 'Mathematics',
      color: '#EDCECE'
    },
    {
      title: 'C programming language',
      color: '#CEEDD3'
    }
  ]);

  return (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text
            style={{ fontSize: 24, fontWeight: 'bold' }}
            t="home.dashboard.subject.title"
          />
          <Text t="home.dashboard.subject.description" />
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
        data={subjects}
        ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TextEditable
              style={{
                backgroundColor: item.color,
                padding: 10,
                borderRadius: 10
              }}
            >
              {item.title}
            </TextEditable>
          );
        }}
      />
    </View>
  );
}
