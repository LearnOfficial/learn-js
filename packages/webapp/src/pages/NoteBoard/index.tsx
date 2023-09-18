import { Button, StaticImage, useAuth } from '@learn/ui';
import { ColorValue, Pressable, View } from 'react-native';
import { SubjectContainer } from './components/SubjectContainer';
import { SubjectItemsContainer } from './components/SubjectItemsContainer';
import { useState } from 'react';

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

  const { logOut } = useAuth();

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          maxWidth: 70,
          backgroundColor: '#EEEEE3',
          justifyContent: 'space-between',
          paddingVertical: 20,
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            width: 50,
            maxHeight: 50,
            justifyContent: 'center',
            borderRadius: 20
          }}
        >
          <StaticImage size={50} image="HouseIcon" />
        </View>
        <StaticImage size={90} image="FemaleProfileImage" />
      </View>

      <View style={{ flex: 3, padding: 20 }}>
        <SubjectContainer>
          <SubjectItemsContainer data={subjects} onAdd={() => {}} />
        </SubjectContainer>
      </View>

      <View style={{ flex: 2, backgroundColor: 'yellow' }}></View>
      <View>
        <Button title="logout" onPress={async () => await logOut()} />
      </View>
    </View>
  );
}
