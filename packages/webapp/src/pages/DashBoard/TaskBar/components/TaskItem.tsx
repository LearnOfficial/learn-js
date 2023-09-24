import { center } from '@shopify/react-native-skia';
import { View, Text, Pressable } from 'react-native';
import { SubjectItem } from '../../NoteBoard/SubjectContainer/SubjectItem';

export type TaskItemProps = {
  title: string;
  subject: {
    id: number;
    title: string;
    color: string;
  };
};

export function TaskItem({ title, subject }: TaskItemProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <Pressable
          style={{ width: 24, height: 24, borderWidth: 2, borderRadius: 5 }}
        ></Pressable>
        <Text style={{ fontFamily: 'lexend', fontSize: 14, fontWeight: '200' }}>
          {title}
        </Text>
      </View>
      <SubjectItem
        title={subject.title}
        index={subject.id}
        backgroundColor={subject.color}
      />
    </View>
  );
}
