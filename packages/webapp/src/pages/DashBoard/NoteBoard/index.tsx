import { useRef } from 'react';
import { ColorValue, View } from 'react-native';
import { SubjectContainer } from './Subject/SubjectContainer';
import { SubjectItemsContainer } from './Subject/SubjectItemsContainer';
import { Button, useAuth } from '@learn/ui';
import { Canvas, Group, Circle } from '@shopify/react-native-skia';

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

  const size = 256;
  const r = size * 0.33;

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

      <Canvas style={{ width: 500, height: 500 }}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={size - r} cy={r} r={r} color="magenta" />
          <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </View>
  );
}
