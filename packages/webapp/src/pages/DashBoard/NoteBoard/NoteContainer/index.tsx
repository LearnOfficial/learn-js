import { useRef } from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';
import { PlusIconSVG, QUERY_NOTES, useAuth } from '@learn/ui';
import { NoteItem } from './NoteItem';
import { useQuery } from '@apollo/client';

export type INote = {
  title: string;
  subject: {
    id: number;
    title: string;
    color: string;
  };
  description: string;
};

export function NoteContainer() {
  const { token } = useAuth();
  const { data } = useQuery(QUERY_NOTES, {
    context: { headers: { Authorization: token } }
  });

  const notes = useRef<INote[]>([]);

  if (data) {
    notes.current = data?.user?.notes;
  }

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
          onPress={() => {}}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <PlusIconSVG size={30} color={'white'} />
          </View>
        </Pressable>

        {notes.current.map((item) => {
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
