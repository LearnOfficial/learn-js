import { useState } from 'react';
import { ColorValue, View } from 'react-native';
import { SubjectContainer } from './Subject/SubjectContainer';
import { SubjectItemsContainer } from './Subject/SubjectItemsContainer';

type ISubjectItems = {
  id: string;
  title: string;
  backgroundColor: ColorValue;
};

export function NoteBoard() {
  const [subjects, setSubjects] = useState<ISubjectItems[]>([
    {
      id: '1',
      title: 'Physics',
      backgroundColor: '#DACEED'
    },
    {
      id: '2',
      title: 'Mathematics and calculus and programming',
      backgroundColor: '#DACCCD'
    }
  ]);

  return (
    <View style={{ flex: 3, padding: 20 }}>
      <SubjectContainer>
        <SubjectItemsContainer data={subjects} onAdd={() => {}} />
      </SubjectContainer>
    </View>
  );
}
