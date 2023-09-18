import { Pressable, Text, View } from 'react-native';
import { Slider } from '../components/slider';
import { useRef } from 'react';

function getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function TaskBar() {
  const augustDays = useRef(getDaysInMonth(7, 2023));
  const sliderRef = useRef<Slider>(null);

  return (
    <>
      <View>
        <Text style={{ fontFamily: 'lexend', fontWeight: '100', fontSize: 20 }}>
          Tasks
        </Text>
      </View>

      <View>
        <Slider
          contentContainerStyle={{
            gap: 20
          }}
          ref={sliderRef}
          data={augustDays}
          renderItem={({ item, index }: { item: Date; index: number }) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  sliderRef.current?.toItemIndex(index);
                }}
              >
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
              </Pressable>
            );
          }}
        />
      </View>
    </>
  );
}
