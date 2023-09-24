import { useState } from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';
import { PlusIconSVG } from '@learn/ui';
import { NoteItem } from './NoteItem';

export function NoteContainer() {
  const [notes, setNotes] = useState([
    {
      title: 'Thermodynamic',
      subject: {
        id: 1,
        title: 'Physics',
        color: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Integration',
      subject: {
        id: 2,
        title: 'Mathematics',
        color: '#DACAAD'
      },
      description:
        'Proof of integration and explanation of the 2 integration theorem.'
    }
  ]);

  const noteWidth = 170;
  const noteHeight = 170;

  return (
    <View style={{ maxWidth: '100%', maxHeight: '100%', gap: 20 }}>
      <Text
        style={{
          fontFamily: 'lexend',
          fontSize: 20,
          fontWeight: '100'
        }}
      >
        Notes
      </Text>
      <ScrollView
        style={{ marginBottom: 120 }}
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 20,
          flexWrap: 'wrap',
          height: '100%',
          paddingBottom: 100
        }}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'black',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: noteWidth,
            minHeight: noteHeight,
            maxWidth: noteWidth,
            maxHeight: noteHeight
          }}
          onPress={() => {
            const notesDuplicate = notes.map((item) => item);
            notesDuplicate.unshift(notes[0]);
            setNotes(notesDuplicate);
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <PlusIconSVG size={30} color={'white'} />
          </View>
        </Pressable>

        {notes.map((item) => {
          return (
            <NoteItem
              title={item.title}
              subject={item.subject}
              description={item.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
