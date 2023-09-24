import { Text, View } from 'react-native';
import { SubjectItemsContainer } from './SubjectItemsContainer';
import { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { useRef } from 'react';

type ISubjectItems = {
  id: string;
  title: string;
  backgroundColor: ColorValue;
};

export type SubjectContainerProps = {};

export function SubjectContainer({}: SubjectContainerProps) {
  const subjects = useRef<ISubjectItems[]>([]);

  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          fontFamily: 'lexend',
          fontSize: 20,
          fontWeight: '100'
        }}
      >
        Subjects
      </Text>
      <SubjectItemsContainer
        data={subjects}
        onAdd={() => {
          subjects.current.unshift({
            id: `${subjects.current.length + 1}`,
            title: 'Python',
            backgroundColor: '#DACCCD'
          });
        }}
      />
    </View>
  );
}
