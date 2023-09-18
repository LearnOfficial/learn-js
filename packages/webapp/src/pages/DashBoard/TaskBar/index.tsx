import { Text, View } from 'react-native';
import { Slider } from '../components/slider';

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
  const augustDays = getDaysInMonth(7, 2023);

  return (
    <>
      <View>
        <Text style={{ fontFamily: 'lexend', fontWeight: '100', fontSize: 20 }}>
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
    </>
  );
}
