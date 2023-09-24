import { View, Text } from 'react-native';
import { SubjectItem } from '../SubjectContainer/SubjectItem';

export type NoteItemProps = {
  title: string;
  subject: {
    id: number;
    title: string;
    color: string;
  };
  description: string;
};

export function NoteItem({ title, subject, description }: NoteItemProps) {
  const noteWidth = 170;
  const noteHeight = 170;

  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 2,
        gap: 10,
        width: noteWidth,
        height: noteHeight,
        padding: 20,
        borderRadius: 10
      }}
    >
      <Text style={{ fontFamily: 'lexend', fontWeight: '200' }}>{title}</Text>
      <SubjectItem
        title={subject.title}
        index={subject.id}
        backgroundColor={subject.color}
      />
      <Text style={{ fontFamily: 'lexend', fontWeight: '200' }}>
        {description}
      </Text>
    </View>
  );
}
