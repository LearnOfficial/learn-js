import { useEffect, useRef, useState } from 'react';
import { ColorValue, View } from 'react-native';
import { SubjectContainer } from './Subject/SubjectContainer';
import { SubjectItemsContainer } from './Subject/SubjectItemsContainer';
import {
  Button,
  LearnIconSVG,
  House,
  useAuth,
  HouseIconSVG,
  PlusIconSVG
} from '@learn/ui';
import { Canvas } from '@shopify/react-native-skia';
import { ScrollView, Text, Pressable } from 'react-native';
import { SubjectItem } from './Subject/SubjectItem';

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

  const notes = [
    {
      title: 'Thermodynamic',
      subject: {
        id: 1,
        title: 'Physics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Thermodynamic',
      subject: {
        id: 2,
        title: 'Mathematics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Thermodynamic',
      subject: {
        id: 2,
        title: 'Mathematics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Thermodynamic',
      subject: {
        id: 2,
        title: 'Mathematics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Thermodynamic',
      subject: {
        id: 2,
        title: 'Mathematics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Thermodynamic',
      subject: {
        id: 2,
        title: 'Mathematics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    },
    {
      title: 'Thermodynamic',
      subject: {
        id: 2,
        title: 'Mathematics',
        backgroundColor: '#DACEED'
      },
      description: 'Research about heat, work, and temperature.'
    }
  ];

  const noteWidth = 170;
  const noteHeight = 150;

  return (
    <View style={{ flex: 3, padding: 20, gap: 30 }}>
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

          {notes.map((item) => {
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
                <Text style={{ fontFamily: 'lexend', fontWeight: '200' }}>
                  {item.title}
                </Text>
                <SubjectItem
                  title={item.subject.title}
                  index={item.subject.id}
                  backgroundColor={item.subject.backgroundColor}
                />
                <Text>{item.description}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
