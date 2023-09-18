import { Button, StaticImage, useAuth } from '@learn/ui';
import { ColorValue, Pressable, Text, View } from 'react-native';
import { SubjectContainer } from './components/SubjectContainer';
import { SubjectItemsContainer } from './components/SubjectItemsContainer';
import { useState } from 'react';
import { Slider } from './components/slider';

type ISubjectItems = {
  id: string;
  title: string;
  backgroundColor: ColorValue;
};

function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function NoteBoard() {
  const augustDays = getDaysInMonth(7, 2023);
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

      <View
        style={{
          flex: 2,
          backgroundColor: '#F9FBF4',
          paddingVertical: 20,
          paddingHorizontal: 10
        }}
      >
        <View>
          <Text
            style={{ fontFamily: 'lexend', fontWeight: '100', fontSize: 20 }}
          >
            Tasks
          </Text>
        </View>

        <View>
          <Slider
            data={augustDays}
            renderItem={({ item }: { item: Date }) => {
              return (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#EEEEE3',
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'lexend',
                      color: 'black',
                      fontWeight: '800'
                    }}
                  >
                    {item
                      .toLocaleDateString('en-US', { weekday: 'long' })
                      .slice(0, 3)}
                  </Text>
                  <Text style={{ fontFamily: 'lexend', color: 'black' }}>
                    {item.getDate()}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
}
