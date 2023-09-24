import { useRef } from 'react';
import { ColorValue, View } from 'react-native';
import { SubjectContainer } from './Subject/SubjectContainer';
import { SubjectItemsContainer } from './Subject/SubjectItemsContainer';
import { Button, LearnIconSVG, SVG, useAuth } from '@learn/ui';

type ISubjectItems = {
  id: string;
  title: string;
  backgroundColor: ColorValue;
};

export function NoteBoard() {
  const { logOut } = useAuth();
  const subjects = useRef<ISubjectItems[]>([
    {
      id: '1',
      title: 'Physics',
      backgroundColor: '#DACEED'
    },
    {
      id: '2',
      title: 'Programming',
      backgroundColor: '#DACCCD'
    },
    {
      id: '3',
      title: 'Python',
      backgroundColor: '#DACCCD'
    }
  ]);

  return (
    <View style={{ flex: 3, padding: 20 }}>
      <SubjectContainer>
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
      </SubjectContainer>
      <Button
        title="Log out"
        onPress={() => {
          logOut();
        }}
      />
      <View style={{ maxWidth: '100%', maxHeight: '100%' }}>
        <LearnIconSVG size={100} lineColor={'white'} pageColor={'black'} />
      </View>
    </View>
  );
}
